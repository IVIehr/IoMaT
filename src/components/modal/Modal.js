function Modal({ handleClose, show}){
  const showHideClassName = show ? "modal d-block" : "modal d-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main p-4 rounded-3 w-50">
        <h5 className='text-center text-info'>شرایط و ضوابط</h5>
        <ul className='mt-4 text-end'>
          <li className='my-1'>خرید کالا از وب‌سایت فروشگاه فرادرس بر مبنای قوانین و آئین‌نامه‌های تجارت الکترونیک و با رعایت کامل تمام قوانین جمهوری اسلامی ایران انجام می‌شود.</li>
          <li className='my-1'>كاربران متعهد هستند که در دسترسی به وب‌سایت فروشگاه فرادرس مقاصدی خارج از دریافت اطلاعات فنی یا سفارش اینترنتی کالا دنبال نکنند.</li>
          <li className='my-1'>كاربران هنگام سفارش كالا ملزم هستند اطلاعات صحیح و كامل خود را در وب‌سایت درج کنند. بدیهی است کاستی یا نادرستی اطلاعات مانع تکمیل درست سفارش و تحویل به‌موقع آن خواهد شد.</li>
          <li className='my-1'>فروشگاه فرادرس هیچ‌گونه مسئولیتی در قبال محتویات سایت‌هایی که ارتباط به آن‌ها به واسطه‌ی آگاهی و یا لینک در وب‌سایت فرادرس شکل می‌گیرد، ندارد.</li>
        </ul>
        <button className='btn btn-outline-info mt-4' type="button" onClick={handleClose}>
          برگشت
        </button>
      </section>
    </div>
  );
};

export default Modal;