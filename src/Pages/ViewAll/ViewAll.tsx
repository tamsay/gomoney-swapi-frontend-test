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
import axios from "axios";

import { SwapiContext } from '../../context';

const ViewAll = () => {
    const [currentPage, setCurrentPage] = useState(1);
    let PageSize = 10;
    const { characters, planets, starships, charactersCount,  planetsCount, starshipsCount} = useContext(SwapiContext);
    console.log(characters, planets, starships)

    const [starshipsData, setStarships] = useState(starships)
    const [planetsData, setPlanets] = useState(planets)
    const [charactersData, setCharacters] = useState(characters)
    const [totalCountValue, setTotalCount] = useState(1);
    const [category, setCategory] = useState('');

    const search = useLocation().search;
    const searchTerm = queryString.parse(search);

    const searchTermResult = searchTerm.category;

    useEffect(() => {
              
            if (searchTermResult === 'starships') {
                setCategory(searchTermResult);
                setTotalCount(starshipsCount as any);
                setStarships(starships)
            }
            else if (searchTermResult === 'characters') {
                setCategory(searchTermResult);
                setTotalCount(charactersCount as any);
                setCharacters(starships)

            }
            else if (searchTermResult === 'planets') {
                setCategory(searchTermResult);
                setTotalCount(planetsCount as any);
                setPlanets(starships)

            }
         
    }, [charactersCount, planetsCount, searchTerm.category, searchTermResult, starships, starshipsCount])

    useEffect(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;

        if (searchTermResult === 'starships') {
            fetch(`https://swapi.dev/api/${searchTermResult}/?page=${currentPage}`)
                .then(resp => resp.json())
                .then(data => {
                setStarships(data)
            })
        }
        else if (searchTermResult === 'characters') {
            fetch(`https://swapi.dev/api/people/?page=${currentPage}`)
                .then(resp => resp.json())
                .then(data => {
                setCharacters(data)
            })
        }
        else if (searchTermResult === 'planets') {
            fetch(`https://swapi.dev/api/${searchTermResult}/?page=${currentPage}`)
                .then(resp => resp.json())
                .then(data => {
                setPlanets(data)
            })
        }
    }, [PageSize, charactersCount, currentPage, planetsCount, searchTermResult])


    
    return (
        <div className={cx(styles.sectionWrapper, "flex-col")}>
            {
                    category === 'starships' ? 
                    (<div className={cx(styles.cardWrapper, "flex-col")}>
                    {starshipsData?.results.map((element: any, index:number) => {
                        return (
                            <StarshipCard key={index * 5} name={element.name} model={element.model} cargoCapacity={element.cargo_capacity} />
                        )
                    })}</div>) : ""
            }

{
                    category === 'planets' ? 
                    (<div className={cx(styles.cardWrapper, "flex-col")}>
                    {planetsData?.results.map((element: any, index:number) => {
                        return (
                            <PlanetCard key={index * 5} name={element.name} temperature={element.climate} population={element.population}/>
                        )
                    })}</div>) : ""
            }
            

            {
                    category === 'characters' ? 
                    (<div className={cx(styles.cardWrapper, "flex-col")}>
                    {charactersData?.results.map((element: any, index:number) => {
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