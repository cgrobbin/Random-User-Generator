# Random-User-Generator
SEI-119 Project 1

<img src ="https://i.imgur.com/i6RAXuL.jpg" width="800">

[Random User Generator](https://cgrobbin.github.io/Random-User-Generator/)

### Technologies Used

- HTML
- CSS
- JavaScript
- VSC
- GitHub

### Installation Instructions

This project requires no installation. Just Enjoy!

### User Stories

- My users are anyone that is looking to generate some basic information about random people.
- These users will use it however they need, such as using the information to create arrays of objects to test code on.
- As a user, I can specify the number of people that are generated as well as clearing previous information.
- As a user, I can clearly see the separation between each user to know their name, location, and email.

### Code Snippets
```
display: grid;
    grid-template-rows: 125px 75px 75px 50px 1fr 10px;
    grid-template-areas: 
        "header"
        "comment"
        "question"
        "input"
        "content"
        "footer";
```
```
@media only screen and (min-width: 789px) {
    #userList {
        display: grid;
        grid-template-columns: 30% 30% 30%;
        justify-content: space-around; 
    }
    main > section > img {
        align-content: center;
        width: 35%;
    }
} 
```
```
const addUser = (person) => {
    let section = document.createElement("section")
    userList.appendChild(section)
    let img = document.createElement("img")
    let div = document.createElement("div")
    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    img.src = `${person.picture.large}`
    div.textContent = `${person.name.first} ${person.name.last}`
    p1.textContent = `${person.location.city}, ${person.location.state}`
    p2.textContent = `${person.email}`
    section.appendChild(img)
    section.appendChild(div)
    section.appendChild(p1)
    section.appendChild(p2)
}
```

### Wireframes

<img src="https://i.imgur.com/MtmDK7z.jpg" width="700">

### Unsolved Problems/Major Hurdles

- The biggest hurdle that I had to deal with in this project was a problem with CORS Policies. I did everything I could to resolve this with the help of IA's and Michael, however, unfortunately this was an issue beyond my control. I coded an error alert to account for this issue and moved on to more important things.
- Another hurdle that I unfortunately could not solve was making the information a collapsible. I was unable to get a functional function that could specify items created with DOM manipulation and then toggle that information to show or hide with a click. This was a stretch goal however, so it was not something that I needed to have.
