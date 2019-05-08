import React from 'react';

import beerLogo from '../../assets//images/images.png';

import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={beerLogo} alt="BeerLogo"/>
    </div>
);

export default logo;