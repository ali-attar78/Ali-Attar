import { useEffect } from 'react'
import HeaderImage from '../../assets/header.jpg'
import data from './data'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './header.css'

const Header = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3  data-aos="fade-up">محمدعلی عطار علیائی</h3>
        <p  data-aos="fade-up">
        شما فقط یک کلیک فاصله دارید تا وبسایت یا برنامه وب رویایی خود را ایجاد کنید. جزئیات پروژه خود را به من بدهید تا به شما کمک کنم تا یک وبسایت مدرن، پاسخگوی موبایل و با عملکرد بالا راه‌اندازی کنید. با توجه به تجربه و مهارت‌هایی که در زمینه طراحی و توسعه وبسایت‌ها دارم، می‌توانم به شما کمک کنم تا ایده‌های خود را به واقعیت تبدیل کنید و حرفه‌ای ترین نتیجه را برای پروژه خود بگیرید.        </p>
        <div className="header__cta"  >
          <a href="#contact" className='btn primary'>گفتگو</a>
          <a href="#portfolio" className='btn light'>نمونه کارهای من</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header