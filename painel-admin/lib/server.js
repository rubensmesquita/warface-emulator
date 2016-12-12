/*
 *
 * Criador por: Rubens Mesquita
 * data: 22/10/2016
 * versão: beta 1.0
 *
 */

var express 		= require('express');
var app 			= express();
var server 			= require('http').Server(app);
var io 				= require('socket.io')(server);
var path			= require('path');
var moment 			= require('moment');
var promise 		= require('promise');

// Api json
var bodyParser  	= require('body-parser');
var morgan      	= require('morgan');
var jwt    			= require('jsonwebtoken');
var cors 			= require('cors');
var morgan      	= require('morgan');
var mongoose    	= require('mongoose');
var randomid        = require('randomid');

// Models
var Shop = require('../models/shop');

app.set('superSecret', 'keysecret'); // secret variable
app.set('views', path.basename('../views'));
app.engine('html', require('ejs').renderFile);
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false })); // Para obter informações POST e / ou parâmetros de URL
app.use(bodyParser.json());
app.set('view engine', 'ejs');
//app.use(morgan('dev')); // Logs de requisição no console node.	

exports.run = function(config, ready) {

	// db connect
	mongoose.Promise = global.Promise;
	mongoose.connect(config.database);
	
	// Listen server
	io.listen(app.listen(config.socket.port));
	app.use(express.static(path.basename('../public')));

	app.get('/', function (req, res){
		res.render('index.html');
	});

	// Routes express
	var api_router = express.Router();

		api_router.get('/', function(req, res) {
			res.json({"status":0});
		});

		api_router.post('/shop/add/item', function(req, res){

			var shop_insert = new Shop({
				type: 1,
				item: {
					id: randomid(10),
					expirationTime: req.body.form.expirationTime,
					durabilityPoints: req.body.form.durabilityPoints,
					repair_cost: req.body.form.repair_cost,
					quantity: req.body.form.quantity,
					name: req.body.form.name,
					item_category_override: "",
					offer_status: req.body.form.offer_status,
					supplier_id: req.body.form.supplier_id,
					discount: req.body.form.discount,
					rank: req.body.form.rank,
					game_price: req.body.form.game_price,
					cry_price: req.body.form.cry_price,
					crown_price: req.body.form.crown_price,
					game_price_origin: req.body.form.game_price_origin,
					cry_price_origin: req.body.form.cry_price_origin,
					crown_price_origin: req.body.form.crown_price_origin,
					key_item_name: '',
					key_item_price: 0
				}
			});
			
			shop_insert.save().then(function(e, b){
				console.log(e, b);
				res.json({type: 'success', msn: 'ok item added!'});
			});

		});

		api_router.post('/shop/items', function(req, res){
			Shop.find({}).then(function(results){
				res.json(results);
			});
		});

		api_router.post('/shop/remove/item', function (req, res) {
			Shop.remove({ _id: req.body.id }, function(err) {
				if(err) res.json({type: 'error', msn: err});
					res.json({type: 'success', msn: 'ok item deleted!'});
			});
		})

	app.use('/api', api_router); // Router /api/ <router>
	
	ready(); // Ready application;

};