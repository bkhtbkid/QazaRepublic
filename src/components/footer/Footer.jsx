import React from "react";
import footerLogo from "../../assets/logo/logo.png";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__item item-footer">
                        <div className="item-footer__logo">
                            <a href="">
                                <img src={footerLogo} alt="" />
                            </a>
                        </div>
                        <div className="item-footer__media footer-media">
                            <a href="" className="footer-media__facebook">
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12.001 2.00195C6.47901 2.00195 2.00201 6.47895 2.00201 12.001C2.00201 16.991 5.65801 21.127 10.439 21.88V14.892H7.89901V12.001H10.439V9.79795C10.439 7.28995 11.932 5.90695 14.215 5.90695C15.309 5.90695 16.455 6.10195 16.455 6.10195V8.56095H15.191C13.951 8.56095 13.563 9.33295 13.563 10.124V11.999H16.334L15.891 14.89H13.563V21.878C18.344 21.129 22 16.992 22 12.001C22 6.47895 17.523 2.00195 12.001 2.00195Z"
                                        fill="white"
                                    />
                                </svg>
                            </a>
                            <a href="" className="footer-media__instagram">
                                <svg
                                    version="1.1"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 32 32"
                                    style={{
                                        backgroundColor: "#fff",
                                        borderRadius: "50%",
                                    }}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M21.555,8.593h-11.11c-1.046,0-1.852,0.806-1.852,1.852v11.11c0,1.045,0.806,1.852,1.852,1.852h11.11   c1.045,0,1.852-0.806,1.852-1.852v-11.11C23.407,9.399,22.6,8.593,21.555,8.593z M16.011,13.09c1.643,0,2.974,1.29,2.974,2.882   c0,1.591-1.331,2.882-2.974,2.882c-1.642,0-2.973-1.291-2.973-2.882C13.038,14.38,14.37,13.09,16.011,13.09z M21.555,21.092   c0,0.325-0.139,0.463-0.463,0.463H10.908c-0.324,0-0.463-0.138-0.463-0.463v-6.481l1.154,0.251   c-0.124,0.403-0.191,0.829-0.191,1.271c0,2.462,2.062,4.46,4.603,4.46c2.542,0,4.603-1.997,4.603-4.46   c0-0.442-0.067-0.868-0.191-1.271l1.132-0.251V21.092z M21.555,12.76c0,0.256-0.207,0.463-0.463,0.463H19.24   c-0.256,0-0.463-0.207-0.463-0.463v-1.852c0-0.256,0.207-0.463,0.463-0.463h1.852c0.256,0,0.463,0.207,0.463,0.463V12.76z" />

                                    <path
                                        d="M16,1c8.271,0,15,6.729,15,15s-6.729,15-15,15S1,24.271,1,16S7.729,1,16,1 M16,0         C7.163,0,0,7.164,0,16s7.163,16,16,16s16-7.163,16-16S24.837,0,16,0L16,0z"
                                        fill="none"
                                    />

                                    <path
                                        d="M16,3.007c7.165,0,12.993,5.829,12.993,12.993S23.164,28.994,16,28.994S3.007,23.165,3.007,16       S8.835,3.007,16,3.007 M16,2.507C8.547,2.507,2.507,8.548,2.507,16S8.547,29.494,16,29.494S29.493,23.453,29.493,16       S23.452,2.507,16,2.507L16,2.507z"
                                        fill="none"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="footer__items">
                        <ul className="footer__list list-footer">
                            <li className="list-footer__item">
                                <a href="" className="list-footer__link">
                                    Мужчины
                                </a>
                            </li>
                            <li className="list-footer__item">
                                <a href="" className="list-footer__link">
                                    Женщины
                                </a>
                            </li>
                            <li className="list-footer__item">
                                <a href="" className="list-footer__link">
                                    Дети
                                </a>
                            </li>
                            <li className="list-footer__item">
                                <a href="" className="list-footer__link">
                                    Аксессуары
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__rights">
                © Qazaq Republic 2022. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;
