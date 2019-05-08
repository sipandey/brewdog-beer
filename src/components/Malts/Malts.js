import React, {Component} from 'react';

import {Table, Button} from 'reactstrap';

class Malts extends Component {

    state = {
        malts: this.props.malts,
        malt: {}
    }
    
    onStateChange(malt) {
        if(malt.state === 'IDLE') malt.state = 'DONE';
        else if(malt.state === 'DONE') malt.state = 'IDLE';
        this.setState({malt: malt})
    }

    render() {
        return(
            <Table><tbody>{this.props.malts.map(function(malt, index){
                return(
                    <tr key={index}>
                        <td>{malt.name}</td>
                        <td>{malt.amount.value}</td>
                        <td>{malt.amount.unit}</td>
                        <td><Button color="info" onClick={() => this.onStateChange(malt)}>{malt.state}</Button></td>
                    </tr>
                )
            }, this)}</tbody></Table>
        )
    }
}

export default Malts;