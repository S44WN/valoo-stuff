const form = document.getElementById('login');
var username, password;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log("Form submitted");

  username = document.getElementById('riotid').value;
  password = document.getElementById('pswrd').value;

  url = "https://fig6jjc1bj.execute-api.ap-south-1.amazonaws.com/dev/store/creds";
  data = {
    "RitoID": username,
    "RitoPass": password
    }

  async function postData(url, data) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data)
    })
    // .then(response => response.json())
    // console.log('pass')
    // return response.json()
    var ge = await response.json()
    console.log(ge)
  }

  postData(url, data)
  .then(data => {
    console.log(data);
  });
  
})



// console.log(username, password);



// var uname = document.getElementById('riotid');
// var pword = document.getElementById('pswrd');
// var username;
// var password;

// submitInformation = function(evt){
//     evt.preventDefault();  // Stop the form from reloading the page 
//     // evt.stopPropagation();  // Stop the form from reloading the page
// }

// username = uname.value;
// password = pword.value;
// console.log(username, password) 

// var form = document.getElementById('login'); 
// form.addEventListener('submit', submitInformation);

// console.log(username, password)


// url = "https://fig6jjc1bj.execute-api.ap-south-1.amazonaws.com/dev/store/creds";
// data = {
//     "RitoID": username,
//     "RitoPass": password
//     }

// async function postData(url, data) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//       method: 'POST',
//       mode: 'no-cors',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//     console.log('pass')
//     return response.json()
//   }
  
//   postData(url, data)
//     // .then(datae => {
//     //   console.log(datae);
//     // });

