# Observações e requisitos
 <p>1° Instale o mongodb</p>
 <p>2° Instale o nodejs</p>

# Oque esta funcionando?

 <ul>
  <li>login <b>ok</b></li>
  <li>Loja <b>ok</b></li>
  <li>lobby <b>ok</b></li>
  <li>salas <b>ok</b></li>
  <li>profile <b>ok</b></li>
  <li>lista de amigos <b>ok</b></li>
  <li>inventário <b>ok</b></li>
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
   console.log('User added.');
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
  console.log('Added new mission.');
});

```

Breve mais atualizações.
