function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function (activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(par = "*"){
    return function (parameter = "special"){
        return `You are ${par}${parameter}${par}!`
    }
}










//function outer(greeting, msg = "It's a fine day to learn") {
   // return function (name, lang = "Python") {
       // return `${greeting}, ${name}! ${msg} ${lang}`;
      //};
    //}
    
    //outer("Hello")("student", "JavaScript");
    //=> "Hello, student! It's a fine day to learn JavaScript"