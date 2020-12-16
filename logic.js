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
}

function SetPower(powerSlot, powerIndex){
    var powerStr = powerDescriptions[powerIndex];
    $('#powerDescription'+powerSlot).html(powerStr);
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