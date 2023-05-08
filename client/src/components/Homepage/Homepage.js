import React from "react";
import "./Homepage.css";

import { Todo } from "../Todo/Todo";
import Nav from "../Nav/Nav";

var dateObj = new Date();
var month = dateObj.getMonth();
var date = dateObj.getDate();
var day = dateObj.getDay();
var year = dateObj.getFullYear();

var dayCal = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
var monthCal = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

var per = 75;
var count = 10;

export default function Homepage() {
  return (
    <section className="homepage">
      <Nav />
      <main className="home-page ot-red">
        <div className="home-start">
          <div className="home-name">Hey Vaish,</div>
          <div className="greetText ot-blue">
            <div className="">Good</div>
            <div className="">Morning</div>
          </div>
          <div className="home-start-info ot-black">
            <div className="start-date">
              <div className="text-emp">
                {monthCal[month]} {date}, {year}
              </div>
              <div className="text-light">{dayCal[day]}</div>
            </div>
            <div className="start-task">
              <div className="text-emp">{per}% Done</div>
              <div className="text-light">Completed Tasks</div>
            </div>
          </div>
        </div>
        <div classname="home-main">
          <div className="main-options">
            <div className="main-box active">
              <div className="main-todo">
                <div className="task-count">{count}</div>
                Todo
              </div>
            </div>
            <div className="main-box">
              <div className="main-calendar">Calendar</div>
            </div>
          </div>
          <div className="main-buttons">
            <button className="btn-active">Active</button>
            <button>Done</button>
          </div>

          <div className="main-todo-container">
            <Todo content="Walk my Dog" time="1hr 30min" />
            <Todo content="Water Plants" time="10min" />
            <Todo content="Read a book " time="30min" />
            <Todo content="Excercise " time="40min" />
            <Todo content="Meditate" time="30min" />
          </div>
        </div>
      </main>
    </section>
  );
}
