import React, {Fragment} from "react";

import mealsImage from '../../assests/meals.jpg';
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {

    return (
        <Fragment>
        <header className={styles.header}>
            <h1>GomatoEats</h1>
            <HeaderCartButton
            onClick={props.onShowCart}
             />
        </header>
        <div className={styles['main-image']}>
            <img src={mealsImage} alt="Burger"/>
        </div>
        </Fragment>
    );

}

export default Header;