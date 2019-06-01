import React from "react";
import { ListGroup, Container, Row } from "react-bootstrap";

/* 左邊商品選單 */
class FoodLeftside  extends React.Component{
  constructor(props){
    super(props);
      this.state = {

        //RWD要不要顯示選單(預設只顯示選擇分類)
        show:1,
      }
      this.goCate1 = this.goCate1.bind(this);
      this.goCate2 = this.goCate2.bind(this);
  }
  goCate1() {
    this.setState((state,props) =>({
      show:1
    }))
  }

  goCate2() {
    this.setState((state,props) =>({
      show:2
    }))
  }

  render(){
    return(
      <>  
        {/* <Container className="my-2 f-margin-bottom">
          <Row className="d-flex"> */}
            <div className="col f-leftside ">
              <ListGroup variant="flush" className="" >                    
                <ul className="p-0 list-unstyled">
                  <ul className="p-0 list-unstyled">
                    <li className="d-flex mb-1 grass fleft-Li">
                    <span variant="link"
                              onClick={this.props.handleSaleAll}
                              className={"fs-bold fs-20 fleft-all" + (this.props.salebrand === 0 && this.props.salecateid === 0 ? "-active" : "")}>
                      全站商品
                      </span> 
                      {/* <span className="fs-bold grass" onClick={props.handleSaleAll}>全站商品</span> */}
                    </li>
                    <li className="d-flex my-1">
                      <span className="fs-bold fs-20 grass">選擇品牌</span>
                    </li>            
                    <li className={"ml-2 d-flex my-1 fleft-link " + (this.props.salebrand == 1 ? "fleft-active" : "")}>
                      <div className="box mr-1" />                                    
                      <span variant="link"
                              onClick={()=>this.props.handleSalebrand(1)}
                              className="">
                      桂冠食品
                      </span> 
                    </li>
                    <li className={"ml-2 d-flex my-1 fleft-link " + (this.props.salebrand == 2 ? "fleft-active" : "")}>
                      <div className="box mr-1" />                  
                      <span variant="link"
                              onClick={()=>this.props.handleSalebrand(2)}
                              className="fleft-link ">
                      買肉找我
                      </span>
                    </li>            
                    <li className={"ml-2 d-flex my-1 fleft-link " + (this.props.salebrand == 3 ? "fleft-active" : "")}>
                      <div className="box mr-1" />                  
                      <span variant="link"
                              onClick={()=>this.props.handleSalebrand(3)}
                              className="fleft-link ">
                      七里香
                      </span>
                    </li>
                    <li className={"ml-2 d-flex my-1 fleft-link " + (this.props.salebrand == 4 ? "fleft-active" : "")}>
                      <div className="box mr-1" />                                    
                      <span variant="link"
                              onClick={()=>this.props.handleSalebrand(4)}
                              className="fleft-link">
                      西北烤肉
                      </span>
                    </li>

                    <li className="d-flex my-1">
                      <span className="fs-bold grass fs-20">食品分類</span>
                    </li>
                    <li className={"ml-2 d-flex my-1 fleft-link " + (this.props.salecateid == 1 ? "fleft-active" : "")}>
                      <div className="box mr-1" />
                      <span variant="link"
                              onClick={()=>this.props.handleSalecateid(1)}
                              className="fleft-link">
                      冷凍食品
                      </span>
                    </li>
                    <li className={"ml-2 d-flex my-1 fleft-link " + (this.props.salecateid == 2 ? "fleft-active" : "")}>
                      <div className="box mr-1" />
                      <span variant="link"
                              onClick={()=>this.props.handleSalecateid(2)}
                              className="fleft-link">
                      冷藏食品
                      </span>
                    </li>
                    <li className={"ml-2 d-flex my-1 fleft-link " + (this.props.salecateid == 3 ? "fleft-active" : "")}>
                      <div className="box mr-1" />
                      <span variant="link"
                              onClick={()=>this.props.handleSalecateid(3)}
                              className="fleft-link">
                      生鮮食品
                      </span>
                    </li>
                    <li className={"ml-2 d-flex my-1 fleft-link " + (this.props.salecateid == 4 ? "fleft-active" : "")}>
                      <div className="box mr-1" />
                      <span variant="link"
                              onClick={()=>this.props.handleSalecateid(4)}
                              className="fleft-link">
                      素食專區
                      </span>
                    </li>
                  </ul>
                </ul>
              </ListGroup> 
            </div>
          {/* </Row>
        </Container>   */}
      {/* 以下是選單RWD */}
      {this.state.show === 1 && 
        <Container className="f-rwdcon">
          <div className="row py-2 f-rwdLeftside"
                onClick={this.goCate2}>
            <span variant="link">
                    選擇分類
            </span> 
            <span><i className="fas fa-caret-down pl-2"></i></span>
          </div>
        </Container>}
      {/* 以下是選單 */}
      {this.state.show === 2 &&  
        <Container className="f-rwdcon">
        <div className="row f-rwdLeftside"
              onClick={this.goCate1}>
          <span variant="link">
                  選擇分類
          </span> 
          <span><i className="fas fa-caret-down pl-2"></i></span>
        </div>
            <div className="row f-rwdcate">
        <ul className="p-0 my-2 list-unstyled">
            <ul className="p-0 my-2 list-unstyled">
            <span variant="link"
              onClick={this.props.handleSaleAll}
              className={"fs-bold fleft-all" + (this.props.salebrand === 0 && this.props.salecateid === 0 ? "-active" : "")}>
                全站商品
        </span> 
              <li className="d-flex my-1">
                <span className="fs-bold grass">選擇品牌</span>
              </li>            
              <li className={"ml-2 d-flex my-1 fleft-link " + (this.props.salebrand == 1 ? "fleft-active" : "")}>
                <div className="box mr-1" />                                    
                <span variant="link"
                        onClick={()=>this.props.handleSalebrand(1)}
                        className="">
                桂冠食品
                </span> 
              </li>
              <li className={"ml-2 d-flex my-1 fleft-link " + (this.props.salebrand == 2 ? "fleft-active" : "")}>
                <div className="box mr-1" />                  
                <span variant="link"
                        onClick={()=>this.props.handleSalebrand(2)}
                        className="fleft-link ">
                買肉找我
                </span>
              </li>            
              <li className={"ml-2 d-flex my-1 fleft-link " + (this.props.salebrand == 3 ? "fleft-active" : "")}>
                <div className="box mr-1" />                  
                <span variant="link"
                        onClick={()=>this.props.handleSalebrand(3)}
                        className="fleft-link ">
                七里香
                </span>
              </li>
              <li className={"ml-2 d-flex my-1 fleft-link " + (this.props.salebrand == 4 ? "fleft-active" : "")}>
                <div className="box mr-1" />                                    
                <span variant="link"
                        onClick={()=>this.props.handleSalebrand(4)}
                        className="fleft-link">
                西北烤肉
                </span>
              </li>

              <li className="d-flex my-1">
                <span className="fs-bold grass">食品分類</span>
              </li>
              <li className={"ml-2 d-flex my-1 fleft-link " + (this.props.salecateid == 1 ? "fleft-active" : "")}>
                <div className="box mr-1" />
                <span variant="link"
                        onClick={()=>this.props.handleSalecateid(1)}
                        className="fleft-link">
                冷凍食品
                </span>
              </li>
              <li className={"ml-2 d-flex my-1 fleft-link " + (this.props.salecateid == 2 ? "fleft-active" : "")}>
                <div className="box mr-1" />
                <span variant="link"
                        onClick={()=>this.props.handleSalecateid(2)}
                        className="fleft-link">
                冷藏食品
                </span>
              </li>
              <li className={"ml-2 d-flex my-1 fleft-link " + (this.props.salecateid == 3 ? "fleft-active" : "")}>
                <div className="box mr-1" />
                <span variant="link"
                        onClick={()=>this.props.handleSalecateid(3)}
                        className="fleft-link">
                生鮮食品
                </span>
              </li>
              <li className={"ml-2 d-flex my-1 fleft-link " + (this.props.salecateid == 4 ? "fleft-active" : "")}>
                <div className="box mr-1" />
                <span variant="link"
                        onClick={()=>this.props.handleSalecateid(4)}
                        className="fleft-link">
                素食專區
                </span>
              </li>
            </ul>
          </ul>
      </div>  
        </Container>
        }
   
  </>
    )
  }
}
export default FoodLeftside;
// const FoodLeftside = props => (  
//   <>    
//     <div className="mt-3 col-md-2 col-sm-12 f-leftside">
//       <ListGroup variant="flush" className="" >                    
//         <ul className="p-0 my-2 list-unstyled">
//           <ul className="p-0 my-2 list-unstyled">
//             <li className="d-flex my-1 grass fleft-Li">
//             <span variant="link"
//                       onClick={props.handleSaleAll}
//                       className={"fs-bold fs-20 fleft-all" + (props.salebrand === 0 && props.salecateid === 0 ? "-active" : "")}>
//               全站商品
//               </span> 
//               {/* <span className="fs-bold grass" onClick={props.handleSaleAll}>全站商品</span> */}
//             </li>
//             <li className="d-flex my-1">
//               <span className="fs-bold fs-20 grass">選擇品牌</span>
//             </li>            
//             <li className={"ml-2 d-flex my-1 fleft-link " + (props.salebrand == 1 ? "fleft-active" : "")}>
//               <div className="box mr-1" />                                    
//               <span variant="link"
//                       onClick={()=>props.handleSalebrand(1)}
//                       className="">
//               桂冠食品
//               </span> 
//             </li>
//             <li className={"ml-2 d-flex my-1 fleft-link " + (props.salebrand == 2 ? "fleft-active" : "")}>
//               <div className="box mr-1" />                  
//               <span variant="link"
//                       onClick={()=>props.handleSalebrand(2)}
//                       className="fleft-link ">
//               買肉找我
//               </span>
//             </li>            
//             <li className={"ml-2 d-flex my-1 fleft-link " + (props.salebrand == 3 ? "fleft-active" : "")}>
//               <div className="box mr-1" />                  
//               <span variant="link"
//                       onClick={()=>props.handleSalebrand(3)}
//                       className="fleft-link ">
//               七里香
//               </span>
//             </li>
//             <li className={"ml-2 d-flex my-1 fleft-link " + (props.salebrand == 4 ? "fleft-active" : "")}>
//               <div className="box mr-1" />                                    
//               <span variant="link"
//                       onClick={()=>props.handleSalebrand(4)}
//                       className="fleft-link">
//               西北烤肉
//               </span>
//             </li>

//             <li className="d-flex my-1">
//               <span className="fs-bold grass fs-20">食品分類</span>
//             </li>
//             <li className={"ml-2 d-flex my-1 fleft-link " + (props.salecateid == 1 ? "fleft-active" : "")}>
//               <div className="box mr-1" />
//               <span variant="link"
//                       onClick={()=>props.handleSalecateid(1)}
//                       className="fleft-link">
//               冷凍食品
//               </span>
//             </li>
//             <li className={"ml-2 d-flex my-1 fleft-link " + (props.salecateid == 2 ? "fleft-active" : "")}>
//               <div className="box mr-1" />
//               <span variant="link"
//                       onClick={()=>props.handleSalecateid(2)}
//                       className="fleft-link">
//               冷藏食品
//               </span>
//             </li>
//             <li className={"ml-2 d-flex my-1 fleft-link " + (props.salecateid == 3 ? "fleft-active" : "")}>
//               <div className="box mr-1" />
//               <span variant="link"
//                       onClick={()=>props.handleSalecateid(3)}
//                       className="fleft-link">
//               生鮮食品
//               </span>
//             </li>
//             <li className={"ml-2 d-flex my-1 fleft-link " + (props.salecateid == 4 ? "fleft-active" : "")}>
//               <div className="box mr-1" />
//               <span variant="link"
//                       onClick={()=>props.handleSalecateid(4)}
//                       className="fleft-link">
//               素食專區
//               </span>
//             </li>
//           </ul>
//         </ul>
//       </ListGroup> 
//     </div>

//     {/* 選單RWD */}
//     <div class="row f-rwdLeftside">
//       <span variant="link"
//             onClick={props.handleSaleAll}
//             className={"fs-bold fleft-all" + (props.salebrand === 0 && props.salecateid === 0 ? "-active" : "")}>
//               全站商品
//       </span> 
//       <span><i class="fas fa-caret-down pl-2"></i></span>
//     </div>
//     <div class="row f-rwdLeftside">
//        <ul className="p-0 my-2 list-unstyled">
//           <ul className="p-0 my-2 list-unstyled">
//             <li className="d-flex my-1">
//               <span className="fs-bold grass">選擇品牌</span>
//             </li>            
//             <li className={"ml-2 d-flex my-1 fleft-link " + (props.salebrand == 1 ? "fleft-active" : "")}>
//               <div className="box mr-1" />                                    
//               <span variant="link"
//                       onClick={()=>props.handleSalebrand(1)}
//                       className="">
//               桂冠食品
//               </span> 
//             </li>
//             <li className={"ml-2 d-flex my-1 fleft-link " + (props.salebrand == 2 ? "fleft-active" : "")}>
//               <div className="box mr-1" />                  
//               <span variant="link"
//                       onClick={()=>props.handleSalebrand(2)}
//                       className="fleft-link ">
//               買肉找我
//               </span>
//             </li>            
//             <li className={"ml-2 d-flex my-1 fleft-link " + (props.salebrand == 3 ? "fleft-active" : "")}>
//               <div className="box mr-1" />                  
//               <span variant="link"
//                       onClick={()=>props.handleSalebrand(3)}
//                       className="fleft-link ">
//               七里香
//               </span>
//             </li>
//             <li className={"ml-2 d-flex my-1 fleft-link " + (props.salebrand == 4 ? "fleft-active" : "")}>
//               <div className="box mr-1" />                                    
//               <span variant="link"
//                       onClick={()=>props.handleSalebrand(4)}
//                       className="fleft-link">
//               西北烤肉
//               </span>
//             </li>

//             <li className="d-flex my-1">
//               <span className="fs-bold grass">食品分類</span>
//             </li>
//             <li className={"ml-2 d-flex my-1 fleft-link " + (props.salecateid == 1 ? "fleft-active" : "")}>
//               <div className="box mr-1" />
//               <span variant="link"
//                       onClick={()=>props.handleSalecateid(1)}
//                       className="fleft-link">
//               冷凍食品
//               </span>
//             </li>
//             <li className={"ml-2 d-flex my-1 fleft-link " + (props.salecateid == 2 ? "fleft-active" : "")}>
//               <div className="box mr-1" />
//               <span variant="link"
//                       onClick={()=>props.handleSalecateid(2)}
//                       className="fleft-link">
//               冷藏食品
//               </span>
//             </li>
//             <li className={"ml-2 d-flex my-1 fleft-link " + (props.salecateid == 3 ? "fleft-active" : "")}>
//               <div className="box mr-1" />
//               <span variant="link"
//                       onClick={()=>props.handleSalecateid(3)}
//                       className="fleft-link">
//               生鮮食品
//               </span>
//             </li>
//             <li className={"ml-2 d-flex my-1 fleft-link " + (props.salecateid == 4 ? "fleft-active" : "")}>
//               <div className="box mr-1" />
//               <span variant="link"
//                       onClick={()=>props.handleSalecateid(4)}
//                       className="fleft-link">
//               素食專區
//               </span>
//             </li>
//           </ul>
//         </ul>
//     </div>
//   </>
// );

// export default FoodLeftside;
