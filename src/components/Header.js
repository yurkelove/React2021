import React from 'react';


// class Header extends React.Component {
//     render() {
//         return(
//             <header className="app-header">
//                 <div className="app-header__container">
//                    <div className="app-header-content">
//                        <div className="app-header-content__rating">
//                            <div className="app-header-rating-tag">Рейтинг</div>
//                            <div className="app-header-rating-icon">★★★★★</div>
//                        </div>
//                        <div className="app-header-divider"></div>
//                        <h1 className="font-effect-fire-animation">{this.props.title}</h1>
//                        <h3><span>Быстрая доставка горячих <span className="app-sub-header"> #бургеров</span></span></h3>
//                    </div>
//                 </div>
//             </header>
//         )
//     }
// }


const Header = (props) => (
        <header className="app-header">
            <div className="app-header__container">
               <div className="app-header-content">
                   <div className="app-header-content__rating">
                       <div className="app-header-rating-tag">Рейтинг</div>
                       <div className="app-header-rating-icon">★★★★★</div>
                   </div>
                   <div className="app-header-divider"></div>
                   <h1 className="font-effect-fire-animation">{props.title}</h1>
                   <h3><span>Быстрая доставка горячих <span className="app-sub-header"> #бургеров</span></span></h3>
               </div>
            </div>
        </header>
);

export default Header;