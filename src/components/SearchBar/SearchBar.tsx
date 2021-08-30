/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useState} from "react";
import styles from "./SearchBarStyles.module.scss";
import cx from "classnames";
import { Icon } from "@iconify/react";
import { useHistory } from "react-router-dom";

const SearchBar = (props: Record<string, any>) :JSX.Element => {
	const {type} = props;
	const history = useHistory();

	const [searchQuery, setSearchQuery] = useState("");

	const handleSearch = () => {
		if (searchQuery !== "") {
			localStorage.setItem("searchQuery", searchQuery);
			history.push(`/search/?type=${type}&searchQuery=${searchQuery}`);
		}
		else {
			alert("Enter a search item");
		}
	};
	const handleKeyDown = (event: { key: string; }) => {
		if (event.key === "Enter" && searchQuery !== "") {
			localStorage.setItem("searchQuery", searchQuery);
			history.push(`/search/?type=${type}&searchQuery=${searchQuery}`);
		}
		else if (event.key === "Enter") {
			alert("Enter a search item");
		}
	};

	return (
		<div className={cx(styles.container, "flex-row")}>
			<div className={cx(styles["search-input-wrapper"], "flex-row")}>
				<Icon onClick={() =>handleSearch()} icon="bx:bx-search" color="#000" className={cx(styles.icon)}/>
				<input placeholder="Enter search here ..."
					onChange = {(e)=>setSearchQuery(e.target.value)} className={styles.searchInput} type="search" name="search" id="search" onKeyDown={handleKeyDown} />
			</div>
		</div>
	);
};

export default SearchBar;