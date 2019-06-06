import React from 'react';
import { Link } from 'react-router-dom';

const HostCampList = props => (
    <main className="col-sm-12 my-2">
        {/* 麵包屑 */}
        <aside className="my-2">
            <ol className="breadcrumb bg-white m-0">
                <li className="breadcrumb-item"><Link to="/host"><i class="fas fa-home"></i></Link></li>
                <li className="breadcrumb-item">營地管理</li>
            </ol>
        </aside>
        <Link className="btn btn-outline-grass px-4 py-2 mb-2 transition" to={'./campsiteAddCamp'} role="button">+ 新增營地</Link>
        <div className="d-flex flex-column">
            <table className="host-table">
                <thead className="border bg-grass white">
                    <tr>
                        <th className="text-center py-2">營區名稱</th>
                        <th className="text-center py-2">營區地址</th>
                        <th className="text-center py-2">總帳數</th>
                        <th className="text-center py-2">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border">
                        <td className="text-center py-2">Hulagarden呼啦莊園</td>
                        <td className="text-center py-2">苗栗市獅潭鄉永興村下大窩2-1號</td>
                        <td className="text-center py-2">22 帳</td>
                        <td className="text-center py-2">
                            <Link className="btn btn-outline-grass px-3 py-1 transition" to={'./campsiteInfo'} role="button">more</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
)

export default HostCampList;