# forum para perguntas

http://game-amazing.ga/

# Observações e requisitos
 <p>1° Instale o mongodb <a href="https://www.mongodb.com/download-center">Link para donwload</a></p>
 <p>2° Instale o nodejs <a href="https://nodejs.org/en/download/">Link para donwload</a></p>

# Oque esta funcionando?

 <ul>
  <li>login 60% <b>ok</b></li>
  <li>Loja 10% <b>ok</b></li>
  <li>salas 1% <b>ok</b></li>
  <li>profile 25% <b>ok</b></li>
  <li>lista de amigos 50% <b>ok</b></li>
  <li>inventário 29% <b>ok</b></li>
 </ul>
 

# Como usar

<p>1°, execute o <b>npm install</b> dentro da pasta do emulator</p>
<p>2°, para compilar o projeto execute o seguite comando <b>npm run -s build</b></p>
<p>3°, entre na pasta dist criada no build e execulte o script com seguinte comando <b>node index.js</b></p>

# Como usar a API
<p>1°, execute o <b>npm install</b> dentro da pasta do emulator</p>
<p>Depois entre na pasta <b>api-ga</b> execulte o arquivo server.js</p>

# Funcionalidades da API

##### Para adicionar um novo usuário (in file server.js)

```js

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
  
newUserGamer.save(function(err) {
  
  if(!err){

    // Create new profile.
    let profileadd = new Profile({
      profileid: newUserGamer.profileid, // profileid user
      username: newUserGamer.username,
      nickname: newUserGamer.nickname,
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

    profileadd.save(function(err) {
      console.log(newUserGamer, profileadd, 'Successfully created user and profile.');
    });

  }else{
    console.log(err.errors.username.message);
  }

});

```
##### Para adicionar um novo mapa (in file server.js)

```js

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

newMissionGame.save(function(err) {

  if(!err){
    console.log('Added new mission.');
  }else{
    console.log(err.errors.mission_key.message);
  }

});

```

Breve mais atualizações.
