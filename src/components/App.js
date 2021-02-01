import React from 'react';
import Header from './Header';
import Order from './Order';
import MenuAdmin from './MenuAdmin';


class App extends React.Component {
    render() {
        return(
            <div className="app-burger-menu">
                <div className="app-burger-menu__menu">
                    <Header 
                        title="Very Hot Burger" 
                        amount={10}
                        hot={true}
                    />
                </div>
                <Order />
                <MenuAdmin />
            </div>
        )
    }
}

export default App;