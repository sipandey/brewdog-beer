import React, { Component } from 'react';

import {Switch, Route, withRouter} from 'react-router-dom';
import BeerList from '../BeerList/BeerList';
import BeerDetails from '../BeerDetails/BeerDetails';
import Toolbar from '../../components/Toolbar/Toolbar';

class Main extends Component {

    state = {
        selectedBeerId: null
    }
    
    onBeerSelected = (beerId) => {
        this.setState({ selectedBeerId: beerId });
        this.props.history.push({
            pathname: '/beerdetails'
        })
    }

    render() {
        return (
            <div>
                <Toolbar />
                <Switch>
                    <Route path="/beerdetails" component={ () => <BeerDetails beerId={this.state.selectedBeerId}/>} />
                    <Route exact path="/" component={() => <BeerList beerSelect={this.onBeerSelected} />} />
                </Switch>
            </div>
        );
    }


}

export default withRouter(Main);