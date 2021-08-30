/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import cx from "classnames";
import styles from "./CharacterCardStyles.module.scss";
import ReadMoreButton from "../ReadMoreButton/ReadMoreButton";
import { Icon } from "@iconify/react";

const CharacterCard = (props: Record<string, any>) : JSX.Element=> {
	const { name, birthYear, gender, url } = props;
	const imageSrc = Math.ceil((Math.random() * 4) + 0);
	return (
		<div className={cx(styles.container)}>
			<div className={cx(styles.cardTop)}>
				<img src={`/character-${imageSrc}.jpg`} alt="card-img" />
			</div>

			<div className={cx(styles.cardBottom, "flex-col")}>
				<span className={cx(styles.tag, styles["tag-pink"])}>Characters</span>

				<div className={cx(styles.labelWrapper)}>
					<Icon icon="bi:person-circle" className={cx(styles.icons)} />
					<small className={cx(styles.label)}>Name</small>
				</div>
				<h5>{name}</h5>

				<div className={cx(styles.labelWrapper)}>
					<Icon icon="iwwa:year" className={cx(styles.icons)} />
					<small className={cx(styles.label)}>Birth Year</small>
				</div>
				<p>{birthYear}</p>

				<div className={cx(styles.labelWrapper)}>
					<Icon icon="map:unisex" className={cx(styles.icons)} />
					<small className={cx(styles.label)}>Gender</small>
				</div>
				<p className={cx(styles.gender)}>{gender.toLowerCase() === "n/a" ? "Robot" : gender}</p>
				<ReadMoreButton url={url} category='people'imageId={imageSrc} />
			</div>
		</div>
	);
};

export default CharacterCard;