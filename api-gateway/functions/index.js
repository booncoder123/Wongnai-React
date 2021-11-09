const axios = require("axios");
module.exports.getAllData = async (input) => {
  const response = await axios.get("http://localhost:9000/trips");
  return response.data;
};

module.exports.search = (title, description, tags, response) => {
  let trips = response.filter(
    (trip) =>
      trip.title.includes(title) ||
      trip.description.includes(description) ||
      intersect(tags, trip.tags) != 0
  );

  return trips;
};

module.exports.searchByKeyword = (keyword, response) => {
  let trips = response.filter(
    (trip) =>
      trip.title.includes(keyword) ||
      trip.description.includes(keyword) ||
      trip.tags.includes(keyword)
  );

  return trips;
};

function intersect(a, b) {
  var t;
  if (b.length > a.length) (t = b), (b = a), (a = t); // indexOf to loop over shorter
  return a.filter(function (e) {
    return b.indexOf(e) > -1;
  });
}
