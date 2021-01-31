import React from 'react';

import restaraunts from '../sample-restaurants';

class Landing extends React.Component {
    render() {

        return (
            <React.Fragment>
                <div className="restaurant-select">
                    <div className="restaraunt-select__top">
                        <div className="restraunt-select__top-header">
                            Выбери ресторан
                        </div>
                        <div className="arrow-picker">
                            <div className="arrow-picker__up"></div>
                            <div className="arrow-picker__down"></div>
                        </div>
                    </div>
                    <div className="restaurant-select__bottom">
                        <ul>
                            {
                                 restaraunts.map(restaraunts => {
                                    return <li key={restaraunts.id}>{restaraunts.title}</li>
                                })
                            }
                        </ul>
                    </div>
                    <button>Перейти в ресторан</button>
                </div>
            </React.Fragment>
        )
    }
}

export default Landing;