import React from 'react';
import cx from 'classnames';
import styles from "./CardStyles.module.scss";


const Card = (props: Record<string, any>) => {
    const { name, display, mass, title } = props;
    console.log(display)
    return (
        <div className={cx(styles.container, display)}>
            <div className={cx(styles.cardTop)}>
                <img src="logo192.png" alt="card-img" />
            </div>
            <div className={cx(styles.cardBottom)}>
                <h5>{name || title}</h5>
                <p>{ }</p>
                <p>{mass}</p>
                {/* <p>{}</p> */}
            </div>
        </div>
    )
}

export default Card;