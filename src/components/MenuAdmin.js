import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';

import AddBurgerForm from './AddBurgerForm';
import EditBurgerForm from './EditBurgerForm';


class MenuAdmin extends React.Component {
    state = {
        photo: "",
        user: ""
    };

    static propTypes = {
        burgers: PropTypes.object,
        deleteBurger: PropTypes.func,
        updateBurger: PropTypes.func,
        addBurger: PropTypes.func,
        loadSampleBurgers: PropTypes.func
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                this.authHandler({user});
            }
        })
    }

    authHandler = async (authData) => {
        const { email, photoURL } = authData.user;

        this.setState({ user: email, photo: photoURL })
    }

    render() {
        const { user, photo } = this.state;
        const avatar = photo ? photo : '/images/avatar.png';

        return(
            <div className="app-menu-admin">
                {
                    user ? (
                        <div className="login-header">
                            <div className="avatar">
                                <img src={avatar} alt={user} />
                            </div>
                            <button className="buttonLogout" onClick={this.props.handleLogout}>Выйти</button>
                        </div>
                    ) : null
                }
                
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