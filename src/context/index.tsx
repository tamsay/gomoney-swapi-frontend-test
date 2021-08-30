/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { createContext, useEffect, useState, ReactNode } from "react";
import axios from "axios";

interface swapiContextInterface {
    starships: Record<string, any> | null;
    characters: Record<string, any> | null;
    planets: Record<string, any> | null;
    charactersCount: Record<string, any> | null;
    planetsCount: Record<string, any> | null;
    starshipsCount: Record<string, any> | null;
    error: any;
  }
  interface Props {
    children: ReactNode;
  }
export const SwapiContext = createContext({} as swapiContextInterface);

const SwapiContextProvider = (props: Props) : JSX.Element=> {

	const [starships, setStarShips] = useState<null | Record<string, any>>(null);
	const [characters, setCharacters] = useState<null | Record<string, any>>(null);
	const [planets, setPlanets] = useState<null | Record<string, any>>(null);

	const [charactersCount, setCharactersCount] = useState<any>(null);
	const [planetsCount, setPlanetsCount] = useState<any>(null);
	const [starshipsCount, setStarShipsCount] = useState<any>(null);
 

	const [error, setError] = useState<any>(null);
    
	const defaultUrl = "https://swapi.dev/api";

	useEffect(() => {
		const swapiData = async () => {
			
			const [starshipsData, charactersData, planetsData] = await Promise.all([
				axios.get(`${defaultUrl}/starships`),
				axios.get(`${defaultUrl}/people`),
				axios.get(`${defaultUrl}/planets`)
			]);
			setStarShips(starshipsData.data);
			setCharacters(charactersData.data);
			setPlanets(planetsData.data);

			setStarShipsCount(starshipsData.data.count);
			setCharactersCount(charactersData.data.count);
			setPlanetsCount(planetsData.data.count);
		};
		try {
			swapiData();
		} catch (err) {
			setError(err.data.message);
		}
	}, []);

	return (
		<SwapiContext.Provider value={{ characters, planets, starships, charactersCount, planetsCount, starshipsCount, error }}>
			{props.children}
		</SwapiContext.Provider>
	);
};
export default SwapiContextProvider;
