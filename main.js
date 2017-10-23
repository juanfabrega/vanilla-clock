"use strict";

document.addEventListener('DOMContentLoaded', function() {
  setInterval(setDate, 1000);
});

 function setDate() {
   const now = new Date(); //get current time

   const second = now.getSeconds();
   const minute = now.getMinutes();
   const hour = now.getHours();

   const secondDegrees = ((second / 60) * 360) + 90;
   const minuteDegrees = ((minute / 60) * 360) + 90;
   const hourDegrees = (((hour / 12 ) + ((minute / 60) / 12)) * 360)  + 90;

   const secondHand = document.querySelector('#second-hand');
   const minuteHand = document.querySelector('#minute-hand');
   const hourHand = document.querySelector('#hour-hand');

   secondHand.style.transform = `rotate(${secondDegrees}deg)`;
   minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
   hourHand.style.transform = `rotate(${hourDegrees}deg)`;
   console.log(hour);
 }
