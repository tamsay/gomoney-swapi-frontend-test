import React from 'react';
import cx from 'classnames';
import styles from "./StarshipCardStyles.module.scss";
import ReadMoreButton from "../ReadMoreButton/ReadMoreButton";
import cardImage from "../../assets/logo192.png";


const StarshipCard = (props: Record<string, any>) => {
    const { name, model, cargoCapacity } = props;

    return (
        <div className={cx(styles.container)}>
            <div className={cx(styles.cardTop)}>
                <img src={cardImage} alt="card-img" />
            </div>
            <div className={cx(styles.cardBottom, "flex-col")}>
                <h5>{name}</h5>
                <p>{ model}</p>
                <p>{cargoCapacity}</p>
                <ReadMoreButton cardName={name} category='starshipsCategory' />
            </div>
        </div>
    )
}

export default StarshipCard;