import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
class Hops extends Component {

    state = {
        hops: this.props.hops ? this.props.hops : [],
        hop: {}
    }

    onStateChange(hop) {
        let middleHopCanChange = true;
        let endHopCanChange = true;
        if (hop.state === 'IDLE') {
            if (hop.add === 'start')
                hop.state = 'DONE';
            else if (hop.add === 'middle') {
                this.state.hops.forEach(function (hop) {
                    if (hop.add === 'start' && hop.state !== 'DONE') {
                        middleHopCanChange = false;
                    }
                });
                if (middleHopCanChange) hop.state = 'DONE';
            }
            else {
                this.state.hops.forEach(hop => {
                    if ((hop.add === 'start' && hop.state !== 'DONE') || (hop.add === 'middle' && hop.state !== 'DONE')) {
                        endHopCanChange = false;
                    }
                    if (endHopCanChange) hop.state = 'DONE'
                });
            }
        }
        else if (hop.state === 'DONE') {
            hop.state = 'IDLE';
        }
        this.setState({ hop: hop })
    }
    
    render() {
        return (
            <Table><tbody>{this.props.hops.map(function (hop, index) {
                return (
                    <tr key={index}>
                        <td>{hop.name}</td>
                        <td>{hop.add}</td>
                        <td>{hop.attribute}</td>
                        <td><Button color="info" onClick={() => this.onStateChange(hop)}>{hop.state}</Button></td>
                    </tr>
                )
            }, this)}</tbody></Table>
        )
    }
}

export default Hops;