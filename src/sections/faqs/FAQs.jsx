import { useEffect } from "react";
import faqs from "./data";
import FAQ from "./FAQ";
import AOS from "aos";
import "aos/dist/aos.css";
import "./faqs.css";

const FAQs = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <section id="faqs" dir="rtl">
      <h2>سوالات متداول</h2>
      <p>
        برخی از سوال‌هایی که معمولا مطرح می‌شوند جمع آوری شده است با کلیک بر روی
        سوال، پاسخ آن را مشاهده خواهید کرد. اگر هنوز هم سوال‌های بیشتری دارید،
        می‌توانید از طریق بخش ارتباط با من، با من در ارتباط باشید و سوالات خود
        را بپرسید.
      </p>
      <div className="container faqs__container" data-aos="fade-in">
        {faqs.map((faq) => (
          <FAQ key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
};

export default FAQs;
