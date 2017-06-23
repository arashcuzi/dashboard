import React from 'react'
import './clocks.css'

export class makeClock {
  constructor(id) {
    this.timezone = parseInt(document.getElementById(id).dataset.timezone, 10);

    if (this.isDST(new Date())) {
      this.timezone += 1;
    }

    this.seconds = document.querySelector(`#${id} .seconds`);
    this.minutes = document.querySelector(`#${id} .minutes`);
    this.hours = document.querySelector(`#${id} .hours`);
    this.tod = document.querySelector(`#${id} .tod`);

    this.getTime();
    this.cycle();
  }

  isDST(now) {
    const jan = new Date(now.getFullYear(), 0, 1);
    const jul = new Date(now.getFullYear(), 6, 1);
    const dst = Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());

    return now.getTimezoneOffset() < dst;
  }

  draw(hours, minutes, seconds, tod) {
    this.seconds.textContent = seconds;
    this.minutes.textContent = minutes;
    this.hours.textContent = hours;
    this.tod.textContent = tod;
  }

  getTime() {
    const now = new Date();
    let hours = now.getUTCHours() + this.timezone;

    hours = hours < 10 ? `0${hours}` : hours;
    const minutes = now.getUTCMinutes() < 10 ? `0${now.getUTCMinutes()}` : now.getUTCMinutes();
    const seconds = now.getUTCSeconds() < 10 ? `0${now.getUTCSeconds()}` : now.getUTCSeconds();
    let tod = 'am';

    if (hours >= 12) {
      hours = hours === 12 ? 12 : hours - 12;
      tod = 'pm';
    }

    // console.log(hours, minutes, seconds, tod);

    this.draw(hours, minutes, seconds, tod);
  }

  cycle() {
    setInterval(this.getTime.bind(this), 1000);
  }
}

export default () => (
  <div className='clock-container'>
    <div>
      <div className='name'>Bangalore</div>
      <div id='bangalore' className='clock' data-timezone='+5:30'><span className='hours'>12</span>:<span className='minutes'>30</span>:<span className='seconds'>30</span>&nbsp;<span className='tod'></span></div>
    </div>
    <div>
      <div className='name'>Milwaukee</div>
      <div id='milwaukee' className='clock' data-timezone='-5'><span className='hours'>12</span>:<span className='minutes'>30</span>:<span className='seconds'>30</span>&nbsp;<span className='tod'></span></div>
    </div>
    <div>
      <div className='name'>New York</div>
      <div id='new_york' className='clock' data-timezone='-4'><span className='hours'>12</span>:<span className='minutes'>30</span>:<span className='seconds'>30</span>&nbsp;<span className='tod'></span></div>
    </div>
  </div>
)
