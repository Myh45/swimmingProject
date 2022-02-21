const commentInput = document.querySelector('.comment-input');
const addCommentBtn = document.querySelector('.add-btn');
const commentBlock = document.querySelector('.fans-coment');
const commentsList = document.querySelector('.fans-content');
const fanInfo = document.querySelector('.fans-info');

let newCommentBlock;
let newCommentText;
let newFanInfo;

addCommentBtn.addEventListener('click', () => {
    if (commentInput.value) {
        newCommentBlock = commentBlock.cloneNode(true);
        newFanInfo = fanInfo.cloneNode(true);

        newCommentText = document.createElement('p');
        newCommentText.innerHTML = commentInput.value;

        newFanInfo.replaceChild(getCurrentDate(), newFanInfo.firstElementChild);
        newFanInfo.replaceChild(getRandomName(), newFanInfo.lastElementChild);

        newCommentBlock.replaceChild(newCommentText, newCommentBlock.firstElementChild);
        newCommentBlock.replaceChild(newFanInfo, newCommentBlock.lastElementChild);

        commentsList.appendChild(newCommentBlock);
        commentInput.value = '';
    } else {
        alert("Enter your comment pls!")
    }
});

function getCurrentDate() {
    let today = new Date();

    let date = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear() + ',';

    let time = today.getHours() + ":" + today.getMinutes();

    let currentDate = document.createElement('h2');

    currentDate.innerHTML = date + ' ' + time;

    return currentDate;
}

function getRandomName() {
    const names = ['Google_was_my_idea', 'Averagestudent', 'Real_name_hidden'
        , 'Username_copied', 'Bigfootisreal', 'Red_moon', 'Tokyo_lights', 'Sick_of_coffee',
        'Behind_you', 'Rambo_was_real', 'Image_not_uploaded', 'Sofa_king_cool', 'Early_morning_coffee'];

    let userName = document.createElement('h2');

    userName.innerHTML = names[Math.floor(Math.random() * names.length)];

    return userName;
}