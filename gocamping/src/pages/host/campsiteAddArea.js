import React from 'react';
import '../../components/Default.css';
import '../../components/HostDefault.css'
import HostCampAddArea from '../../components/HostCampAddArea';

class campsiteAddArea extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div className="container bg-white pb-4">
            < HostCampAddArea />
            </div>
        )
    }
}

export default campsiteAddArea;