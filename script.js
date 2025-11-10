console.log("Hi! I'm from JavaScript...")

function validateDays() {
    let year = document.getElementById("yearInput").value
    let month = document.getElementById("monthInput").value
    let day = document.getElementById("dayInput").value

    let convertedMonthToNumber = Number(month)
    let convertedDayToNumber = Number(day)
    switch (convertedMonthToNumber) {
        case 9:
        case 4:
        case 6:
        case 9:
            if (convertedDayToNumber <= 30) {
                findDayOftheWeek(year, month, day)
            } else {
                const getResult = document.getElementById("result")
                getResult.innerText = "Invalid Day!"
                getResult.style.backgroundColor = "red"
            }
            break
        case 2:
            if (convertedDayToNumber <= 29) {
                if (isLeapYear(year) === false) {
                    if (convertedDayToNumber <= 28) {
                        findDayOftheWeek(year, month, day)
                    } else {
                        const getResult = document.getElementById("result")
                        getResult.innerText = "Invalid Day!"
                        getResult.style.backgroundColor = "red"
                    }
                } else {
                    findDayOftheWeek(year, month, day)
                }
            } else {
                const getResult = document.getElementById("result")
                getResult.innerText = "Invalid Day!"
                getResult.style.backgroundColor = "red"
            }
            break
        default:
            findDayOftheWeek(year, month, day)
    }
}

function isLeapYear(year) {
    let convertedYearToNumber = Number(year)
    if (convertedYearToNumber % 4 === 0) {
        return true
    } else {
        return false
    }
}

function findDayOftheWeek(year, month, day) {
    let y_note = Math.floor(parseInt(year) - ((14 - parseInt(month)) / 12))
    let x = y_note + Math.floor(y_note / 4) - Math.floor(y_note / 100) + Math.floor(y_note / 400)
    let m_note = parseInt(month) + 12 * Math.floor((14 - parseInt(month)) / 12) - 2
    let d_note = (parseInt(day) + x + Math.floor((31 * m_note) / 12)) % 7

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    // console.log(days[d_note])

    const getResult = document.getElementById("result")
    getResult.innerText = "Day of the week is "+days[d_note]
    getResult.style.backgroundColor = "green"

}