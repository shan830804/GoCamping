import React from 'react';
import { Link } from 'react-router-dom';

const HostIncomeDay = props => (
    <main className="col-sm-12 my-2">
        {/* 麵包屑 */}
        <aside className="my-2">
            <ol className="breadcrumb bg-white m-0">
            <li className="breadcrumb-item"><Link to="/host"><i class="fas fa-home"></i></Link></li>
                <li className="breadcrumb-item"><Link to="/host/income">收益管理</Link></li>
                <li className="breadcrumb-item">日期詳細</li>
            </ol>
        </aside>
        {/* 標題二 */}
        <div className="d-flex">
            <div className="col-sm-11">
                <h3 className="grass fs-20 fw-bold py-3 mb-0">｜訂購明細</h3>
            </div>
        </div>
            <p className="col-sm-12 fs-18 pl-4 mb-2">選擇日期：2019-06-05（平日）</p>
        <div className="d-flex flex-column pl-3">
            <table className="host-table">
                <tbody>
                    {/* <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">訂單編號</td>
                        <td className="text-left py-2 pl-2" colSpan="7"></td>
                    </tr> */}
                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white">區域</td>
                        <td className="text-left py-2 pl-2">露營車區</td>
                        <td className="text-center py-2 bg-grass text-white">數量</td>
                        <td className="text-left py-2 pl-2">3 帳</td>
                        <td className="text-center py-2 bg-grass text-white">單價</td>
                        <td className="text-left py-2 pl-2">NT$ 2,900</td>
                        <td className="text-center py-2 bg-grass text-white">小計</td>
                        <td className="text-left py-2 pl-2">NT$ 8,700</td>
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
                    </tr>
                    <tr className="border">
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
                        <td className="border text-left py-2 pl-2 watermelon">NT$ 8,700</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
)

export default HostIncomeDay;