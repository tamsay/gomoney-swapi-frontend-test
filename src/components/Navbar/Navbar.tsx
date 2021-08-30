import React from "react";
import styles from "./NavbarStyles.module.scss";
import cx from "classnames";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";


const Navbar = () : JSX.Element=> {
	return (
		<div className={styles.container}>
			<div className={styles["logo-div"]}>
				<a href="/">
					<img className={styles.logo} src={Logo} alt="logo" />
				</a>
                
			</div>
			<div className={cx(styles.navLinks)}>
				<Link to={"/"}>Home</Link>
				<Link to={"/view-all/?category=characters&page=1"}>Characters</Link>
				<Link to={"/view-all/?category=planets&page=1"}>Planets</Link>
				<Link to={"/view-all/?category=starships&page=1"}>Starships</Link>
			</div>

		</div>
	);
};

export default Navbar;