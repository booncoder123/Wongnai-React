import React, { Component, useEffect, useState } from "react";
import classes from "./HomePage.module.css";
import { TextField } from "@mui/material";
import { useHistory, useLocation } from "react-router";

import {
  Route,
  useParams,
  Routes,
  Redirect,
  Link,
  BrowserRouter as Router,
} from "react-router-dom";
const axios = require("axios");

const HomePage = (props) => {
  const [search, setSearch] = useState("");
  const [trips, setTrips] = useState([]);
  const history = useHistory();
  let location = useLocation();
  let query = useQuery();

  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          query.get("searchValue") != null
            ? `http://localhost:8000/user/searchByKeyword/${query.get(
                "searchValue"
              )}`
            : "http://localhost:8000/user/allData"
        );
        console.log(response.data.data);

        setTrips(response.data.data);
      } catch (err) {
        console.log("err: ", err);
      }
    }

    fetchData();
  }, [search]);
  console.log(query.get("searchValue"));

  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <div className={classes.heading2} style={{}}>
          เที่ยวไหนดี
        </div>
        <TextField
          value={search}
          onChange={(text) => {
            setSearch(text.target.value);
            history.push({
              pathname: window.location.pathname,
              search: `?searchValue=${text.target.value}`,
            });
          }}
          placeholder={"หาที่เที่ยวเเล้วไปกัน..."}
          id="standard-basic"
          variant="standard"
          sx={{ width: "100%" }}
          inputProps={{
            min: 0,
            style: {
              textAlign: "center",
              fontSize: 20,
            },
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
    <div className={classes.tripRow}>
      <div className={classes.img}>
        <img src={props.data.photos[0]} alt="new" className={classes.mainImg} />
      </div>
      <div className={[classes.detail, classes.column].join(" ")}>
        <a style={{ textDecoration: "none" }} href={props.data.url}>
          <div className={classes.heading1}>{props.data.title}</div>
        </a>

        <div className={classes.topic}>
          <span>{props.data.description.substring(0, 200)}...</span>
          <a style={{ textDecoration: "none" }} href={props.data.url}>
            <span
              style={{
                textDecorationLine: "underline",
                color: "#74BEE7",
                marginLeft: 10,
              }}
            >
              อ่านต่อ
            </span>
          </a>
        </div>

        <div className={classes.mainDetail}></div>
        <div className={[classes.tags, classes.row].join(" ")} style={{}}>
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
        <div
          className={classes.column}
          style={{
            height: "100%",
            justifyContent: "flex-end",
          }}
        >
          <div className={classes.row} style={{ marginBottom: 5 }}>
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
    </div>
  );
};
export default HomePage;
