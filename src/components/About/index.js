import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../../atom/user";

const About = () => {
  const navigate = useNavigate();
  const human = useRecoilValue(userState);

  const proceedTeaching = () => {
    if (human) {
      navigate("/cooperation");
    } else {
      toast.warning("لطفا ابتدا وارد شوید");
    }
  };
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="assets/iceberg.png"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
          <div className="col-md-6">
            <h5 className="fw-bold mb-4 dark-text">
              سامانهٔ AIS: نقش بی‌قابل‌انکار در امنیت و حفاظت دریایی خلیج فارس
            </h5>
            <p className="mb-4 lh-large">
              سامانهٔ AIS یک فناوری جدید که به کمک دستگاه‌های مخصوص، اطلاعاتی در
              مورد وضعیت و مکان شناور‌ها و ناوگان دریایی ارائه می‌دهد. از این
              جهت، AIS نقش مهمی در جلوگیری از تصادفات دریایی دارد. این سامانه به
              مسئولان دریایی و ناوبران امکان می‌دهد تا به شکل دقیق‌تری مسیر خود
              را برنامه‌ریزی کنند و در مواجهه با مخاطرات بهتر عمل کنند. همچنین،
              AIS در حفاظت از امنیت منطقهٔ خلیج فارس نقش مهمی دارد. با استفاده
              از این سامانه، مراکز نظارتی می‌توانند ناوگان دریایی را به دقت
              نظارت کنند و در صورت شناسایی هرگونه فعالیت مشکوک یا نقض امنیت،
              اقدامات لازم را انجام دهند. همچنین، AIS به اطلاع‌رسانی در مورد
              حادثه‌های دریایی و اضطراب در منطقه کمک می‌کند. این سامانه به
              سازمان‌های نجات دریایی و امدادرسانی اطلاعات لازم را فراهم می‌کند
              تا در مواجهه با وقوع حوادث، به سرعت واکنش نشان دهند. در نتیجه،
              سامانهٔ AIS نه تنها در حفاظت از امنیت منطقهٔ خلیج فارس کمک می‌کند
              بلکه در بهبود نظارت و مدیریت دریایی نیز نقش بسیار مهمی ایفا
              می‌کند. از این رو، توسعه و به‌روزرسانی این سامانه از اهمیت بسیاری
              برخوردار است تا منطقه دریایی ما امن‌تر و پایدارتر باشد.
            </p>
            <button
              onClick={proceedTeaching}
              className="btn btn-dark mt-4 mx-auto"
            >
              مایل به همکاری هستید؟
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
