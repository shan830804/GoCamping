import React from 'react';
import '../../components/Default.css';
import '../../components/HostDefault.css'
import HostAccEditPwd from '../../components/HostAccEditPwd';

class accountEditPwd extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div className="container bg-white pb-4">
            < HostAccEditPwd />
            </div>
        )
    }
}

export default accountEditPwd;