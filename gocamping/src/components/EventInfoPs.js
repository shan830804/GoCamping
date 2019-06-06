import React from 'react';
import { Link } from 'react-router-dom'
import { FaInfoCircle,FaExclamationTriangle, FaGratipay } from "react-icons/fa";

function EventInfoPs(props){
    let data = props.dataMethod;
    return(
        <>
         <div className="position-relative">
            <div className="container sep_line pb-5" style={{maxWidth:'780px'}}>
                <div className="text-secondary">
                    <div className="">
                        <ul className="mt-4">
                            <h5><FaInfoCircle/> 費用包含</h5>
                            <li><p>到達營地後之行程、餐食及交通、門票等費用。</p> </li>
                            <li><p>個人旅遊平安保險，依規定旅客若有個別需求，得自行投保旅行平安保險。</p> </li>
                            <li><p>營地1晚住宿（表列為 4人一篷之每人價格，若需指定人數請另外詢價。）</p> </li>
                        </ul>
                        <ul className="m-2 pt-2">
                            <h5>費用不包含</h5>
                            <li><p>個人到達營地之交通費用。</p> </li>
                            <li><p>純私人之消費：如、飲料酒類、洗衣、電話、電報及私人交通費。</p> </li>
                        </ul>
                    </div>
                    <div className="">
                        <ul className="mt-4">
                            <h5><FaExclamationTriangle/> 報名須知 <Link to="" style={{fontSize:'8px'}}>(看全部)</Link> </h5>
                            {data.map(item => (
                            <li key={item.event_id}><p>本活動<span className="watermelon"> {item.event_numMin} 人以上方可成行</span>，出發前14天如未達 {item.event_numMin} 人基本成團人數，已繳付之費用將全額退還。</p>
                            </li>
                             ))}
                            <li><p>住宿以4人為1帳，若<span className="watermelon">報名人數少於4人，需與他人同帳</span>。</p> </li>
                            <li><p>確認報名後，如因個人因素無法成行，將依旅遊定型化契約之取消規定辦理。</p></li>
                            <li><p>患有心臟病、高血壓、糖尿病、懼高症、高山症者及其他重大疾病或不適合山區活動者（孕婦、年齡過小孩童、年齡過大長者），請斟酌參加此行程。</p>
                            </li>
                            <li><p>如因天候、交通或安全考量等因素，本公司保留調整活動內容的權利，</p></li>
                            <li><p>如遇颱風、地震、豪雨等大自然不可抗拒之因素，本公司保有延期出發或全額退費之權利。</p></li>
                        </ul>
                        <ul className="mt-4">
                            <h5><FaGratipay/> 貼心小叮嚀</h5>
                            <li><p>敬請自備防寒衣物及雨具，個人慣用隨身藥品：如暈車藥、感冒藥、防蚊蟲液等。</p> </li>
                            <li><p>請穿著舒適好活動的衣物及鞋類。</p> </li>
                            <li><p>為愛護地球暨環保，均不提供拋棄式牙刷、牙膏、拖鞋、梳子、刮鬍刀及個人沐浴用品等私人用品，請自行攜帶。</p> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
  }
  export default EventInfoPs;