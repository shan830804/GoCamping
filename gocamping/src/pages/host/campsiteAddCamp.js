import React from 'react';
import '../../components/Default.css';
import '../../components/HostDefault.css'
import HostCampAddCamp from '../../components/HostCampAddCamp';

class campsiteAddCamp extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div className="container bg-white pb-4">
            < HostCampAddCamp />
            </div>
        )
    }
}

export default campsiteAddCamp;