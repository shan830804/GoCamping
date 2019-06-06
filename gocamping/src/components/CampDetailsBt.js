import React from "react";
// import { BrowserRouter as NavLink } from "react-router-dom";
import { Image, Row, Col, Tabs ,Tab,Nav } from "react-bootstrap";

class CampDetailsMd extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      camplistData: props.data
    };
  }

  render() {
    const { index, direction } = this.state;
    return (
      <>

               <Tab.Container defaultActiveKey="detail">
                <Nav variant="tabs" defaultActiveKey="detail">
                    <Nav.Item>
                        <Nav.Link eventKey="detail" href="#">營地須知</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="notice">注意事項</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="map">地圖</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="comment">評價</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="detail">
                    <p className="fw-light fs-14 m-3">
            ※ 營位費不含入園及清潔費，入園請另購門票，以下費用於現場另付即可，訂位時請留意。  <br />
              ※ 入園費：全票200元、半票100元 (3歲以下&殘障手冊者可免費入園)  <br />

              　開放日：星期五～星期六、連假、年假 (訂金30%)  <br />
              　休園日：平日不開放露營  <br />
              　入拔營：入營 15:00　拔營 隔日11:00  <br />
              電力供應：24小時供應  <br />

              ※ 窯烤pizza：限連續假期不限人數報名，每份$200元 (6吋)，若參加須備註在訂單中  <br />
              ※ 焢窯活動：$2500/10人 (相關費用如下圖介紹)，若參加須備註在訂單中  <br />

              ※ 提供電冰箱供冷藏食物、有吹風機、可代訂食物、有脫水機、烘乾機、有飲水機供露友使用。  <br />
              ※ 此營區可先卸裝備，再集中停車(有提供推車)  <br />

              ※ 垂釣體驗區：  <br />
              入園費全票200元可抵用釣魚體驗100元(需自備釣具)；半票無抵用優惠  <br />
              租用釣竿全套：400元(含撈網、魚網、魚餌、誘餌)，用畢歸還退還押金250元  
              開放釣魚時間8點至下午5點  <br />

              各區衛浴配置：  <br />
              A：男生廁所坐蹲各1間、女生廁所坐蹲各1間  <br />
              B：男生廁所蹲式1間、小便斗2座、女生廁所坐蹲各2間、男女共用浴室6間  <br />
            </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="notice">
                        <div>
                        <p className="fw-light fs-14 m-3">
                          為了維護露營區的整潔及安靜，讓大家有一處舒適的露營休閒空間，以下事項讓我們一起遵守：<br />
                          1.全區室內、外禁菸，如需吸煙請至停車場區。<br />
                          2.攜帶寵物入園，請加上牽繩或口罩，且飼主應負管理責任。<br />
                          3.使用園區設施時，請遵守指示牌規定，以免發生危險。<br />
                          4.提供免費停車場，但不負保管責任，如有貴重物品請自行保管。<br />
                          5.農場營地提供燈光及水電、盥洗熱水，目前暫不提供露營車露營。<br />
                          6.請自備露營(雨遮)設備、烹調器具。<br />
                          7.園區內設施開放時間，若因天候因素與安全考量，園方保有調整之權利。<br />
                          8.為維護生態，請保持環境整潔。<br />
                          9.設備：草地營位如有需要，農場可提供棧板<br />
                          ※營地不提供車輛停放，車輛可入園時間為早上9點前，下午5點後；如未於時間內，不提供車輛入園，提供借用手推車（停車場距離露營區50公尺）。<br />
                          </p>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="map">
                        <div className="mt-3">
                          <iframe width='100%' height='500' frameborder='0' scrolling='no' marginheight='0' marginwidth='0'
                          src='https://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q=新北市烏來區大羅蘭19號之1&z=16&output=embed&t='></iframe>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="comment">
                    <div className="fw-light fs-14 m-3">
            <div className="row comment">
               <div className="col-md-3 col-sm-12 p-2">
                <p>張*婷小姐</p>
                <p>入住時間:2019/03/20</p>
                <p>評價時間:2019/04/08</p>
              </div>
              <div className="col-md-9 col-sm-12">
              <p className=" fw-bold fs-18 smtitle">
              環境很優美，營主超漂亮心地也很好
              </p>
              <p className="mt-2">
              營主人超好，阿嬤也超好。園區內還有阿嬤的有機菜園可以配煮，黃金百香果藤，魚池，雨遮遊戲屋。場地不會過大，孩子們可以放心在園區玩耍，媽媽們可以好好喝下午茶
              </p>

              </div>
            </div>
            <div className="row comment">
               <div className="col-md-3 col-sm-12 p-2">
                <p>蘇*君	小姐</p>
                <p>入住時間:2019/02/12</p>
                <p>評價時間:2019/02/26</p>
              </div>
              <div className="col-md-9 col-sm-12">
              <p className=" fw-bold fs-18 smtitle">
              場地好，風景優，老闆服務親切
              </p>
              <p className="mt-2">
              廁所浴室間數少，但很乾淨且熱水穩定；山路迂迴偶有會車不易，但皆為水泥或柏油路面路況良好。
              </p>

              </div>
            </div>
            <div className="row comment">
               <div className="col-md-3 col-sm-12 p-2">
                <p>陳*安 先生</p>
                <p>入住時間:2019/01/22</p>
                <p>評價時間:2019/02/05</p>
              </div>
              <div className="col-md-9 col-sm-12">
              <p className=" fw-bold fs-18 smtitle">
              營區設施不錯，值得再去
              </p>
              <p className="mt-2">
              園區內寬敞舒適 有很多可以乘涼休息的地方 樹屋是小孩們玩耍的地方 後面還有釣漁池可以小試身手 有廚房冰箱可以使用 列入每年必露場所^^
              </p>

              </div>
            </div>
             
            </div>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
      </>
    );
  }
}
export default CampDetailsMd;
