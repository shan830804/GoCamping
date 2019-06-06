import React from 'react';
import './../pages/index/index.css'
import { Link } from 'react-router-dom'


class IndexFood extends React.Component {
    constructor() {
        super()
        this.state = {
            eventListDate: [],
            display:''
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/indexFood', {
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
            this.setState({ eventListDate: jsonObject })
        })
        .catch(function (err) {
            // Error :(
        })
    }
    
    render() {
        let data = this.state.eventListDate;
        // console.log(data);
        // data[0].event_name //
        return (
            <>
            <div className="index_camp py-5">
                <div className="row justify-content-between">
                    <h2 className="my-3 position-relative index_line fw-bold">食材直送</h2><br/>
                    <div className="py-3">
                        <Link to="#" className="btn-grass" role="button" aria-pressed="true">看更多</Link>
                    </div> 
                </div>
                <div className="card-deck">
                    {data.map(item => (
                    <div className="card"  key={item.salepage_id}>
                        <Link to={'/Food'}>
                        <div className="index_imgBox index_imgBoxFood">
                            <img className="card-img-top index_img" src={"/" + item.salepage_image} alt="Second slide"/>
                        </div>
                        <div className="card-body">
                            <h6 className="card-title color_gray fw-bold">{item.salepage_name}</h6>
                            <p className="indexFoodText watermelon mr-2">NT$ {item.salepage_price}</p>
                        </div>
                        </Link>
                    </div>
                    ))}   
                </div>
            </div>
            </>
        )
    }
}
export default IndexFood;