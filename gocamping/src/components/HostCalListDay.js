import React from 'react';
import { Link } from 'react-router-dom';

const HostCalListDay = props => (
    <main className="col-sm-12 my-2">
        {/* 麵包屑 */}
        <aside className="my-2">
            <ol className="breadcrumb bg-white m-0">
                <li className="breadcrumb-item"><Link to="/host"><i class="fas fa-home"></i></Link></li>
                <li className="breadcrumb-item"><Link to="/host/calendar">日曆管理</Link></li>
                <li className="breadcrumb-item">日期詳細</li>
            </ol>
        </aside>
        <div className="d-flex flex-column">
            <table>
                <tbody>
                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white" width="200rem">區域</td>
                        <td className="text-left py-2 pl-2">露營車區</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p className="col-sm-12 my-2 fs-18">選擇日期：2019-06-05</p>
        <div className="d-flex flex-column">
            <table>
                <thead className="border bg-grass white">
                    <tr>
                        <th className="text-center py-2">訂單編號</th>
                        <th className="text-center py-2">訂購人姓名</th>
                        <th className="text-center py-2">入住日期</th>
                        <th className="text-center py-2">帳數</th>
                        <th className="text-center py-2">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border">
                        <td className="text-center py-2">20190522001001</td>
                        <td className="text-center py-2">林宛臻</td>
                        <td className="text-center py-2">2019-06-01～2019-06-05</td>
                        <td className="text-center py-2">3 帳</td>
                        <td className="text-center py-2">
                            <Link className="btn btn-outline-grass px-3 py-1 transition" to={'./calendarDetail/01'} role="button">more</Link>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className="border">
                        <td className="text-center py-2">20190527001001</td>
                        <td className="text-center py-2">楊佳蓁</td>
                        <td className="text-center py-2">2019-06-03～2019-06-07</td>
                        <td className="text-center py-2">1 帳</td>
                        <td className="text-center py-2">
                            <Link className="btn btn-outline-grass px-3 py-1 transition" to={'./calendarDetail/02'} role="button">more</Link>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className="border">
                        <td className="text-center py-2">20190530001001</td>
                        <td className="text-center py-2">柯佳芸</td>
                        <td className="text-center py-2">2019-06-05～2019-06-09</td>
                        <td className="text-center py-2"> 2 帳</td>
                        <td className="text-center py-2">
                            <Link className="btn btn-outline-grass px-3 py-1 transition" to={'./calendarDetail/03'} role="button">more</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p className="col-sm-12 my-2 fs-18 text-right watermelon">當日出租營帳合計：6 帳</p>
    </main>
)

export default HostCalListDay;