import React from "react";

function Cooperation() {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4 dark-text">
            <h4>روند همکاری با فرادرس از ارسال عنوان تا ضبط نهایی</h4>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            {/* Send the result ot the form to my email */}
            <form
              action="mailto: mehr910093@gmail.com"
              method="post"
              enctype="text/plain"
            >
              <div className="mb-3">
                <label for="exampleForm" className="form-label">
                  نام و نام خانوادگی
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="exampleForm"
                  placeholder="John Smith"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  آدرس ایمیل
                </label>
                <input
                  reaquired
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  توضیحات
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-dark w-100">
                ارسال
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cooperation;
