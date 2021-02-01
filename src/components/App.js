import React from 'react';
import Header from './Header';
import Order from './Order';
import MenuAdmin from './MenuAdmin';
import Burger from './Burger';
import sampleBurgers from '../sample-burgers';


class App extends React.Component {
    state = {
        burgers: {},
        order: {}
    }

    addBurger = (burger) => {
        // Делаем копию обьекта state
        const burgers = {...this.state.burgers};
        // Добавить новый бургер в переменную burgers
        burgers[`burger${Date.now()}`] = burger;
        // Использовать setStates, записать в стейт обновленный обьект burgers
        this.setState({burgers})
    }

    loadSampleBurgers = () => {
       this.setState({burgers: sampleBurgers})
    }

    addToOrder = (key) => {
        const order = {...this.state.order};
        // Если существует то добавляем 1, либо обновить текущее значение
        order[key] = order[key] + 1 || 1;
        this.setState({order});
    }

    render() {
        return(
            <div className="app-burger-menu">
                <div className="app-burger-menu__menu">
                    <Header 
                        title="Very Hot Burger" 
                    />
                    <ul className="app-burgers-list">
                        {Object.keys(this.state.burgers).map(key => {
                            return <Burger addToOrder={this.addToOrder} key={key} index={key} details={this.state.burgers[key]}/>;
                        })}
                    </ul>
                </div>
                <Order />
                <MenuAdmin addBurger={this.addBurger} loadSampleBurgers={this.loadSampleBurgers}/>
            </div>
        )
    }
}

export default App;