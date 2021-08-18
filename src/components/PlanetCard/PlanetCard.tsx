import React from 'react';
import cx from 'classnames';
import styles from "./PlanetCardStyles.module.scss";


const PlanetCard = (props: Record<string, any>) => {
    const { name, temperature, population } = props;
    return (
        <div className={cx(styles.container)}>
            <div className={cx(styles.cardTop)}>
                <img src="logo192.png" alt="card-img" />
            </div>
            <div className={cx(styles.cardBottom)}>
                <h5>{name}</h5>
                <p>{temperature}</p>
                <p>{population}</p>
                <button>Read More</button>
            </div>
        </div>
    )
}

export default PlanetCard;