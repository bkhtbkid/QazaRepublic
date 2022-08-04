import React from "react";
import action from "../../redux/Action";
import classes from "./cart.module.scss";

function Cart() {
    const items = action().data;

    return (
        <>
            <section className="cart">
                <div className="container">
                    <div className="cart__wrapper">
                        <div className={classes.topCart}>
                            <h2 className="topCart__title">
                                <svg
                                    top="10px"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                                </svg>
                                Корзина
                            </h2>
                            <button className="top-cart__button button">
                                Очистить корзину
                            </button>
                        </div>
                        <div className="cart__content content-cart">
                            {items !== undefined
                                ? items.map((obj, index) => {
                                      const box = obj.category.filter(
                                          (item) => item === "accessories"
                                      );
                                      return (
                                          box.length > 0 && (
                                              <li
                                                  className="list-accessories__item item-list"
                                                  key={index}
                                              >
                                                  <img
                                                      src={obj.imageUrl}
                                                      alt=""
                                                      className="item-list__image item-image"
                                                  />
                                                  <div className="item-list__wrapper">
                                                      <h3 className="item-list__title">
                                                          {obj.title}
                                                      </h3>
                                                      <div className="item-list__price">
                                                          {obj.price} тг.
                                                      </div>
                                                      <button className="item-list__button button">
                                                          Купить
                                                          <svg
                                                              version="1.1"
                                                              id="Capa_1"
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              x="0px"
                                                              y="0px"
                                                              width="50px"
                                                              height="22px"
                                                              viewBox="0 0 611.983 611.983"
                                                              className="buttonIcon"
                                                              style={{
                                                                  position:
                                                                      "absolute",
                                                                  right: "5px",
                                                                  top: "8px",
                                                              }}
                                                              fill="#fff"
                                                          >
                                                              <path
                                                                  d="M423.942,340.085H0v33.805h423.942V340.085z M588.02,282.096L588.02,282.096L424.248,118.902l-23.981,23.896
				l163.755,163.193L400.267,469.185l23.981,23.896l187.735-187.106L588.02,282.096z M423.942,255.106H0v33.804h423.942V255.106z"
                                                              />
                                                          </svg>
                                                      </button>
                                                  </div>
                                              </li>
                                          )
                                      );
                                  })
                                : ""}
                        </div>
                        <div className={classes.cartBot}>
                            <p className="cartBot__text">
                                Общая сумма заказа: <b>7000</b> тг.
                            </p>
                            <button className="cart-bot__button button">
                                Оплатить сейчас.
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cart;
