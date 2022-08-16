import React from "react";
import action from "../../redux/Action";
import Items from "../../components/items/Items";

function Male() {
    const items = action();

    return (
        <>
            <section className="male">
                <div className="container">
                    <h1 className="male__title pages-title">Мужчины</h1>
                    <ul className="male__list list-male">
                        {items !== undefined
                            ? items.map((obj, index) => {
                                  if (obj.gender) {
                                      const it = obj.gender.filter(
                                          (item) => item === "Мужчины"
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

export default Male;
