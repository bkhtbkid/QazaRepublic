import React from "react";
import action from "../../redux/Action";
import Items from "../../components/items/Items";

function Female() {
    const items = action();

    return (
        <>
            <section className="female">
                <div className="container">
                    <h1 className="female__title pages-title">Женщины</h1>
                    <ul className="female__list list-female">
                        {items !== undefined
                            ? items.map((obj, index) => {
                                  if (obj.gender) {
                                      const it = obj.gender.filter(
                                          (item) => item === "Женщины"
                                      );
                                      return (
                                          it.length > 0 && (
                                              <Items obj={obj} key={index} />
                                          )
                                      );
                                  }
                              })
                            : ""}
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Female;
