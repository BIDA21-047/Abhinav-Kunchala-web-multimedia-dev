/* Hamburger Menu on Mobile Menu script */
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

/* Slide Show Script */
    var slideImg = document.getElementById("slideImg");
    var images = new Array(
        "/web-multimedia-dev/media/slides/slide1.png", 
        "/web-multimedia-dev/media/slides/slide2.png",
        "/web-multimedia-dev/media/slides/slide3.png", 
        "/web-multimedia-dev/media/slides/slide4.png",
        "/web-multimedia-dev/media/slides/slide5.png", 
        "/web-multimedia-dev/media/slides/slide6.png",
        "/web-multimedia-dev/media/slides/slide7.png", 
        "/web-multimedia-dev/media/slides/slide8.png",
    );

    var len = images.length;
    var i = 0;

    function slider(){
        if(i>len-1){
            i=0;
        }
        slideImg.src = images[i]
        i++;
        setTimeout("slider()" , 4000);
    }

   
/* Feedback Form Script*/
window.addEventListener("DOMContentLoaded", function () {
// get the form elements defined in your form HTML above

var form = document.getElementById("my-form");
// var button = document.getElementById("my-form-button");
var status = document.getElementById("status");

// Success and Error functions for after the form is submitted

function success() {
form.reset();
status.classList.add("success");
status.innerHTML = "Thanks for your feedback, we will get back to you!";
}

function error() {
status.classList.add("error");
status.innerHTML = "Oops! There was a problem.";
}

// handle the form submission event

form.addEventListener("submit", function (ev) {
ev.preventDefault();
var data = new FormData(form);
ajax(form.method, form.action, data, success, error);
});
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
var xhr = new XMLHttpRequest();
xhr.open(method, url);
xhr.setRequestHeader("Accept", "application/json");
xhr.onreadystatechange = function () {
if (xhr.readyState !== XMLHttpRequest.DONE) return;
if (xhr.status === 200) {
  success(xhr.response, xhr.responseType);
} else {
  error(xhr.status, xhr.response, xhr.responseType);
}
};
xhr.send(data);
}



/* Embedded Trailer Script*/

$(document).ready(function(){
/* Toggle Video Modal
-----------------------------------------*/
function toggle_video_modal() {
  
  // Click on video thumbnail or link
  $(".js-trigger-video-modal").on("click", function(e){
    
    // prevent default behavior for a-tags, button tags, etc. 
      e.preventDefault();
  
    // Grab the video ID from the element clicked
    var id = $(this).attr('data-youtube-id');

    // Autoplay when the modal appears
    // Note: this is intetnionally disabled on most mobile devices
    // If critical on mobile, then some alternate method is needed
    var autoplay = '?autoplay=1';

    // Don't show the 'Related Videos' view when the video ends
    var related_no = '&rel=0';

    // String the ID and param variables together
    var src = '//www.youtube.com/embed/'+id+autoplay+related_no;
    
    // Pass the YouTube video ID into the iframe template...
    // Set the source on the iframe to match the video ID
    $("#youtube").attr('src', src);
    
    // Add class to the body to visually reveal the modal
    $("body").addClass("show-video-modal noscroll");
  
});

  // Close and Reset the Video Modal
function close_video_modal() {
  
  event.preventDefault();

  // re-hide the video modal
  $("body").removeClass("show-video-modal noscroll");

  // reset the source attribute for the iframe template, kills the video
  $("#youtube").attr('src', '');
  
}
// if the 'close' button/element, or the overlay are clicked 
  $('body').on('click', '.close-video-modal, .video-modal .overlay', function(event) {
      
    // call the close and reset function
    close_video_modal();
      
});
// if the ESC key is tapped
$('body').keyup(function(e) {
    // ESC key maps to keycode `27`
    if (e.keyCode == 27) { 
      
      // call the close and reset function
      close_video_modal();
      
    }
});
}
toggle_video_modal();

});

// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myGenre() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}


