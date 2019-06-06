const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const mysql = require('mysql');
const bluebird = require('bluebird')
// Initialize the app
const app = express();
const port = process.env.PORT || 8888

// mern's code：https://youtu.be/a1hhL9z-fbU
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

/* 註冊與登入（將host_list的資料讀出） */
// 把routes的Hosts引用進來（也是後端文件，只是切出去便於管理）
const Hosts = require('../routes/Hosts')
// 在server的主要檔案中(app.js)，讓server知道有把功能切出去
app.use('/host', Hosts)

// connect database
const db = mysql.createConnection({
  host: '192.168.27.37',
  user: 'sammie',
  password: 'admin',
  database: 'go_camping'
});
db.connect();

bluebird.promisifyAll(db)

/*
// 營地新增+區域*（寫成兩個db.queryAsync，另外前端要傳id近來）
app.post('/host/add/:camp_id', (req, res) => {
  // const tbody = req.body
  var sql = "INSERT INTO `campsite_list` (`camp_id`, `host_id`, `camp_name`, `camp_intro`, `camp_img`, `camp_imgArea`, `camp_ownerName`, `camp_tel`, `camp_fax`, `camp_email`, `camp_address`, `camp_openTime`, `camp_detail`, `camp_location`, `camp_device`, `camp_service`, `camp_target`, `camp_notice`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.queryAsync(sql, req.body)
    .then(results => {
      if (results.affectedRows === 1) {
        return db.queryAsync("INSERT INTO `campsite_type` (`campArea_id`, `camp_id`, `camp_areapic`, `camp_name`, `camp_area`, `camp_type`, `camp_size`, `camp_number`, `camp_pricew`, `camp_priceh`, `camp_information`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)")
          .then(results => {
            console.log(results)
            res.json(JSON.stringify(results));
          })
      }
    })
})
*/

// 新增營地
app.post('/host/campAdd', (req, res) => {
  var sql = "INSERT INTO `campsite_list` SET ?";
  db.query(sql, req.body, (err, results) => {
    if (err) {
      console.log(err.message)
    } else {
      console.log(results);
      res.json(JSON.stringify(results));
    }
  })
})

// 新增區域
app.post('/host/campAddArea', (req, res) => {
  var sql = ("INSERT INTO `campsite_type` SET ?")
  db.query(sql, req.body, (err, results) => {
    if(err) {
      console.log(err.message)
    } else {
      console.log(results)
      res.json(JSON.stringify(results))
    }
  })
})

/*
// 營地列表
app.post('/host/campList', (req, res) => {
  var sql = "SELECT * FROM host_list left outer JOIN campsite_list on host_list.host_id=campsite_list.camp_id"
  db.query(sql, (err, results, fields) => {
    console.log(results);  // 會在終端機輸出
    res.send(JSON.stringify(results));  // 把結果用JSON的型態輸出（即可在React作使用了）
  })
})
*/

// 營地主管理的修改
app.post('/host/update/:host_acc', function (req, res) {
  var sql = "UPDATE `host_list` SET ? WHERE `host_acc`= '" + req.params.host_acc + "'";
  db.queryAsync(sql, req.body)
    .then(results => {
      if (results.affectedRows === 1) {
        return db.queryAsync("SELECT * FROM `host_list` WHERE `host_acc`= '" + req.params.host_acc + "'")
          .then(results => {
            console.log(req.body)
            res.json(JSON.stringify(results));
          })
      }
    })
})

/*
// 在react元件中fetch時，url為http://localhost:8888/host
app.get('/host', (req, res) => {
  // SQL語句
  const SELECT_ALL_HOST_QUERY = 'SELECT * FROM host_list';  // 取得host_list所有欄位
  // const SELECT_HOST_ACC_QUERY = "SELECT host_acc, host_pwd FROM host_list";  // 取得host_list中的host_acc與host_pwd欄位
  // 將資料庫的數據取出
  db.query(SELECT_ALL_HOST_QUERY, (err, results, fields) => {
    console.log(results);  // 會在終端機輸出
    res.send(JSON.stringify(results));  // 把結果用JSON的型態輸出（即可在Rreact作使用了）
  })
});
// 在react元件中fetch時，url為http://localhost:8888/campsite
app.get('/campsite', (req, res) => {
  // SQL語句
  const SELECT_ALL_CAMPSITE_QUERY = 'SELECT * FROM campsite_list';  // 取得campsite_list所有欄位
  // 將資料庫的數據取出
  db.query(SELECT_ALL_CAMPSITE_QUERY, (error, results, fields) => {
    console.log(results);
    res.send(JSON.stringify(results));
  });
});
*/

// Start the server
app.listen(port, () => {
  console.log("Server is running on port: " + port)
})