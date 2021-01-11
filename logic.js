var powerDescriptions = [
    'Mover: Can hop into water and then teleport out of the water within visual distance.',
    'Shaker: Can control the state of water in an area.',
    'Thinker: Can send out a mental pulse to sense water in a 50 ft radius.',
    'Brute: Can create a water bubble around themselves to protect them. They are immersed and must hold their breath while using this.',
    'Blaster: Water gun.',
    'Master: Can create a water echo of him that follows a simple mental directive.',
    'Striker: Can deal a blow to an enemy by collecting water on his hand and striking an enemy. As the enemy is hit, he turns the water into steam. (+1 to Brawn rolls for this ability)',
    'Changer: Can turn a part of himself into water to cushion a blow. This can only be done as a reaction to a blow by instinct. This power cannot be activated on demand.'
];

function SetRandomPower(powerSlot){
    var powerStr = powerDescriptions[Math.floor((Math.random() * 8))];
    $('#powerDescription'+powerSlot).html(powerStr);

    SendMessageToDiscord(powerStr);
}

function SetPower(powerSlot, powerIndex){
    var powerStr = powerDescriptions[powerIndex];
    $('#powerDescription'+powerSlot).html(powerStr);

    SendMessageToDiscord(powerStr);
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function toggleNav() {
  var width = $('#mySidenav').width();
  console.log(typeof width)
  if(width === 0){
    //$('#mySidenav').width('250px');
    document.getElementById("mySidenav").style.width = "250px";
    console.log('true')
  }
  else{
    //$('#mySidenav').width('0');
    document.getElementById("mySidenav").style.width = "0";
    console.log('false')
  }
}

// test channel url    https://discordapp.com/api/webhooks/798018056357019658/3xpYY3CJh4cn4O8Wqdk0IAr2bjrFjk4gd0PEmdQWE0g9ahOLpVedSoPg3STvzAt8wFzn
// dennys roll channel https://discord.com/api/webhooks/798036724709064724/iZXqfU4qsmdzsAA3sm1F8DapTwHQwM2hGryVcLw32aEst8T6JMjChGiPFQMO-supXxIg
function SendMessageToDiscord(message) {
  var request = new XMLHttpRequest();
  //request.open("POST", "https://discordapp.com/api/webhooks/798018056357019658/3xpYY3CJh4cn4O8Wqdk0IAr2bjrFjk4gd0PEmdQWE0g9ahOLpVedSoPg3STvzAt8wFzn"); //ktown
  request.open("POST", "https://discord.com/api/webhooks/798036724709064724/iZXqfU4qsmdzsAA3sm1F8DapTwHQwM2hGryVcLw32aEst8T6JMjChGiPFQMO-supXxIg"); //denny's

  request.setRequestHeader('Content-type', 'application/json');

  var params = {
    username: "VinceBot",
    avatar_url: "",
    content: message
  }

  request.send(JSON.stringify(params));
}

function RollD6(){
  var result = Math.floor((Math.random() * 6)) + 1;
  console.log(result);

  $('#rollOutput').val('...calculating...');
  setTimeout(() => {$('#rollOutput').val(result);}, (1000));
  
}

