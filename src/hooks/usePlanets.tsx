import React, { useState, useEffect } from "react";


export const usePlanets = () => {
    const [planets, setPlanets] = useState<Array<any>>([])

    useEffect(() => {
        fetch("https://swapi.dev/api/planets/")
            .then(response => response.json())
            .then(data => {
                console.log(data.results);
                setPlanets(data.results);
            })
    }, []);

    return planets;
};