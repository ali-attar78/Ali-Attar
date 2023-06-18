import React from 'react'
import './services.css'
import data from './data'
import Card from './../../components/Card';

const Services = () => {
  return (
   <section id="services" dir='rtl'>
     <h2>مهارت های من</h2>
     <p>با من، بهترین خدمات در تمامی زیرساخت‌های زیر را تجربه کنید</p>
     <div className='container services__container' data-aos="fade-up">
{
  data.map(item=>(
    <Card key={item.id} className="service light">
      <div className="service__icon">{item.icon}</div>
      <div className="service__details">
        <h4>{item.title}</h4>
        <p>{item.desc}</p>
      </div>
    </Card>
  ))
}
     </div>
   </section>
  )
}

export default Services