import React from 'react';
import './../../components/Default.css'
import IndexSlider from './../../components/IndexSlider'
// import IndexEvent from './../../components/IndexEvent'
// import IndexCamp from './../../components/IndexCamp'
// import IndexRecommend from './../../components/IndexRecommend'
// import IndexSharefun from './../../components/IndexSharefun'
// import IndexFood from './../../components/IndexFood'
import IndexNew from './../../components/IndexNew'

  
  class Index extends  React.Component {
    render() {
      return (
          <>
            <IndexSlider/>
            <div className="container" style={{maxWidth:'1140px'}}>
                {/* <IndexEvent />
                <IndexCamp />
                <IndexRecommend/>
                <IndexSharefun/>
                <IndexFood/> */}
                <IndexNew/>
            </div>
            
        </>
      );
    }
  }
  export default Index;