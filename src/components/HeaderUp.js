import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';
import { Link } from 'react-router-dom';

const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return (<div>
    {props.orders.map(el => (
    <Order onDelete={props.onDelete} key={el.id} item={el} />
    ))}
    <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
      <Link to= "/making-an-order" class="button-order">
        <a href="/making-an-order"><span>Заказать</span></a>
      </Link>
  </div>)
}

const showNothing = () => {
  return (<div className='empty'>
    <h2>Товаров нет</h2>
  </div>)
}

export default function HeaderUp(props) {
  let [cartOpen, setCartOpen] = useState(false)
  let [contactsOpen, setContactsOpen] = useState(false)

  return (
    <header>
        <div className='shapka'>
            <span className='logo'>ISMART</span>
            <ul className='navigation'>
                <li onClick={() => setContactsOpen(contactsOpen = !contactsOpen)} className={`contacts-cart-button ${contactsOpen && 'active'}`}>Контакты</li>
                <li>+7 950 234 55 72</li>
            </ul>
            <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />

            {cartOpen && (
              <div className='shop-cart'>
                {props.orders.length > 0 ?
                showOrders(props) : showNothing()}
                </div>
            )}

            {contactsOpen && (
              <div className='contacts-cart'>
                  <p>Вопросы о покупке:  answer@gmail.com</p>
                  <p>Сотруднечество:  plusmoney@gmail.com</p>
              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
