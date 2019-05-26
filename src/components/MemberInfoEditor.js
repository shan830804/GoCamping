import React from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import { Image, Button } from 'react-bootstrap';

class MemberInfoEditor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            submitted: false,
            memberData: props.memberData[0],
            password: props.memberData[0].mem_password,
            // avatar: '',
            name: props.memberData[0].mem_name,
            nickname: props.memberData[0].mem_nickname,
            gender: props.memberData[0].mem_gender,
            birthday: props.memberData[0].mem_birthday,
            mobile: props.memberData[0].mem_mobile,
            email: props.memberData[0].mem_email,
            address: props.memberData[0].mem_address,
            introduction: props.memberData[0].mem_intro,
            password_check: '',
        }
    }


    onInputChange = (event) => {
        switch (event.target.name) {
            // case 'avatar':
            case 'password':
            case 'password_check':
            case 'name':
            case 'nickname':
            case 'gender':
            case 'birthday':
            case 'mobile':
            case 'email':
            case 'address':
            case 'introduction':
                this.setState({ [event.target.name]: event.target.value })
                // console.log('修改中- '+`${event.target.name}` + ': ' + `${event.target.value}`)
                break;
            default:
                console.log(`Accept Unhandleable Type[${event.target.type}]`);
        }
    }

    onInfoEditorSubmit = async (event) => {
        event.preventDefault();

        if (this.state.password_check === this.state.password) {
            fetch('http://localhost:5555/members/' + this.state.memberData.id, {
                method: 'PUT',
                headers: new Headers({
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }),
                body: JSON.stringify({
                    "mem_account": this.state.memberData.mem_account,
                    "mem_password": this.state.password,
                    // "mem_avatar": this.state.avatar
                    "mem_name": this.state.name,
                    "mem_nickname": this.state.nickname,
                    "mem_gender": this.state.gender,
                    "mem_birthday": this.state.birthday,
                    "mem_mobile": this.state.mobile,
                    "mem_email": this.state.email,
                    "mem_address": this.state.address,
                    "memLevel_id": this.state.memberData.memLevel_id,
                    "mem_status": this.state.memberData.mem_status,
                    "mem_intro": this.state.introduction,
                    "mem_signUpDate": this.state.memberData.mem_signUpDate
                })
            })

            await localStorage.setItem("mem_id", this.state.memberData.id);
            await localStorage.setItem("mem_account", this.state.memberData.mem_account);
            await localStorage.setItem("mem_password", this.state.password);
            // await localStorage.setItem("mem_avatar", this.state.mem_avatar);
            await localStorage.setItem("mem_name", this.state.name);
            await localStorage.setItem("mem_nickname", this.state.nickname);
            await localStorage.setItem("mem_gender", this.state.gender);
            await localStorage.setItem("mem_birthday", this.state.birthday);
            await localStorage.setItem("mem_mobile", this.state.mobile);
            await localStorage.setItem("mem_email", this.state.email);
            await localStorage.setItem("mem_address", this.state.address);
            await localStorage.setItem("memLevel_id", this.state.memberData.memLevel_id);
            await localStorage.setItem("mem_intro", this.state.introduction);
            alert('已修改完成，將回到會員中心')
            this.setState({ submitted: true })
        } else {
            alert('與上列密碼不符');
        }
    }

    renderEditorForm = () => {
        return (
            <main className="col-sm-10 my-2">
                <form onSubmit={this.onInfoEditorSubmit}>
                    <p>
                        <span className="fw-bold fs-20 grass">編輯個人資料&nbsp;</span>
                        <span className="fs-14 watermelon">*為必填欄位</span>
                    </p>
                    <p className="fw-bold fs-18">　帳號資訊</p>
                    <div className="form-group row">
                        <label htmlFor="account" className="col-sm-2 col-form-label px-0 text-right rwd-text">
                            <span className="asterisk">* </span>帳號名稱
                        </label>
                        <input type="text" className="form-control-plaintext col-sm-9" id="account" name="account" defaultValue={this.state.memberData.mem_account} />
                    </div>
                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label px-0 text-right rwd-text">
                            <span className="asterisk">* </span>Email
                        </label>
                        <input type="email" id="email" name="email" className="form-control col-sm-9 mx-3" defaultValue={this.state.memberData.mem_email} onChange={this.onInputChange} />
                    </div>
                    <div className="form-group row">
                        <label htmlFor="passowrd" className="col-sm-2 col-form-label px-0 text-right rwd-text">
                            <span className="asterisk">* </span>密碼
                        </label>
                        <input type="password" id="password" name="password" className="form-control col-sm-9 mx-3" defaultValue={this.state.memberData.mem_password} onChange={this.onInputChange} />
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password_check" className="col-sm-2 col-form-label px-0 text-right rwd-text">
                            <span className="asterisk">* </span>確認密碼
                        </label>
                        <input type="password" id="password_check" name="password_check" className="form-control col-sm-9 mx-3" onChange={this.onInputChange} />
                    </div>

                    <p className="fw-bold fs-18">　個人資訊</p>
                    <div className="form-group row">
                        <label htmlFor="avatar" className="col-sm-2 col-form-label px-0 text-right rwd-text">大頭貼</label>
                        <div className="col-sm-9 d-flex align-items-start">
                            <input type="hidden" id="avatar_pictures" name="avatar_pictures" className="form-control" />
                            <figure className="avatar m-0">
                                {/* <Image src="../../images/toothless.jpg" /> */}
                                <Image src={"../../" + this.state.memberData.mem_avatar} />
                            </figure>
                            <div className="mx-2">
                                <label className="btn btn-outline-grass">
                                    <input type="file" id="my_file" name="my_file" style={{ display: "none" }} accept="image/*" />
                                    <i className="fas fa-camera"></i> 選擇相片
                                </label>
                                {/* <span className="avatar_upload asterisk d-block">格式不符(副檔名須為.jpg/.png/.jpeg)</span> */}
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-2 col-form-label px-0 text-right rwd-text">
                            <span className="asterisk">* </span>真實姓名
                        </label>
                        <input type="text" id="name" name="name" className="form-control col-sm-9 mx-3" defaultValue={this.state.memberData.mem_name} onChange={this.onInputChange} />
                        {/* <small class="form-text text-muted col-sm-2 p-0">將用於訂購人資料</small> */}
                    </div>
                    <div className="form-group row">
                        <label htmlFor="nickname" className="col-sm-2 col-form-label px-0 text-right rwd-text">暱稱</label>
                        <input type="text" id="nickname" name="nickname" className="form-control col-sm-9 mx-3" defaultValue={this.state.memberData.mem_nickname} onChange={this.onInputChange} />
                    </div>
                    <div className="form-group row">
                        <label htmlFor="gender" className="col-sm-2 col-form-label px-0 text-right rwd-text">性別</label>
                        <select id="gender" name="gender" className="form-control col-sm-3 mx-3" defaultValue={this.state.memberData.gender} onChange={this.onInputChange}>
                            <option value="male">男 Male</option>
                            <option value="female">女 Female</option>
                        </select>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="birthday" className="col-sm-2 col-form-label px-0 text-right rwd-text">生日</label>
                        <input type="date" id="birthday" name="birthday" className="form-control col-sm-3 mx-3" defaultValue={this.state.memberData.mem_birthday} onChange={this.onInputChange} />
                    </div>
                    <div className="form-group row">
                        <label htmlFor="mobile" className="col-sm-2 col-form-label px-0 text-right rwd-text">
                            <span className="asterisk">* </span>手機
                        </label>
                        <input type="tel" id="mobile" name="mobile" className="form-control col-sm-7 mx-3" pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}" defaultValue={this.state.memberData.mem_mobile} onChange={this.onInputChange} />
                        <small className="form-text col-sm-2 forest">格式 09XX-XXX-XXX</small>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="address" className="col-sm-2 col-form-label px-0 text-right rwd-text">地址</label>
                        <input type="hidden" name="address[]" className="form-control zipcode" placeholder="郵遞區號" size="5" autoComplete="off" readOnly />
                        <select name="county" className="form-control ml-sm-3 col-sm-2 county"></select>
                        <select name="district" className="form-control col-sm-2 district"></select>
                        <input type="text" id="address" name="address[]" className="form-control col-sm-5" defaultValue={this.state.memberData.mem_address} onChange={this.onInputChange} />
                    </div>
                    <div className="form-group row">
                        <label htmlFor="introduction" className="col-sm-2 col-form-label px-0 text-right rwd-text">自我介紹</label>
                        <textarea id="introduction" name="introduction" className="form-control col-sm-9 mx-3" rows="2" defaultValue={this.state.memberData.mem_intro} onChange={this.onInputChange}></textarea>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-12 d-flex justify-content-center">
                            <button type="submit" className="btn btn-grass">儲存</button>
                        </div>
                    </div>
                </form>
            </main>
        )
    }

    renderMemberCenter = () => {
        return (
            <>
                <Redirect to="/Member" />
            </>
        )
    }

    render() {
        return (
            <>
                {this.state.submitted ? (this.renderMemberCenter()) : (this.renderEditorForm())}
            </>
        )
    }
}

export default MemberInfoEditor