import React, { Component } from 'react'
import '../components/Default.css'
import { Link, withRouter } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
// import { listenerCount } from 'cluster';

// form寫法：https://youtu.be/qH4pJISKeoI

class HostAccEdit extends Component {
    constructor() {
        super()
        this.state = {
            host_acc: '',
            host_pwd: '',
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
            host_pwd: decoded.host_pwd,
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

    change = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onSubmit = async event => {
        console.log(this.state.host_acc);
        event.preventDefault();

        const response = await fetch('http://localhost:8888/host/update/' + this.state.host_acc, {
            method: 'post',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
                "host_acc": this.state.host_acc,
                "host_pwd": this.state.host_pwd,
                "host_incName": this.state.host_incName,
                "host_incVat": this.state.host_incVat,
                "host_incTel": this.state.host_incTel,
                "host_incFax": this.state.host_incFax,
                "host_incEmail": this.state.host_incEmail,
                "host_incAdd": this.state.host_incAdd,
                "host_bankName": this.state.host_bankName,
                "host_bankAcc": this.state.host_bankAcc
            })
        });
        if (!response.ok) throw new Error(response.statusText)
        const responseObject = await response.json()
        console.log(responseObject);
        this.setState({
            // "host_acc": this.state.host_acc,
            // "host_pwd": this.state.host_pwd,
            "host_incName": responseObject[0].host_incName,
            "host_incVat": responseObject[0].host_incVat,
            "host_incTel": responseObject[0].host_incTel,
            "host_incFax": responseObject[0].host_incFax,
            "host_incEmail": responseObject[0].host_incEmail,
            "host_incAdd": responseObject[0].host_incAdd,
            "host_bankName": responseObject[0].host_bankName,
            "host_bankAcc": responseObject[0].host_bankAcc
        })
        if (response.status === 200) {
            alert('修改成功，點擊確定畫面即跳轉！');
            this.props.history.push({
                pathname: '/host/account',
            })
        } else {
            alert('修改失敗，請再嘗試一次！');
        }
        // 問題點：前台修改資料成功後，有確實將資料送到資料庫，但是前台要登出之後，才會更新
        // 老師解：上述動作完成後，要把資料丟回到上一層，上層資料才會被更新！
        /*
        login(host).then(res => {
            if (res) {
                this.props.history.push(`/host/account`)
            }
        })
        */
    }

    render() {
        return (
            <div className="container">
                {/* 麵包屑 */}
                <aside className="my-2">
                    <ol className="breadcrumb bg-white m-0">
                        <li className="breadcrumb-item"><Link to="/host"><i class="fas fa-home"></i></Link></li>
                        <li className="breadcrumb-item"><Link to="/host/account">管理中心</Link></li>
                        <li className="breadcrumb-item">資訊編輯</li>
                    </ol>
                </aside>
                <form action="">
                    {/* 標題一 */}
                    <div className="col-sm-12">
                        <h3 className="grass fs-20 fw-bold py-3">｜帳號資訊</h3>
                    </div>
                    {/* 公司帳號 */}
                    <div className="form-group row d-flex justify-content-center">
                        <label htmlFor="host_acc" className="col-sm-2 col-form-label text-lg-right text-sm-left fw-bold">帳號</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="host_acc"
                                name="host_acc"
                                placeholder=""
                                value={this.state.host_acc}
                                disabled
                            />
                            {/* <small id="accountHelp" className="form-text text-muted"></small> */}
                        </div>
                    </div>
                    {/* 公司密碼 */}
                    <div className="form-group row d-flex justify-content-center">
                        <label htmlFor="host_pwd" className="col-sm-2 col-form-label text-lg-right text-sm-left fw-bold">密碼</label>
                        <div className="col-sm-4">
                            <Link className="btn btn-outline-grass px-5 transition" to={'./accountEditPwd'} role="button"><i className="fas fa-edit"></i> 修改密碼</Link>
                        </div>
                        <div className="col-sm-6"></div>
                    </div>
                    {/* 標題二 */}
                    <div className="col-sm-12">
                        <h3 className="grass fs-20 fw-bold py-3 mb-0">｜公司資訊</h3>
                    </div>
                    <div className="col-sm-12">
                        <p className="watermelon fs-18 py-2 pl-3">下方填寫的資訊會關係到發票的寄送，請如實填寫。</p>
                    </div>
                    {/* 公司名稱 */}
                    <div className="form-group row d-flex justify-content-center">
                        <label htmlFor="host_incName" className="col-sm-2 col-form-label text-lg-right text-sm-left fw-bold"><span className="watermelon">* </span>公司名稱</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="host_incName"
                                name="host_incName"
                                placeholder="供開立發票使用"
                                value={this.state.host_incName}
                                onChange={event => this.change(event)}
                                required
                            />
                            {/* <small id="nameHelp" className="form-text text-muted"></small> */}
                        </div>
                    </div>
                    {/* 公司統編 */}
                    <div className="form-group row d-flex justify-content-center">
                        <label htmlFor="host_incVat" className="col-sm-2 col-form-label text-lg-right text-sm-left fw-bold">公司統編</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="host_incVat"
                                name="host_incVat"
                                placeholder="供開立發票使用"
                                value={this.state.host_incVat}
                                onChange={event => this.change(event)}
                            />
                            {/* <small id="vatnumHelp" className="form-text text-muted"></small> */}
                        </div>
                    </div>
                    {/* 公司電話 */}
                    <div className="form-group row d-flex justify-content-center">
                        <label htmlFor="thost_incTelel" className="col-sm-2 col-form-label text-lg-right text-sm-left fw-bold"><span className="watermelon">* </span>公司電話</label>
                        <div className="col-sm-10">
                            <input
                                type="tel"
                                className="form-control"
                                id="host_incTel"
                                name="host_incTel"
                                placeholder="有任何問題將使用此電話與您聯繫"
                                value={this.state.host_incTel}
                                onChange={event => this.change(event)}
                                required
                            />
                            {/* <small id="telHelp" className="form-text text-muted"></small> */}
                        </div>
                    </div>
                    {/* 公司傳真 */}
                    <div className="form-group row d-flex justify-content-center">
                        <label htmlFor="host_incFax" className="col-sm-2 col-form-label text-lg-right text-sm-left fw-bold">公司傳真</label>
                        <div className="col-sm-10">
                            <input
                                type="tel"
                                className="form-control"
                                id="host_incFax"
                                name="host_incFax"
                                placeholder="部分資料可使用傳真方式送"
                                value={this.state.host_incFax}
                                onChange={event => this.change(event)}
                            />
                            {/* <small id="faxHelp" className="form-text text-muted"></small> */}
                        </div>
                    </div>
                    {/* 公司信箱 */}
                    <div className="form-group row d-flex justify-content-center">
                        <label htmlFor="host_incEmail" className="col-sm-2 col-form-label text-lg-right text-sm-left fw-bold"><span className="watermelon">* </span>公司信箱</label>
                        <div className="col-sm-10">
                            <input
                                type="email"
                                className="form-control"
                                id="host_incEmail"
                                name="host_incEmail"
                                placeholder="主要與您的聯繫管道"
                                value={this.state.host_incEmail}
                                onChange={event => this.change(event)}
                                required
                            />
                            {/* <small id="emailHelp" className="form-text text-muted"></small> */}
                        </div>
                    </div>
                    {/* 公司地址 */}
                    <div className="form-group row d-flex justify-content-center">
                        <label htmlFor="host_incAdd" className="col-sm-2 col-form-label text-lg-right text-sm-left fw-bold"><span className="watermelon">* </span>公司地址</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="host_incAdd"
                                name="host_incAdd"
                                placeholder="發票的寄送地址"
                                value={this.state.host_incAdd}
                                onChange={event => this.change(event)}
                                required
                            />
                            {/* <small id="addressHelp" className="form-text text-muted"></small> */}
                        </div>
                    </div>
                    {/* 標題三 */}
                    <div className="col-sm-12">
                        <h3 className="grass fs-20 fw-bold py-3 mb-0">｜收款資訊</h3>
                    </div>
                    <div className="col-sm-12">
                        <p className="watermelon fs-18 py-2 pl-3">貴公司在平台上的收益都會匯入下方提供的帳戶中，每月15日匯款，遇假日順延。</p>
                    </div>
                    {/* 公司銀行戶名 */}
                    <div className="form-group row d-flex justify-content-center">
                        <label htmlFor="host_bankName" className="col-sm-2 col-form-label text-lg-right text-sm-left fw-bold"><span className="watermelon">* </span>銀行戶名</label>
                        <div className="col-sm-10">
                            <input type="text"
                                className="form-control"
                                id="host_bankName"
                                name="host_bankName"
                                placeholder="輸入公司的帳戶名稱"
                                value={this.state.host_bankName}
                                onChange={event => this.change(event)}
                                required
                            />
                            {/* <small id="banknameHelp" className="form-text text-muted"></small> */}
                        </div>
                    </div>
                    {/* 公司銀行帳號 */}
                    <div className="form-group row d-flex justify-content-center">
                        <label htmlFor="host_bankAcc" className="col-sm-2 col-form-label text-lg-right text-sm-left fw-bold"><span className="watermelon">* </span>銀行帳號</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="host_bankAcc"
                                name="host_bankAcc"
                                placeholder="輸入公司的帳戶號碼"
                                value={this.state.host_bankAcc}
                                onChange={event => this.change(event)}
                                required
                            />
                            {/* <small id="bankaccountHelp" className="form-text text-muted"></small> */}
                        </div>
                    </div>
                    {/* 提交按鈕 */}
                    <div className="form-group row d-flex justify-content-center">
                        <div className="col-sm-5"></div>
                        <button className="col-sm-2 my-3 py-2 btn-sunshine" onClick={e => this.onSubmit(e)}>確認修改</button>
                        <div className="col-sm-5"></div>
                    </div>
                </form>
            </div>
        );
    }
}
export default withRouter(HostAccEdit)