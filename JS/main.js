const requestUrl = "https://randomuser.me/api/?results="
const form = document.querySelector("form")
const userList = document.querySelector("#userList")

form.addEventListener("submit", (evt) => {
    evt.preventDefault()
    let input = document.querySelector("#input")
    fetch(requestUrl + input.value)
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

// adjust for img later (stretch goal)
const addUser = (person) => {
    let img = document.createElement("img")
    let div = document.createElement("div")
    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    img.src = `${person.picture.thumbnail}`
    div.textContent = `${person.name.first} ${person.name.last}`
    p1.textContent = `${person.location.city}, ${person.location.state}`
    p2.textContent = `${person.email}`
    userList.appendChild(img)
    userList.appendChild(div).appendChild(p1).appendChild(p2)
}
