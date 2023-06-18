import contacts from "./data";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h2>ارتباط با من</h2>
      <p>از طریق لینک‌های زیر، می‌توانید با من در ارتباط باشید</p>
      <div className="container contact__container" data-aos="fade-in">
        {contacts.map((contact) => (
          <a
            key={contact.id}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
