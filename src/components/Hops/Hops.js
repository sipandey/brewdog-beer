import React, { Component } from 'react';
import { Table, Button} from 'reactstrap';
class Hops extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hops: this.props.hops,
            hop: {}
        }
    }

    onStateChange(hop) {
        this.setState({ hops: this.props.hops }, function(){
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
                    if (middleHopCanChange) {
                        hop.state = 'DONE';
                    }
                }
                else {
                    this.state.hops.forEach(hop => {
                        if ((hop.add === 'start' && hop.state !== 'DONE') || (hop.add === 'middle' && hop.state !== 'DONE')) {
                            endHopCanChange = false;
                        }
                    });
                    if (endHopCanChange) {
                        hop.state = 'DONE';
                    }
                }
            }
            else if (hop.state === 'DONE') {
                hop.state = 'IDLE';
            }
            if(!middleHopCanChange || !endHopCanChange) {
                alert('Middle cannot be done until all hops with START state are DONE and End cannot be done until all hops with START and MIDDLE state are DONE!')
            }
            this.setState({ hop: hop })
        });
    }

    render() {
        if(this.props.hops.length === 0) {
            return(
                <div></div>
            )
        }
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