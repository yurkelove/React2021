import React from 'react';

import restaraunts from '../sample-restaurants';

class Landing extends React.Component {
    state = {
        display: false,
        title: "",
        url: ""
    };

    displayList = () => {
     const { display } = this.state;

     this.setState({display: !display});
    }

    // componentDidMount() {

    // }

    getTitle = restaraunt => {
        const {title, url } = restaraunt;

        this.setState({title,url,display:false})
    }

    goToRestaurant = () => {
        console.log('go to restaurant');
    }

    render() {
        return (
            <React.Fragment>
                <div className="restaurant-select">
                    <div className="restaraunt-select__top">
                        <div onClick={this.displayList} className="restraunt-select__top-header font-effect-outline">
                           { this.state.title ? this.state.title : 'Выбери ресторан' }
                        </div>
                        <div className="arrow-picker">
                            <div className="arrow-picker__up"></div>
                            <div className="arrow-picker__down"></div>
                        </div>
                    </div>
                    {this.state.display ? ( <div className="restaurant-select__bottom">
                        <ul>
                            {
                                 restaraunts.map(restaraunt => {
                                    return <li onClick={() => this.getTitle(restaraunt)} key={restaraunt.id}>{restaraunt.title}</li>
                                })
                            }
                        </ul>
                    </div>
                    ) : null
                    }
                    {this.state.title && !this.state.display ? (<button onClick={this.goToRestaurant}>Перейти в ресторан</button>) : null}
                </div>
            </React.Fragment>
        )
    }
}

export default Landing;