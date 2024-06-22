import React from "react";
import { Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import HeaderUp from "./HeaderUp";
import Items from "./Items";
import Categories from "./Categories";
import ShowFullItem from "./ShowFullItem";
import AboutUs from "./AboutUs";
import OurMap from "./OurMap";
import YoursPosts from "./YoursPosts";
import MakeAnOrder from "./MakeAnOrder";

class Tovar extends React.Component {
  constructor(props) {
    
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [ 
        {
          id: 1,
          title: 'Диван |СД3| в ванильном цвете',
          img: "divan.png",
          desc: 'Современный диван с опцией подогрева поможет пережить холодную зиму. ',
          fullDesc: 'Современный диван с опцией подогрева поможет пережить холодную зиму. Современный диван с опцией подогрева поможет пережить холодную зиму.',
          functionsM: 'Управляемый подогрев',
          comlexion: 'Подушки, детали для сборки, инструкция',
          category: 'divan',
          price: '800.99',
        },
        {
          id: 2,
          title: 'Диван |СД3| в ванильном цвете',
          img: "divan.png",
          desc: 'Современный диван с опцией подогрева поможет пережить холодную зиму. ',
          fullDesc: 'Современный диван с опцией подогрева поможет пережить холодную зиму. Современный диван с опцией подогрева поможет пережить холодную зиму.',
          functionsM: 'Управляемый подогрев',
          comlexion: 'Подушки, детали для сборки, инструкция',
          category: 'divan',
          price: '700.99',
        },
        {
          id: 3,
          title: 'Кресло |СК7| в черном цвете',
          img: "kreslo.png",
          desc: 'Удобное кресло с автоматической подвеской и эффектом сохранения осанки ',
          fullDesc: 'Современный диван с опцией подогрева поможет пережить холодную зиму. Современный диван с опцией подогрева поможет пережить холодную зиму.',
          functionsM: 'Управляемый подогрев',
          comlexion: 'Подушки, детали для сборки, инструкция',
          category: 'kreslo',
          price: '850.00',
        },
        {
          id: 4,
          title: 'Складные стол и стулья |ССИС11|',
          img: "stol.png",
          desc: 'Необычные стол и стулья. Способны складываться, идеально подходят для походов.',
          fullDesc: 'Современный диван с опцией подогрева поможет пережить холодную зиму. Современный диван с опцией подогрева поможет пережить холодную зиму.',
          functionsM: 'Управляемый подогрев',
          comlexion: 'Подушки, детали для сборки, инструкция',
          category: 'table',
          price: '1000.50',
        },
        {
          id: 5,
          title: 'Складные стол и стулья |ССИС11|',
          img: "stol.png",
          desc: 'Необычные стол и стулья. Способны складываться, идеально подходят для походов. ',
          fullDesc: 'Современный диван с опцией подогрева поможет пережить холодную зиму. Современный диван с опцией подогрева поможет пережить холодную зиму.',
          functionsM: 'Управляемый подогрев',
          comlexion: 'Подушки, детали для сборки, инструкция',
          category: 'table',
          price: '1300.00',
        },
        {
          id: 6,
          title: 'Кресло |СК7| в черном цвете',
          img: "kreslo.png",
          desc: 'Удобное кресло с автоматической подвеской и эффектом сохранения осанки ',
          fullDesc: 'Современный диван с опцией подогрева поможет пережить холодную зиму. Современный диван с опцией подогрева поможет пережить холодную зиму.',
          functionsM: 'Управляемый подогрев',
          comlexion: 'Подушки, детали для сборки, инструкция',
          category: 'kreslo',
          price: '1600.00',
        },
        {
          id: 7,
          title: 'Диван |СД3| в ванильном цвете',
          img: "divan.png",
          desc: 'Современный диван с опцией подогрева поможет пережить холодную зиму. ',
          fullDesc: 'Современный диван с опцией подогрева поможет пережить холодную зиму. Современный диван с опцией подогрева поможет пережить холодную зиму.',
          functionsM: 'Управляемый подогрев',
          comlexion: 'Подушки, детали для сборки, инструкция',
          category: 'divan',
          price: '1200.00',
        },
        {
          id: 8,
          title: 'Складные стол и стулья |ССИС11| ',
          img: "stol.png",
          desc: 'Необычные стол и стулья. Способны складываться, идеально подходят для походов. ',
          fullDesc: 'Современный диван с опцией подогрева поможет пережить холодную зиму. Современный диван с опцией подогрева поможет пережить холодную зиму.',
          functionsM: 'Управляемый подогрев',
          comlexion: 'Подушки, детали для сборки, инструкция',
          category: 'table',
          price: '1450.00',
        },
        {
          id: 9,
          title: 'Кресло |СК7| в черном цвете',
          img: "kreslo.png",
          desc: 'Удобное кресло с автоматической подвеской и эффектом сохранения осанки ',
          fullDesc: 'Современный диван с опцией подогрева поможет пережить холодную зиму. Современный диван с опцией подогрева поможет пережить холодную зиму.',
          functionsM: 'Управляемый подогрев',
          comlexion: 'Подушки, детали для сборки, инструкция',
          category: 'kreslo',
          price: '1750.00',
        }
      ],
      showFullItem: false, 
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <HeaderUp orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory = {this.chooseCategory} />
        <Items  onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
        
        {this.state.showFullItem && <ShowFullItem  onAdd={this.addToOrder} onShowItem={this.onShowItem} item = {this.state.fullItem} />}
        <Container>
          <Routes>
            <Route path = "/making-an-order" element = {<MakeAnOrder />} />
          </Routes>
        </Container>
        <AboutUs/>
        <OurMap />
        <YoursPosts />
        </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !==id)})
  }

  addToOrder(item) {
    let isinArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isinArray = true
    })
    if(!isinArray)
    this.setState({orders: [...this.state.orders, item] })
  }
}

export default Tovar;
