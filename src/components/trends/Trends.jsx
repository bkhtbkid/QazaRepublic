import React from "react";
import TrendBlocks from "./TrendBlocks";

const Trends = () => {
    return (
        <>
            <h2 className="trends-block__title">Сейчас в тренде</h2>
            <div className="trends-block__items items-block">
                <TrendBlocks />
            </div>
        </>
    );
};

export default Trends;
