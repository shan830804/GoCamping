import React from 'react';
import '../../components/Default.css';
import '../../components/HostDefault.css'
import HostCalDetail from '../../components/HostCalDetail02';

class calendarDetail extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div className="container bg-white pb-4">
                < HostCalDetail />
            </div>
        )
    }
}

export default calendarDetail;