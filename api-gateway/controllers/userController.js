const axios = require("axios");
const { getAllData, search } = require("../functions/index");
exports.getAllData = async (req, res) => {
  try {
    console.log("eiei");

    const response = await axios.get("http://localhost:9000/trips");
    console.log(response);
    res.send({ status: "sucessful", data: response.data });
  } catch (err) {
    console.log("err: ", err);
    res.status(err.status || 500).send(err.message || "Internal Server Error");
  }
};

exports.searchByAttribute = async (req, res) => {
  try {
    const { title, description, tags } = req.body;
    const response = await getAllData();
    const trips = search(title, description, tags, response);
    console.log(trips);
    res.send({ status: "sucessful", data: trips });
  } catch (err) {
    console.log("err: ", err);
    res.status(err.status || 500).send(err.message || "Internal Server Error");
  }
};
