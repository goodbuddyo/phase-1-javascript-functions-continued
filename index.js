
function saturdayFun(activity = 'roller-skate') {
  return ('This Saturday, I want to ' + activity + '!')
}
console.log(saturdayFun());

let mondayWork = function (activity = 'go to the office') {
  return `This Monday, I will ${activity}.`
}
mondayWork();

function wrapAdjective(hightlight = "*") {
  return function (msg = "special",) {
    return `You are ${hightlight}${msg}${hightlight}!`;
  };
  let result = wrapAdjective()
}
