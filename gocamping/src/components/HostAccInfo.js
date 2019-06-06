import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

class HostAccInfo extends Component {
    constructor() {
        super()
        this.state = {
            host_acc: '',
            host_incName: '',
            host_incVat: '',
            host_incTel: '',
            host_incFax: '',
            host_incEmail: '',
            host_incAdd: '',
            host_bankName: '',
            host_bankAcc: ''
        }
    }

    componentDidMount() {
        const token = localStorage.hosttoken
        const decoded = jwt_decode(token)
        this.setState({
            host_acc: decoded.host_acc,
            host_incName: decoded.host_incName,
            host_incVat: decoded.host_incVat,
            host_incTel: decoded.host_incTel,
            host_incFax: decoded.host_incFax,
            host_incEmail: decoded.host_incEmail,
            host_incAdd: decoded.host_incAdd,
            host_bankName: decoded.host_bankName,
            host_bankAcc: decoded.host_bankAcc
        })
    }

    render() {
        return (
            <main className="col-sm-12 my-2">
                {/* 麵包屑 */}
                <aside className="my-2">
                    <ol className="breadcrumb bg-white m-0">
                        <li className="breadcrumb-item"><Link to="/host"><i class="fas fa-home"></i></Link></li>
                        <li className="breadcrumb-item">管理中心</li>
                    </ol>
                </aside>
                {/* 標題 */}
                <div className="d-flex">
                    <div className="col-sm-11">
                        <h3 className="grass fs-20 fw-bold py-3">｜管理中心</h3>
                    </div>
                    <div className="col-sm-1 pt-2">
                        <Link className="btn btn-outline-grass p-2 transition" to={'./accountEdit'} role="button"><i className="fas fa-edit"></i> 修改</Link>
                    </div>
                </div>
                <div className="d-flex flex-column">
                    <table className="host-table">
                        <tbody>
                            <tr className="border">
                                <td className="text-center py-2 bg-grass text-white">帳號</td>
                                <td className="text-left py-2 pl-2" colSpan="3">{this.state.host_acc}</td>
                            </tr>
                            <tr className="border">
                                <td className="text-center py-2 bg-grass text-white">公司名稱</td>
                                <td className="text-left py-2 pl-2" colSpan="3">{this.state.host_incName}</td>
                            </tr>
                            <tr className="border">
                                <td className="text-center py-2 bg-grass text-white">統一編號</td>
                                <td className="text-left py-2 pl-2" colSpan="3">{this.state.host_incVat}</td>
                            </tr>
                            <tr className="border">
                                <td className="text-center py-2 bg-grass text-white">公司電話</td>
                                <td className="text-left py-2 pl-2" colSpan="3">{this.state.host_incTel}</td>
                            </tr>
                            <tr className="border">
                                <td className="text-center py-2 bg-grass text-white">公司傳真</td>
                                <td className="text-left py-2 pl-2" colSpan="3">{this.state.host_incFax}</td>
                            </tr>
                            <tr className="border">
                                <td className="text-center py-2 bg-grass text-white">公司信箱</td>
                                <td className="text-left py-2 pl-2" colSpan="3">{this.state.host_incEmail}</td>
                            </tr>
                            <tr className="border">
                                <td className="text-center py-2 bg-grass text-white">公司地址</td>
                                <td className="text-left py-2 pl-2" colSpan="3">{this.state.host_incAdd}</td>
                            </tr>
                            <tr className="border">
                                <td className="text-center py-2 bg-grass text-white">銀行戶名</td>
                                <td className="text-left py-2 pl-2" colSpan="3">{this.state.host_bankName}</td>
                            </tr>
                            <tr className="border">
                                <td className="text-center py-2 bg-grass text-white">銀行帳號</td>
                                <td className="text-left py-2 pl-2" colSpan="3">{this.state.host_bankAcc}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        )
    }
}

export default HostAccInfo