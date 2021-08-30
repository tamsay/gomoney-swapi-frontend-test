/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import axios from "axios";

export const useAllPlanets = () : string[]=> {
	const [allPlanets, setAllPlanets] = useState<Array<any>>([]);
  
	useEffect(() => {
		const resultArray: string[] = [];
		const defaultUrl = "https://swapi.dev/api";
		let planetsCounter = 1 ;
		const getAllPlanets = async () => {
			const result = await axios.get(`${defaultUrl}/planets/?page=${planetsCounter}`);
			result.data.results.map((element:any) =>resultArray.push(element));
      
			if (result.data.next === null) {
				resultArray.push(result.data.results);
				setAllPlanets(resultArray);
				return;
			}
			planetsCounter++;
			getAllPlanets();
		};
		getAllPlanets();
	},[]);
    
	return allPlanets;
};
