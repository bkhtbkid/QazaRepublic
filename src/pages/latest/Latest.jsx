import React from "react";
import action from "../../redux/Action";
import Items from "../../components/items/Items";

function Latest() {
    const items = action();

    return (
        <>
            <section className="latest">
                <div className="container">
                    <h1 className="latest__title pages-title">Новинки</h1>
                    <ul className="latest__list list-latest">
                        {items !== undefined
                            ? items.map((obj, index) => {
                                  return (
                                      obj.latest && (
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

export default Latest;
