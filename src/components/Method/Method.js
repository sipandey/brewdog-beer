import React, { Component } from 'react';

import { Table, Button } from 'reactstrap';

class Method extends Component {

    state = {
        method: null
    }

    componentDidMount() {
        console.log(this.props.method)
    }

    renderObject() {
        return (Object.keys(method).map(function (m, index) {
            if (method[m] instanceof Array) {
                return (method[m].map(function (met, index) {
                    return (
                        <tr key={index}>
                            <td>{m}</td>
                            <td>{met.temp.value}</td>
                            <td>{met.temp.unit}</td>
                            <td>{met.duration}</td>
                            <td><Button color="info" onClick={() => this.onStateChange(met)}>IDLE</Button></td>
                        </tr>
                    )
                }))
            }
            else {
                const meth = method[m];
                if (method[m] != null && typeof (meth) !== 'string') {
                    return (
                        Object.keys(meth).map(function (met, index) {
                            return (
                                <tr key={index}>
                                    <td>{m}</td>
                                    <td>{meth[met].value}</td>
                                    <td colSpan="2">{meth[met].unit}</td>
                                    <td><Button color="info" onClick={() => this.onStateChange(met)}>IDLE</Button></td>
                                </tr>
                            )
                        })

                    )
                }
                else if (typeof (meth) === 'string') {
                    return (
                        <tr key="random">
                            <td>{m}</td>
                            <td colSpan="3">{meth}</td>
                            <td><Button color="info" onClick={() => this.onStateChange()}>IDLE</Button></td>
                        </tr>
                    )
                }

            }
        }))
    }


    render() {
        if (Object.keys(this.props.method).length === 0) {
            return (
                <div></div>
            )
        } else {

            return (
                <Table>
                    <tbody>
                        {this.renderObject()}
                    </tbody>
                </Table>
            )
        }

    }
}

export default Method;