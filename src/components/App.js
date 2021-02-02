import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Order from './Order';
import MenuAdmin from './MenuAdmin';
import Burger from './Burger';
import sampleBurgers from '../sample-burgers';
import base from '../base';


class App extends React.Component {

    static propTypes = {
        match: PropTypes.object
    }
    
    state = {
        burgers: {},
        order: {}
    }

    componentDidMount() {
        const { params } = this.props.match;

        const localStorageRef = localStorage.getItem(params.restaurantId);
        
        if(localStorageRef) {
            this.setState({order: JSON.parse(localStorageRef)});
        }
       
        this.ref = base.syncState(`${params.restaurantId}/burgers`, {
            context: this,
            state: 'burgers' // state обьект
        });
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    componentDidUpdate() {
        const { params } = this.props.match;

        localStorage.setItem(params.restaurantId, JSON.stringify(this.state.order));
    }

    addBurger = (burger) => {
        // Делаем копию обьекта state
        const burgers = {...this.state.burgers};
        // Добавить новый бургер в переменную burgers
        burgers[`burger${Date.now()}`] = burger;
        // Использовать setStates, записать в стейт обновленный обьект burgers
        this.setState({burgers})
    }


    updateBurger = (key, updated) => {
        const burgers = {...this.state.burgers};

        burgers[key] = updated;

        this.setState({burgers})
    }

    deleteBurger = key => {
        const burgers = {...this.state.burgers};
        
        burgers[key] = null;

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


    deleteFromOrder = (key) => {
        const order = {...this.state.order};
        
        delete order[key];

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
                <Order burgers={this.state.burgers} order={this.state.order} deleteFromOrder={this.deleteFromOrder}/>
                <MenuAdmin addBurger={this.addBurger} 
                            loadSampleBurgers={this.loadSampleBurgers} 
                            burgers={this.state.burgers} 
                            updateBurger={this.updateBurger}
                            deleteBurger={this.deleteBurger}
                />
            </div>
        )
    }
}

export default App;