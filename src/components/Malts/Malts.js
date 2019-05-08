import React, {Component} from 'react';

import {Table, Button} from 'reactstrap';

class Malts extends Component {
    render() {
        return(
            <Table><tbody>{this.props.malts.map(function(malt, index){
                return(
                    <tr key={index}>
                        <td>{malt.name}</td>
                        <td>{malt.amount.value}</td>
                        <td>{malt.amount.unit}</td>
                        <td><Button color="info">{malt.state}</Button></td>
                    </tr>
                )
            })}</tbody></Table>
        )
    }
}

export default Malts;