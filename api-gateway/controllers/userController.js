const axios = require("axios");
const { getAllData, search, searchByKeyword } = require("../functions/index");
exports.getAllData = async (req, res) => {
  try {
    console.log("eiei");

    const response = await axios.get(`${process.env.URL}/trips`);
    // console.log(response);
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
    // console.log(trips);
    res.send({ status: "sucessful", data: trips });
  } catch (err) {
    console.log("err: ", err);
    res.status(err.status || 500).send(err.message || "Internal Server Error");
  }
};

exports.searchByKeyword = async (req, res) => {
  const keyword = req.params.key;
  const response = await getAllData();
  console.log("key", keyword);
  const trips = searchByKeyword(keyword, response);
  res.send({ status: "sucessful", data: trips });
  try {
  } catch (err) {
    console.log("err: ", err);
    res.status(err.status || 500).send(err.message || "Internal Server Error");
  }
};
