import React from 'react';
import './../pages/index/index.css'
import { Link } from 'react-router-dom'
// import LinesEllipsis from 'react-lines-ellipsis';
// import { FaStar,FaStarHalfAlt } from "react-icons/fa";


class IndexNew extends React.Component {
    constructor() {
        super();
        this.state = {
            eventListDate: []
        };
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
        return (
        <>
        <div className="index_content pt-md-5">
         {/* START CAMP */}
            <div className="row marTop_200">
                <div className="col-md-6">
                    <div className="row justify-content-between">
                        <h1 className="my-3 position-relative index_line fw-bold">熱門營地</h1>
                    </div>
                    <div className="row py-2">
                        <h6 className="card-title col-md-10 lineHeight_25" >旅行一定會遇到的就是住宿這檔事，你可以住飯店民宿，也可以住背包客棧或是寄宿別人家中，除此之外還有一種入宿方式，它沒有水泥牆擋住與戶外的隔絕，它甚至可以背在身上，許多人旅行的目的甚至就是為了體驗這樣的住宿感受。這次就用露營體驗當作旅行的主題吧！</h6>
                        <div className="col-md-2"></div>
                    </div>
                    <div className="py-3">
                        <Link to="/CampSide" className="btn-grass" role="button" aria-pressed="true">看更多</Link>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="index_imgBox indexCamp_box">
                        <img className="index_img" src="/indexImg/adrury_20180702140954029.zip.0.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        {/* START EVENT */}
        <div className="row marTop_100">
            <div className="col-md-5">
                <div className="index_imgBox indexEvent_imgHeight">
                    <img className="index_img" src="/indexImg/camping-bend-oregon-1600x900.jpg" alt=""/>
                </div>
            </div>
            <div className="col-md-5">
                <div className="position-absolute p-1 indexEvent_textBox">
                    <h2 className="my-3 position-relative index_line fw-bold">主題活動</h2><br/> 
                    <div className="">
                        <h6 className="card-title col-md-10 lineHeight_25">想去露營又怕麻煩嗎？貼心的 Go Camping 為您打造一系列主題行程，讓您省去行前準備，只要挑選喜歡的主題活動，帶著簡單的行囊及一顆愉快的心，即刻享受你的露營假期！</h6>
                    </div>
                    <div className="row justify-content-center">
                        <Link to="/Event" className="btn-grass" role="button" aria-pressed="true">看更多</Link>
                    </div>
                </div>
            </div>
        </div>
        {/* START SHAREFUN */}
        <div className="row">
            <div className="col-md-7  position-relative">
                <div className="position-absolute p-1 indexShare_textBox">
                    <div className="row justify-content-end">
                        <h1 className="my-3 position-relative index_line fw-bold">新手入門</h1>
                    </div>
                    <div className="row py-2  justify-content-end">
                        <h6 className="card-title col-md-6 lineHeight_25">我該買什麼裝備？帳篷怎麼挑？如果下雨還能進行活動嗎？第一次露營的朋友看過來，我們為你解答各種新手常見的疑問！不要害怕，露營也可以輕鬆愉快～</h6>
                    </div>
                    <div className="py-3 row py-2  justify-content-end">
                        <Link to="/ShareFun" className="btn-grass" role="button" aria-pressed="true">看更多</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-5">
                <div className="index_imgBox indexShare_imgHeight">
                    <img className="index_img" src="/indexImg/photo-1529385101576-4e03aae38ffc.jpg" alt=""/>
                </div>
            </div>
        </div>
        {/* START FOOD */}
        <div className="index_camp py-md-5 margin_50">
            <div className="row justify-content-between mb-2">
                <h2 className="my-3 position-relative index_line fw-bold">食材直送</h2><br/>
                <div className="py-3">
                    <Link to="/Food" className="btn-grass" role="button" aria-pressed="true">看更多</Link>
                </div> 
            </div>
            <div className="card-deck">
                {data.map(item => (
                <div className="card"  key={item.salepage_id}>
                    <Link to={'/Food/FoodDetails/' + item.salepage_id}>
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

export default IndexNew;