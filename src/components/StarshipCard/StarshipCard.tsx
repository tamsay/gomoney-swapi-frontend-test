import React from 'react';
import cx from 'classnames';
import styles from "./StarshipCardStyles.module.scss";
import ReadMoreButton from "../ReadMoreButton/ReadMoreButton";
import { Icon } from '@iconify/react';

const StarshipCard = (props: Record<string, any>) => {
    const { name, model, cargoCapacity, url } = props;
    const imageSrc = Math.ceil((Math.random() * 5) + 1);

    return (
        <div className={cx(styles.container)}>
            <div className={cx(styles.cardTop)}>
                <img src={`/starship-${imageSrc}.jpg`} alt="card-img" />
            </div>

            <div className={cx(styles.cardBottom, "flex-col")}>
                <span className={cx(styles.tag, styles["tag-blue"])}>Starship</span>
                
                <div className={cx(styles.labelWrapper)}>
                <Icon rotate={3} icon="fa-solid:space-shuttle" className={cx(styles.icons)}/>
                <small className={cx(styles.label)}>Name</small>
                </div>
                <h5>{name}</h5>
                
                <div className={cx(styles.labelWrapper)}>
            <Icon icon="simple-icons:starship" className={cx(styles.icons)} />
                <small className={cx(styles.label)}>Model</small>
                </div>
                <p>{model}</p>

                <div className={cx(styles.labelWrapper)}>
                <Icon icon="clarity:container-volume-solid" className={cx(styles.icons)} />
                <small className={cx(styles.label)}>Cargo Capacity</small>
                </div>
                <p>{cargoCapacity}</p>
                <ReadMoreButton url={url} category='starships' imageId={imageSrc} />
            </div>
        </div>
    )
}

export default StarshipCard;