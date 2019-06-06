import React from 'react';
import { Link } from 'react-router-dom'

const EventParentComponent2 = props => (
    <div>
        <div className="my-5 d-flex justify-content-end ">
            <button className={"btn btn-gray mr-3 py-2 transition "+ props.display }>
                <Link to="" className="p-3 color_gray transition">回上一頁</Link>
            </button>
            <button onClick={props.addChild} className={"btn btn-sunshine transition px-5 "+ props.display } style={{ cursor: 'pointer' }}>下一步，選擇付款方式</button>
        </div>
    </div>

);

export default EventParentComponent2;