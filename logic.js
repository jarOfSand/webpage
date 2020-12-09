var powerDescriptions = [
    'Water Echo',
    'Steam Punch',
    'Water Gun',
    'Sonar',
    'Matter State Change',
    'Wet Teleport',
    'Bubble Shield',
    'Water Body',
];

function SetRandomPower(powerSlot){
    var powerStr = powerDescriptions[Math.floor((Math.random() * 8))];
    $('#powerDescription'+powerSlot).html(powerStr);
}

function SetPower(powerSlot, powerIndex){
    var powerStr = powerDescriptions[powerIndex];
    $('#powerDescription'+powerSlot).html(powerStr);
}
