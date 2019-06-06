import React from 'react';
import '../../components/Default.css';
import '../../components/HostDefault.css'
import HostCampList from '../../components/HostCampList';

class campsite extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div className="container bg-white pb-4">
            < HostCampList />
            </div>
        )
    }
}

export default campsite;