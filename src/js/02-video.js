import Player from "@vimeo/player";
import throttle from "lodash.throttle";
const throttle = require("lodash.throttle");

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

const STORAGE_KEY = "videoplayer-current-time";

player.on("timeupdate", throttle(onTimeUpdate, 1000));

function onTimeUpdate(event) {
  localStorage.setItem(STORAGE_KEY, event.seconds);
}
const savedTime = localStorage.getItem(STORAGE_KEY);
const currentTime = JSON.parse(savedTime);

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case "RangeError":
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
