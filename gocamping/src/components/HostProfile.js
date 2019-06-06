import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            host_incName: '',
            // host_acc: ''
        }
    }

    componentDidMount() {
        const token = localStorage.hosttoken
        const decoded = jwt_decode(token)
        this.setState({
            host_incName: decoded.host_incName,
            // host_acc: decoded.host_acc
        })
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">Welcome Back!</h1>
                    </div>
                    <h4 className="mt-4 mb-0 text-center">{this.state.host_incName}</h4>
                </div>
            </div>
        )
    }
}

export default Profile