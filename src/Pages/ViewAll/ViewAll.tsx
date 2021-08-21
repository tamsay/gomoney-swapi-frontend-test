import React, {useContext} from 'react';
import styles from './ViewAllStyles.module.scss';
import cx from 'classnames';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import Spinner from "../../components/Spinner/Spinner";
import StarshipCard from "../../components/StarshipCard/StarshipCard";



import { SwapiContext } from '../../context';

const ViewAll = () => {
    const { characters, planets, starships } = useContext(SwapiContext);
    console.log(characters, planets, starships);

    const search = useLocation().search;

    const searchTerm = queryString.parse(search);
    console.log(searchTerm.category);
    return (
        <div className={cx(styles.sectionWrapper, "flex-col")}>
            {
                    !starships ? <Spinner height="50" type="BallTriangle"/> :
                    (<div className={cx(styles.cardWrapper, "flex-col")}>
                    {starships.results.map((element: any, index:number) => {
                        return (
                            <StarshipCard key={index * 5} name={element.name} model={element.model} cargoCapacity={element.cargo_capacity} />
                        )
                    })}</div>)
                };
        </div>
    )
}

export default ViewAll;