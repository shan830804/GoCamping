import React from 'react';
import './../pages/index/index.css'
import Carousel from 'react-bootstrap/Carousel'


class IndexSlider extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleSelect = this.handleSelect.bind(this);
    
        this.state = {
        index: 0,
        direction: null,
        };
    }
    
    handleSelect(selectedIndex, e) {
        this.setState({
        index: selectedIndex,
        direction: e.direction,
        });
    }
    
    render() {
        const { index, direction } = this.state;
    
        return (
        <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect}  
            style={{boxShadow:'5px 5px 10px #140a08'}}       
        >
            <Carousel.Item>
            <img
                className="d-block index_img"
                src="/indexImg/camping_tents.jpg"
                alt="First slide"
            />
            <Carousel.Caption>
                <h2 className="t-shadow">讓露營更簡單</h2>
                <p className="fs-18 t-shadow">想拋開都市的煩惱，卻因為露營的行前準備更煩惱？來吧，交給我們！<br/>所有的露營資訊，我們都幫你整理好了，只要動動手指，這個周末就可以出發！</p>
            </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block index_img"
                src="/indexImg/friends-camping-forest-together_53876-48896.jpg"
                alt="Third slide"
            />
    
            <Carousel.Caption>
                <h2 className="t-shadow">豐富的營地選擇</h2>
                <p className="fs-18 t-shadow">春天釣魚往河邊走，夏日避暑到海邊玩，秋季賞楓向山裡去，寒冬取暖全家團聚，<br/>想找什麼營地，都在這裡！只要簡單直覺的操作，就能輕鬆選擇你想要的營地！</p>
            </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <img
                className="d-block index_img"
                src="/indexImg/photo-1473713984581-b8918cc3652e.jpg"
                alt="Third slide"
            />
    
            <Carousel.Caption>
                <h2 className="t-shadow">分享最棒的旅遊體驗</h2>
                <p className="fs-18 t-shadow">想和其他露友一起看雪看星星看月亮，從詩詞歌賦談到人生哲學？<br/>盡情分享露營過程中的感動吧，你的知己在這裡等你！</p>
            </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <img
                className="d-block index_img"
                src="/indexImg/two-men-tourists-happy-top-mountain-near-campfire_1150-9150.jpg"
                alt="Third slide"
            />
    
            <Carousel.Caption>
                <h2 className="t-shadow">懶惰鬼的好朋友</h2>
                <p className="fs-18 t-shadow">多種精選主題套裝行程，交通、食宿、活動，全部都不用煩惱，<br/>最豐富多元的露營懶人包，已經幫你準備好了！</p>
            </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <img
                className="d-block index_img"
                src="/indexImg/women-having-fun-near-tent_23-2147813996.jpg"
                alt="Third slide"
            />
    
            <Carousel.Caption>
                <h2 className="t-shadow">好睡好玩也要好吃</h2>
                <p className="fs-18 t-shadow">去露營就要跟泡麵水餃妥協嗎？擁抱大自然還是要享受美食啊！<br/>最豐盛的食材選擇，讓你在營地裡，照樣吃得像皇帝！</p>
            </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
        );
    }
    }

export default IndexSlider;