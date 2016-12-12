// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Shop', new Schema({ 
	type: String,
    item: {
        id: String,
        expirationTime: String,
        durabilityPoints: String,
        repair_cost: String,
        quantity: String,
        name: String,
        item_category_override: String,
        offer_status: String, 
        supplier_id: String,
        discount: String,
        rank: String, 
        game_price: String,
        cry_price: String,
        crown_price: String,
        game_price_origin: String, 
        cry_price_origin: String,
        crown_price_origin: String,
        key_item_name: String, 
        key_item_price: String
    }
}));