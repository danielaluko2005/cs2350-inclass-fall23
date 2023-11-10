//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

let guests = []

function addGuests(e) {
    e.preventDefault()
    let guest = {
        fname: document.getElementById("fn").value,
        lname: document.getElementById("ln").value
    }

    if (guest.fname.trim() && guest.lname.trim()) {
        guests.push(guest)
        localStorage.setItem("guests", JSON.stringify(guests))

        let guest_html = `
        <td>${guest.fname}</td>
        <td>${guest.lname}</td>
    `
        let tr = document.createElement('tr')
        tr.innerHTML = guest_html

        document.querySelector("#guests tbody").appendChild(tr)
    }

    this.reset()
}


function loadGuests() {
    if (localStorage.getItem("guests")) {
        guests = JSON.parse(localStorage.getItem("guests"))

        for (let guest of guests) {
            let guest_html = `
            <td>${guest.fname}</td>
            <td>${guest.lname}</td>
            `

            let tr = document.createElement("tr")

            tr.innerHTML = guest_html

            document.querySelector("#guests tbody").appendChild(tr)
        }
    }
}

document.getElementById("myform").onsubmit = addGuests
window.onload = loadGuests
document.querySelector('.clearall').onclick = function () {
    localStorage.clear();
    location.reload()
}