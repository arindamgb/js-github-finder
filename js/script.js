// Api Documentation:
// https://developer.github.com/v3/

// Fetch an User:
// https://api.github.com/users/a/

// Fetch Repos:
// https://api.github.com/users/a/repos



let searchBtn = document.querySelector('#searchBtn')
let searchUser = document.querySelector('#searchUser');
let ui = new UI();

searchBtn.addEventListener('click', () => {
    let userText = searchUser.value;
    if(userText != '') {
        fetch(`https://api.github.com/users/${userText}`)
            .then(result => result.json())
            .then(data => { 
                if(data.message == 'Not Found') {
                    // Show Alert
                    ui.showAlert('User Not Found', 'alert alert-danger'); // passes the msg and the bootstrap classes
                } else {
                    // Show Profile
                    ui.showProfile(data);
                }
             })
    } else {
        // Clear Profile
        ui.clearProfile();
        // Show Alert
        ui.showAlert('Please Enter a Username', 'alert alert-danger');
    }
});