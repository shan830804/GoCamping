import React from 'react';
import { Image, Button } from 'react-bootstrap'

const MemberInfoEditor = props => (
    <main className="col-sm-10 my-2">
        <form>
            <p className="fw-bold fs-20 grass">編輯個人資料</p>

            <p className="fw-bold fs-18">　帳號資訊</p>
            {/* 帳號名稱 */}
            <div className="form-group row">
                <label htmlFor="account" className="col-sm-2 col-form-label px-0 text-right rwd-text">
                    <span className="asterisk">* </span>帳號名稱
                </label>
                <input type="text" className="form-control-plaintext col-sm-9" name="account" defaultValue="gogolaichoowan" />
            </div>
            {/* 電子信箱 */}
            <div className="form-group row">
                <label htmlFor="email" className="col-sm-2 col-form-label px-0 text-right rwd-text">
                    <span className="asterisk">* </span>Email
                </label>
                <input type="email" className="form-control col-sm-9 mx-3" />
            </div>
            {/* 密碼 */}
            <div className="form-group row">
                <label htmlFor="passowrd" className="col-sm-2 col-form-label px-0 text-right rwd-text">
                    <span className="asterisk">* </span>密碼
                </label>
                <input type="password" className="form-control col-sm-9 mx-3" />
            </div>
            {/* 確認密碼 */}
            <div className="form-group row">
                <label htmlFor="password_check" className="col-sm-2 col-form-label px-0 text-right rwd-text">
                    <span className="asterisk">* </span>確認密碼
                </label>
                <input type="password" className="form-control col-sm-9 mx-3" />
            </div>

            <p className="fw-bold fs-18">　個人資訊</p>
            {/* 大頭貼上傳 */}
            <div className="form-group row">
                <label htmlFor="avatar" className="col-sm-2 col-form-label px-0 text-right rwd-text">大頭貼</label>
                <div className="col-sm-9 d-flex align-items-start">
                    <input type="hidden" className="form-control" name="avatar_pictures" /> 
                    <figure className="avatar m-0">
                        <Image src="../../images/toothless.jpg" />
                    </figure>
                    <div className="mx-2">
                        <Button className="btn btn-outline-grass">
                            <input type="file" name="my_file" style={{display: "none"}} accept="image/*" />
                            <i className="fas fa-camera"></i> 選擇相片
                        </Button>
                        {/* <span className="avatar_upload asterisk d-block">格式不符(副檔名須為.jpg/.png/.jpeg)</span> */}
                    </div>
                </div>
            </div>
            {/* 真實姓名 */}
            <div className="form-group row">
                <label htmlFor="name" className="col-sm-2 col-form-label px-0 text-right rwd-text">
                    <span className="asterisk">* </span>真實姓名
                </label>
                <input type="text" className="form-control col-sm-9 mx-3" />
                {/* <small class="form-text text-muted col-sm-2 p-0">將用於訂購人資料</small> */}
            </div>
            {/* 暱稱 */}
            <div className="form-group row">
                <label htmlFor="nickname" className="col-sm-2 col-form-label px-0 text-right rwd-text">暱稱</label>
                <input type="text" className="form-control col-sm-9 mx-3" />
            </div>
            {/* 性別 */}
            <div className="form-group row">
                <label htmlFor="gender" className="col-sm-2 col-form-label px-0 text-right rwd-text">性別</label>
                <select className="form-control col-sm-3 mx-3">
                    <option>男 Male</option>
                    <option>女 Female</option>
                </select>
            </div>
            {/* 生日 */}
            <div className="form-group row">
                <label htmlFor="birthday" className="col-sm-2 col-form-label px-0 text-right rwd-text">生日</label>
                <input type="date" className="form-control col-sm-3 mx-3" />
            </div>
            {/* 手機 */}
            <div className="form-group row">
                <label htmlFor="mobile" className="col-sm-2 col-form-label px-0 text-right rwd-text">
                    <span className="asterisk">* </span>手機
                </label>
                <input type="tel" className="form-control col-sm-7 mx-3" pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}" />
                <small className="form-text col-sm-2 forest">格式 09XX-XXX-XXX</small>
            </div>
            {/* 地址 */}
            <div className="form-group row">
                <label htmlFor="address" className="col-sm-2 col-form-label px-0 text-right rwd-text">地址</label>
                    <input type="hidden" name="address[]" className="form-control zipcode" placeholder="郵遞區號" size="5" autoComplete="off" readOnly />
                    <select className="form-control ml-sm-3 col-sm-2 county" name="county"></select>
                    <select className="form-control col-sm-2 district" name="district"></select>
                    <input type="text" className="form-control col-sm-5" name="address[]" placeholder="" />
            </div>
            {/* 自我介紹 */}
            <div className="form-group row">
                <label htmlFor="introduction" className="col-sm-2 col-form-label px-0 text-right rwd-text">自我介紹</label>
                <textarea className="form-control col-sm-9 mx-3" rows="2"></textarea>
            </div>

            {/* 儲存 */}
            <div className="form-group row">
                <div className="col-sm-12 d-flex justify-content-center">
                    <button type="submit" className="btn btn-grass">儲存</button>
                </div>
            </div>
        </form>

        <br></br><br></br><br></br>
    </main>
)

export default MemberInfoEditor