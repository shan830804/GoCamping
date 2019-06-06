import React from 'react';
import '../../components/Default.css';
import '../../components/HostDefault.css'
import HostCalListMth from '../../components/HostCalListMth';
import HostCalendar from '../../components/HostCalendar';

class calendar extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        // 與大家合併時用
        console.log(this.props.host)
        if (this.props.host) {
            return (
                <div className="container bg-white pb-4">
                    < HostCalListMth />
                    < HostCalendar />
                </div>
            )
        } else {
            return ('error')
        }
        /*
        // 沒與大家合併時用
        return (
            <div className="container bg-white pb-4">
                < HostCalListMth />
                < HostCalendar />
            </div>
        )
        */
    }
}

export default calendar;