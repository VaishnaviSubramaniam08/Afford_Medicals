const express = require("express");

const router = express.Router();

const {
  getNotifications,
} = require("../services/notificationService");

router.get("/", async (req, res) => {
  try {
    const notifications =
      await getNotifications();

    res.status(200).json(
      notifications
    );
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;