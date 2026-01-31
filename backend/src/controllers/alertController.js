const Alert = require("../models/Alert");

// GET /alerts (with filters + pagination)
const getAlerts = async (req, res, next) => {
  try {
    const { country, status } = req.query;

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    let filter = {};
    if (country) filter.country = country;
    if (status) filter.status = status;

    const totalAlerts = await Alert.countDocuments(filter);

    const alerts = await Alert.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      data: alerts,
      pagination: {
        totalAlerts,
        currentPage: page,
        totalPages: Math.ceil(totalAlerts / limit),
      },
    });
  } catch (error) {
    next(error);
  }
};

// POST /alerts
const createAlert = async (req, res, next) => {
  try {
    const { country, city, visaType, status } = req.body;

    if (!country || !city || !visaType) {
      res.status(400);
      throw new Error("Country, city and visaType are required");
    }

    const alert = await Alert.create({
      country,
      city,
      visaType,
      status,
    });

    res.status(201).json(alert);
  } catch (error) {
    next(error);
  }
};

// PUT /alerts/:id
const updateAlert = async (req, res, next) => {
  try {
    const alert = await Alert.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!alert) {
      res.status(404);
      throw new Error("Alert not found");
    }

    res.status(200).json(alert);
  } catch (error) {
    next(error);
  }
};

// DELETE /alerts/:id
const deleteAlert = async (req, res, next) => {
  try {
    const alert = await Alert.findByIdAndDelete(req.params.id);

    if (!alert) {
      res.status(404);
      throw new Error("Alert not found");
    }

    res.status(200).json({ message: "Alert deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAlerts,
  createAlert,
  updateAlert,
  deleteAlert,
};
