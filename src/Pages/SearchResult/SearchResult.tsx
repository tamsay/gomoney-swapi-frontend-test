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


const SearchResult = () => {
    const search = useLocation().search;
    const searchTerm = queryString.parse(search);
    const searchTermResult = searchTerm.type;
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


    const getFilteredArray = (arrayData:string[], query:string) => {
        let filtered: any = [];
                arrayData.map((element: any) => {
                    if (element.name && element.name.toLowerCase().includes(query.toLowerCase())) {
                     filtered.push(element);
                    }
                    return true;
                });
        return filtered;
    }
    
    useEffect(() => {

        switch (searchTermResult) {
            case 'characters':
                setShowCharactersDiv(true)
                let filteredCharacters = getFilteredArray(allCharactersArray, searchQuery);
                setAllCharacters(filteredCharacters);
                setCharactersSpinner(false)
                break;
            
            case 'planets':
                setShowPlanetsDiv(true)
                let filteredPlanets = getFilteredArray(allPlanetsArray, searchQuery);
                setAllPlanets(filteredPlanets);
                setPlanetsSpinner(false);
                break;
            
            case 'starships':
                setShowStarshipsDiv(true)
                let filteredStarships = getFilteredArray(allStarshipsArray, searchQuery);
                setAllStarships(filteredStarships);
                setStarshipsSpinner(false);
                break;
        
            default:
                setShowDiv(true)
                setAllCharacters(getFilteredArray(allCharactersArray, searchQuery));
                setAllPlanets(getFilteredArray(allPlanetsArray, searchQuery));
                setAllStarships(getFilteredArray(allStarshipsArray, searchQuery));
                setCharactersSpinner(false)
                setPlanetsSpinner(false);
                setStarshipsSpinner(false);
                break;
        }
    }, [allCharactersArray, allPlanetsArray, allStarshipsArray, searchQuery, searchTermResult])
    
    return (
        <div>
            <Header searchType={searchTermResult} displaySearch />

            {
                showDiv || showCharactersDiv ? 
                    <div className={cx(styles.sectionWrapper, "flex-col")}>
                    <SectionHeader headerText="Search Result: Characters" />
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
                        {
                            planetsSpinner ? <Spinner /> :
                        allPlanets.length === 0 ? "No Match Found!!!" :
                            (<div className={cx(styles.cardWrapper)}>
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

        </div>
    )
}

export default SearchResult;