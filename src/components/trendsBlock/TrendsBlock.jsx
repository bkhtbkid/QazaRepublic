import React from "react";
import ItemBlock from "../itemBlock/ItemBlock";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const TrendsBlock = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     axios
    //         .get("https://62d40ad6cd960e45d4522b59.mockapi.io/QazaqRepublic")
    //         .then((response) => {
    //             setItems(response);
    //             setIsLoading(true);
    //         });
    // }, []);
    return (
        <div className="container">
            <h2 className="trends-block__title">Сейчас в тренде</h2>
            <div className="trends-block__items items-block">
                <ItemBlock />
                <ItemBlock />
                <ItemBlock />
                <ItemBlock />
                <ItemBlock />
            </div>
        </div>
    );
};

export default TrendsBlock;
