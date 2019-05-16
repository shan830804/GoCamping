import React from 'react';
import './Member.css'

function Member() {
    return (
        <>
            <div className="container">
                <section className="my-2">

                    <div className="row">
                        <nav className="col-12 p-0">
                            <ul className="breadcrumb m-0">
                                {/* a要改成link to */}
                                <li className="breadcrumb-item"><i className="fas fa-home"></i></li>
                                <li className="breadcrumb-item">會員</li>
                                <li className="breadcrumb-item active">個人頁面</li>
                            </ul>
                        </nav>
                    </div>

                    <div className="profile px-4 py-3 my-3">
                        <div className="d-flex row">
                            <div className="col-2 d-flex align-items-center">
                                <figure className="avatar m-0">
                                    <img src="https://vignette.wikia.nocookie.net/tsuki-adventure/images/f/f1/Download.png/revision/latest?cb=20181203061241" />
                                </figure>
                            </div>
                            <div className="col-10 d-flex justify-content-between pl-0">
                                <div className="d-flex flex-column">
                                    <h4 className="mb-3">gogolaichoowan</h4>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="level_badge bg-ground mr-1 d-flex align-items-center justify-content-center">
                                            <i className="fas fa-campground"></i>
                                        </div>
                                        <p className="p-0 m-0 fs-18">露營新手</p>
                                    </div>
                                    <p className="fs-14">追蹤者 1024&nbsp;&nbsp;關注中 768</p>
                                </div>
                                <div>
                                    <button className="btn btn-outline-grass">編輯個人資料 <i className="fas fa-user-edit"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <aside className="col-2">
                            <ul className="p-0 my-2 list-unstyled">
                                <li className="d-flex my-1">
                                    <div className="level_badge bg-ground mr-1 d-flex align-items-center justify-content-center">
                                        <i className="far fa-file-alt"></i>
                                    </div>
                                    <span className="fs-bold">訂單管理</span>
                                </li>
                                <li className="d-flex my-1 fs-14"><div className="box mr-1"></div>營地訂單</li>
                                <li className="d-flex my-1 fs-14"><div className="box mr-1"></div>食材訂單</li>
                                <li className="d-flex my-1 fs-14"><div className="box mr-1"></div>活動訂單</li>
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
                                <li className="d-flex my-1 fs-14"><div className="box mr-1"></div>新增文章</li>
                                <li className="d-flex my-1 fs-14"><div className="box mr-1"></div>文章列表</li>
                                <li className="d-flex my-1 fs-14"><div className="box mr-1"></div>收藏文章</li>
                                <li className="d-flex my-1 pt-1">
                                    <div className="level_badge bg-diamond mr-1 d-flex align-items-center justify-content-center">
                                        <i className="far fa-gem"></i>
                                    </div>
                                    <span className="fs-bold">會員等級</span>
                                </li>
                            </ul>
                        </aside>

                        <main className="col-10 my-2">
                            <form>
                                <p className="fs-bold">電子郵件設定</p>
                                <div className="form-group row">
                                    <div className="col-12">
                                        <div className="custom-control custom-checkbox mb-2">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">訂單通知（包含：訂單更新、即將到來的旅程）</label>
                                        </div>
                                        <div className="custom-control custom-checkbox mb-2">
                                            <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                            <label className="custom-control-label" htmlFor="customCheck2">促銷活動通知（包含：每週促銷優惠活動、每月熱門營地排行）</label>
                                        </div>
                                        <div className="custom-control custom-checkbox mb-2">
                                            <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                            <label className="custom-control-label" htmlFor="customCheck3">個人優惠通知（包含：折價券通知、最愛營地促銷通知）</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-12 d-flex justify-content-center">
                                        <button type="submit" className="btn btn-grass">儲存</button>
                                    </div>
                                </div>
                            </form>
                        </main>
                    </div>

                </section>
            </div>

        </>
    )
}
export default Member;