import React, { Component } from 'react';

import axios from 'axios';
import { Container, Row, Col} from 'reactstrap';
import Hops from '../../components/Hops/Hops';
import Malts from '../../components/Malts/Malts';
import classes from './BeerDetails.css';

class BeerDetails extends Component {

    constructor(props) {
        super(props);
        const beerId = this.props.beerId ? this.props.beerId : 1;
        this.state = {
            beerId: beerId,
            beerDetails: {},
            hops: [],
            malts: [],
            method: {}
        }
    }

    componentDidMount() {
        axios.get(`https://api.punkapi.com/v2/beers/` + this.state.beerId)
            .then(res => {
                const beerDetails = res.data.map((beerDetails) => {
                    return beerDetails;
                })
                beerDetails[0].ingredients.hops.forEach(function (hop) {
                    hop.state = 'IDLE';
                });
                beerDetails[0].ingredients.malt.forEach(function (malt) {
                    malt.state = 'IDLE';
                })
                this.setState({
                    beerDetails: beerDetails[0],
                    hops: beerDetails[0].ingredients.hops,
                    malts: beerDetails[0].ingredients.malt,
                    method: beerDetails[0].method
                });
                console.log(beerDetails[0])
            });
    }

    render() {
        return (
            <div className={classes.BeerDetails}>
                <Container>
                    <Row>
                        <Col md="3">Id</Col>
                        <Col>{this.state.beerDetails.id}</Col>
                    </Row>
                    <Row>
                        <Col md="3">Image</Col>
                        <Col><img className={classes.BeerImage} src={this.state.beerDetails.image_url} alt="beerimage" /></Col>
                    </Row>
                    <Row>
                        <Col md="3">Name</Col>
                        <Col>{this.state.beerDetails.name}</Col>
                    </Row>
                    <Row>
                        <Col md="3">ABV</Col>
                        <Col>{this.state.beerDetails.abv}</Col>
                    </Row>
                    <Row>
                        <Col md="3">Description</Col>
                        <Col>{this.state.beerDetails.description}</Col>
                    </Row>
                    <Row>
                        <Col md="3">Hops</Col>
                        <Col>
                            <Hops hops={this.state.hops} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="3">Malts</Col>
                        <Col>
                            <Malts malts={this.state.malts} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default BeerDetails;