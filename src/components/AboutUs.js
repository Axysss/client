import React from "react";

export default function AboutUs() {
  return (
    <div className="description">
      <h1>Почему стоит выбрать именно нас?</h1>
      <div className="container">
        <div className="box">
          <div className="mid">
            <img alt="" src={"./img/star.png"} />
            <h3 className="textUp">Опыт работы больше 10 лет</h3>
          </div>
          <p>
            Наша команда состоит из профессионалов с обширным опытом,
            накопленным более чем за 10 лет работы с самыми разнообразными
            компьютерами. Для нас не существует нерешаемых задач.
          </p>
        </div>
        <div className="box">
          <div className="mid">
            <img alt=""  src={"./img/speed.png"} />
            <h3 className="textUp2">Честные цены и сроки ремонта</h3>
          </div>
          <p>
            Наши цены прозрачны, мы не навязываем лишних дополнительных услуг и
            сообщаем стоимость работ заранее. А Как только работа будет
            выполнена, мы сразу отправим вам улучшенный товар.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="box2">
          <div className="mid">
            <img alt=""  src={"./img/settings.png"} />
            <h3 className="text1">Качество – превыше всего!</h3>
          </div>
          <p>
            Мы постоянно следим за тем, чтобы наши услуги становились лучше.
            Наши клиенты знают, что наша компания всегда ответственно подходит к
            любому вопросу.
          </p>
        </div>
        <div className="box2">
          <div className="mid">
            <img alt=""  src={"./img/speed.png"} />
            <h3 className="text2">Жизнь в движении</h3>
          </div>
          <p>
            Мы не останавливаемся на достигнутом. Всегда делаем и узнаём что-то
            новое. Используем новейшее оборудование и технологии. Готовы к
            сложным вызовам.
          </p>
        </div>
        <div className="box2">
          <div className="mid">
            <img alt=""  src={"./img/hands.png"} />
            <h3 className="text3">Официальные производители</h3>
          </div>
          <p>
            На складе апгрейд-центра находятся комплектующие от официальных
            производителей. Никакого брака! Все комплектующие проверяются перед
            попаданием к вам.
          </p>
        </div>
        <div className="box2">
          <div className="mid">
            <img alt=""  src={"./img/verified.png"} />
            <h3 className="text4">Гарантия</h3>
          </div>
          <p>
            Мы ценим Ваше доверие, поэтому каждый клиент апргейд-центра получает
            гарантию до 1 года на все комплектующие, и до 3-х месяцев – на все
            виды работ.
          </p>
        </div>
      </div>

    </div>
  );
}
