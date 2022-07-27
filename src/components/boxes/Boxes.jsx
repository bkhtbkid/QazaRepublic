import React from "react";
import Box from "./Box";

function Boxes() {
    return (
        <>
            <div className="boxes__info info-boxes">
                <h3 className="info-boxes__title">Qr box</h3>
                <h5 className="info-boxes__subtitle">
                    Собери подарок для любимых!
                </h5>
            </div>
            <Box />
            <Box />
            <Box />
        </>
    );
}

export default Boxes;
