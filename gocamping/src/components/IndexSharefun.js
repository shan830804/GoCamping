import React from 'react';
import './../pages/index/index.css'
import { Link } from 'react-router-dom'
import $ from 'jquery';

class IndexSharefun extends React.Component {
    constructor() {
        super()
        this.state = {
            contents: [],
            img_src:[]
        }
    }

    componentDidMount() {
        let self = this
        fetch('http://localhost:5000/indexShare', {
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
        .then(function(data) {
            let mysrc = []
            
            for (let i = 0; i <= data.length; i++) {
              let tofind = ''
              tofind = $('<div>' + data[i].post_content + '</div>')
              let src = $('img', tofind)
                .eq(0)
                .attr('src')
              mysrc.push(src)
            //   console.log(mysrc)
              self.setState({ contents: data, img_src: mysrc })
               
            //   console.log(this.state.img_src)
            }
           
          })
    
        .catch(function (err) {
            // Error :(
        })
    }
    
    render() {
        let data = this.state.contents;
        let img_src = this.state.img_src;
        // console.log(img_src);
        // data[0].event_name //
        return (
            <>
            <div className="index_camp py-5">
                <div className="row justify-content-between">
                    <h2 className="my-3 position-relative index_line fw-bold">新手入門</h2><br/>
                    <div className="py-3">
                        <Link to="#" className="btn-grass" role="button" aria-pressed="true">看更多</Link>
                    </div>
                    
                </div>
                
                <div className="card-deck">
                    {data.map((item, i) => (
                        
                    <div className="card position-relative shareHover" key={i}>
                        <Link to={'/ShareFun'}>
                            <div className="index_imgBox sheet position-relative">
                                <img className="main-img index_img" src={img_src[i]} alt="" />
                            </div>
                            <h5 className="card-title text-center indexShareText text-white fw-bold">{item.post_title}</h5>  
                        </Link>
                    </div>
                    
                    ))}   
                </div>
            </div>
            </>
        )
    }
}
export default IndexSharefun;