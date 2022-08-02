import React, { useEffect, useState } from "react";
import axios from "axios";

const Action = () => {
    const [items, setItems] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);

    // Сделать получение данных с сервера

    useEffect(() => {
        axios
            .get("https://62d40ad6cd960e45d4522b59.mockapi.io/QazaqRepublic")
            .then((response) => {
                setItems(response);
                // setIsLoading(true);
            });
    }, []);
    return items;
};

export default Action;