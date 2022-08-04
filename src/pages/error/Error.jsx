import React from "react";

function Error() {
    return (
        <>
            <section className="Error">
                <div className="container">
                    <h1
                        className="Error__title"
                        style={{
                            textAlign: "center",
                            margin: "40px 0",
                            padding: "50px",
                        }}
                    >
                        Ничего не найдено.
                    </h1>
                </div>
            </section>
        </>
    );
}

export default Error;
