import React from "react";
import ItemBlock from "../itemBlock/ItemBlock";

const TrendsBlock = (params) => {
    return (
        <>
            <h2 className="trends-block__title">Сейчас в тренде</h2>
            <div className="trends-block__items items-block">
                <ItemBlock items={params} />
            </div>
        </>
    );
};

export default TrendsBlock;
