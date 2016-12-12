// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Missions', new Schema({ 
    
    mission_key: String,
    no_teams: String,
    name: String,
    setting: String,
    mode: String,
    mode_name: String,
    mode_icon: String,
    description: String,
    image: String,
    difficulty: String,
    type: String,
    time_of_day: String,
    
    objectives: {
        factor: String,
        obj: { type : Array , "default" : [] }
    },

    crownrewardsthresholds: {
        totalperformance: {
            bronze: String,
            silver: String,
            gold: String
        },
        time: {
            bronze: String,
            silver: String,
            gold: String
        }
    },
    
    crownrewards: {
        bronze: String,
        silver: String,
        gold: String
    }

}));