import React, { Component } from 'react';
import {Table, Button} from 'reactstrap';
class Hops extends Component {

    render() {
        return (
            <Table><tbody>{this.props.hops.map(function (hop, index) {
                return (
                    <tr key={index}>
                        <td>{hop.name}</td>
                        <td>{hop.add}</td>
                        <td>{hop.attribute}</td>
                        <td><Button color="info">{hop.state}</Button></td>
                    </tr>
                )
            })}</tbody></Table>
        )
    }
}

export default Hops;