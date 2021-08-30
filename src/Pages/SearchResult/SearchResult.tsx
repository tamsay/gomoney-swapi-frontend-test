import {useState, useEffect} from 'react';
import styles from './SearchResultStyles.module.scss';
import cx from 'classnames';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useAllCharacters } from '../../hooks/useAllCharacters';
import { useAllPlanets } from '../../hooks/useAllPlanets';
import { useAllStarships } from '../../hooks/useAllStarships';
import Header from '../../components/Header/Header';
import Spinner from '../../components/Spinner/Spinner';
import StarshipCard from "../../components/StarshipCard/StarshipCard";
import PlanetCard from "../../components/PlanetCard/PlanetCard";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Pagination from "../../components/Pagination/Pagination";


const SearchResult = () => {
    const search = useLocation().search;
    const searchTerm = queryString.parse(search);
    const searchTermResult = searchTerm.type as string;
    const searchQuery = searchTerm.searchQuery as string;




    const [allCharacters, setAllCharacters] = useState([])
    const [allPlanets, setAllPlanets] = useState([])
    const [allStarships, setAllStarships] = useState([])
    const allCharactersArray: any = useAllCharacters()
    const allPlanetsArray: any = useAllPlanets()
    const allStarshipsArray: any = useAllStarships()

    const [charactersSpinner, setCharactersSpinner] = useState(true);
    const [planetsSpinner, setPlanetsSpinner] = useState(true);
    const [starshipsSpinner, setStarshipsSpinner] = useState(true);

    const [showCharactersDiv, setShowCharactersDiv] = useState(false);
    const [showPlanetsDiv, setShowPlanetsDiv] = useState(false);
    const [showStarshipsDiv, setShowStarshipsDiv] = useState(false);
    const [showDiv, setShowDiv] = useState(false);
    const [showPagination, setShowPagination] = useState(true);

    const PageSize = 10;
    const query = searchTerm.category as string;
    const [totalCountValue, setTotalCount] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    let localStorageSearch = localStorage.getItem('searchQuery') as string;


    const getFilteredArray = (arrayData:string[], query:string) => {
        let filtered: any = [];
        arrayData.map((element: any) => {
                    
                    // if (element?.name && element?.name.toLowerCase().includes(query.toLowerCase())) {
                    //  filtered.push(element);
                    // }
            // if (element.name === undefined) {
            //     console.log('hey');
            // }
            // else
                if (element.name !== undefined && element.name.toLowerCase().includes(query.toLowerCase())) {
                        filtered.push(element);
                       }
            
                    
                    return true;
                });
        setTotalCount(filtered.length)
        return filtered;
    }
    
    useEffect(() => {

        let search = searchQuery ? searchQuery : localStorageSearch;
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;

        switch (searchTermResult || query ) {
            case 'characters':
                setShowCharactersDiv(true)
                let filteredCharacters = getFilteredArray(allCharactersArray, search);
                setAllCharacters(filteredCharacters.slice(firstPageIndex, lastPageIndex));
                allCharactersArray.length === 0 ? setCharactersSpinner(true) : setCharactersSpinner(false); 
                break;
            
            case 'planets':
                setShowPlanetsDiv(true)
                let filteredPlanets = getFilteredArray(allPlanetsArray, search);
                setAllPlanets(filteredPlanets.slice(firstPageIndex, lastPageIndex));
                allPlanetsArray.length === 0 ? setPlanetsSpinner(true) : setPlanetsSpinner(false);
                break;
            
            case 'starships':
                setShowStarshipsDiv(true)
                let filteredStarships = getFilteredArray(allStarshipsArray, search);
                setAllStarships(filteredStarships.slice(firstPageIndex, lastPageIndex));
                allStarshipsArray.length === 0 ? setStarshipsSpinner(true) : setStarshipsSpinner(false);
                break;
        
            default:
                setShowDiv(true)
                setShowPagination(false)
                setAllCharacters(getFilteredArray(allCharactersArray, search));
                setAllPlanets(getFilteredArray(allPlanetsArray, search));
                setAllStarships(getFilteredArray(allStarshipsArray, search));
                allCharactersArray.length === 0 ? setCharactersSpinner(true) : setCharactersSpinner(false); 
                allPlanetsArray.length === 0 ? setPlanetsSpinner(true) : setPlanetsSpinner(false);
                allStarshipsArray.length === 0 ? setStarshipsSpinner(true) : setStarshipsSpinner(false);
                
                break;
        }
    }, [allCharactersArray, allPlanetsArray, allStarshipsArray, currentPage, localStorageSearch, query, searchQuery, searchTermResult])
    
    return (
        <div className={cx(styles.container, "flex-col")}>
            <Header searchType={searchTermResult || query} displaySearch />

            {
                showDiv || showCharactersDiv ? 
                    <div className={cx(styles.sectionWrapper, "flex-col")}>
                        <SectionHeader headerText="Search Result: Characters" />
                        <span>Search query: {searchQuery || localStorageSearch }</span>
                        {
                        charactersSpinner ? <Spinner /> :
                        allCharacters.length === 0 ? "No Match Found!!!" :
                        (<div className={cx(styles.cardWrapper)}>
                        {allCharacters.map((element: any, index:number) => {
                            return (
                                <CharacterCard key={index * 5} name={element.name} birthYear={element.birth_year} gender={element.gender} url={element.url} />
                            )
                        })}</div>)
                    }
                </div> : ""
            }

            {
                showDiv || showPlanetsDiv ?
                <div className={cx(styles.sectionWrapper, "flex-col")}>
                        <SectionHeader headerText="Search Result: Planets" />
                        <span>Search query: {searchQuery || localStorageSearch}</span>
                        
                        {
                            planetsSpinner ? <Spinner /> :
                        allPlanets.length === 0 ? "No Match Found!!!" :
                            (<div className={cx(styles.cardWrapper, styles.planetWrapper)}>
                                {allPlanets.map((element: any, index: number) => {
                                    return (
                                        <PlanetCard key={index * 5} name={element.name} temperature={element.climate} population={element.population} url={element.url} />
                                    )
                                })}</div>)
                    }
                </div> : ""
            }
            
            {
                showDiv || showStarshipsDiv ?
                <div className={cx(styles.sectionWrapper, "flex-col")}>
                        <SectionHeader headerText="Search Result: Starships" />
                        <span>Search query: {searchQuery || localStorageSearch}</span>
                        
                        {
                            starshipsSpinner ? <Spinner /> :
                        allStarships.length === 0 ? "No Match Found!!!" :
                            (<div className={cx(styles.cardWrapper)}>
                                {allStarships.map((element: any, index: number) => {
                                    return (
                                        <StarshipCard key={index * 5} name={element.name} model={element.model} cargoCapacity={element.cargo_capacity} url={element.url} />
                                    )
                                })}</div>)
                    }
                </div> : ""
            }

{showPagination ? <Pagination
                className={cx(styles["pagination-bar"])}
        currentPage={currentPage}
        totalCount={totalCountValue}
        pageSize={PageSize}
                onPageChange={(page: number) => setCurrentPage(page)}
                category={searchTermResult || query}
      /> : ""}


        </div>
    )
}

export default SearchResult;