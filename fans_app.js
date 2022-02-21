const commentInput = document.querySelector('.comment-input');
const addCommentBtn = document.querySelector('.add-btn');
const commentContent = document.querySelector('.fans-coment');
const fansBlock = document.querySelector('.fans-content');
const fanInfo = document.querySelector('.fans-info');

let newCommentContent;
let newCommentText;
let newFanInfo;

addCommentBtn.addEventListener('click', () => {
    if (commentInput.value) {
        newCommentContent = commentContent.cloneNode(true);
        newFanInfo = fanInfo.cloneNode(true);

        newCommentText = document.createElement('p');
        newCommentText.innerHTML = commentInput.value;

        console.log(newFanInfo);
        newFanInfo.replaceChild(getCurrentDate(), newFanInfo.firstElementChild);
        newFanInfo.replaceChild(getRandomName(), newFanInfo.lastElementChild);

        newCommentContent.replaceChild(newCommentText, newCommentContent.firstElementChild);
        newCommentContent.replaceChild(newFanInfo, newCommentContent.lastElementChild);

        fansBlock.appendChild(newCommentContent);
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