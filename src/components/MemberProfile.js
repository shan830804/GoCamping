import React from 'react';
import { Image } from 'react-bootstrap'

const MemberProfile = props => (
    <div className="profile px-4 py-3 my-3">
        <div className="d-flex row">
            <div className="col-2 d-flex align-items-center">
                <figure className="avatar m-0">
                    <Image src="../../images/toothless.jpg" />
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
)

export default MemberProfile