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
const Username = elInputUsername.value;
const comment = elInputComment.value;
// let userNameInput = document.getElementById("input-username");
// let userCommentInput = document.getElementById("input-comment");

// soal-01
 const li = document.createElement('li');
        li.className = "list-group-item d-flex justify-content-between align-items-start"
        li.innerHTML = "<div class='ms-2 me-auto'>" + "<div class='fw-bold text-capitalize'>"
                        + Username + "</div>" + comment + "</div>" + "</li>";
                        elCommentList.appendChild(li);
                        elCommentList.insertBefore(li, elCommentList.firstChild);

      }
      event.preventDefault();
      elBtnSubmit.onclick = addcomment; 
      elBtnSubmit.addEventListener('click', () => {
      const elCommentSection = document.getElementById('comment-form-section');
      if (elBtnSubmit.onclick = addcomment) {
        elCommentSection.classList.add('d-none');
        elBtnComment.classList.remove('d-none');
        elCommentForm.reset();
      }
    });
    }, true);

   elBtnCancel.addEventListener('click', () => {
    const elCommentSection = document.getElementById('comment-form-section');
    console.log(elBtnCancel);
    elCommentSection.classList.add('d-none');
    elBtnComment.classList.remove('d-none');
    elCommentForm.reset();

  });


