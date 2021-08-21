import React from 'react';
import cx from 'classnames';
import styles from "./PlanetCardStyles.module.scss";
import ReadMoreButton from "../ReadMoreButton/ReadMoreButton";
import cardImage from "../../assets/logo192.png";


const PlanetCard = (props: Record<string, any>) => {
    const { name, temperature, population } = props;
    return (
        <div className={cx(styles.container)}>
            <div className={cx(styles.cardTop)}>
            <img src={cardImage} alt="card-img" />
            </div>
            <div className={cx(styles.cardBottom)}>
                <h5>{name}</h5>
                <p>{temperature}</p>
                <p>{population}</p>
                <ReadMoreButton cardName={name} category='planetsCategory' />
            </div>
        </div>
    )
}

export default PlanetCard;