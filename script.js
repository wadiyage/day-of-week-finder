console.log("Hi! I'm from JavaScript...")


function findDayOftheWeek() {
    let year = document.getElementById("yearInput").value
    let month = document.getElementById("monthInput").value
    let day = document.getElementById("dayInput").value

    let y_note = Math.floor(parseInt(year) - ((14 - parseInt(month))/12))
    let x = y_note + Math.floor(y_note/4) - Math.floor(y_note/100) + Math.floor(y_note/400)
    let m_note = parseInt(month) + 12 * Math.floor((14 - parseInt(month))/12) - 2
    let d_note = (parseInt(day) + x + Math.floor((31 * m_note)/12)) % 7

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    // console.log(days[d_note])

    document.getElementById("result").innerText = days[d_note]

}