function showSignInPage() {
    document.getElementById('signInPage').style.display = 'block';
    document.getElementById('joinPage').style.display = 'none';
  }

  function showJoinPage() {
    document.getElementById('signInPage').style.display = 'none';
    document.getElementById('joinPage').style.display = 'block';
  }



  function togglePassword() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eye-icon');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeIcon.classList.remove('far', 'fa-eye');
      eyeIcon.classList.add('fas', 'fa-eye-slash');
    } else {
      passwordInput.type = 'password';
      eyeIcon.classList.remove('fas', 'fa-eye-slash');
      eyeIcon.classList.add('far', 'fa-eye');
    }
  }


//   card functionaltity

// document.addEventListener('DOMContentLoaded', function () {
//     document.querySelectorAll('.connect-button').forEach(function (button) {
//       button.addEventListener('click', function () {
//         alert('Connect button clicked!');
//       });
//     });

//     document.querySelectorAll('.meet-up-button').forEach(function (button) {
//       button.addEventListener('click', function () {
//         alert('Meet Up button clicked!');
//       });
//     });

//     document.querySelectorAll('.get-it-button').forEach(function (button) {
//       button.addEventListener('click', function () {
//         alert('Get It button clicked!');
//       });
//     });

//     document.querySelectorAll('.attend-button').forEach(function (button) {
//       button.addEventListener('click', function () {
//         alert('Attend button clicked!');
//       });
//     });

//     document.querySelectorAll('.add-new-button').forEach(function (button) {
//       button.addEventListener('click', function () {
//         alert('Add New button clicked!');
//       });
//     });
//   });

// function showModal(device) {
//     // Set the appropriate title for the modal
//     document.getElementById('myModal').querySelector('.modal-title').innerText = 'Add New Card for ' + device;
//     $('#myModal').modal('show');
// }

// function addNewCard() {
//     // Get values from the form
//     var cardName = document.getElementById('cardName').value;
//     var cardText = document.getElementById('cardText').value;

//     // Create a new card
//     var newCard = document.createElement('div');
//     newCard.className = 'col-md-4';
//     newCard.innerHTML = `
        // <div class="card">
        //     <div class="card-body">
        //         <p>${cardText}</p>
        //         <button class="btn btn-primary">Add New</button>
        //     </div>
        // </div>
//     `;

//     // Append the new card to the container
//     document.querySelector('.contents .row').appendChild(newCard);

//     // Hide the modal
//     $('#myModal').modal('hide');
// }

document.addEventListener("DOMContentLoaded", function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.onscroll = function () {
      
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          scrollToTopBtn.style.display = "block";
      } else {
          scrollToTopBtn.style.display = "none";
      }
  };

  // Scroll to the top when the button is clicked
  scrollToTopBtn.addEventListener("click", function () {
      document.body.scrollTop = 0; 
      document.documentElement.scrollTop = 0; 
  });
});