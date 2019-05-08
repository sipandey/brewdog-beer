import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';

import classes from './BeerList.css';

class BeerList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            beers: []
        }
    }

    componentDidMount() {
        axios.get(`https://api.punkapi.com/v2/beers`)
            .then(res => {
                const beers = res.data.map(beer => ({ id: beer.id, name: beer.name, description: beer.description, image: beer.image_url, abv: beer.abv }));
                this.setState({ beers });
            });
    }

    render() {
        const beerSelected = (beer) => {
            this.props.beerSelect(beer);
        }
        return (
            <div>
                <div className={classes.BeerList}>
                    <Table hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Image</th>
                                <th>ABV</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.beers.map(function (beer, index) {
                                return (
                                    <tr key={index} onClick={() => beerSelected(beer.id)}>
                                        <th scope="row">{beer.name}</th>
                                        <td>{beer.description}</td>
                                        <td><img className={classes.BeerImage} src={beer.image} alt="BeerImage"></img></td>
                                        <td>{beer.abv}</td>
                                    </tr>
                                )
                            }
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default BeerList;