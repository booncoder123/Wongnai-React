import React, { Component, useEffect, useState } from "react";
import classes from "./HomePage.module.css";
import { TextField } from "@mui/material";
const axios = require("axios");
const images = [
  {
    id: 1,
  },
  { id: 2 },
  { id: 3 },
];
const HomePage = (props) => {
  const [trips, setTrips] = useState([]);
  const [search, setSearch] = useState("");
  console.log(search);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:8000/user/allData");
        console.log(response.data.data);
        setTrips(response.data.data);
      } catch (err) {
        console.log("err: ", err);
      }
    }
    console.log("ei");
    fetchData();
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <div className={classes.heading2}> เที่ยวไหนดี</div>
        <TextField
          value={search}
          onChange={(text) => {
            setSearch(text.target.value);
          }}
          placeholder={"หาที่เที่ยวเเล้วไปกัน..."}
          id="standard-basic"
          variant="standard"
          sx={{ width: "100%" }}
          inputProps={{
            min: 0,
            style: { textAlign: "center" },
          }}
        />
        {trips.map((trip, index) => {
          return <Trip data={trip} key={index} />;
        })}
      </div>
    </div>
  );
};

const Trip = (props) => {
  return (
    <div className={classes.row} style={{ marginTop: 50 }}>
      <div className={classes.img}>
        <img src={props.data.photos[0]} alt="new" className={classes.mainImg} />
      </div>
      <div className={[classes.detail, classes.column].join(" ")}>
        <div className={classes.heading1}>{props.data.title}</div>
        <div className={classes.topic}>{props.data.description}</div>
        <div className={classes.mainDetail}></div>
        <div className={[classes.tags, classes.row].join(" ")}>
          <div style={{ marginRight: 10 }} className={classes.heading3}>
            หมวด -
          </div>
          {props.data.tags.map((item, index) => {
            return props.data.tags.length - 1 != index ? (
              <div
                style={{
                  marginRight: 10,
                  textDecorationLine: "underline",
                }}
                className={classes.heading3}
              >
                {item}
              </div>
            ) : (
              <div className={[classes.row, classes.heading3].join(" ")}>
                <div style={{ marginRight: 10 }}> เเละ</div>
                <div
                  className={classes.heading3}
                  style={{ textDecorationLine: "underline" }}
                >
                  {item}
                </div>
              </div>
            );
          })}
        </div>
        <div className={[classes.row].join(" ")}>
          {props.data.photos.splice(1).map((img) => {
            return (
              <div className={classes.smallImage}>
                <img src={img} alt="new" className={classes.mainImg} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
