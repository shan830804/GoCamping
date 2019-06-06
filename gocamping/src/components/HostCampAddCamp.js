import React from 'react';
import { Link, withRouter } from 'react-router-dom'

class HostCampAdd extends React.Component {
    constructor() {
        super()
        this.state = {
            // 營區資訊
            camp_name: '',
            camp_intro: '',
            camp_img: '',
            camp_imgArea: '',
            camp_ownerName: '',
            camp_tel: '',
            camp_fax: '',
            camp_email: '',
            camp_address: '',
            camp_openTime: 'openTimeAll',
            camp_detail: '',
            camp_location: '',
            camp_device: '',
            camp_service: '',
            camp_target: 'targetType1',
            camp_notice: '',
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
        console.log(`現在輸入的名字是：${this.state.camp_name}`)
        console.log(this.state)
        // 在function內就可以直接取用React.createRef()建立的this.filebox來取得對應設定ref的組件
        // console.log(`選擇檔案為：${this.filebox.current.files[0].name}`)
        event.preventDefault()
        // fetch 'http://localhost:8888/host/add'
        fetch('http://localhost:8888/host/campAdd', {
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
                    alert('營區新增成功，點擊確定畫面跳轉至區域管理！');
                    window.location.href='./campsiteAddArea'
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
                        <li className="breadcrumb-item">新增營區</li>
                    </ol>
                </aside>
                {/* 幫form表單新增一個onSubmit事件，讓submit的時候執行*/}
                <form onSubmit={this.submitForm}>
                    {/* 標題一 */}
                    <div className="col-sm-12">
                        <h3 className="grass fs-20 fw-bold py-3">｜基本資訊</h3>
                    </div>
                    {/* 營區名稱 */}
                    <div className="form-group row d-flex justify-content-center">
                        <label htmlFor="camp_name" className="col-sm-2 col-form-label text-lg-right text-sm-left fw-bold"><span className="watermelon">* </span>營區名稱</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="camp_name" name="camp_name"
                                placeholder="營區名稱"
                                value={this.state.camp_name}
                                onChange={this.changeState}
                                required
                            />
                        </div>
                    </div>
                    {/* 營區簡介 */}
                    <div className="form-group row d-flex justify-content-center">
                        <label htmlFor="camp_intro" className="col-sm-2 col-form-label text-lg-right text-sm-left fw-bold">營區簡介</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="camp_intro" name="camp_intro"
                                placeholder="簡述營區的特色（宣傳用）"
                                value={this.state.camp_intro}
                                onChange={this.changeState}
                            />
                        </div>
                    </div>
                    {/* 營區照片 */}
                    <div className="form-group row d-flex justify-content-center">
                        <label htmlFor="camp_img" className="col-sm-2 col-form-label text-lg-right text-sm-left fw-bold"><span className="watermelon">* </span>營區照片</label>
                        <div className="col-sm-10">
                            <input type="file" id="camp_img" name="camp_img"
                                accept="image/*"
                                /*這裡將用React.createRef的filebox指定給該組件的ref屬性
                                讓class內的function可以依照ref取得組件*/
                                ref={this.filebox}
                                multiple
                                required
                            />
                        </div>
                    </div>
                    {/* 營區配置 */}
                    <div className="form-group row d-flex justify-content-center">
                        <label htmlFor="camp_imgArea" className="col-sm-2 col-form-label text-lg-right text-sm-left fw-bold"><span className="watermelon">* </span>營區配置</label>
                        <div className="col-sm-10">
                            <input type="file" id="camp_imgArea" name="camp_imgArea"
                                accept="image/*"
                                ref={this.filebox}
                                required
                            />
                        </div>
                    </div>
                    {/* 營區代表 */}
                    <div className="form-group row d-flex justify-content-center">
                        <label htmlFor="camp_ownerName" className="col-sm-2 col-form-label text-lg-right text-sm-left fw-bold">營區代表</label>
                        <div className="col-sm-10">
                            <input
                                type="tel" className="form-control" id="camp_ownerName" name="camp_ownerName"
                                placeholder="營區代表人姓名"
                                value={this.state.camp_ownerName}
                                onChange={this.changeState}
                            />
                        </div>
                    </div>
                    {/* 營區電話 */}
                    <div className="form-group row d-flex justify-content-center">
                        <label htmlFor="camp_tel" className="col-sm-2 col-form-label text-lg-right text-sm-left fw-bold"><span className="watermelon">* </span>營區電話</label>
                        <div className="col-sm-10">
                            <input
                                type="tel" className="form-control" id="camp_tel" name="camp_tel"
                                placeholder="營區聯絡電話"
                                value={this.state.camp_tel}
                                onChange={this.changeState}
                                required
                            />
                        </div>
                    </div>
                    {/* 營區傳真 */}
                    <div className="form-group row d-flex justify-content-center">
                        <label htmlFor="camp_fax" className="col-sm-2 col-form-label text-lg-right text-sm-left fw-bold">營區傳真</label>
                        <div className="col-sm-10">
                            <input
                                type="tel" className="form-control" id="camp_fax" name="camp_fax"
                                placeholder="營區傳真電話"
                                value={this.state.camp_fax}
                                onChange={this.changeState}
                            />
                        </div>
                    </div>
                    {/* 營區信箱 */}
                    <div className="form-group row d-flex justify-content-center">
                        <label htmlFor="camp_email" className="col-sm-2 col-form-label text-lg-right text-sm-left fw-bold"><span className="watermelon">* </span>營區信箱</label>
                        <div className="col-sm-10">
                            <input
                                type="email" className="form-control" id="camp_email" name="camp_email"
                                placeholder="營區電子信箱"
                                value={this.state.camp_email}
                                onChange={this.changeState}
                                required
                            />
                        </div>
                    </div>
                    {/* 營區地址 */}
                    <div className="form-group row d-flex justify-content-center">
                        <label htmlFor="camp_address" className="col-sm-2 col-form-label text-lg-right text-sm-left fw-bold"><span className="watermelon">* </span>營區地址</label>
                        <div className="col-sm-10">
                            <input
                                type="text" className="form-control" id="camp_address" name="camp_address"
                                placeholder="客戶露營當天前往的地點"
                                value={this.state.camp_address}
                                onChange={this.changeState}
                                required
                            />
                        </div>
                    </div>
                    {/* 開放時間 */}
                    <div className="form-group row d-flex justify-content-center">
                        <label htmlFor="camp_openTime" className="col-sm-2 col-form-label text-lg-right text-sm-left fw-bold"><span className="watermelon">* </span>開放時段</label>
                        <div className="col-sm-10">
                            <select className="form-control" name="camp_openTime" id="camp_openTime"
                                value={this.state.camp_openTime}
                                onChange={this.changeState}
                            >
                                <option value="openTimeAll">全年無休</option>
                                <option value="openTimeHoliday">假日 (六、日，包含國定假日)</option>
                                <option value="openTimeWeekend">假日 (六、日，不包含國定假日)</option>
                                <option value="openTimeOther">其他（請在營區須知中註明）</option>
                            </select>
                        </div>
                    </div>
                    {/* 營區須知 */}
                    <div className="form-group row d-flex justify-content-center">
                        <label htmlFor="camp_detail" className="col-sm-2 col-form-label text-lg-right text-sm-left fw-bold"><span className="watermelon">* </span>營區特色</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" name="camp_detail" id="camp_detail" rows="10"
                                placeholder="營區吸引人之處"
                                value={this.state.camp_detail}
                                onChange={this.changeState}
                                required
                            >
                            </textarea>
                        </div>
                    </div>
                    {/* 標題二 */}
                    <div className="col-sm-12">
                        <h3 className="grass fs-20 fw-bold py-3">｜環境資訊</h3>
                    </div>
                    {/* 營區經緯度 */}
                    <div className="form-group row d-flex justify-content-center">
                        <label htmlFor="camp_location" className="col-sm-2 col-form-label text-lg-right text-sm-left fw-bold">經緯度</label>
                        <div className="col-sm-10">
                            <input
                                type="text" className="form-control" id="camp_location" name="camp_location"
                                placeholder="經緯度，可利用Google地圖查詢"
                                value={this.state.camp_location}
                                onChange={this.changeState}
                            />
                        </div>
                    </div>
                    {/* 提供設施 */}
                    <div className="form-group row d-flex justify-content-center">
                        <label htmlFor="camp_device" className="col-sm-2 col-form-label text-lg-right text-sm-left fw-bold">提供設施</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="camp_device" name="camp_device"
                                placeholder="營區提供的設施，例如：洗衣機、游泳池、溜滑梯、販賣部、烤肉區..."
                                value={this.state.camp_device}
                                onChange={this.changeState}
                            />
                        </div>
                    </div>
                    {/* 附屬服務 */}
                    <div className="form-group row d-flex justify-content-center">
                        <label htmlFor="camp_service" className="col-sm-2 col-form-label text-lg-right text-sm-left fw-bold">附屬服務</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="camp_service" name="camp_service"
                                placeholder="營區提供的服務，例如：DIY活動、周邊賞螢、四季賞花..."
                                value={this.state.camp_service}
                                onChange={this.changeState}
                            />
                        </div>
                    </div>
                    {/* 適合對象 */}
                    <div className="form-group row d-flex justify-content-center">
                        <label htmlFor="camp_targetType" className="col-sm-2 col-form-label text-lg-right text-sm-left fw-bold"><span className="watermelon">* </span>適合對象</label>
                        <div className="col-sm-10">
                            <select className="form-control" name="camp_targetType" id="camp_targetType"
                                value={this.state.parkingType}
                                onChange={this.changeState}
                            >
                                <option value="targetType1">親子同樂</option>
                                <option value="targetType2">溪邊釣魚</option>
                                <option value="targetType3">賞螢賞花</option>
                                <option value="targetType4">森林園區</option>
                                <option value="targetType5">高海拔營區</option>
                            </select>
                        </div>
                    </div>
                    {/* 營區注意事項 */}
                    <div className="form-group row d-flex justify-content-center">
                        <label htmlFor="camp_notice" className="col-sm-2 col-form-label text-lg-right text-sm-left fw-bold">注意事項</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" name="camp_notice" id="camp_notice" rows="10"
                                placeholder="營區注意事項（也請註明入營與拔營時間）"
                                value={this.state.camp_notice}
                                onChange={this.changeState}
                            >
                            </textarea>
                        </div>
                    </div>
                    {/* 提交按鈕 */}
                    <div className="form-group row d-flex justify-content-center">
                        <div className="col-sm-4"></div>
                        <input className="col-sm-4 my-3 py-2 btn-sunshine" type="submit" value="確定新增營區，下一步區域管理" />
                        <div className="col-sm-4"></div>
                    </div>
                </form>
            </div>
        )
    }
}

// export default HostCampAdd;
export default withRouter(HostCampAdd)