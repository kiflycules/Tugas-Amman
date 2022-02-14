// const btnComment = document.getElementById('btn-comment');
const elBtnComment = document.querySelector('#btn-comment');
const elCommentList = document.querySelector('#comment-list');

const elCommentSection = document.querySelector('#comment-form-section');
 const elCommentForm = document.querySelector('#comment-form');
const elInputUsername = document.querySelector('#input-username');
const elInputComment = document.querySelector('#input-comment');
const elBtnSubmit = document.querySelector('#btn-submit');
const elBtnCancel = document.querySelector('#btn-cancel');

// data baru untuk mengambil nama user dan comment user
let userName = "";
let userComment ="";
// let userNameInput = document.getElementById("input-username");
// let userCommentInput = document.getElementById("input-comment");

// soal-01
elBtnComment.addEventListener("click", showComm);
function showComm (){
    elCommentSection.classList.remove("d-none");

}

// soal-02-dan-03
elCommentForm.addEventListener("submit", function(event){
    event.preventDefault();

    // const userName = userNameInput.value;
    // const userComment = userCommentInput.value;
    // let formatMessage = `(${userName}) ${userComment}`;


    // console.log(event);
    // console.log(userName, userComment);
    console.log(formatMessage);
});

// soal-04


