import React from 'react';
import { Link } from 'react-router-dom'

const EventParentComponent = props => (
    <div>
        {/* <div className="card calculator">
            <p><Link to="#">Add Another Child Component</Link></p>
            <div id="children-pane">
                {props.children}
            </div>
        </div> */}
        <div className="my-5 d-flex justify-content-end ">
            <button className={"btn btn-gray mr-3 py-2 transition "+ props.dnone }><Link to="/Event" className="p-3 text-light transition">看其它活動</Link>
            </button>
            <button onClick={props.addChild} className={"btn btn-Esunshine transition px-5 "+ props.dnone } style={{ cursor: 'pointer' }}>下一步，填寫參加人資料</button>
        </div>

    </div>

);

export default EventParentComponent;