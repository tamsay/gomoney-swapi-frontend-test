import React, {useContext, useState, useEffect, useMemo} from 'react';
import styles from './ViewAllStyles.module.scss';
import cx from 'classnames';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import Spinner from "../../components/Spinner/Spinner";
import StarshipCard from "../../components/StarshipCard/StarshipCard";
import PlanetCard from "../../components/PlanetCard/PlanetCard";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import Pagination from "../../components/Pagination/Pagination";

import { SwapiContext } from '../../context';


const ViewAll = () => {
    const [currentPage, setCurrentPage] = useState(1);
    let PageSize = 10;
    const { characters, planets, starships } = useContext(SwapiContext);

    const [totalCountValue, setTotalCount] = useState(1);
    const [category, setCategory] = useState('');

    const search = useLocation().search;
    const searchTerm = queryString.parse(search);
    const searchTermResult = searchTerm.category;

    useEffect(() => {    
            (async () => {
            if (searchTermResult === 'starships') {
                setCategory(searchTermResult)
                const data = await starships?.count;
                setTotalCount(data)
            }
            if (searchTermResult === 'characters') {
                setCategory(searchTermResult)
                const data = await characters?.count;
                setTotalCount(data)
            }
            if (searchTermResult === 'planets') {
                setCategory(searchTermResult)
                const data = await planets?.count;
                setTotalCount(data)
            }
        })()    
    })
    
    console.log(characters, planets, starships);

    return (
        <div className={cx(styles.sectionWrapper, "flex-col")}>
            {
                    category === 'starships' ? 
                    (<div className={cx(styles.cardWrapper, "flex-col")}>
                    {starships?.results.map((element: any, index:number) => {
                        return (
                            <StarshipCard key={index * 5} name={element.name} model={element.model} cargoCapacity={element.cargo_capacity} />
                        )
                    })}</div>) : ""
            }

{
                    category === 'planets' ? 
                    (<div className={cx(styles.cardWrapper, "flex-col")}>
                    {planets?.results.map((element: any, index:number) => {
                        return (
                            <PlanetCard key={index * 5} name={element.name} temperature={element.climate} population={element.population}/>
                        )
                    })}</div>) : ""
            }
            

            {
                    category === 'characters' ? 
                    (<div className={cx(styles.cardWrapper, "flex-col")}>
                    {characters?.results.map((element: any, index:number) => {
                        return (
                            <CharacterCard key={index * 5} name={element.name} birthYear={element.birth_year} gender={element.gender} />
                        )
                    })}</div>) : ""
                }   
            <Pagination
                className={cx(styles["pagination-bar"])}
        currentPage={currentPage}
        totalCount={totalCountValue}
        pageSize={PageSize}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
        </div>
    )
}

export default ViewAll;