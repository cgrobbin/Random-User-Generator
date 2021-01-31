fetch("https://randomuser.me/api/")
    .then((responseData) => {
        return responseData.json()
    })
    .then((jsonData) => {
        console.log("Here is the data:", jsonData)
    })
