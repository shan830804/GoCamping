import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaCampground } from "react-icons/fa";

const Footer = (props) =>{
    return(
        <>
        <footer className="mt-5">
            <div className="container maxWidth text-white">
                <ul className="row list-unstyled paddingX">
                    <li className="col-md-4 d-flex">
                        <h5>聯絡我們</h5>
                        <ul className="list-unstyled ml-5">
                            <li><i className="fas fa-phone"></i> <span>(02)1234-1234</span></li>
                            <li className="pointer"><i className="fas fa-envelope"></i> <span>gocamping@mail.com</span></li>
                            <li className="pointer"><i className="fab fa-facebook-square"></i> <span>FACEBOOK</span></li>
                            <li className="pointer"><i className="fab fa-line"></i> <span>LINE官方帳號</span></li>
                            <li className="pointer"><i className="fab fa-instagram"></i> <span>Instagram</span></li>
                            <li className="my-3"><Link to="" className="btn-sunshine transition p-2 " style={{borderRadius:'5px'}}><FaCampground/>加入營地夥伴</Link></li>
                        </ul>
                    </li>
                    <li className="col-md-4 d-flex">
                        <h5>網站地圖</h5>
                        <ul className="list-unstyled ml-5">
                            <li className="pointer">營地挑選</li>
                            <li className="pointer">主題露營</li>
                            <li className="pointer">優惠活動</li>
                            <li className="pointer">購買食材</li>
                            <li className="pointer">分享樂</li>
                            <li className="pointer">會員中心</li>
                        </ul>
                    </li>
                    <li className="col-md-4 d-flex">
                        <h5>更多資訊</h5>
                        <ul className="list-unstyled ml-5">
                            <li className="pointer">關於我們</li>
                            <li className="pointer">常見問題集</li>
                            <li className="pointer">營地訂購流程</li>
                            <li className="pointer">隱私權條款</li>
                        </ul>
                    </li>
                </ul>
                <h6 className="text-right">© Go Camping 2019</h6>
            </div>

        </footer>
        </>
    )
}
export default Footer;