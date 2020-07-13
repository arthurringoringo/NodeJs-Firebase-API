var router = require('express').Router()
var fire = require('./fire')
var bodyParser = require('body-parser')
var db = fire.firestore()
var converter = require('json-2-csv')
router.use(bodyParser.json())

router.get('/data/get', (req, res) => {

    var allData = []
    db.collection('Attendance')
        .orderBy('time', 'desc')
        .get()
        .then(snapshot => {
            snapshot.forEach((hasil) => {
                allData.push(hasil.data())
            })
            console.log(allData)
            res.send(allData)
        }).catch((error)=>{
        console.log(error)
    })
})

router.get('/data/download', (req, res) => {

    var allData = []
    db.collection('Attendance')
        .get()
        .then(snapshot => {
            snapshot.forEach((hasil) => {
                allData.push(hasil.data())
            })

            converter.json2csv(allData, (err, csv) => {
                if (err) {
                    throw err;
                }
   
                res.setHeader('Content-disposition', 'attachment; filename=data.csv');
                res.set('Content-Type', 'text/csv');
                res.status(200).send(csv);
            })



        })
})


router.post('/data/post', (req, res) => {

    db.collection('Attendance').add({
        ID: req.body.id,
        Note: req.body.Note,
        Name: req.body.Name,
        NIM: req.body.NIMorNIDN,
        Status: req.body.Status,
        Waktu: req.body.Waktu,
        IDBarang: req.body.id_barang,
        Time: new Date()
    })
    res.send({
        ID: req.body.id,
        Note: req.body.Note,
        Name: req.body.Name,
        NIM: req.body.NIMorNIDN,
        Status: req.body.Status,
        Waktu: req.body.Waktu,
        IDBarang: req.body.id_barang,
        Time: new Date()
    })
})

module.exports = router
