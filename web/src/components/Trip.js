import classes from "./Trip.module.css";
import React, { Component, useEffect, useState } from "react";
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
            <div className={classes.smallImage}>
              <img
                src={props.data.photos[1]}
                alt="new"
                className={classes.mainImg}
              />
            </div>
            <div className={classes.smallImage}>
              <img
                src={props.data.photos[2]}
                alt="new"
                className={classes.mainImg}
              />
            </div>
            <div className={classes.smallImage}>
              <img
                src={props.data.photos[3]}
                alt="new"
                className={classes.mainImg}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Trip;
