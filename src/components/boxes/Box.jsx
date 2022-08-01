import React from "react";
import { Link } from "react-router-dom";
import items from "../../data.json";

function Box() {
    return (
        <>
            {items.map((value, index) => {
                return (
                    value.box === true && (
                        <Link to={""} className="boxes__link" key={index}>
                            {" "}
                            {/* Сделать линки */}
                            <img src={value.imageUrl} alt="img" />
                        </Link>
                    )
                );
            })}
        </>
    );
}

export default Box;
