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
    let div1 = document.createElement("div")
    userList.appendChild(div1)
    let img = document.createElement("img")
    let div2 = document.createElement("div")
    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    img.src = `${person.picture.medium}`
    div2.textContent = `${person.name.first} ${person.name.last}`
    p1.textContent = `${person.location.city}, ${person.location.state}`
    p2.textContent = `${person.email}`
    div1.appendChild(img)
    div1.appendChild(div2).appendChild(p1).appendChild(p2)
}
