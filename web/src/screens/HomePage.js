import React, { Component, useEffect, useState } from "react";
import classes from "./HomePage.module.css";
import { TextField } from "@mui/material";
import { useHistory, useLocation } from "react-router";
import Trip from "../components/Trip";
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
          sx={{ width: "60%" }}
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

export default HomePage;
