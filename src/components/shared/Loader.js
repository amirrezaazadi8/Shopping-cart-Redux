import React from 'react';

import spinner from "../../gif/Spinner-1s-200px.gif";

const Loader = () => {
    return (
        <div style={{ width: "100%", textAlign: "center" }}>
            <img src={spinner} alt="loading" />
            <h2>loading...</h2>
        </div>
    );
};

export default Loader;