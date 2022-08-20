const STORAGE_KEY = "videoplayer-current-time";

import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);

player.on('timeupdate', function(event) {
    //  console.log('time', event);
     localStorage.setItem(STORAGE_KEY, event.seconds);
    });

player.setCurrentTime(localStorage.getItem(STORAGE_KEY)).then(function(seconds) {
    
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});

