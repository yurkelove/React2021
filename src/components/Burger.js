import React from 'react';


class Burger extends React.Component {
    handleClick = () => {
     this.props.addToOrder(this.props.index);
    }

    render() {
        const { image, name, price, desc, status } = this.props.details;
        const isAvailable = status === 'available';

        return(
            <li className="menu-burger">
                <div className="menu-burger-image">
                    <img src={image} alt="name"/>
                </div>
                <div className="menu-burger-details">
                    <h3 className="menu-burger-defails-name">{name}
                        <span className="price">{price} $</span>
                    </h3>
                    <p>{desc}</p>
                    <button
                        onClick={this.handleClick}
                        className="buttonOrder" 
                        disabled={!isAvailable}>
                        {isAvailable ? 'Заказать' : 'Временно нет'}</button>
                </div>
            </li>
        )
    }
}

export default Burger;