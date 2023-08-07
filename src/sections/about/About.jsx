import React from "react";
import "./about.css";
import AboutImage from "../../assets/about.jpg";
import CV from "../../assets/cv.pdf";
import { HiDownload } from "react-icons/hi";
import data from "./data";
import Card from "./../../components/Card";

const About = () => {
  return (
    <section id="about" dir="rtl">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="AboutImage" />
          </div>
        </div>

        <div className="about__right" data-aos="fade-in">
          <h2>درباره من</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            من برنامه نویس فول استک در زمینه توسعه وب و اپلیکیشن‌های اندرویدی
            هستم. در حال حاضر، با استفاده از فریمورک لاراول و کتابخانه ReactJS
            به توسعه برنامه‌های وب می‌پردازم. همچنین، تجربه کار با زبان‌های
            برنامه نویسی مانند PHP، JavaScript، HTML و CSS را دارم. علاوه بر
            این، توانایی طراحی لوگو و کار با نرم‌افزار فتوشاپ را نیز دارا هستم.
            به دلیل تجربیات قبلی در توسعه اپلیکیشن‌های اندرویدی، می‌توانم در این
            زمینه نیز کمک کنم. با توجه به این تخصص‌ها، می‌توانم به شما کمک کنم
            تا پروژه‌های وب و اپلیکیشن‌های خود را به بهترین شکل ممکن اجرا کنید.
          </p>
          <p>
            در حوزه تحصیلی، مدرک کارشناسی مهندسی کامپیوتر را از دانشگاه صنعتی
            سجاد مشهد دریافت کرده‌ام. همچنین، در حین تحصیلاتم توانستم تجربه کاری
            مفیدی در زمینه توسعه وب و برنامه‌نویسی کسب کنم. در زمینه کاری نیز،
            تجربه کاری در خدمات مسافرتی رسپینا24 و کاراجت و
            همچنین در صرافی ارز دیجیتال Ompfinex را دارم. این تجربیات، مهارت‌های
            لازم برای کار در صنعت فناوری اطلاعات را به من ارائه داده و مرا برای
            انجام پروژه‌هایی در این زمینه آماده کرده‌اند
          </p>
          <a href={CV} download className="btn primary">
            دانلود رزومه <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
