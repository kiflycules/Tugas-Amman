// const btnComment = document.getElementById('btn-comment');
const elBtnComment = document.querySelector('#btn-comment');
const elCommentList = document.querySelector('#comment-list');

const elCommentSection = document.querySelector('#comment-form-section');
 const elCommentForm = document.querySelector('#comment-form');
const elInputUsername = document.querySelector('#input-username');
const elInputComment = document.querySelector('#input-comment');
const elBtnSubmit = document.querySelector('#btn-submit');
const elBtnCancel = document.querySelector('#btn-cancel');

elBtnComment.addEventListener("click", showComm);
function showComm (){
    elCommentSection.classList.remove("d-none");
}
