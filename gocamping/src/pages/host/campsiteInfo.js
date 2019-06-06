import React from 'react';
import '../../components/Default.css';
import '../../components/HostDefault.css'
import HostCampInfo from '../../components/HostCampInfo';

class campsiteInfo extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div className="container bg-white pb-4">
            < HostCampInfo />
            </div>
        )
    }
}

export default campsiteInfo;