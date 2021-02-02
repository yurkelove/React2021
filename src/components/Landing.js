import React, { useState } from 'react';
import PropTypes from 'prop-types';

import restaraunts from '../sample-restaurants';

const Landing = props => {
    // state = {
    //     display: false,
    //     title: "",
    //     url: ""
    // };

    const [display , toggleDisplay ] = useState(false);
    const [title , setTitle ] = useState('');
    const [url , setUrl ] = useState('');

    const displayList = () => {
        toggleDisplay(!display);
    }
   
    
    const getTitle = restaraunt => {
        const {title, url } = restaraunt;
        setTitle(title);
        setUrl(url)
        toggleDisplay(false);
    }
   
    const goToRestaurant = () => {
        props.history.push(`/restaurant/${url}`);
    }

    return (
        <React.Fragment>
            <div className="restaurant-select">
                <div className="restaraunt-select__top">
                    <div onClick={displayList} className="restraunt-select__top-header font-effect-outline">
                       { title ? title : 'Выбери ресторан' }
                    </div>
                    <div className="arrow-picker">
                        <div className="arrow-picker__up"></div>
                        <div className="arrow-picker__down"></div>
                    </div>
                </div>
                {display ? ( <div className="restaurant-select__bottom">
                    <ul>
                        {
                             restaraunts.map(restaraunt => {
                                return <li onClick={() => getTitle(restaraunt)} key={restaraunt.id}>{restaraunt.title}</li>
                            })
                        }
                    </ul>
                </div>
                ) : null
                }
                {title && !display ? (<button onClick={goToRestaurant}>Перейти в ресторан</button>) : null}
            </div>
        </React.Fragment>
    )
}

Landing.propTypes = {
    history: PropTypes.object
}

export default Landing;