/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import cx from "classnames";
import {useHistory, useLocation} from "react-router-dom";
import { usePagination, DOTS } from "../../hooks/usePagination";
import styles from "./PaginationStyles.module.scss";

interface paginationInterface {
    onPageChange: any;
    totalCount: number;
    siblingCount?: number;
    currentPage: number;
    pageSize: number;
    className: string;
    category: string;
}
const Pagination = (props: paginationInterface) : JSX.Element => {
	const history = useHistory();
	const location = useLocation();

	const {
		onPageChange,
		totalCount,
		siblingCount = 1,
		currentPage,
		pageSize,
		className,
		category
	} = props;

	const paginationRange: any = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize
	});

	if (currentPage === 0 || paginationRange.length < 2) {
		return null as any;
	}

	const onNext = () => {
		onPageChange(currentPage + 1);
		history.push(`${location.pathname}?category=${category}&page=${currentPage + 1}`);
	};

	const onPrevious = () => {
		onPageChange(currentPage - 1);
		history.push(`${location.pathname}?category=${category}&page=${currentPage - 1}`);
      
	};

	const lastPage = paginationRange[paginationRange.length - 1];
	return (
		<ul
			className={cx(styles["pagination-container"], styles[className])}
		>
			<li
				className={ currentPage === 1 ? cx(styles.disabled) : cx(styles["pagination-item"]) }
				onClick={onPrevious}
			>
				<div className={cx(styles.arrow, styles.left)} />
			</li>
			{paginationRange.map((pageNumber:any, index:number) => {
				if (pageNumber === DOTS) {
					return <li key={index*5} className={cx(styles["pagination-item"], styles.dots)}>&#8230;</li>;
				}

				return (
					<li key={index*2}
						className={pageNumber === currentPage ? cx(styles.selected, styles["pagination-item"]) : cx(styles["pagination-item"])}
						onClick={() => { onPageChange(pageNumber); history.push(`${location.pathname}?category=${category}&page=${pageNumber}`); }}
					>
						{pageNumber}
					</li>
				);
			})}
			<li
				className={currentPage === lastPage ? cx(styles.disabled) : cx(styles["pagination-item"])}
				onClick={onNext}
			>
				<div className={cx(styles.arrow, styles.right)} />
			</li>
		</ul>

	);
};

export default Pagination;