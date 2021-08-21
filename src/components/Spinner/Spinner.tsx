/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import styles from './Spinner.module.scss';
import cx from "classnames";

// Spinner types
// "Audio" | "BallTriangle" | "Bars" | "Circles" | "Grid" | "Hearts" | "Oval" | "Puff" | "Rings" | "TailSpin" | "ThreeDots" | "Watch" | "RevolvingDot" | "Triangle" | "Plane" | "MutatingDots" | "CradleLoader"


const Spinner = (props: any): JSX.Element => {
  const { type, color, height, width } = props;
  return (
    <div className={cx(styles['spinner-div'], 'flex-col')}>
      <Loader type={type} color={color || '#00BFFF'} height={height} width={width} />
      <p className={cx(styles['spinner-text'])}>... Please Wait ...</p>
    </div>
  );
};

export default Spinner;
