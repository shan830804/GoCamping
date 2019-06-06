const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const moment = require('moment-timezone');
const bluebird = require('bluebird');
const multer = require('multer');
const fs = require('fs');
const uuidv4 = require('uuid/v4');

const mysql = require('mysql');
const db = mysql.createConnection({
  // host:'localhost',
  // user:'su',
  // password:'0000',
  // database:'gocamping'

  // host: '192.168.27.37',
  // user: 'sammie',
  // password: 'admin',
  // database: 'go_camping'

  host: "localhost",
  user: "ring",
  password: "admin",
  database: "go_camping"
});

db.connect();
bluebird.promisifyAll(db);
const app = express();
const upload = multer({ dest: 'tmp_uploads/' });

// var whitelist = ['http://localhost:3000', 'http://192.168.27.58:3000', undefined, 'http://192.168.27.58:5555', 'http://localhost:5555']

var whitelist = [
  "http://localhost:5000",
  "http://192.168.24.90:3000",
  "http://192.168.24.90:5000",
  undefined,
  "http://localhost:3000"
];

var corsOptions = {
  credentials: true,
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
};
app.use(cors(corsOptions));
app.use(cors());  // Jen

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

/*==========================================  START EVENT SERVER =============================================*/
app.get('/event', (req, res) => {
  let sql = "SELECT * FROM `event_list` WHERE `event_shelf`= 0 ORDER BY `event_id` DESC LIMIT 5";

  db.query(sql, (error, results, fields) => {
    // console.log(results);
    for (let s in results) {
      results[s].event_applyStart2 = moment(results[s].event_applyStart).format('YYYY-MM-DD');
      results[s].event_applyEnd2 = moment(results[s].event_applyEnd).format('YYYY-MM-DD');
      results[s].event_dateStart2 = moment(results[s].event_dateStart).format('YYYY-MM-DD');
      results[s].event_dateEnd2 = moment(results[s].event_dateEnd).format('YYYY-MM-DD');
    }
    res.send(JSON.stringify(results));
  });
});
app.get('/eventall', (req, res) => {
  let sql = "SELECT * FROM `event_list` WHERE `event_shelf`= 0 ORDER BY `event_id` DESC";

  db.query(sql, (error, results, fields) => {
    // console.log(results);

    for (let s in results) {
      results[s].event_applyStart2 = moment(results[s].event_applyStart).format('YYYY-MM-DD');
      results[s].event_applyEnd2 = moment(results[s].event_applyEnd).format('YYYY-MM-DD');
      results[s].event_dateStart2 = moment(results[s].event_dateStart).format('YYYY-MM-DD');
      results[s].event_dateEnd2 = moment(results[s].event_dateEnd).format('YYYY-MM-DD');
    }
    res.send(JSON.stringify(results));
  });
});

app.get('/eventTeaser', (req, res) => {
  let sql = "SELECT * FROM `event_list` WHERE `event_shelf`= 3";

  db.query(sql, (error, results, fields) => {
    // console.log(results);

    for (let s in results) {
      results[s].event_applyStart2 = moment(results[s].event_applyStart).format('YYYY-MM-DD');
      results[s].event_applyEnd2 = moment(results[s].event_applyEnd).format('YYYY-MM-DD');
      results[s].event_dateStart2 = moment(results[s].event_dateStart).format('YYYY-MM-DD');
      results[s].event_dateEnd2 = moment(results[s].event_dateEnd).format('YYYY-MM-DD');
    }
    res.send(JSON.stringify(results));
  });
});

app.get('/eventFeedback', (req, res) => {
  // let sql = "SELECT * FROM `event_feedback` JOIN `event_list` ON `event_list`.`event_id`=`event_feedback`.`event_id` ";
  let sql = "SELECT * FROM event_feedback JOIN event_list ON event_list.event_id = event_feedback.event_id JOIN member_list ON member_list.mem_account = event_feedback.member_id";

  db.query(sql, (error, results, fields) => {
    console.log(results);
    for (let s in results) {
      results[s].event_dateStart2 = moment(results[s].event_dateStart).format('YYYY-MM-DD');
      results[s].event_dateEnd2 = moment(results[s].event_dateEnd).format('YYYY-MM-DD');
    }
    res.send(JSON.stringify(results));
  });
});


app.get('/eventRecommend', (req, res) => {
  let sql = "SELECT * FROM `event_list` WHERE `event_shelf`= 0 ORDER BY RAND() LIMIT 3";

  // console.log(req.query.event_id);
  db.query(sql, [req.query.event_id], (error, results, fields) => {
    // console.log(results);

    for (let s in results) {
      results[s].event_applyStart2 = moment(results[s].event_applyStart).format('YYYY-MM-DD');
      results[s].event_applyEnd2 = moment(results[s].event_applyEnd).format('YYYY-MM-DD');
      results[s].event_dateStart2 = moment(results[s].event_dateStart).format('YYYY-MM-DD');
      results[s].event_dateEnd2 = moment(results[s].event_dateEnd).format('YYYY-MM-DD');
    }
    res.send(JSON.stringify(results));
  });
});

app.get('/eventInfo', (req, res) => {
  let sql = "SELECT * FROM `event_list` JOIN `campsite_list` WHERE `campsite_list`.`camp_id`=`event_list`.`camp_id` AND `event_id`=?";
  console.log(req.query.event_id);
  db.query(sql, [req.query.event_id], (error, results, fields) => {
    console.log(results);

    for (let s in results) {
      results[s].event_applyStart2 = moment(results[s].event_applyStart).format('YYYY-MM-DD');
      results[s].event_applyEnd2 = moment(results[s].event_applyEnd).format('YYYY-MM-DD');
      results[s].event_dateStart2 = moment(results[s].event_dateStart).format('YYYY-MM-DD');
      results[s].event_dateEnd2 = moment(results[s].event_dateEnd).format('YYYY-MM-DD');
    }
    res.send(JSON.stringify(results));
  });
});

app.get('/eventApplyBtn', (req, res) => {
  // console.log(req.query.event_id);
  let sql = "SELECT event_id, COUNT(event_id) num FROM event_applylist WHERE `apply_order`=0 AND event_id=? GROUP BY event_id";

  db.query(sql, [req.query.event_id], (error, results) => {
    // console.log(results);
    if (error) throw error
    console.log(results);
    res.send(JSON.stringify(results));
    // res.send('response');
  });
});


// app.get('/EventInsert', (req, res)=>{
//     console.log(req.query.event_id);
//     res.send(req.query.event_id);
// });
app.post('/EventInsert', (req, res) => {
  // console.log(req.query.event_id);
  const tbody = req.body;
  // console.log(tbody);
  function _uuid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + s4();
  }
  let uuid = _uuid();

  let now = new Date().toLocaleString();
  // console.log(now);


  db.queryAsync("INSERT INTO `event_applyorder`(`apply_id`,`event_id`,`mem_account`, `apply_num`,`apply_date`,`apply_amount`) VALUES (?,?,?,?,?,?)", [uuid, req.query.event_id, tbody[0].mem_account, tbody[0].apply_num, now, tbody[0].apply_amount])
    .then(results => {

      if (results.affectedRows === 1) {
        let values = [];
        for (var i = 0; i < tbody.length; i++)
          values.push([uuid, req.query.event_id, tbody[i].applyList_name, tbody[i].applyList_idn, tbody[i].applyList_mobile, tbody[i].applyList_email, tbody[i].applyList_emg, tbody[i].applyList_emgMobile, tbody[i].applyList_remark]);
        // console.log(values);
        return db.queryAsync("INSERT INTO `event_applylist`(`apply_id`, `event_id`, `applyList_name`, `applyList_idn`,`applyList_mobile`,`applyList_email`, `applyList_emg`,`applyList_emgMobile`, `applyList_remark`) VALUES ?", [values])

          .then(results => {
            if (results.affectedRows === i) {
              data = [{ apply_id: uuid, apply_date: now }]
              res.send(JSON.stringify(data));
              console.log(data);
              // res.send(uuid);
            } else {

            }
          });
      }
    });
})
/*======================= START INDEX SERVER =============================*/
app.get('/indexCamp', (req, res) => {
  let sql = "SELECT `camp_intro`,`camp_name`,`camp_id` FROM `campsite_list` ORDER BY RAND() LIMIT 3";
  // console.log(req.query.event_id);
  db.query(sql, (error, results, fields) => {
    // console.log(results);

    res.send(JSON.stringify(results));
  });
});

app.get('/indexCamp_rec', (req, res) => {
  let sql = "SELECT `camp_intro`,`camp_name`,`camp_id` FROM `campsite_list` ORDER BY RAND() LIMIT 4";
  // console.log(req.query.event_id);
  db.query(sql, (error, results, fields) => {
    // console.log(results);

    res.send(JSON.stringify(results));
  });
});

app.get('/indexShare', (req, res) => {
  let sql = "SELECT `post_title`,`post_id`,`post_content` FROM `share_post` WHERE `post_cate` IN (1, 2, 3) ORDER BY RAND() LIMIT 4";
  // console.log(req.query.event_id);
  db.query(sql, (error, results, fields) => {
    res.send(JSON.stringify(results));
  });
});

app.get('/indexFood', (req, res) => {
  let sql = "SELECT `salepage_id`,`salepage_price`,`salepage_name`,`salepage_image` FROM `salepage` ORDER BY RAND() LIMIT 4";
  // console.log(req.query.event_id);
  db.query(sql, (error, results, fields) => {
    // console.log(results);

    res.send(JSON.stringify(results));
  });
});

app.get('/memberApplyEvent', (req, res) => {

  // let sql = "SELECT * FROM `event_applyorder` JOIN `event_list`  ON `event_applyorder`.`event_id`=`event_list`.`event_id` JOIN `event_applylist` ON `event_applylist`.`apply_id`=`event_applyorder`.`apply_id` WHERE mem_account=? ORDER BY `apply_date` DESC";
  let sql = "SELECT * FROM `event_applyorder` JOIN `event_list`  ON `event_applyorder`.`event_id`=`event_list`.`event_id` WHERE mem_account=? ORDER BY `apply_date` DESC";
  // console.log(req.query.event_id);
  db.query(sql, [req.query.mem_id], (error, results, fields) => {
    // console.log(results);

    for (let s in results) {
      results[s].event_applyStart2 = moment(results[s].event_applyStart).format('YYYY-MM-DD');
      results[s].event_applyEnd2 = moment(results[s].event_applyEnd).format('YYYY-MM-DD');
      results[s].event_dateStart2 = moment(results[s].event_dateStart).format('YYYY-MM-DD');
      results[s].event_dateEnd2 = moment(results[s].event_dateEnd).format('YYYY-MM-DD');
    }
    res.send(JSON.stringify(results));
  });
});
app.get('/memberEventList', (req, res) => {
  let sql = "SELECT * FROM `event_applylist` JOIN `event_applyorder` ON `event_applylist`.`apply_id`=`event_applyorder`.`apply_id` WHERE `event_applylist`.`apply_id`=?";
  console.log(req.query.apply_id);
  db.query(sql, [req.query.apply_id], (error, results, fields) => {
    // console.log(results);

    for (let s in results) {
      results[s].event_applyStart2 = moment(results[s].event_applyStart).format('YYYY-MM-DD');
      results[s].event_applyEnd2 = moment(results[s].event_applyEnd).format('YYYY-MM-DD');
      results[s].event_dateStart2 = moment(results[s].event_dateStart).format('YYYY-MM-DD');
      results[s].event_dateEnd2 = moment(results[s].event_dateEnd).format('YYYY-MM-DD');
    }
    res.send(JSON.stringify(results));
  });
});

// =================================START SHAREFUN==========================

app.get("/hot", (req, res) => {
  db.query(
    "SELECT * FROM share_post WHERE post_cate IN (4, 5, 6) AND post_visible='顯示' ORDER BY browse_num DESC LIMIT 5",
    function (error, results, fields) {
      if (error) throw error;
      res.json(results);
    }
  );
});

app.get("/new-idx", (req, res) => {
  db.query(
    "SELECT * FROM share_post WHERE post_cate IN (4, 5, 6) AND post_visible='顯示' ORDER BY post_id DESC LIMIT 6",
    function (error, results, fields) {
      if (error) throw error;
      res.json(results);
    }
  );
});

app.get("/rookie-idx", (req, res) => {
  db.query(
    "SELECT * FROM share_post WHERE post_cate IN (1, 2, 3) AND post_visible='顯示' ORDER BY post_id DESC LIMIT 4",
    function (error, results, fields) {
      if (error) throw error;
      res.send(JSON.stringify(results));
    }
  );
});

app.get("/share-equip", (req, res) => {
  db.query(
    "SELECT * FROM share_post WHERE post_cate=1 AND post_visible='顯示' ORDER BY post_id DESC LIMIT 6",
    function (error, results, fields) {
      if (error) throw error;
      res.send(JSON.stringify(results));
    }
  );
});

app.get("/share-tent", (req, res) => {
  db.query(
    "SELECT * FROM share_post WHERE post_cate=2 AND post_visible='顯示' ORDER BY post_id DESC LIMIT 6",
    function (error, results, fields) {
      if (error) throw error;
      res.send(JSON.stringify(results));
    }
  );
});

app.get("/share-weather", (req, res) => {
  db.query(
    "SELECT * FROM share_post WHERE post_cate=3 AND post_visible='顯示' ORDER BY post_id DESC LIMIT 6",
    function (error, results, fields) {
      if (error) throw error;
      res.send(JSON.stringify(results));
    }
  );
});

app.get("/post", (req, res) => {
  db.query(
    "SELECT * FROM share_post LEFT JOIN member_list ON share_post.mem_id = member_list.mem_id WHERE share_post.post_id=? AND post_visible='顯示'",
    [req.query.post_id],
    function (error, results, fields) {
      if (error) throw error;
      res.send(JSON.stringify(results));
    }
  );
});

app.post("/post", (req, res) => {
  db.query(
    "UPDATE share_post SET browse_num=browse_num+1 WHERE post_id=? AND post_visible='顯示'",
    [parseInt(req.query.post_id)],
    function (error, results, fields) {
      if (error) throw error;
      res.send(JSON.stringify(results));
    }
  );
});

app.post("/ckeditor", (req, res) => {
  let time = new Date().toLocaleString();
  // let jp = JSON.parse(req.body)
  // console.log(req.body)
  db.query(
    "INSERT INTO `share_post`( `post_title`, `post_cate`, `theme_cate`, `post_content`, `post_time`,`post_visible`, `mem_id` ) VALUES ( ?, ?, ?, ?, ?, ?, ? )",
    [
      req.body.post_title,
      req.body.post_cate,
      req.body.theme_cate,
      req.body.post_content,
      time,
      req.body.post_visible,
      req.body.mem_id
    ],
    function (error, results, fields) {
      if (error) throw error;
      res.send(JSON.stringify(results));
    }
  );
});

app.post("/update", (req, res) => {
  let time = new Date().toLocaleString();
  console.log(req.body)
  db.query(
    "UPDATE `share_post` SET`post_title`=?,  `post_cate`=?,  `theme_cate`=?, `post_content`=?, `post_editTime`=?, `post_visible`=? WHERE `post_id`=?",
    [
      req.body.post_title,
      req.body.post_cate,
      req.body.theme_cate,
      req.body.post_content,
      time,
      req.body.post_visible,
      req.body.post_id,
    ],
    function (error, results, fields) {
      if (error) throw error;
      res.send(JSON.stringify(results));
    }
  );
});

app.post('/delete', (req, res) => {
  db.query("DELETE from share_post WHERE post_id = ?",
    [req.body.post_id],
    function (error, results, fields) {
      if (error) throw error;
      res.send(JSON.stringify(results));
    });
});

app.get("/post-list/:m_id", (req, res) => {
  let m_id = parseInt(req.params.m_id);
  console.log(m_id)
  db.query(
    "SELECT * FROM share_post WHERE mem_id=? AND post_visible='顯示' ORDER BY post_id DESC",
    [m_id],
    function (error, results, fields) {
      if (error) throw error;
      res.send(JSON.stringify(results));
    }
  );
});

app.get("/hottest", (req, res) => {
  db.query(
    "SELECT * FROM share_post WHERE post_cate IN (4, 5, 6) AND post_visible='顯示' ORDER BY browse_num DESC LIMIT 18",
    function (error, results, fields) {
      if (error) throw error;
      res.send(JSON.stringify(results));
    }
  );
});

app.get("/latest", (req, res) => {
  db.query(
    "SELECT * FROM share_post WHERE post_cate IN (4, 5, 6) AND post_visible='顯示' ORDER BY post_id DESC",
    function (error, results, fields) {
      if (error) throw error;
      res.send(JSON.stringify(results));
    }
  );
});

app.get("/allNatural", (req, res) => {
  db.query(
    "SELECT * FROM share_post WHERE theme_cate='natural' AND post_visible='顯示' ORDER BY browse_num DESC",
    function (error, results, fields) {
      if (error) throw error;
      res.send(JSON.stringify(results));
    }
  );
});

app.get("/share-family", (req, res) => {
  db.query(
    "SELECT * FROM share_post WHERE theme_cate='family' AND post_visible='顯示' ORDER BY post_id DESC",
    function (error, results, fields) {
      if (error) throw error;
      res.send(JSON.stringify(results));
    }
  );
});

app.get("/theme-family", (req, res) => {
  db.query(
    "SELECT * FROM share_post WHERE theme_cate='family' AND post_visible='顯示' ORDER BY post_id DESC LIMIT 3",
    function (error, results, fields) {
      if (error) throw error;
      res.send(JSON.stringify(results));
    }
  );
});

app.get("/theme-food", (req, res) => {
  db.query(
    "SELECT * FROM share_post WHERE theme_cate='food' AND post_visible='顯示' ORDER BY post_id DESC LIMIT 3",
    function (error, results, fields) {
      if (error) throw error;
      res.send(JSON.stringify(results));
    }
  );
});

app.get("/theme-natural", (req, res) => {
  db.query(
    "SELECT * FROM share_post WHERE theme_cate='natural' AND post_visible='顯示' ORDER BY post_id DESC LIMIT 3",
    function (error, results, fields) {
      if (error) throw error;
      res.send(JSON.stringify(results));
    }
  );
});

app.get("/theme-equipments", (req, res) => {
  db.query(
    "SELECT * FROM share_post WHERE theme_cate='equipments' AND post_visible='顯示' ORDER BY post_id DESC LIMIT 3",
    function (error, results, fields) {
      if (error) throw error;
      res.send(JSON.stringify(results));
    }
  );
});


// 會員資料表

app.get("/my-share-card", (req, res) => {
  db.query(
    "SELECT mem_id, mem_avatar, mem_name, mem_intro FROM member_list WHERE mem_id=?",
    [req.query.mem_id],
    function (error, results, fields) {
      if (error) throw error;
      res.send(JSON.stringify(results));
    }
  );
});

app.get("/share-profile", (req, res) => {
  db.query(
    "SELECT * FROM share_post LEFT JOIN member_list ON share_post.mem_id = member_list.mem_id WHERE share_post.mem_id=? AND post_visible='顯示' ORDER BY share_post.post_id DESC",
    [req.query.mem_id],
    function (error, results, fields) {
      if (error) throw error;
      res.send(JSON.stringify(results));
    }
  );
});

//---------------------------行銷---------------------------------
app.post('/getCouponsLimit/:limit', (req, res) => {
  // console.log(req.params)
  let results = {}
  let sql = 'SELECT * FROM coupon_genre as o LEFT OUTER JOIN campsite_list as p on o.camp_id = p.camp_id  LIMIT '+req.params.limit;
  if(req.body.mem_account){
    sql = 'SELECT o.coupon_genre_id, o.coupon_name, o.discount_unit,o.discount_type,o.coupon_expire,o.camp_id, o.order_price, o.order_night, o.discription, p.camp_id, p.camp_name, p.camp_img FROM coupon_genre as o LEFT OUTER JOIN campsite_list as p on o.camp_id = p.camp_id LEFT JOIN (SELECT DISTINCT(coupon_genre_id), mem_account FROM coupon_gain WHERE mem_account = "'+req.body.mem_account+'" ) as q ON o.coupon_genre_id= q.coupon_genre_id WHERE mem_account IS NULL  LIMIT '+req.params.limit;
  }
  console.log(sql)
  let query = db.queryAsync(sql).then(result=>{
    // console.log(result)
    results.coupons = result
    if(req.body.mem_account){
      let account = req.body.mem_account
      sql = "SELECT * FROM coupon_gain WHERE mem_account = '"+account+"'"
      return db.queryAsync(sql)
    }
  }).then(result=>{
    if(result){
      results.coupon_records = result
    }
    res.json(results)
  })
});


app.get('/getPromoUserCamp/:page', (req, res) => {
  let results = {}
  let start = (req.params.page-1)*6
  let perPage = 6
  let sql = "SELECT p.promo_type, cl.camp_id, cl.camp_name, cl.city, cl.dist, cl.camp_intro ,cl.camp_target FROM promo_apply as p LEFT OUTER JOIN campsite_list as cl on p.camp_id = cl.camp_id  WHERE promo_type = 'promo_user' AND apply_valid = 1 ORDER BY `camp_id` ASC LIMIT "+start+','+perPage;
  db.queryAsync(sql).then(result=>{
    
    results.campsites=result

    sql = "SELECT COUNT(1) as total FROM promo_apply as o LEFT OUTER JOIN campsite_list as p on o.camp_id = p.camp_id WHERE promo_type = 'promo_user'"
    return db.queryAsync(sql)
  }).then(result=>{
    let total = result[0].total
    results.total=total


      let camp_ids = []
   

      for(let campsite of results.campsites){
        camp_ids.push(campsite.camp_id)
      }
    sql = "SELECT cp.camp_id, cp.camp_image FROM campsite_image as cp WHERE  "
        let index=1
        
        for(let camp_id of camp_ids){
          if(index!=camp_ids.length){
            sql+= ('camp_id = '+camp_id+ ' OR ')
          }else{
            sql+= ('camp_id = '+camp_id)
          }
          index++
        }

        
    return db.queryAsync(sql)
  }).then(result=>{
    results.camp_img = result

    sql = "SELECT ct.camp_id,ct.camp_type, ct.camp_pricew, ct.camp_priceh FROM campsite_type as ct WHERE "
         
          let camp_ids = []
   

          for(let campsite of results.campsites){
            camp_ids.push(campsite.camp_id)
          }
          index = 1
          for(let camp_id of camp_ids){
            if(index!=camp_ids.length){
              sql+= ('camp_id = '+camp_id+ ' OR ')
            }else{
              sql+= ('camp_id = '+camp_id)
            }
            index++
          }
          console.log(sql)
          return db.queryAsync(sql)
  }).then(result=>{
    results.camp_features = result
    sql = 'SELECT * FROM promo_user'

    return db.queryAsync(sql)

  }).then(result=>{
    results.promo_rules = result


    sql = "SELECT * FROM campsite_liked WHERE  "
    let camp_ids = []
          for(let campsite of results.campsites){
            camp_ids.push(campsite.camp_id)
          }
    let index=1
    
    for(let camp_id of camp_ids){
      if(index!=camp_ids.length){
        sql+= ('camp_id = '+camp_id+ ' OR ')
      }else{
        sql+= ('camp_id = '+camp_id)
      }
      index++
    }
    
    return db.queryAsync(sql)
  }).then(result=>{
    results.camp_liked = result
    // console.log(results)
    res.json(results)
  }).catch(err=>{
    res.json({errMsg:err})
  })
})




app.get('/getPromoPriceCamp/:page', (req, res) => {
  let results = {}
  let start = (req.params.page-1)*6
  let perPage = 6
  let sql = "SELECT p.promo_type, cl.camp_id, cl.camp_name, cl.city, cl.dist,cl.camp_intro ,cl.camp_target FROM promo_apply as p LEFT OUTER JOIN campsite_list as cl on p.camp_id = cl.camp_id  WHERE promo_type = 'promo_price' AND apply_valid = 1 ORDER BY `camp_id` ASC LIMIT "+start+','+perPage;
  db.beginTransaction(function(err){
    if(err) {throw err}
    console.log(sql)
    let query = db.query(sql, (err, campsites) => {
      if (err) {
        return db.rollback(function() {
          throw err;
        });
      }
      // console.log(campsites)
      results.campsites =campsites

      let camp_ids = []
      for(let campsite of campsites){
        camp_ids.push(campsite.camp_id)
      }


      sql = 'SELECT * FROM promo_apply as o LEFT OUTER JOIN campsite_list as p on o.camp_id = p.camp_id  WHERE promo_type = "promo_price"'
      query = db.query(sql, (err, camps) => {
        if (err) {
          return db.rollback(function() {
            throw err;
          });
        }
        let total = camps.length
        // console.log(total)
        results.total = total
        
        sql = "SELECT cp.camp_id, cp.camp_image FROM campsite_image as cp WHERE "
        let index=1
        
        for(let camp_id of camp_ids){
          if(index!=camp_ids.length){
            sql+= ('camp_id = '+camp_id+ ' OR ')
          }else{
            sql+= ('camp_id = '+camp_id)
          }
          index++
        }
        query = db.query(sql,(err,camp_images)=>{
          if (err) {
            return db.rollback(function() {
              throw err;
            });
          }

          results.camp_images = camp_images

          sql = "SELECT ct.camp_id,ct.camp_type, ct.camp_pricew, ct.camp_priceh FROM campsite_type as ct WHERE "
          index = 1
          for(let camp_id of camp_ids){
            if(index!=camp_ids.length){
              sql+= ('camp_id = '+camp_id+ ' OR ')
            }else{
              sql+= ('camp_id = '+camp_id)
            }
            index++
          }
          query = db.query(sql,(err,camp_features)=>{
            if (err) {
              return db.rollback(function() {
                throw err;
              });
            }

            results.camp_features =camp_features

            sql = 'SELECT * FROM promo_price'
            query = db.query(sql, (err, promo_rules) => {
              if (err) {
                return db.rollback(function() {
                  throw err;
                });
              }
                // console.log(promo_rules)
                results.promo_rules = promo_rules

                db.commit(function(err) {
                  if (err) {
                    return db.rollback(function() {
                      throw err;
                    });
                  }
                  res.json(results)
                });
            });
          })

        })
    });
  });
  })
});

app.get('/getPromoCamptypeCamp/:page', (req, res) => {
  let results = {}
  let start = (req.params.page-1)*6
  let perPage = 6
  
  let sql = "SELECT p.promo_type, cl.camp_id, cl.camp_name, cl.city, cl.dist, cl.camp_intro ,cl.camp_target FROM promo_apply as p LEFT OUTER JOIN campsite_list as cl on p.camp_id = cl.camp_id  WHERE promo_type = 'promo_campType' AND apply_valid = 1 ORDER BY `camp_id` ASC LIMIT "+start+','+perPage;
  db.beginTransaction(function(err){
    if(err) {throw err}

    let query = db.query(sql, (err, campsites) => {
      if (err) {
        return db.rollback(function() {
          throw err;
        });
      }
      // console.log(campsites)
      results.campsites =campsites

      let camp_ids = []

      for(let campsite of campsites){
        camp_ids.push(campsite.camp_id)
      }

      sql = 'SELECT * FROM promo_apply as o LEFT OUTER JOIN campsite_list as p on o.camp_id = p.camp_id  WHERE promo_type = "promo_campType" '
      query = db.query(sql, (err, camps) => {
        if (err) {
          return db.rollback(function() {
            throw err;
          });
        }
        let total = camps.length
        // console.log(total)
        results.total = total
        
        sql = "SELECT cp.camp_id, cp.camp_image FROM campsite_image as cp WHERE "
        let index=1
        
        for(let camp_id of camp_ids){
          if(index!=camp_ids.length){
            sql+= ('camp_id = '+camp_id+ ' OR ')
          }else{
            sql+= ('camp_id = '+camp_id)
          }
          index++
        }
        query = db.query(sql,(err,camp_images)=>{
          if (err) {
            return db.rollback(function() {
              throw err;
            });
          }

          results.camp_images = camp_images

          sql = "SELECT ct.camp_id,ct.camp_type, ct.camp_pricew, ct.camp_priceh FROM campsite_type as ct WHERE "
          index = 1
          for(let camp_id of camp_ids){
            if(index!=camp_ids.length){
              sql+= ('camp_id = '+camp_id+ ' OR ')
            }else{
              sql+= ('camp_id = '+camp_id)
            }
            index++
          }
          console.log(sql)
          query = db.query(sql,(err,camp_features)=>{
            if (err) {
              return db.rollback(function() {
                throw err;
              });
            }

            results.camp_features =camp_features

            sql = 'SELECT * FROM promo_campType'
            query = db.query(sql, (err, promo_rules) => {
              if (err) {
                return db.rollback(function() {
                  throw err;
                });
              }
                // console.log(promo_rules)
                results.promo_rules = promo_rules

                db.commit(function(err) {
                  if (err) {
                    return db.rollback(function() {
                      throw err;
                    });
                  }
                  res.json(results)
                });
            });
          })

        })
    });
  });
  })
});

app.get('/getcoupons/:page/:keyword?', (req, res) => {

  
  
  let results={coupons:[]}
  let start = (req.params.page-1)*10
  let perPage = 10
  let sql = "SELECT * FROM coupon_genre as o LEFT OUTER JOIN campsite_list as p on o.camp_id = p.camp_id WHERE coupon_expire > CURRENT_DATE() LIMIT "+start+" , "+perPage;
  sql = req.params.keyword? "SELECT * FROM coupon_genre as o LEFT OUTER JOIN campsite_list as p on o.camp_id = p.camp_id "+"WHERE coupon_name LIKE '%"+req.params.keyword+"%' OR camp_name LIKE '%"+req.params.keyword+"%' AND coupon_expire > CURRENT_DATE()"+" LIMIT "+start+" , "+perPage:"SELECT * FROM coupon_genre as o LEFT OUTER JOIN campsite_list as p on o.camp_id = p.camp_id WHERE coupon_expire > CURRENT_DATE() LIMIT "+start+" , "+perPage;

  
  
  let query = db.query(sql, (err, coupons) => {
      if(err) throw err;
      
      results.coupons=coupons
      // console.log(coupons)
      res.json(results)
  });
});

app.get('/getcouponscount/:keyword?', (req, res) => {
  console.log('getcoupon')
  //TODO: 過濾已過期coupon
  let results={totalCount:0}
  let sql = "SELECT * FROM coupon_genre as o LEFT OUTER JOIN campsite_list as p on o.camp_id = p.camp_id";
  sql = req.params.keyword? "SELECT * FROM coupon_genre as o LEFT OUTER JOIN campsite_list as p on o.camp_id = p.camp_id "+"WHERE coupon_name LIKE '%"+req.params.keyword+"%' OR camp_name LIKE '%"+req.params.keyword+"%'":"SELECT * FROM coupon_genre as o LEFT OUTER JOIN campsite_list as p on o.camp_id = p.camp_id  ";

  
  
  let query = db.query(sql, (err, totalCount) => {
      if(err) throw err;
      
      results.totalCount=totalCount.length
      res.json(results)
  });
});

app.post('/getcouponrecords', (req, res) => {
  // console.log(req)
  let results={
    is_login:false,
    records:[],
  }
  if(req.body.account){
    let account = req.body.account
    let sql = "SELECT * FROM coupon_gain WHERE mem_account = '"+account+"'"
    console.log(sql)
    let query = db.query(sql, (err, records) => {
        if(err) throw err;
        results.records = records
        results.is_login = true
        // console.log(results)
        res.json(results)
    });
    // console.log(query)
    }else{
      res.json(results)
    }
});

app.post('/coupongainrecords', (req, res) => {
  // console.log(req)
  let results={}
  let start = (req.params.page-1)*10
  let perPage = 10
  if(req.body.account){
    let account = req.body.account
    let sql = "SELECT * FROM `coupon_gain` as o LEFT OUTER JOIN `coupon_genre` as p ON o.coupon_genre_id = p.coupon_genre_id LEFT OUTER JOIN `campsite_list` as q on p.camp_id = q.camp_id WHERE mem_account='"+account+"'"
    db.queryAsync(sql).then(result=>{
      results.coupon_records = result

      return db.queryAsync("SELECT COUNT(1) as total FROM `coupon_gain` as o LEFT OUTER JOIN `coupon_genre` as p ON o.coupon_genre_id = p.coupon_genre_id LEFT OUTER JOIN `campsite_list` as q on p.camp_id = q.camp_id WHERE mem_account='"+account+"'")
    }).then(result=>{

      results.total = result[0].total

      res.json(results)
    }).catch(err=>{
      res.send(err)
    })
    // console.log(query)
    }else{
      res.send({results})
    }
});

app.post('/obtaincoupon',(req,res)=>{
  let results={
    is_login:false,
    records:[],
  }
  // console.log(req.body)
  if(req.body.mem_account){
    // let mem_account = req.session.user.mem_account
    // let sql = "INSERT INTO `coupon_gain`(`coupon_genre_id`,`mem_account`) VALUES(?,?)"
    // let code_length = 6
    // let rand_str = ""
    // let str = "abcdefghijklmnopqrstuvwxyz0123456789"
    // let str_length = str.length
    // for(let i =0; i< code_length;i++){
    //   rand_str+=str.charAt(Math.floor(Math.random()*str_length))
    // }
    let mem_account = req.body.mem_account
    let coupon_genre = req.body.coupon_genre
    

    db.beginTransaction(function(err) {
      if (err) { throw err; }
      db.query("SET @update_id := 0", function (error, results, fields) {
        if (error) {
          return db.rollback(function() {
            throw error;
          });
        }
     
        
     
        db.query("UPDATE `coupon_gain` SET `coupon_genre_id`="+coupon_genre+", `mem_account`='"+mem_account+"',gain_record_id = (SELECT @update_id := gain_record_id) WHERE mem_account='' LIMIT 1", function (error, results, fields) {
          if (error) {
            return db.rollback(function() {
              throw error;
            });
          }
          
          db.query("SELECT * FROM coupon_gain as cg WHERE gain_record_id = @update_id", function (error, results, fields) {
            if (error) {
              return db.rollback(function() {
                throw error;
              });
            }
            db.commit(function(err) {
              if (err) {
                return db.rollback(function() {
                  throw err;
                });
              }
              res.json(results)
            });
          });
        });
      });
    });

    }else{
      //TODO:導向登入頁面
      res.redirect('/');
    }
})

app.post('/insertcampliked', (req, res) => {
  let results={
    success:false
  }
  if(req.body.account){
    let mem_account = req.body.account
    let camp_id = req.body.camp_id
    
    let sql = "INSERT INTO `campsite_liked` SET `camp_id`= "+camp_id+" , `account`= '"+mem_account+"' , `liked`=true"
    console.log(sql)
    let query = db.query(sql, (err, records) => {
        if(err) throw err;
        results.success = true
        res.json(results)
    });
    //TODO: 轉向燈入夜面
    }else{
      res.send(results)
    }
});

app.post('/deletecampliked', (req, res) => {
  let results={
    success:false
  }
  if(req.body.account){
    let mem_account = req.body.account
    let camp_id = req.body.camp_id
    
    let sql = "DELETE FROM `campsite_liked` WHERE `camp_id`= "+camp_id+" AND `account`= '"+mem_account+"' "
    console.log(sql)
    let query = db.query(sql, (err, records) => {
        if(err) throw err;
        results.success = true
        res.json(results)
    });
    //TODO: 轉向燈入夜面
    }else{
      res.send(results)
    }
});

app.post('/getcampcollect',(req,res)=>{
  results={}
  
  let mem_account = req.body.mem_account
  let sql = "SELECT o.camp_id, o.camp_name, o.city, o.dist, o.camp_intro, p.account, p.liked FROM campsite_list as o LEFT OUTER JOIN campsite_liked as p on o.camp_id = p.camp_id WHERE account='"+mem_account+"'"

  db.queryAsync(sql).then(result=>{
    results.camp_collects = result

    sql = "SELECT ct.camp_id,ct.camp_type, ct.camp_pricew, ct.camp_priceh FROM campsite_type as ct WHERE "
         
          let camp_ids = []
   

          for(let camp_collect of results.camp_collects){
            camp_ids.push(camp_collect.camp_id)
          }
          index = 1
          for(let camp_id of camp_ids){
            if(index!=camp_ids.length){
              sql+= ('camp_id = '+camp_id+ ' OR ')
            }else{
              sql+= ('camp_id = '+camp_id)
            }
            index++
          }
          // console.log(sql)
    return db.queryAsync(sql)
  }).then(result=>{
    results.camp_features = result

    let camp_ids = []
   

      for(let camp_collect of results.camp_collects){
        camp_ids.push(camp_collect.camp_id)
      }
    sql = "SELECT cp.camp_id, cp.camp_image FROM campsite_image as cp WHERE  "
        let index=1
        
        for(let camp_id of camp_ids){
          if(index!=camp_ids.length){
            sql+= ('camp_id = '+camp_id+ ' OR ')
          }else{
            sql+= ('camp_id = '+camp_id)
          }
          index++
        }

    return db.queryAsync(sql)
  }).then(result=>{
    results.camp_imgs=result

    res.json(results)
  })
})


app.post("/getcouponsofcamp/:camp_id", (req, res) => {
  let results = {};
  let mem_account = req.body.mem_account;
  let sql = "";
  if (mem_account) {
    sql =
      "SELECT o.*, p.coupon_code, p.coupon_valid, p.mem_account, q.camp_name,q.camp_img FROM `coupon_genre` as o LEFT OUTER join (SELECT * FROM `coupon_gain` WHERE mem_account = '" +
      mem_account +
      "' GROUP BY coupon_genre_id) as p on o.coupon_genre_id = p.coupon_genre_id LEFT OUTER JOIN campsite_list as q on o.camp_id = q.camp_id WHERE mem_account IS NULL AND o.camp_id = " +
      req.params.camp_id;

    db.queryAsync(sql).then(result => {
      results.coupon_avaliable = result;
      results.success = true;
      // console.log(results);
      res.json(results);
    });
  } else {
    results.success = false;
    res.json(results);
  }
});

app.post("/getpromoandusablecoupon", (req, res) => {
  let results = {};
  let mem_account = req.body.mem_account;
  let camp_id = req.body.camp_id;
  let sql =
    "SELECT o.promo_type FROM promo_apply as o WHERE o.camp_id = " +
    camp_id +
    " AND o.apply_valid = 1";
    console.log(sql)
  db.queryAsync(sql)
    .then(result => {
      console.log(result)
      let promo_type = result[0].promo_type;
      results.promo_type = promo_type;

      switch (promo_type) {
        case "promo_user":
          sql = "SELECT * FROM promo_user";
          break;
        case "promo_campType":
          sql = "SELECT * FROM promo_campType";
          break;
        case "promo_price":
          sql = "SELECT * FROM promo_price";
      }
      return db.queryAsync(sql);
    })
    .then(result => {
      results.promo_rules = result;

      sql =
        "SELECT * FROM coupon_gain as o LEFT OUTER JOIN coupon_genre as p ON o.coupon_genre_id = p.coupon_genre_id WHERE mem_account = '"+mem_account+"' AND coupon_valid = 1 AND camp_id = "+camp_id +" AND coupon_expire > CURDATE()"
      return db.queryAsync(sql);
      return db.queryAsync(sql);
    })
    .then(result => {
      results.usable_coupons = result;
      results.success = true;
      res.json(results);
    })
    .catch(err => {
      results.success = false;
      results.error = err;
      res.json(results);
    });
});

app.post('/updatecouponvalid',(req,res)=>{
  let results = {success:false};
  let mem_account = req.body.mem_account;
  let coupon_valid = req.body.coupon_valid
  let gain_record_id = req.body.gain_record_id

  let sql = "UPDATE coupon_gain SET coupon_valid = "+coupon_valid+" WHERE gain_record_id = "+gain_record_id

  db.queryAsync(sql).then(result=>{
    if(result.affectedRows==1){
      results.success=true
    }
    res.json(results)
  })
})


// ================= 會員圖片上傳 ===========================
app.post('/avatar-upload', upload.single('avatar'), (req, res) => { // 如果要上傳多個檔案要用 upload.array，而且一定要用 POST；這一段程式碼屬於在需要時才用指定routes的middle ware
  console.log(req.file); // 查看裡面的屬性
  let ext='';
  let fname = uuidv4();
  if(req.file && req.file.originalname) { // 判斷是否有圖檔 && 用戶是否有上傳檔案
      switch(req.file.mimetype){ // 過濾檔案類型
          case 'image/png':
              ext = '.png';
          case 'image/jpeg':
              if(!ext){ // !''表示沒有設定.png的檔名，程式就會繼續往下進行(省略上一個break)
                  ext = '.jpg';
              };

              fs.createReadStream(req.file.path) // stream就像是資料流(水流)，req.file.path是暫存路徑，暫存檔不會有附檔名
                  .pipe(fs.createWriteStream(__dirname + '/../../gocamping/public/avatar_pictures/' + fname + ext)); // 就像用水管接到一樣，從暫存搬到寫入
                  // .pipe(fs.createWriteStream(__dirname + '/../../gocamping/public/avatar_pictures/' + req.file.originalname)); // 沒有更動檔名的版本

              res.send(JSON.stringify('avatar_pictures/' + fname + ext))
              return;
      };
  };

  res.send('error')
});


/*======================= 營地主後台 =============================*/
// 新增營地
app.post('/host/add', (req, res) => {
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

// 在routes前後可以用use新增Middle Ware(中間層，類似關卡的存在)，但是有順序性
// 自訂404頁面的範例
app.use((req, res) => {
  res.type('text/plain');
  res.status(404);
  res.send('404 - 找不到路由網頁')
})



app.listen(5000, () => {
  console.log('server running')
})

// json‑server ‑‑watch ‑‑port 5555 goCamping.json