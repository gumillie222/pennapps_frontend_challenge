import React from 'react';
import './Countdown.css';


const Countdown = () => {

    
    var target = new Date("September 8, 2023 18:00:00");
    var interval = setInterval(function() {
    var current = new Date();
    var diff = target - current;


    if (diff <= 0) {
        clearInterval(interval);
        document.getElementById("days").innerHTML = "0";
        document.getElementById("hours").innerHTML = "0";
        document.getElementById("minutes").innerHTML = "0";
        document.getElementById("seconds").innerHTML = "0";
        return;
    }

    // calculate the number of days, hours, minutes, and seconds remaining
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // update the countdown display
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    }, 1000);


    return (
        <div class="countdown">
            
            <table>
                <td class="square">
                    <div id="days"></div>
                    <text class="units">DAYS</text>
                </td>
                <td class="square">
                    <div id="hours"></div>
                    <text class="units">HOURS</text>
                </td>
                <td class="square">
                    <div id="minutes"></div>
                    <text class="units">MINUTES</text>
                </td>
                <td class="square">
                    <div id="seconds"></div>
                    <text class="units">SECONDS</text>
                </td>
            </table>

        </div>
    );
};

export default Countdown;