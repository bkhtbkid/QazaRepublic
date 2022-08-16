import React from "react";
import { Link } from "react-router-dom";
import action from "../../redux/Action";
import classes from "../scss/components/trend-blocks.module.scss";

function TrendBlocks() {
    const items = action();
    return (
        <>
            {items.map((value, index) => {
                return (
                    value.trends && (
                        <div className={classes.trendBlock} key={index}>
                            <Link to={`trends/${value.id}`}>
                                <img
                                    className={classes.image}
                                    src={value.imageUrl}
                                    alt="img"
                                />
                            </Link>
                        </div>
                    )
                );
            })}
        </>
    );
}

export default TrendBlocks;
