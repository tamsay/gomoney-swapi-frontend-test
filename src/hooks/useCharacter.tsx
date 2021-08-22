// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useEffect, useContext } from "react";
import {SwapiContext} from "../context/index";

export const useCharacterCount = () => {
    const {characters, planets, starships} = useContext(SwapiContext)
    const [charactersCount, setCharacter] = useState(0)
    const [planetsCount, setPlanets] = useState(0)
    const [starshipsCount, setStarships] = useState(0)

    useEffect(() => {
        setCharacter(characters?.count)
        setPlanets(planets?.count)
        setStarships(starships?.count)
    }, [characters?.count, planets?.count, starships?.count]);
console.log(charactersCount)
    return ({charactersCount, starshipsCount, planetsCount});
};
