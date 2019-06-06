import React from 'react';
import '../../components/Default.css';
import '../../components/HostDefault.css'
import HostAccEdit from '../../components/HostAccEdit';

class accountEdit extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div className="container bg-white pb-4">
            < HostAccEdit />
            </div>
        )
    }
}

export default accountEdit;