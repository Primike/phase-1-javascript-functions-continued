function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`    // used ` b/c of ${}
}

function mondayWork(x='go to the office') {
    return `This Monday, I will ${x}.`
}

let wrapAdjective = function(x="*") {
    return function(y="special") {
        return `You are ${x}${y}${x}!`
    }

}
