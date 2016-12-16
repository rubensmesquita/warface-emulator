const express     = require('express');
const app         = express();
const bodyParser  = require('body-parser');
const morgan      = require('morgan');
const mongoose    = require('mongoose');
const randomid    = require('./app/lib/randomid');

const jwt         = require('jsonwebtoken'); // used to create, sign, and verify tokens;
const config      = require('./config'); // get our config file;
const User        = require('./app/models/user'); // get our mongoose model;
const Profile     = require('./app/models/profile');
const Friends     = require('./app/models/friends');
const Missions    = require('./app/models/missions');
const GameRoom    = require('./app/models/gameroom');

// Fix mongodb connect.
mongoose.Promise = global.Promise;
mongoose.connect(config.database); 

// MongoDB save data routes

let newUserGamer = new User({
    userid: randomid(5),
    profileid: randomid(6),
    username: 'fuck',
    nickname: '-Fuck-',
    affiliateid: 'CYT000000000',
    password: '12345',
    email: 'fuck@warface.com',
    lang: 'pt-br'
});
  
// newUserGamer.save(function(err) {
//    console.log('User added.');
// });

let profileadd = new Profile({
  profileid: '608714', // profileid user
  username: 'set',
  nickname: '-setTimeout-',
  gender: 'male',
  height: '1',
  head: 'default_head_4',
  current_class: '0',
  experience: '17364000',
  pvp_rating_points: '0',
  banner_badge: '4294967295',
  banner_mark: '4294967295',
  banner_stripe: '4294967295',
  game_money: '8500000',
  cry_money: '2500000',
  crown_money: '800000',
  items: [{
    id: '1', 
    name: 'mk01', 
    attached_to: '0',
    config: 'dm=0;material=default;pocket_index=32768', 
    slot: '1', 
    equipped: '8', 
    default: '1', 
    permanent: '0', 
    expired_confirmed: '0', 
    buy_time_utc: '0', 
    expiration_time_utc: '0', 
    seconds_left: '0'
  }]
});

// profileadd.save(function(err) {
//   console.log(profileadd);
// });


let newMissionGame =  new Missions({
  
  mission_key: '27b68559-cfbe-4efd-ba09-f4240279fb99',
  no_teams: '1',
  name: '@na_mission_path01_1',
  setting: 'africa/africa_base',
  mode: 'pve',
  mode_name: '@PvE_game_mode_desc',
  mode_icon: 'pve_icon',
  description: '@mission_desc_africa_path',
  image: 'mapImgAfrica_training',
  difficulty: 'easy',
  type: 'trainingmission',
  time_of_day: '9:06',
    
  objectives: {
    factor: '1',
    obj: [{
      id: '0',
      type: 'primary'
    },{
      id: '5',
      type: 'secondary'
    },{
      id: '16',
      type: 'secondary'
    }]
  },

  crownrewardsthresholds: {
    totalperformance: {
      bronze: '48665',
      silver: '77875',
      gold: '122510'
    },
    time: {
      bronze: '4192831',
      silver: '4193402',
      gold: '4193543'
    }
  },
    
  crownrewards: {
    bronze: '2',
    silver: '4',
    gold: '6'
  }

});

// newMissionGame.save(function(err) {
//   console.log('Added new mission.');
// });