const requestUrl = "https://randomuser.me/api/?results="
const form = document.querySelector("form")
const userList = document.querySelector("#userList")

form.addEventListener("submit", (evt) => {
    evt.preventDefault()
    let input = document.querySelector("#input")
    fetch(requestUrl + input.value, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((responseData) => {
            return responseData.json()
        })
        .then((jsonData) => {
            console.log("Here is the data:", jsonData)
            let people = jsonData.results
            people.forEach(addUser)
        })
        .catch((error) => {
            window.alert("ERROR: " + error + "\nPlease try again later")
        })
})

const addUser = (person) => {
    let section = document.createElement("section")
    userList.appendChild(section)
    let img = document.createElement("img")
    let div = document.createElement("div")
    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    img.src = `${person.picture.medium}`
    div.textContent = `${person.name.first} ${person.name.last}`
    p1.textContent = `${person.location.city}, ${person.location.state}`
    p2.textContent = `${person.email}`
    section.appendChild(img)
    section.appendChild(div)
    section.appendChild(p1)
    section.appendChild(p2)
}

const reload = document.getElementById("reload")
reload.addEventListener("click", (evt) => {
    window.location.reload()
    console.log("Reload Successful")
})

// const users = document.getElementsByClassName("userInfo")
// users.addEventListener("toggle", (evt) => {
//     if (users.style.display == "none") {
//         users.style.display = "block"
//     } else {
//         users.style.display = "none"
//     }
// })