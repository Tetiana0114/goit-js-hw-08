const STORAGE_KEY = "videoplayer-current-time";

import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);
 
const onPlay = function (event) {
   localStorage.setItem(STORAGE_KEY, event.seconds);
};
player.on('timeupdate', throttle(onPlay, 1000));

const savedVideoTime = localStorage.getItem(STORAGE_KEY);
    if (savedVideoTime) {
        player.setCurrentTime(savedVideoTime);
    }