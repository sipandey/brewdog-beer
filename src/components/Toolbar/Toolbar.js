import React from 'react';

import Logo from '../Logo/Logo';
import classes from './Toolbar.css';

const toolbar = () => (
    <header className={classes.Toolbar}>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <h1 className={classes.Title}>Brewdog Beer</h1>
        <nav>
            {/* <NavigationItems /> */}
        </nav>
    </header>
);

export default toolbar;