import React from 'react';
import PropTypes from 'prop-types';


class AddBurgerForm extends React.Component {

    static propTypes = {
        addBurger: PropTypes.func
    };

    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createBurger = event => {
        event.preventDefault();

        const burger = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value || 0),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value
        }
        

        if(burger.name.length && burger.price) {
            this.props.addBurger(burger);
        }

        event.currentTarget.reset();
    }

    render() {
        return(
            <form className="app-burger-form" onSubmit={this.createBurger}>
                <input ref={this.nameRef} name="name" type="text" placeholder="Name" autoComplete="off"/>
                <input ref={this.priceRef} name="price" type="text" placeholder="Price" autoComplete="off"/>
                <select name="status" type="text" className="app-burger-form-status" ref={this.statusRef}>
                    <option value="available">Доступно</option>
                    <option value="unavailable">Убрать из меню</option>
                </select>
                <textarea name="desc" placeholder="Desc" ref={this.descRef}/>
                <input name="image" type="text" placeholder="Image" autoComplete="off" ref={this.imageRef}/>
                <button type="submit">+ Добавить в Меню</button>
            </form>
        )
    }
}

export default AddBurgerForm;