import React from 'react';
import { Link } from 'react-router-dom'

const HostCalDetail = props => (
    <main className="col-sm-12 my-2">
        {/* 麵包屑 */}
        <aside className="my-2">
            <ol className="breadcrumb bg-white m-0">
            <li className="breadcrumb-item"><Link to="/host"><i class="fas fa-home"></i></Link></li>
                <li className="breadcrumb-item"><Link to="/host/calendar">日曆管理</Link></li>
                <li className="breadcrumb-item"><Link to="/host/calendarDay">日期詳細</Link></li>
                <li className="breadcrumb-item">more</li>
            </ol>
        </aside>
        {/* 標題一 */}
        <div className="d-flex">
            <div className="col-sm-11">
                <h3 className="grass fs-20 fw-bold py-3">｜訂購資訊</h3>
            </div>
        </div>
        <div className="d-flex flex-column pl-3">
            <table className="host-table">
                <tbody>
                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">訂單編號</td>
                        <td className="text-left py-2 pl-2" colSpan="3">20190522001001</td>
                    </tr>
                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">訂購日期</td>
                        <td className="text-left py-2 pl-2" colSpan="3">2019-05-22</td>
                    </tr>
                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">入住日期</td>
                        <td className="text-left py-2 pl-2" colSpan="3">2019-06-01～2019-06-05</td>
                    </tr>
                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">訂購姓名</td>
                        <td className="text-left py-2 pl-2" colSpan="3">林宛臻</td>
                    </tr>
                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">訂購電話</td>
                        <td className="text-left py-2 pl-2" colSpan="3">0961-953-486</td>
                    </tr>
                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">訂購信箱</td>
                        <td className="text-left py-2 pl-2" colSpan="3">linwanchen0604@gmail.com</td>
                    </tr>
                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">代表姓名</td>
                        <td className="text-left py-2 pl-2" colSpan="3">林小杵</td>
                    </tr>
                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">代表電話</td>
                        <td className="text-left py-2 pl-2" colSpan="3">0934-273-896</td>
                    </tr>
                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">代表信箱</td>
                        <td className="text-left py-2 pl-2" colSpan="3">ktrue_2121@yahoo.com.tw</td>
                    </tr>
                </tbody>
            </table>
        </div>
        {/* 標題二 */}
        <div className="d-flex">
            <div className="col-sm-11">
                <h3 className="grass fs-20 fw-bold py-3">｜訂購明細</h3>
            </div>
        </div>
        <div className="d-flex flex-column pl-3">
            <table className="host-table">
                <tbody>
                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">區域</td>
                        <td className="text-left py-2 pl-2">露營車區_平日</td>
                        <td className="text-center py-2 bg-grass text-white">數量</td>
                        <td className="text-left py-2 pl-2">2 天 / 3 帳</td>
                        <td className="text-center py-2 bg-grass text-white">單價</td>
                        <td className="text-left py-2 pl-2">NT$ 2,900</td>
                        <td className="text-center py-2 bg-grass text-white">小計</td>
                        <td className="text-left py-2 pl-2">NT$ 17,400</td>
                    </tr>
                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">區域</td>
                        <td className="text-left py-2 pl-2">露營車區_假日</td>
                        <td className="text-center py-2 bg-grass text-white">數量</td>
                        <td className="text-left py-2 pl-2">2 天 / 3 帳</td>
                        <td className="text-center py-2 bg-grass text-white">單價</td>
                        <td className="text-left py-2 pl-2">NT$ 4,800</td>
                        <td className="text-center py-2 bg-grass text-white">小計</td>
                        <td className="text-left py-2 pl-2">NT$ 28,800</td>
                    </tr>
                    {/* <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">區域</td>
                        <td className="text-left py-2 pl-2"></td>
                        <td className="text-center py-2 bg-grass text-white">數量</td>
                        <td className="text-left py-2 pl-2">帳</td>
                        <td className="text-center py-2 bg-grass text-white">單價</td>
                        <td className="text-left py-2 pl-2">NT$ </td>
                        <td className="text-center py-2 bg-grass text-white">小計</td>
                        <td className="text-left py-2 pl-2">NT$ </td>
                    </tr> */}
                    <tr className="border">
                        <td className="text-right py-2 pr-2" colSpan="7">金額總計</td>
                        <td className="border text-left py-2 pl-2 watermelon">NT$ 46,200</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
)

export default HostCalDetail;