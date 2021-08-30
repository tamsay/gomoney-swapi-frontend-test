/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import axios from "axios";

export const useAllStarships = () : string[]=> {
	const [allStarships, setAllStarships] = useState<Array<any>>([]);
  
	useEffect(() => {
		const resultArray: string[] = [];
		const defaultUrl = "https://swapi.dev/api";
		let starshipsCounter = 1 ;
		const getAllStarships = async () => {
			const result = await axios.get(`${defaultUrl}/starships/?page=${starshipsCounter}`);
			result.data.results.map((element:any) =>resultArray.push(element));
      
			if (result.data.next === null) {
				resultArray.push(result.data.results);
				setAllStarships(resultArray);
				return;
			}
			starshipsCounter++;
			getAllStarships();
		};
		getAllStarships();
	},[]);
    
	return allStarships;
};
