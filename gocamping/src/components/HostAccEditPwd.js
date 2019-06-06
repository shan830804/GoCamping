import React from 'react';
import { Link } from 'react-router-dom'

class HostAccEditPwd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pwdOld: '',
            pwdNew: '',
            pwdCheck: '',
        }
        this.changeState = this.changeState.bind(this)
        this.submitForm = this.submitForm.bind(this)
        //使用React.createRef()建立一個物件給filebox
        this.filebox = React.createRef()
    }

    changeState(event) {
        //首先要去抓目前發生改變的組件的name
        let changeName = event.target.name
        //再把他目前的value拿去更改state
        this.setState({ [changeName]: event.target.value })
    }

    //新增一個submit的function
    submitForm(event) {
        console.log(`現在輸入的名字是：${this.state.pwdCheck}`)
        /*在function內就可以直接取用
        React.createRef()建立的this.filebox來取得對應設定ref的組件*/
        // console.log(`選擇檔案為：${this.filebox.current.files[0].name}`)
        event.preventDefault()
    }

    render() {
        return (
            <div className="container">
                {/* 麵包屑 */}
                <aside className="my-2">
                    <ol className="breadcrumb bg-white m-0">
                    <li className="breadcrumb-item"><Link to="/host"><i class="fas fa-home"></i></Link></li>
                        <li className="breadcrumb-item"><Link to="/host/account">管理中心</Link></li>
                        <li className="breadcrumb-item"><Link to="/host/accountEdit">資訊編輯</Link></li>
                        <li className="breadcrumb-item">修改密碼</li>
                    </ol>
                </aside>
                {/* 幫form表單新增一個onSubmit事件，讓submit的時候執行*/}
                <form onSubmit={this.submitForm}>
                    {/* 標題 */}
                    <div className="col-sm-12">
                        <h3 className="grass fs-20 fw-bold py-3">｜修改密碼</h3>
                    </div>
                    {/* 舊密碼 */}
                    <div className="form-group row d-flex justify-content-center">
                        <label htmlFor="pwdOld" className="col-sm-2 col-form-label text-right rwd-text"><span className="watermelon">* </span>舊密碼</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="pwdOld" name="pwdOld"
                                placeholder="請輸入原始密碼"
                                value={this.state.pwdOld}
                                onChange={this.changeState}
                            />
                        </div>
                    </div>
                    {/* 新密碼 */}
                    <div className="form-group row d-flex justify-content-center">
                        <label htmlFor="pwdNew" className="col-sm-2 col-form-label text-right rwd-text"><span className="watermelon">* </span>新密碼</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="pwdNew" name="pwdNew"
                                placeholder="8-12碼，至少包含2個英文與數字"
                                value={this.state.pwdNew}
                                onChange={this.changeState}
                            />
                        </div>
                    </div>
                    {/* 確認密碼 */}
                    <div className="form-group row d-flex justify-content-center">
                        <label htmlFor="pwdCheck" className="col-sm-2 col-form-label text-right rwd-text"><span className="watermelon">* </span>確認密碼</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="pwdCheck" name="pwdCheck"
                                placeholder="請再次輸入新密碼"
                                value={this.state.pwdCheck}
                                onChange={this.changeState}
                            />
                        </div>
                    </div>

                    {/* 提交按鈕 */}
                    <div className="form-group row d-flex justify-content-center">
                        <div className="col-sm-5"></div>
                        <input className="col-sm-2 my-3 py-2 btn-sunshine" type="submit" value="確定修改" />
                        <div className="col-sm-5"></div>
                    </div>
                </form>
            </div>
        )
    }
}

export default HostAccEditPwd;