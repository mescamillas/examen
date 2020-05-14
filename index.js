const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const excel = require('xlsx')

const app = express()
const port = 3000

var db = excel.readFile('Examen-ITRM.xlsx')
/*
//workbook


//worksheets
var sheetClients = db.Sheets['Clients']
var sheetCars = db.Sheets['Vehicle']
var sheetSales = db.Sheets['Sales']

var clientId =
var carId = excel.utils.sheet_to_json(sheetCars)*/
var sheetClients = db.Sheets['Clients']
var sheetCars = db.Sheets['Vehicle']

let ClientRoute = require('./routes/client');
let VehicleRoute = require('./routes/vehicle');

app.use(cors())
app.use(bodyParser.json())

app.use(ClientRoute)
app.use(VehicleRoute)



//Handler for 404 -resource not found
app.use((req,res,next) => {
    res.sendStatus(404)
})

app.listen(port, () => console.log(`Excel server listening at http://localhost:${port}`))