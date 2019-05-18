import React from 'react';
import { Image, Button } from 'react-bootstrap'

const MemberProfile = props => (
    <div className="profile px-4 py-3 my-3">
        <div className="d-flex row">
            <div className="col-sm-2 d-flex align-items-center">
                {/* 大頭貼 */}
                <figure className="avatar m-0">
                    <Image src="../../images/toothless.jpg" />
                </figure>
            </div>
            <div className="col-sm-10 d-flex justify-content-between pl-0">
                {/* 個人主資訊 */}
                <div className="d-flex flex-column">
                    <h4 className="mb-3">gogolaichoowan</h4>
                    <div className="d-flex align-items-center mb-2">
                        <div className="level_badge bg-ground mr-1 d-flex align-items-center justify-content-center">
                            <i className="fas fa-campground"></i>
                        </div>
                        <p className="p-0 m-0 fs-20">露營新手</p>
                    </div>
                    <p className="fs-14">追蹤者 1024&nbsp;&nbsp;關注中 768</p>
                </div>
                {/* 編輯個人資訊按鈕 */}
                <div>
                    <Button className="btn btn-outline-grass" href="/Member/MyInfoEditor">
                        編輯個人資料 <i className="fas fa-user-edit"></i>
                    </Button>
                </div>
            </div>
        </div>
    </div>
)

export default MemberProfile