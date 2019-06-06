import React from 'react';
import '../../components/Default.css';
import '../../components/HostDefault.css'
import HostIncomeDay from '../../components/HostIncomeDay';

class incomeDay extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div className="container bg-white pb-4">
                < HostIncomeDay />
            </div>
        )
    }
}

export default incomeDay;