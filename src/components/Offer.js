import React, { Component } from "react";
import PropTypes from "prop-types";

class Offer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    };
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0
    };

    // calculate time difference between now and expected date
    if (diff >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = "0" + value;
    }
    return value;
  }

  render() {
    const countDown = this.state;
    return (
      <div className="deal_ofthe_week" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="deal_ofthe_week_img">
                <img src={"/assets/Discount-pana.svg"} alt="" />
              </div>
            </div>
            <div className="col-lg-6 deal_ofthe_week_col">
            <div className="section_title text-center my-3 text-info">
                <h3>بزرگترین تخفیف سال</h3>
            </div>
              <div className="deal_ofthe_week_content d-flex flex-column align-items-center float-right">
                <ul className="timer">
                <li className="d-inline-flex flex-column justify-content-center align-items-center">
                    <div id="second" className="timer_num">
                      {this.addLeadingZeros(countDown.sec)}
                    </div>
                    <div className="timer_unit">ثانیه</div>
                  </li>
                  <li className="d-inline-flex flex-column justify-content-center align-items-center">
                    <div id="minute" className="timer_num">
                      {this.addLeadingZeros(countDown.min)}
                    </div>
                    <div className="timer_unit">دقیقه</div>
                  </li>
                  <li className="d-inline-flex flex-column justify-content-center align-items-center">
                    <div id="hour" className="timer_num">
                      {this.addLeadingZeros(countDown.hours)}
                    </div>
                    <div className="timer_unit">ساعت</div>
                  </li>
                  <li className="d-inline-flex flex-column justify-content-center align-items-center">
                    <div id="day" className="timer_num">
                      {this.addLeadingZeros(countDown.days)}{" "}
                    </div>
                    <div className="timer_unit">روز</div>
                  </li>
                </ul>
                <div className="deal_ofthe_week_button btn btn-primary my-4">
                  <a href="/products" className="text-white text-decoration-none">اکنون بخرید</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Offer.propTypes = {
  date: PropTypes.string.isRequired
};

Offer.defaultProps = {
  date: new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000).toString()
};

export default Offer;
