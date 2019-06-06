import React from 'react';
import { Link } from 'react-router-dom';

const HostIncomeMth = props => (
    <main className="col-sm-12 my-2">
        {/* 麵包屑 */}
        <aside className="my-2">
            <ol className="breadcrumb bg-white m-0">
            <li className="breadcrumb-item"><Link to="/host"><i class="fas fa-home"></i></Link></li>
                <li className="breadcrumb-item">收益管理</li>
            </ol>
        </aside>
        {/* 區域選擇 */}
        <div className="d-flex flex-column">
            <table>
                <tbody>
                    <tr className="border">
                        <td className="text-center py-2 bg-grass text-white" width="200rem">區域</td>
                        <td className="text-left py-2 pl-2">露營車區</td>
                    </tr>
                </tbody>
            </table>
            {/* <br />
            <table>
                <tbody>
                    <tr className="border">
                        <td className="text-center py-2 pl-2">點選日期，查看日期的詳細資訊</td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <table>
                <tbody>
                    <tr className="border">
                        <td className="py-2 pl-2 fs-18 watermelon">當月收入總計：</td>
                    </tr>
                </tbody>
            </table> */}
        </div>
    </main>
)
export default HostIncomeMth;