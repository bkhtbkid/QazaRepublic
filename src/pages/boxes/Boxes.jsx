import React from "react";
import action from "../../redux/Action";
import Items from "../../components/items/Items";

function Boxes() {
    const items = action();

    return (
        <>
            <section className="boxes">
                <div className="container">
                    <h1 className="boxes__title pages-title">Boxes</h1>
                    <ul className="boxes__list list-boxes">
                        {items !== undefined
                            ? items.map((obj, index) => {
                                  return (
                                      obj.box && <Items obj={obj} key={index} />
                                  );
                              })
                            : ""}
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Boxes;
