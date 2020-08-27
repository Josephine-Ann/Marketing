import React from 'react';

const FeaturePage = ({ price, name, description }) => (
    <article>
        <a href="#" className="image"><img src="images/pic04.jpg" alt="" /></a>
        <h3 className="major">{name ? name : "Sed feugiat lorem"}</h3>
        <p>{description ? description : "Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices."}</p>
        <p>{price ? price : "$4.00"}</p>
        <a href="#" className="special">Learn more</a>
    </article>
);

export default FeaturePage;


