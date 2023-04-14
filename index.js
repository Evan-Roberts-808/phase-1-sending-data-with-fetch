// const formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle",
// };

// const configurationObject = {
    // method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json",
//   },
//   body: JSON.stringify(formData),
// };

// fetch("http://localhost:3000/dogs", configurationObject)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (object) {
//     console.log(object);
//   })
//   .catch(function (error) {
//     alert("Bad things!");
//     console.log(error.message);
//   });

function submitData(name, email) {

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    }

    return fetch("http://localhost:3000/users", configurationObject)
        .then(function (response) { 
            return response.json();
        })
        .then(function (object) {
            //find new id of object and append to body
            console.log(object);
            document.querySelector('body').append(object.id);
        })
        .catch(function (error) { 
          console.log(error.message);
          document.querySelector('body').append(error.message);
        })

}

submitData();