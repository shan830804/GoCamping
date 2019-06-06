import React from 'react';
import { Link, withRouter } from 'react-router-dom'

class HostCampAddArea extends React.Component {
    constructor() {
        super()
        this.state = {
            // 區域資訊
            // camp_name: '',  // 營區名字
            camp_area: '',
            camp_number: '',
            camp_areapic: '',
            camp_type: 'areaTypeTruf',
            camp_size: '',
            camp_pricew: '',
            camp_priceh: '',
            camp_information: ''
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
        console.log(`現在輸入的名字是：${this.state.camp_area}`)
        console.log(this.state)
        // 在function內就可以直接取用React.createRef()建立的this.filebox來取得對應設定ref的組件
        // console.log(`選擇檔案為：${this.filebox.current.files[0].name}`)
        event.preventDefault()
        // fetch 'http://localhost:8888/host/add'
        fetch('http://localhost:8888/host/campAddArea', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }),
        })
            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    alert('區域新增成功，點擊確定畫面跳轉至營區詳細頁！');
                    window.location.href='./campsiteInfo'
                } else {
                    alert('新增失敗，請再嘗試一次！');
                }
            });
    }

    render() {
        return (
            <div className="container">
                {/* 麵包屑 */}
                <aside className="my-2">
                    <ol className="breadcrumb bg-white m-0">
                    <li className="breadcrumb-item"><Link to="/host"><i class="fas fa-home"></i></Link></li>
                        <li className="breadcrumb-item"><Link to="/host/campsite">營地管理</Link></li>
                        <li className="breadcrumb-item"><Link to="/host/campsiteAddCamp">新增營區</Link></li>
                        <li className="breadcrumb-item">區域管理</li>
                    </ol>
                </aside>
                {/* 幫form表單新增一個onSubmit事件，讓submit的時候執行*/}
                <form onSubmit={this.submitForm}>
                    {/* 標題三 */}
                    <div className="col-sm-12">
                        <h3 className="grass fs-20 fw-bold py-3">｜詳細資訊</h3>
                    </div>
                    {/* 副標題
                    <div className="col-sm-12">
                        <p className="fs-12 fw-bold pl-4">【區域】</p>
                    </div> */}
                    {/* 區域名稱 */}
                    <div className="form-group row d-flex justify-content-center">
                        <label htmlFor="camp_area" className="col-sm-2 col-form-label textext-lg-right text-sm-left fw-bold"><span className="watermelon">* </span>區域名稱</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="camp_area" name="camp_area"
                                placeholder="區域名稱"
                                value={this.state.camp_area}
                                onChange={this.changeState}
                                required
                            />
                        </div>
                    </div>
                    {/* 區域帳數 */}
                    <div className="form-group row d-flex justify-content-center">
                        <label htmlFor="camp_number" className="col-sm-2 col-form-label textext-lg-right text-sm-left fw-bold"><span className="watermelon">* </span>區域帳數</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" id="camp_number" name="camp_number"
                                placeholder="區域可容納之帳數"
                                value={this.state.camp_number}
                                onChange={this.changeState}
                                required
                            />
                        </div>
                    </div>
                    {/* 區域照片 */}
                    <div className="form-group row d-flex justify-content-center">
                        <label htmlFor="camp_areapic" className="col-sm-2 col-form-label textext-lg-right text-sm-left fw-bold">區域照片</label>
                        <div className="col-sm-10">
                            <input type="file" id="camp_areapic" name="camp_areapic"
                                accept="image/*"
                                ref={this.filebox}
                                multiple
                                required
                            />
                        </div>
                    </div>
                    {/* 區域型態 */}
                    <div className="form-group row d-flex justify-content-center">
                        <label htmlFor="camp_type" className="col-sm-2 col-form-label textext-lg-right text-sm-left fw-bold"><span className="watermelon">* </span>區域型態</label>
                        <div className="col-sm-10">
                            <select className="form-control" name="camp_type" id="camp_type"
                                value={this.state.camp_type}
                                onChange={this.changeState}
                            >
                                <option value="areaTypeTruf">草皮</option>
                                <option value="areaTypePallet">棧板</option>
                                <option value="areaTypeRock">碎石</option>
                                <option value="areaTypeCanopy">雨棚</option>
                                <option value="areaTypeSoil">泥土</option>
                                <option value="areaTypeCement">水泥</option>
                                <option value="areaTypeOther">其他（請在區域特色中註明）</option>
                            </select>
                        </div>
                    </div>
                    {/* 區域尺寸 */}
                    <div className="form-group row d-flex justify-content-center">
                        <label htmlFor="camp_size" className="col-sm-2 col-form-label textext-lg-right text-sm-left fw-bold">區域尺寸</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="camp_size" name="camp_size"
                                placeholder="區域尺寸（長 × 寬）"
                                value={this.state.camp_size}
                                onChange={this.changeState}
                            />
                        </div>
                    </div>
                    {/* 區域價格 */}
                    <div className="form-group row d-flex justify-content-center">
                        <label htmlFor="areaPrice" className="col-sm-2 col-form-label textext-lg-right text-sm-left fw-bold"><span className="watermelon">* </span>區域價格</label>
                        <label htmlFor="camp_pricew" className="col-sm-1 col-form-label textext-lg-right text-sm-left fw-bold">平日 $</label>
                        <div className="col-sm-4">
                            <input type="number" className="form-control" id="camp_pricew" name="camp_pricew"
                                placeholder="平日價格（星期一至四）"
                                value={this.state.camp_pricew}
                                onChange={this.changeState}
                                required
                            />
                        </div>
                        <label htmlFor="camp_priceh" className="col-sm-1 col-form-label textext-lg-right text-sm-left fw-bold">假日 $</label>
                        <div className="col-sm-4">
                            <input type="camp_priceh" className="form-control" id="camp_priceh" name="camp_priceh"
                                placeholder="假日價格（星期五至日）"
                                value={this.state.camp_priceh}
                                onChange={this.changeState}
                                required
                            />
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                    {/* 區域特色 */}
                    <div className="form-group row d-flex justify-content-center">
                        <label htmlFor="camp_information" className="col-sm-2 col-form-label textext-lg-right text-sm-left fw-bold">區域特色</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" name="camp_information" id="camp_information" rows="5"
                                placeholder="區域吸引人之處"
                                value={this.state.camp_information}
                                onChange={this.changeState}
                            >
                            </textarea>
                        </div>
                    </div>
                    {/* 提交按鈕 */}
                    <div className="form-group row d-flex justify-content-center">
                        <div className="col-sm-4"></div>
                        <input className="col-sm-4 my-3 py-2 btn-sunshine" type="submit" value="確定新增區域，並結束新增步驟" />
                        <div className="col-sm-4"></div>
                    </div>
                </form>
            </div>
        )
    }
}

// export default HostCampAdd;
export default withRouter(HostCampAddArea)