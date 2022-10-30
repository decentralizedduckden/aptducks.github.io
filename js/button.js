// var countDownDate = new Date("Nov 11, 2021 00:00:00").getTime();
// var x = setInterval(function() {

//   var now = new Date().getTime();

//   var distance = countDownDate - now;

//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   document.getElementById("countdown-button").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";

//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("countdown-button").innerHTML = "EXPIRED";
//   }
// }, 1000);
// const express = require("express");
// const router = express.Router();

// // Home page route.
// router.get("/", function (req, res) {
//     res.send("Wiki home page");
// });

// // About page route.
// router.get("/about", function (req, res) {
//     res.send("About this wiki");
// });

// module.exports = router;

// document.querySelector("#countdown-button").addEventListener("click", (e) => {
//     newWindow = "mint.html";
//     window.open(newWindow, "mintWindow");
//     e.preventDefault();
// });