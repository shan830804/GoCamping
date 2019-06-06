import React, { Component } from 'react'
import './Carousel.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'



class Carousel extends Component {
  constructor(){
    super()
    this.state={
      slide:0,
      width:0,
      slides:[
        {id:1,imgURL:`https://picsum.photos/id/101/1920/350`},
        {id:2,imgURL:`https://picsum.photos/id/202/1920/350`},
        {id:3,imgURL:`https://picsum.photos/id/313/1920/350`},
      ]
    }
  }

  updateWindowDimension=()=>{
    this.setState({ width: document.body.clientWidth,})
  }

  componentDidMount=()=>{
  this.updateWindowDimension()
  window.addEventListener('resize',()=>{
    this.updateWindowDimension()
  })

  

  
  setInterval(() => {
    if(this.state.slide< 2){
      this.setState({slide:this.state.slide+1})
    }else{
      this.setState({slide:0})
    }
  }, 3000);
  }
  toNextSlide=()=>{
    this.setState({slide:this.state.slide+1})
    if(this.state.slide>= 2){
      this.setState({slide:0})
        }
  }

  toPrevSlide=()=>{
    this.setState({slide:this.state.slide-1})
    if(this.state.slide<= 0){
      this.setState({slide:2})
        }
  }

  onMouseOver=(id)=>()=>{
    this.setState({slide:id-1})
  }

  render() {
    
    const {slides} = this.state
    return (
    <section className="mb-5" style={{width:"100%"}}>
      
      <div className="slider_wrap"> 
      
          <button className="slider_btn btn_left" onClick={this.toPrevSlide}><FaAngleLeft /></button>
          <button className="slider_btn btn_right" onClick={this.toNextSlide}><FaAngleRight /></button>         
          {
            slides.map(s=>(<div key={s.id} className="slide_content" style={{backgroundImage: `url(${s.imgURL})`,transform:`translateX(${this.state.slide*this.state.width*-1}px)`}}></div>))
          }
          <ul className="slider_dot">
          {
            slides.map(s=>{
              return (<li key={s.id} onMouseOver={this.onMouseOver(s.id)}></li>)
            })
          }
          </ul>
      </div>
    </section>
    )
  }
}




export default Carousel