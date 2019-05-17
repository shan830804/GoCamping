import React from 'react';

const MemberAside = props => (
    <aside className="col-2">
        <ul className="p-0 my-2 list-unstyled">
            <li className="d-flex my-1">
                <div className="level_badge bg-ground mr-1 d-flex align-items-center justify-content-center">
                    <i className="far fa-file-alt"></i>
                </div>
                <span className="fs-bold">訂單管理</span>
            </li>
            <li className="d-flex my-1 fs-14"><div className="box mr-1"></div><span>營地訂單</span></li>
            <li className="d-flex my-1 fs-14"><div className="box mr-1"></div><span>食材訂單</span></li>
            <li className="d-flex my-1 fs-14"><div className="box mr-1"></div><span>活動訂單</span></li>
            <li className="d-flex my-1 pt-1">
                <div className="level_badge bg-sunshine mr-1 d-flex align-items-center justify-content-center">
                    <i className="fas fa-bullhorn"></i>
                </div>
                <span className="fs-bold">我的折價券</span>
            </li>
            <li className="d-flex my-1 pt-1">
                <div className="level_badge bg-watermelon mr-1 d-flex align-items-center justify-content-center">
                    <i className="fas fa-heart"></i>
                </div>
                <span className="fs-bold">我的最愛</span>
            </li>
            <li className="d-flex my-1 pt-1">
                <div className="level_badge bg-forest mr-1 d-flex align-items-center justify-content-center">
                    <i className="fas fa-pen-nib"></i>
                </div>
                <span className="fs-bold">文章管理</span>
            </li>
            <li className="d-flex my-1 fs-14"><div className="box mr-1"></div><span>新增文章</span></li>
            <li className="d-flex my-1 fs-14"><div className="box mr-1"></div><span>文章列表</span></li>
            <li className="d-flex my-1 fs-14"><div className="box mr-1"></div><span>收藏文章</span></li>
            <li className="d-flex my-1 pt-1">
                <div className="level_badge bg-diamond mr-1 d-flex align-items-center justify-content-center">
                    <i className="far fa-gem"></i>
                </div>
                <span className="fs-bold">會員等級</span>
            </li>
        </ul>
    </aside>
)

export default MemberAside