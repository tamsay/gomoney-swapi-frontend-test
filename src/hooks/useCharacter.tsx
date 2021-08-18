// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useEffect } from "react";


export const useCharacter = () => {
    const [character, setCharacter] = useState<Array<any>>([])

    useEffect(() => {
        fetch("https://swapi.dev/api/people/")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setCharacter(data);
            })
    }, []);

    return character;
};
