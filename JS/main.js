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
            console.error("ERROR: ", error)
        })
})

// const addUser = () => {
//     let section = document.createElement("section")
//     section.classname = "userList"
//     userList.appendChild(section)
// }
// addUser()
//     let listUser = document.getElementsByClassName("userList")

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

