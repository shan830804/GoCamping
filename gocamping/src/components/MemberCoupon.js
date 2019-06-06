import React from 'react';
import { Nav, Image, Tab } from 'react-bootstrap';
import CouponGain from '../components/CouponGain'
import Pagination from '../components/Pagination'
class MemberCoupon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1,
            coupon_records: [],
            coupon_valid: [],
            coupon_used: [],
            coupon_expired: [],
            totalPages: 0
        }
    }

    // async componentDidMount() {
    //     try {
    //       await this.setState({ loading: true })
    //       let currentPage = this.state.currentPage

    //       let url = 'http://localhost:5000/coupongainrecords/'+currentPage

    //       let data={
    //         account:localStorage.getItem('mem_account')
    //       }
    //       const response = await fetch(url, {
    //         method: 'POST',
    //         credentials: 'include',
    //         headers: new Headers({
    //           Accept: 'application/json',
    //           'Content-Type': 'application/json',
    //         }),
    //         body:JSON.stringify(data)
    //       })

    //       if (!response.ok) throw new Error(response.statusText)

    //       const responseJsonObject = await response.json()
    //       console.log(responseJsonObject)


    //       let totalPages = Math.ceil(responseJsonObject.total/10)
    //       let coupon_records = responseJsonObject.coupon_records
    //       let coupon_valid = coupon_records.filter(record=>record.coupon_valid==1 && new Date(record.coupon_expire)> new Date())
    //       let coupon_used = coupon_records.filter(record=>record.coupon_valid==3)
    //       let coupon_expired = coupon_records.filter(record=>record.coupon_valid==1 && new Date(record.coupon_expire)< new Date())
    //       // console.log(responseJsonObject)
    //       await this.setState({ coupon_records: coupon_records,coupon_valid:coupon_valid,coupon_used:coupon_used,coupon_expired:coupon_expired,totalPages:totalPages})

    //       this.setState({ loading: false })
    //     } catch (e) {
    //     } finally {
    //     }

    //   }
    async componentDidMount() {
        try {
            await this.setState({ loading: true })


            let url = 'http://localhost:5000/coupongainrecords'

            let data = {
                account: localStorage.getItem('mem_account')
            }
            const response = await fetch(url, {
                method: 'POST',
                // credentials: 'include',
                headers: new Headers({
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }),
                body: JSON.stringify(data)
            })

            if (!response.ok) throw new Error(response.statusText)

            const responseJsonObject = await response.json()
            console.log(responseJsonObject)


            let totalPages = Math.ceil(responseJsonObject.total / 10)
            let coupon_records = responseJsonObject.coupon_records
            let coupon_valid = coupon_records.filter(record => record.coupon_valid == 1 && new Date(record.coupon_expire) > new Date())
            let coupon_used = coupon_records.filter(record => record.coupon_valid == 3)
            let coupon_expired = coupon_records.filter(record => record.coupon_valid == 1 && new Date(record.coupon_expire) < new Date())
            // console.log(responseJsonObject)
            await this.setState({ coupon_records: coupon_records, coupon_valid: coupon_valid, coupon_used: coupon_used, coupon_expired: coupon_expired, totalPages: totalPages })

            this.setState({ loading: false })
        } catch (e) {
        } finally {
        }

    }

    changeCurrentPage = async (currentPage) => {
        try {
            await this.setState({ loading: true, currentPage: currentPage })
            let keyword = this.state.keyword
            let url = 'http://localhost:5000/getcoupons/' + currentPage
            url = keyword ? 'http://localhost:5000/getcoupons/' + currentPage + '/' + keyword : 'http://localhost:5000/getcoupons/' + currentPage
            const response = await fetch(url, {
                method: 'GET',
                headers: new Headers({
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }),
            })

            if (!response.ok) throw new Error(response.statusText)

            const responseJsonObject = await response.json()

            let coupons = responseJsonObject.coupons

            await this.setState({ coupons: coupons })

            this.setState({ loading: false })
        } catch (e) {
        }

    };

    render() {
        return (
            <main className="col-md-10 col-sm-12 my-2">
                <h5 className="text-center rwd_title">我的折價券</h5>
                <Tab.Container defaultActiveKey="valid" className="">
                    <Nav variant="tabs" defaultActiveKey="valid">
                        <Nav.Item>
                            <Nav.Link eventKey="valid" href="#">可使用</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="used">已兌換</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="expired">已過期</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="valid">
                            {/* <div className="d-flex row border p-sm-3 mt-3">
                            <div className="col-sm-2 d-flex align-items-center p-sm-0">
                                <figure className="order_avatar m-0">
                                    <Image src="../../images/toothless.jpg" />
                                </figure>
                            </div>
                            <div className="col-sm-10 d-flex justify-content-between">
                                <div className="d-flex flex-column justify-content-center">
                                    <span className="mb-sm-1">COUPON名稱</span>
                                    <span className="fw-light mb-sm-1 ground"><i className="far fa-clock"></i> 適用期間：4月25日 ~ 4月27日</span>
                                    <span className="fw-light mb-sm-3">楓之谷露營區<br></br>訂單滿10000元結帳現打85折</span>
                                    <span className="fw-light fs-14">>>>前往營地相關頁面</span>
                                </div>
                                <div className="d-flex flex-column justify-content-end">
                                    <span className="text-right fs-24 p-2 forest">85折</span>
                                    <span className="fs-20 fw-light p-2 forest coupon_code">ZC4184</span>
                                    
                                </div>
                            </div>
                        </div> */}
                            {
                                this.state.coupon_valid.map(record => {
                                    return <CouponGain record={record} />
                                })
                            }
                            {/* <Pagination  changeCurrentPage={this.changeCurrentPage} totalPages={this.state.coupon_valid.length/10} currentPage={this.state.currentPage}/> */}
                        </Tab.Pane>
                        <Tab.Pane eventKey="used">
                            {
                                this.state.coupon_used.map(record => {
                                    return <CouponGain record={record} />
                                })
                            }
                            {/* <Pagination  changeCurrentPage={this.changeCurrentPage} totalPages={this.state.coupon_used.length/10} currentPage={this.state.currentPage}/> */}
                        </Tab.Pane>
                        <Tab.Pane eventKey="expired">
                            {
                                this.state.coupon_expired.map(record => {
                                    return <CouponGain record={record} />
                                })
                            }
                            {/* <Pagination  changeCurrentPage={this.changeCurrentPage} totalPages={this.state.coupon_expired.length/10} currentPage={this.state.currentPage}/> */}
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </main>
        )
    }
}

export default MemberCoupon