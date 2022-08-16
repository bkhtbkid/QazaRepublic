import React from "react";
import action from "../../redux/Action";
import Items from "../../components/items/Items";

function Kids() {
    const items = action();

    return (
        <>
            <section className="kids">
                <div className="container">
                    <h1 className="kids__title pages-title">Дети</h1>
                    <ul className="kids__list list-kids">
                        {items !== undefined
                            ? items.map((obj, index) => {
                                  if (obj.gender) {
                                      const it = obj.gender.filter(
                                          (item) => item === "Дети"
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

export default Kids;
