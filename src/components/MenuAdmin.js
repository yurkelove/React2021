import React from 'react';

import AddBurgerForm from './AddBurgerForm';
import EditBurgerForm from './EditBurgerForm';


class MenuAdmin extends React.Component {
    render() {
        return(
            <div className="app-menu-admin">
                <h2>Управление меню</h2>
                {Object.keys(this.props.burgers).map(key => {
                    return <EditBurgerForm key={key} burger={ this.props.burgers[key] } updateBurger={this.props.updateBurger} index={key} deleteBurger={this.props.deleteBurger}/>
                })}
                <AddBurgerForm addBurger={this.props.addBurger}/>
                <button onClick={this.props.loadSampleBurgers}> Загрузить бургеры </button>
            </div>
        )
    }
}

export default MenuAdmin;