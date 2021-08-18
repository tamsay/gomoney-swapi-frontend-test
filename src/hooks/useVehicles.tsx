// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useEffect } from "react";

export const useVehicles = () => {
    const [vehicles, setVehicles] = useState<Array<any>>([])

    useEffect(() => {
        fetch("https://swapi.dev/api/vehicles/")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setVehicles(data);
            })
    }, []);

    return vehicles;
};
