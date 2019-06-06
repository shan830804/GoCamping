import React from 'react';
import { Link } from 'react-router-dom'


class EventApplyBtn extends React.Component {
    constructor() {
        super()
        this.state = {
            eventNumDate: [],
            // display:''
        }
    }

    componentDidMount() {
        let id = this.props.event_id;
        // console.log(id);
        fetch('http://localhost:5000/eventApplyBtn?event_id=' + id, {
            method: 'GET',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }),
        })
        .then(response => {
            if (!response.ok) throw new Error(response.statusText)
            return response.json()
        })
        .then(jsonObject => {
            // console.log(typeof jsonObject)
            // console.log(jsonObject)
            this.setState({ eventNumDate: jsonObject })
        })
        .catch(function (err) {
            // Error :(
        })
    }
 
    render() {
        let data = this.state.eventNumDate;
        // console.log(data)
        const numList = data.map(item => Object.values(item)[1]);
        // console.log(numList);
        const apply_uplimit = this.props.apply_uplimit;
        // console.log(apply_uplimit);
        const apply_numNow = numList[0];
        const apply_able = apply_uplimit - apply_numNow;
        // console.log(apply_able);
        let text='' ;
        let path='';
        if(apply_able <= 0){
            text = '已額滿，看其他活動';
            path = '/Event';
        }else{
            text ='我要報名';
            path = '/Event/EventApply/' + this.props.event_id;
        }
        return (
            <>
                <Link className="btn btn-Esunshine px-4 py-2 transition" to={path}>{text}</Link><br/>
                <small>尚有 {apply_able} 個名額</small>
           </>
        )
    }
}
export default EventApplyBtn;