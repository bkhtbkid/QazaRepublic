import React from "react";
import { Link } from "react-router-dom";
import action from "../../redux/Action";

function Box() {
    const items = action();
    return (
        <>
            {items.map((value, index) => {
                return (
                    value.box === true && (
                        <Link
                            to={`boxes/${index}`}
                            className="boxes__link"
                            key={index}
                        >
                            <img src={value.imageUrl} alt="img" />
                        </Link>
                    )
                );
            })}
        </>
    );
}

export default Box;
