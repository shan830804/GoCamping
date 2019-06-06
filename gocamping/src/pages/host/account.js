import React from 'react';
import '../../components/Default.css';
import '../../components/HostDefault.css'
// import './hostBg.css'

import HostAccInfo from '../../components/HostAccInfo';

// import Background from '../host/hostImg/indexPic.jpg';
// var sectionStyle = {
//     margin: '0px',
//     padding: '0px',
//     background: 'linear-gradient(rgba(255, 255, 255, .3), rgba(255, 255, 255, .3)), center center fixed no-repeat',
//     backgroundImage: `url(${Background})`,
//     backgroundSize: 'cover'
// }

class account extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <body className="host">
                <div className="container bg-white pb-4">
                    < HostAccInfo />
                </div>
            </body>
        )
    }
}

export default account;