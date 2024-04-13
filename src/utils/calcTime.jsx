const calcTime = (meet) => {
    let hour = meet.split(' ')[0].split(':')[0]
    let min = meet.split(' ')[0].split(':')[1]
    if(min === '00') min = 0
    const calcMin = eval(Number(min) + 45)
    if (calcMin >= 60) {
        hour = Number(hour) + 1
        min = calcMin - 60
        return [hour, min]
    }
    return [hour, calcMin]
}

export default calcTime