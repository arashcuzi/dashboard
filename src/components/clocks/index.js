import React from 'react'
import './clocks.css'

export class makeClock {
  constructor(id) {
    this.timezone = parseInt(document.getElementById(id).dataset.timezone, 10);

    if (this.isDST(new Date())) {
      this.timezone += 1;
    }

    this.handSeconds = document.querySelector(`#${id} .hand.seconds`);
    this.handMinutes = document.querySelector(`#${id} .hand.minutes`);
    this.handHours = document.querySelector(`#${id} .hand.hours`);

    this.getTime();
    this.cycle();
  }

  isDST(now) {
    const jan = new Date(now.getFullYear(), 0, 1);
    const jul = new Date(now.getFullYear(), 6, 1);
    const dst = Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());

    return now.getTimezoneOffset() < dst;
  }

  draw(hours, minutes, seconds) {
    const drawSeconds = ((seconds / 60) * 360) + 90;
    const drawMinutes = ((minutes / 60) * 360) + 90;

    let drawHours = ((hours / 12) * 360) + 90;

    if (hours >= 12) {
      drawHours = hours - 12;
    }

    this.handSeconds.style.transform = `rotate(${drawSeconds}deg)`;
    this.handMinutes.style.transform = `rotate(${drawMinutes}deg)`;
    this.handHours.style.transform = `rotate(${drawHours}deg)`;

    // fix for animation bump on when clock hands hit zero
    if (drawSeconds === 444 || drawSeconds === 90) {
      this.handSeconds.style.transition = "all 0s ease 0s";
    } else {
      this.handSeconds.style.transition = "all 0.05s cubic-bezier(0, 0, 0.52, 2.51) 0s";
    }
  }

  getTime() {
    const now = new Date();

    const hours = now.getUTCHours() + this.timezone;
    const minutes = now.getUTCMinutes();
    const seconds = now.getUTCSeconds();

    this.draw(hours, minutes, seconds);
  }

  cycle() {
    setInterval(this.getTime.bind(this), 1000);
  }
}

export default () => (
  <div className='clock-container'>
    <div>
      <div className='name'>Bangalore</div>
      <div className='clock'>12:30:30 am</div>
    </div>
    <div>
      <div className='name'>Milwaukee</div>
      <div className='clock'>12:30:30 am</div>
    </div>
    <div>
      <div className='name'>New York</div>
      <div className='clock'>12:30:30 am</div>
    </div>
  </div>
)
