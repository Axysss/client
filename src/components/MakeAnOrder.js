import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class MakeAnOrder extends Component {
  render() {
    return (
      <div>   
        <h1 className='text-2xl my-6'><b>1</b> Данные покупателя</h1>

        <div className='my-2'>
        <input className='m-4 outline outline-offset-4 outline-gray-300 mr-10' placeholder="Телефон" id="first-name"/> 
        <input className='m-4 outline outline-offset-4 outline-gray-300' placeholder="E-mail (Необязательно)" id="first-name"/> 
        </div>

        <h1 className='text-2xl my-6'><b>2</b> Выберете способ получения</h1>
        <div className='my-4'>
        <a href="/making-an-order" class="button-s">Самовывоз</a>
        <a href="/making-an-order" class="button-s">Доставка</a>
        </div>
        <div>
            <h1 className="text-2xl text-center mb-10" >ISMART на этой улице</h1>
            <div className="mt-100 ">
              <iframe title="mapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1224.9631514728308!2d131.94345681598378!3d43.094641133199715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb3929fc45838a7%3A0x19e5111493fbb711!2z0YPQuy4g0KfQsNGB0L7QstC40YLQuNC90LAsIDEzLCDQktC70LDQtNC40LLQvtGB0YLQvtC6LCDQn9GA0LjQvNC-0YDRgdC60LjQuSDQutGA0LDQuSwgNjkwMDE2!5e0!3m2!1sru!2sru!4v1718546204607!5m2!1sru!2sru"
                width="1152"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
        </div>

        <h1 className='text-2xl my-6'><b>3</b> Выберете способ оплаты</h1>
        <div className='my-4'>
          <a href="/making-an-order" class="button-s">При получении</a>
          <a href="/making-an-order" class="button-s">Онлайн</a>
          <a href="/making-an-order" class="button-s">Кредит</a>
        </div>
        <Link to= "/" class="button-order2">
        <a href="/"><span>Подтвердить заказ</span></a>
      </Link>
      </div>
    )
  }
}

export default MakeAnOrder