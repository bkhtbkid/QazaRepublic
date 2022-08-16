import React from "react";
import action from "../../redux/Action";
import Items from "../../components/items/Items";

function Accessories() {
    const items = action();

    return (
        <>
            <section className="accessories">
                <div className="container">
                    <h1 className="accessories__title pages-title">
                        Аксессуары
                    </h1>
                    <ul className="accessories__list list-accessories">
                        {items !== undefined
                            ? items.map((obj, index) => {
                                  const box = obj.category.filter(
                                      (item) => item === "accessories"
                                  );
                                  return (
                                      box.length > 0 && (
                                          <Items obj={obj} key={index} />
                                      )
                                  );
                              })
                            : ""}
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Accessories;
