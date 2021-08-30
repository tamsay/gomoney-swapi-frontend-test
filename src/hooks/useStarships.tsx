/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useEffect } from "react";

export const useStarships = () : string[]=> {
	const [starships, setStarships] = useState<Array<any>>([]);

	useEffect(() => {
		fetch("https://swapi.dev/api/starships/")
			.then(response => response.json())
			.then(data => {
				console.log(data);
				setStarships(data);
			});
	}, []);

	return starships;
};
