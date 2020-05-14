let mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://test:test@cluster0-j8mu1.mongodb.net/prueba?retryWrites=true&w=majority`,{ useUnifiedTopology: true, useNewUrlParser: true });

let VehicleSchema = new mongoose.Schema({
    UniqueId: String,
    make: String, 
    fuel_type: String,
    aspiration: String,
    num_of_doors: String,
    body_style: String,
    drive_wheels: String,
    engine_location: String,
    wheel_base: String,
    length: String,
    width: String,
    heigth: String,
    curb_weight: String,
    engine_type: String,
    num_of_cylinders:String,
    engine_size: String,
    fuel_system: String,
    bore: String,
    stroke: String,
    compression_ratio: String,
    horsepower: String,
    peak_rpm: String,
    city_mpg: String,
    highway_mpg: String,
    price: String
    })

module.exports = mongoose.model('vehicles', VehicleSchema);