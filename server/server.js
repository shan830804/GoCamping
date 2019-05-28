// 引入 express
const express = require('express');
// 引入 body-parser 套件，目的要取得POST資料
const bodyParser = require('body-parser');
// 引入 跨源呼叫 Cross-Origin Resource Sharing(CORS) 套件
const cors = require('cors');
// 引入 multer 套件，目的要處理檔案上傳
const multer = require('multer');
// 引入 File System 套件，屬於處理檔案的核心套件，用的時候是用套件名稱 "fs"
const fs = require('fs');
// 引入 uuid 套件，處理檔名重複的問題(類似SHA1)，uuid不同版本有不同特性；或是上npm查sha1
const uuidv4 = require('uuid/v4');

// 建立 web server 物件
const app = express();
// 設定檔案上傳的暫存目錄
const upload = multer({dest: 'tmp_uploads/'}); // dest = destination(目標資料夾)

// 查看 HTTP HEADER 的 Content-Type: application/x-www-form-urlencoded (符合檔頭才有作用，不符合不作用)
app.use(bodyParser.urlencoded({ extended: false}));
// 查看 HTTP HEADER 的 Content-Type: application/json (符合檔頭才有作用，不符合不作用)
app.use(bodyParser.json());

// 設定某跨源能夠接受/傳送cookie
var whitelist = ['http://localhost:8080', undefined, 'http://localhost:3000'] // 白名單，有設定的才可以通過
var corsOptions = {
    credentials: true, // 接收端要設定可以接受cookie
    origin: function (origin, callback) {
        console.log('origin: '+origin);
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
};
app.use(cors(corsOptions));

// 傳送過來的格式是 formData
app.post('/try-upload', upload.single('avatar'), (req, res) => { // 如果要上傳多個檔案要用 upload.array，而且一定要用 POST；這一段程式碼屬於在需要時才用指定routes的middle ware
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
                    .pipe(fs.createWriteStream(__dirname + '/../client/public/avatar_pictures/' + fname + ext)); // 就像用水管接到一樣，從暫存搬到寫入
                    // .pipe(fs.createWriteStream(__dirname + '/../client/public/avatar_pictures/' + req.file.originalname)); // 沒有更動檔名的版本

                res.send(JSON.stringify('avatar_pictures/' + fname + ext))
                return;
        };
    };

    res.send('error')
});

// 在routes前後可以用use新增Middle Ware(中間層，類似關卡的存在)，但是有順序性
// 自訂404頁面的範例
app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - 找不到路由網頁')
})

// Server 偵聽
app.listen(5000, () => {
    console.log('Start server 5000')
})