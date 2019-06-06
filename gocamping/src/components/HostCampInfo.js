import React from 'react';
import { Link } from 'react-router-dom';

import CampImg from '../components/HostLightbox/CampImg';
import AreaConfig from '../components/HostLightbox/AreaConfig';
import AreaImg from '../components/HostLightbox/AreaImg';

const HostCampInfo = props => (
    <main className="col-sm-12 my-2">
        {/* 麵包屑 */}
        <aside className="my-2">
            <ol className="breadcrumb bg-white m-0">
            <li className="breadcrumb-item"><Link to="/host"><i class="fas fa-home"></i></Link></li>
                <li className="breadcrumb-item"><Link to="/host/campsite">營地管理</Link></li>
                <li className="breadcrumb-item">more</li>
            </ol>
        </aside>
        {/* 標題一 */}
        <div className="d-flex">
            <div className="col-sm-11">
                <h3 className="grass fs-20 fw-bold py-3">｜基本資訊</h3>
            </div>
            {/* <div className="col-sm-1 pt-2">
                <Link className="btn btn-outline-grass p-2 transition" to={'./campsiteAdd'} role="button"><i className="fas fa-edit"></i> 修改</Link>
            </div> */}
        </div>
        <div className="d-flex flex-column pl-3">
            <table className="host-table">
                <tbody>
                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">營區名稱</td>
                        <td className="text-left py-2 pl-2" colSpan="3">Hulagarden呼啦莊園</td>
                    </tr>
                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">營區簡介</td>
                        <td className="text-left py-2 pl-2" colSpan="3">我們期許每個人、每個家庭在露營，親近大自然的同時，都是舒適享受的！</td>
                    </tr>
                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">營區照片</td>
                        <td className="text-left py-2 pl-2" colSpan="3">< CampImg /></td>
                    </tr>
                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">營區配置</td>
                        <td className="text-left py-2 pl-2" colSpan="3">< AreaConfig /></td>
                    </tr>
                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">營區代表</td>
                        <td className="text-left py-2 pl-2" colSpan="3">趙淑佳</td>
                    </tr>
                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">營區電話</td>
                        <td className="text-left py-2 pl-2" colSpan="3">037-931928</td>
                    </tr>

                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">營區傳真</td>
                        <td className="text-left py-2 pl-2" colSpan="3">037-931960</td>
                    </tr>
                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">營區信箱</td>
                        <td className="text-left py-2 pl-2" colSpan="3">fungardenhula@gmail.com</td>
                    </tr>
                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">營區地址</td>
                        <td className="text-left py-2 pl-2" colSpan="3">35442 苗栗市獅潭鄉永興村下大窩2-1號</td>
                    </tr>
                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">開放時段</td>
                        <td className="text-left py-2 pl-2" colSpan="3">全年無休</td>
                    </tr>
                    {/* <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">入營時間</td>
                        <td className="text-left py-2 pl-2"></td>
                        <td className="text-center py-2 bg-grass text-white">拔營時間</td>
                        <td className="text-left py-2 pl-2"></td>
                    </tr> */}
                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">營區須知</td>
                        <td className="text-left py-2 pl-2" colSpan="3">【入營與拔營時間】<br />
                            入營時間(CHECK IN)：PM 15：00，拔營時間(CHECK OUT)：11:00以前。但可提前入園遊玩或晚點離園。<br />
                            【更改訂單(餐點加購) / 更改住宿日或取消訂房】<br />
                            ※若需更改訂單一定要來電(信、訊息)至莊園並告知訂單編號與相關需求，由服務人員直接為您做訂單修改、餐點加訂、延期、改期、取消訂房等一應作業流程。<br />
                            ※為確保入住當日有餐點可以食用，請務必提前5日告知喔!<br />
                            ※入住人數若有變動，現場入住時做告知就好，餐點加購與加人等 ，現場同房間尾款現金繳費即可。四人房恕不接受五位大人入住，兩人房恕不接受三位大人入住喔!<br />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        {/* 標題二 */}
        <div className="d-flex">
            <div className="col-sm-11">
                <h3 className="grass fs-20 fw-bold py-3">｜環境資訊</h3>
            </div>
            {/* <div className="col-sm-1 pt-2">
                <Link className="btn btn-outline-grass p-2 transition" to={'./campsiteAdd'} role="button"><i className="fas fa-edit"></i> 修改</Link>
            </div> */}
        </div>
        <div className="d-flex flex-column pl-3">
            <table className="host-table">
                <tbody>
                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">經緯度</td>
                        <td className="text-left py-2 pl-2" colSpan="3">HW6P+FC 獅潭鄉 苗栗縣</td>
                    </tr>
                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">提供設施</td>
                        <td className="text-left py-2 pl-2" colSpan="3">游泳池、玩沙池、兒童球池</td>
                    </tr>
                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">附屬服務</td>
                        <td className="text-left py-2 pl-2" colSpan="3">DIY手做披薩、四季賞花</td>
                    </tr>
                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">適合對象</td>
                        <td className="text-left py-2 pl-2" colSpan="3">親子同樂</td>
                    </tr>
                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">注意事項</td>
                        <td className="text-left py-2 pl-2" colSpan="3">【莊園天氣/溫差】<br />
                            呼啦溫度與天氣請參考天氣預告比較準確，但我們這海拔約180米，溫差會差3度左右，早晨與夜裡風會更大一些，雖然每台露營車內皆備有冷暖氣機，不過還是需要多帶一點厚重的外套避免著涼喔~<br />
                            【營位出租(搭帳篷)】<br />
                            目前僅開放2帳可以搭帳篷(帳篷需自備，暫無帳篷可租借)，營區備有淋浴間/廁所/洗髮精/沐浴乳等設施提供使用，每一營位價格為平日1000元，假日2000元，含4人入住免門票，但不包含早餐。<br />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        {/* 標題三 */}
        <div className="d-flex">
            <div className="col-sm-11">
                <h3 className="grass fs-20 fw-bold py-3">｜區域資訊</h3>
            </div>
            {/* <div className="col-sm-1 pt-2">
                <Link className="btn btn-outline-grass p-2 transition" to={'./campsiteAdd'} role="button"><i className="fas fa-edit"></i> 修改</Link>
            </div>  */}
        </div>
        <div className="d-flex flex-column pl-3">
            <table className="host-table">
                <tbody>
                    <tr className="border">
                        <td className="text-center py-2 bg-white grass" colSpan="4">【區域】</td>
                    </tr>
                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">區域名稱</td>
                        <td className="text-left py-2 pl-2" colSpan="3">露營車區</td>
                    </tr>
                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">區域帳數</td>
                        <td className="text-left py-2 pl-2" colSpan="3">22車</td>
                    </tr>
                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">區域照片</td>
                        <td className="text-left py-2 pl-2" colSpan="3">< AreaImg /></td>
                    </tr>
                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">區域型態</td>
                        <td className="text-left py-2 pl-2" colSpan="3">棧板</td>
                    </tr>
                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">區域尺寸</td>
                        <td className="text-left py-2 pl-2" colSpan="3">每台車不依</td>
                    </tr>
                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">區域價格</td>
                        <td className="text-left py-2 pl-2" colSpan="3">平日：2900元<br/>假日：4800元</td>
                    </tr>
                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">區域特色</td>
                        <td className="text-left py-2 pl-2" colSpan="3">
                            ★ 09號車 為寵物房，但無電視。<br />
                            ★ 17號車為榻榻米地板(附日式軟墊、被單、枕頭)<br />
                            ★ 18號.19號.20號.22號此四台車為雙人房型，恕無法提供加床及寢具。<br />
                            ★ 21號車為日式地板(加人時附被單、枕頭)<br />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p className="col-sm-12 mt-1 mb-3 py-2 gray">備註：為了避免影響顧客權益，營區不提供編輯與刪除之操作，如有需求請洽Go Camping客服</p>
        {/* 按鈕-刪除營區 */}
        {/* <div className="form-group row d-flex justify-content-center">
            <div className="col-sm-5"></div>
            <input className="col-sm-2 my-3 py-2 btn-outline-watermelon" type="button" value="刪除整個營區" />
            <div className="col-sm-5"></div>
        </div> */}
    </main>
)

export default HostCampInfo;