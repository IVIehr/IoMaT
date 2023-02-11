import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="footer_nav_container d-flex flex-sm-row flex-column align-items-center justify-content-lg-start justify-content-center text-center">
              <ul className="footer_nav">
                <li>
                  <a href="#">تماس با ما</a>
                </li>
                <li>
                  <a href="/teaching">همکاری</a>
                </li>
                <li>
                  <a href="#">مجله فرادرس</a>
                </li>
                <li>
                  <a href="#">پیشنهاد آموزش</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Social links */}
          <div className="col-lg-6">
            <div className="footer_social d-flex flex-row align-items-center justify-content-lg-end justify-content-center">
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>{" "}
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="footer_nav_container">
              <div className="cr">
              © فرادرس 1401. تمامی حقوق محفوظ است.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;