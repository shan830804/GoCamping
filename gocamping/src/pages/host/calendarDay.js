import React from 'react';
import '../../components/Default.css';
import '../../components/HostDefault.css'
import HostCalListDay from '../../components/HostCalListDay';

class calendarDay extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div className="container bg-white pb-4">
                < HostCalListDay />
            </div>
        )
    }
}

export default calendarDay;