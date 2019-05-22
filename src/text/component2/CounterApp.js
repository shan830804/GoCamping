import React from 'react'

class CounterApp extends React.Component {
  constructor() {
    super()
    this.state = {
      total: 0,
      //放入loading的icon
      loading: false,
    }
  }

  // 元件 "已經" 呈現在網頁上
  //使用async,await,用同步的語法寫一部的程式
  //try{}catch(error){}finally{}，提供處理部分或所有可能的錯誤時仍在執行程式碼中指定的程式碼區塊，可能發生的方法，
  async componentDidMount() {
    //this.timerID = setInterval(this.tick, 1000)
    try {
      //一進網頁就先呈現loading狀態
      await this.setState({ loading: true })
      const response = await fetch('http://localhost:5555/counter/1', {
        //GET不能有body
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
      const jsonObject = await response.json()

      await this.setState({ total: jsonObject.total })
      //放try的最下面或放finally裡面都可以
      await setTimeout(() => this.setState({ loading: false }), 3 * 1000)
    } catch (error) {
      console.log(error)
    } finally {
      //   await setTimeout(() => this.setState({ loading: false }), 3 * 1000)
    }
    //   .then(response => {
    //     //ok 代表狀態碼在範圍 200‐299
    //     if (!response.ok) throw new Error(response.statusText)
    //     return response.json()
    //   })
    //   .then(jsonObject => {
    //     //console.log(jsonObject)
    //     this.setState({ total: jsonObject.total })
    //   })
    //   .catch(function(err) {
    // Error :(
    //   })
  }

  // 元件 "即將" 卸載出網頁
  componentWillUnmount() {
    //clearInterval(this.timerID)
  }

  //   tick = () => {
  //     this.setState(
  //       {
  //         time: new Date().toLocaleTimeString(),
  //       },
  //       () => {
  //         // 在這地方執行，才能確保得到setState設定好time的值
  //         document.title = this.state.time
  //       }
  //     )
  //使用async,await,用同步的語法寫一部的程式，除了很好寫以外也沒有伺服器端要執行完後再回傳到客戶端要到then才寫的問題
  handleClick = value => async () => {
    try {
      const data = { total: this.state.total + value }

      const response = await fetch('http://localhost:5555/counter/1', {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })

      const jsonObject = await response.json()

      console.log(jsonObject)

      await this.setState(data)
    } catch (error) {
      console.log(error)
    } finally {
    }
  }

  // 在這地方執行會看到setState有異步執行的特徵
  //document.title = this.state.time
  //}

  //   handleClick = value => () => {
  //     const data = { total: this.state.total + value }
  //     //  this.setState(data)
  //     //以下是更新
  //     fetch('http://localhost:5555/counter/1', {
  //       method: 'PUT',
  //       //PUT更新,JSON中的數值轉換成字串
  //       body: JSON.stringify(data),
  //       headers: new Headers({
  //         Accept: 'application/json', //JSON1不能用的格式:函式、undefined
  //         'Content-Type': 'application/json',
  //       }),
  //     })
  //       .then(response => {
  //         //ok 代表狀態碼在範圍 200‐299
  //         if (!response.ok) throw new Error(response.statusText)
  //         return response.json()
  //       })
  //       .then(jsonObject => {
  //         //伺服器端要執行完後再回傳到客戶端
  //         // this.setState(data)
  //         //typeof 檢查是哪種類型
  //         console.log(jsonObject)
  //       })
  //       .catch(function(err) {
  //         // Error :(
  //       })
  //   }

  render() {
    return (
      <>
        {/* 用三元運算式判斷是否有在loading */}
        {this.state.loading ? (
          <div className="fa-2x">
            <i className="fas fa-circle-notch fa-spin" />
            資料載入中...
          </div>
        ) : (
          <>
            <h1>{this.state.total}</h1>
            <button onClick={this.handleClick(1)}>+1</button>
            <button onClick={this.handleClick(-1)}>-1</button>
          </>
        )}
      </>
    )
  }
}

export default CounterApp
