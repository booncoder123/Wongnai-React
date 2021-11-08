import React, { Component } from "react";
import classes from "./HomePage.module.css";
import { TextField } from "@mui/material";
const HomePage = (props) => {
  const images = [
    {
      id: 1,
    },
    { id: 2 },
    { id: 3 },
  ];
  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <div className={classes.heading1}> เที่ยวไหนดี</div>
        <TextField
          placeholder={"หาที่เที่ยวเเล้วไปกัน..."}
          id="standard-basic"
          variant="standard"
          sx={{ width: "100%" }}
          inputProps={{ min: 0, style: { textAlign: "center" } }}
        />

        <div className={classes.row}>
          <div className={classes.img}></div>
          <div className={[classes.detail, classes.column].join(" ")}>
            <div className={classes.topic}>
              ทริปดื่มด่ำชานมไข่มุก มหามิตรที่ไทเป
            </div>
            <div className={classes.content}>
              ใครไม่เป ไทเปนะฮิฟฟฟ สนุกสุดเหวี่ยงกับชานมไข่มุก มุกเยอะมาก ๆ
              ก็เลยสนุก... แป้ว
            </div>
            <div className={classes.mainDetail}></div>
            <div className={classes.tags}></div>
            <div className={[classes.row].join(" ")}>
              {images.map((img) => {
                return <div className={classes.smallImage}></div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
