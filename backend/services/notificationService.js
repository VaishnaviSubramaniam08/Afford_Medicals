const axios = require("axios");

const API_URL =
  "http://20.244.56.144/evaluation-service/notifications";

const getNotifications = async () => {
  try {
    const response = await axios.get(API_URL, {
      timeout: 10000,
      headers: {
        Accept: "application/json",
      },
    });

    console.log("API Success");

    return response.data;
  } catch (error) {
    console.log(
      "API ERROR:",
      error.message
    );

    if (error.response) {
      console.log(
        "Response Data:",
        error.response.data
      );
    }

    return [];
  }
};

module.exports = {
  getNotifications,
};