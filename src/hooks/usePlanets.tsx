/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useEffect } from "react";

export const usePlanets = () : string[]=> {
	const [planets, setPlanets] = useState<Array<any>>([]);

	useEffect(() => {
		fetch("https://swapi.dev/api/planets/")
			.then(response => response.json())
			.then(data => {
				console.log(data);
				setPlanets(data);
			});
	}, []);

	return planets;
};