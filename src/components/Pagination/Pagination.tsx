import React from 'react';
import cx from 'classnames';
// import classnames from 'classnames';
import { usePagination, DOTS } from '../../hooks/usePagination';
import styles from './PaginationStyles.module.scss';
// import './PaginationStyles.scss';

interface paginationInterface {
    onPageChange: any;
    totalCount: number;
    siblingCount?: number;
    currentPage: number;
    pageSize: number;
    className: string;
}
const Pagination = (props: paginationInterface) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
      className,
  } = props;
console.log(totalCount, currentPage, pageSize, siblingCount);
  const paginationRange: any = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });
    console.log(paginationRange, '0000')

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={cx(styles['pagination-container'], styles[className])}
    >
      <li
        className={ currentPage === 1 ? cx(styles.disabled) : cx(styles['pagination-item']) }
        onClick={onPrevious}
      >
              <div className={cx(styles.arrow, styles.left)} />
      </li>
      {paginationRange.map((pageNumber:any) => {
        if (pageNumber === DOTS) {
            return <li className={cx(styles["pagination-item"], styles.dots)}>&#8230;</li>;
        }

        return (
          <li
            className={pageNumber === currentPage ? cx(styles.selected, styles['pagination-item']) : cx(styles['pagination-item'])}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={currentPage === lastPage ? cx(styles.disabled) : cx(styles['pagination-item'])}
        onClick={onNext}
      >
              <div className={cx(styles.arrow, styles.right)} />
      </li>
    </ul>
    
        // <ul
        //   className={classnames('pagination-container', { [className]: className })}
        // >
        //   <li
        //     className={classnames('pagination-item', {
        //       disabled: currentPage === 1
        //     })}
        //     onClick={onPrevious}
        //   >
        //     <div className="arrow left" />
        //   </li>
        //   {paginationRange.map((pageNumber:any) => {
        //     if (pageNumber === DOTS) {
        //       return <li className="pagination-item dots">&#8230;</li>;
        //     }
    
        //     return (
        //       <li
        //         className={classnames('pagination-item', {
        //           selected: pageNumber === currentPage
        //         })}
        //         onClick={() => onPageChange(pageNumber)}
        //       >
        //         {pageNumber}
        //       </li>
        //     );
        //   })}
        //   <li
        //     className={classnames('pagination-item', {
        //       disabled: currentPage === lastPage
        //     })}
        //     onClick={onNext}
        //   >
        //     <div className="arrow right" />
        //   </li>
        // </ul>
    
  );
};

export default Pagination;