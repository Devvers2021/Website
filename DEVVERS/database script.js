/// database script

/// For Login
const userId = document.getElementById('userId');
const userName = document.getElementById('userName');
const password = document.getElementById('password');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const removeBtn = document.getElementById('removeBtn');

const database = firebase.database();
const rootRef = database.ref('users');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const autoId = rootRef.push().key
    rootRef.child(autoId).set({
        user_name: userName.value,
        password: password.value
    });
});

database.ref('/users/' + userId.value).set

/// Updating data
updateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newData = {
        password: password.value
    };
    rootRef.child(userId.value).update(newData);
});


