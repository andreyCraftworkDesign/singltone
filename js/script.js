$(document).ready(function(){
  $("#carousel-example-generic").carousel({
    interval : false
  });

  $("#carousel-example-generic-1").carousel({
    interval : false
  });

  $("#carousel-example-generic-2").carousel({
    interval : false
  });
  $("#carousel-example-generic-3").carousel({
    interval : false
  });

  $("#carousel-example-generic-4").carousel({
    interval : false
  });

  $("#carousel-example-generic-5").carousel({
    interval : false
  });
});


const solidLinks = document.querySelectorAll('.switch-link-solid');
const linesLinks = document.querySelectorAll('.switch-link-lines');
const switcherInputs = document.querySelectorAll('.switch-wrapper input');
const indicators = document.querySelectorAll('.carousel-indicators li');

const changeStyle = (param) => {
  for (let x = 0; x<param.length; x++) {
    param[x].addEventListener("click", function(evt) {


      let parent = evt.currentTarget.closest(".carousel").querySelector('.carousel-inner > .active');
      let input = evt.currentTarget.closest(".carousel").querySelector('input');
      let solidLink = evt.currentTarget.closest(".carousel").querySelector('.switch-link-solid');
      let linesLink = evt.currentTarget.closest(".carousel").querySelector('.switch-link-lines');


      let solidImg = parent.querySelector('.solid-img');
      let linesImg = parent.querySelector('.lines-img');

      if (evt.currentTarget.checked || evt.currentTarget.classList.contains('switch-link-lines')) {
       //linesImg.style.display = "block";
       //solidImg.style.display = "none";
       linesImg.style.visibility = "visible";
       linesImg.style.opacity = 1;
       solidImg.style.visibility = "hidden";
       solidImg.style.opacity = 0;


       linesLink.style.color = "#BFBFD3";
       solidLink.style.color = "#5F5FFF";
       input.checked = true;
       input.style.outline = "none";

     } else {
       linesImg.style.visibility = "hidden";
       linesImg.style.opacity = 0;
       solidImg.style.visibility = "visible";
       solidImg.style.opacity = 1;

       linesLink.style.color = "#5F5FFF";
       solidLink.style.color = "#BFBFD3";
       input.checked = false;


      /*
      linesImg.style.display = "none";
      solidImg.style.display = "block";
      linesLink.style.color = "#5F5FFF";
      solidLink.style.color = "#BFBFD3";
      input.checked = false;
      */
    }

  });
  }
}

const defaultState = (param) => {
  for (let x = 0; x<param.length; x++) {
    param[x].addEventListener("click", function(evt) {
     let input = evt.currentTarget.closest(".carousel").querySelector('input');
     let parent = evt.currentTarget.closest(".carousel").querySelector('.carousel-inner > .active');
     let solidImg = parent.querySelector('.solid-img');
     let linesImg = parent.querySelector('.lines-img');
     let solidLink = evt.currentTarget.closest(".carousel").querySelector('.switch-link-solid');
     let linesLink = evt.currentTarget.closest(".carousel").querySelector('.switch-link-lines');

     if(!evt.currentTarget.classList.contains('active')) {
      setTimeout(function() {
        linesImg.style.visibility = "hidden";
       linesImg.style.opacity = 0;
       solidImg.style.visibility = "visible";
       solidImg.style.opacity = 1;
      }, 1000);
      input.checked = false;
      linesLink.style.color = "#5F5FFF";
      solidLink.style.color = "#BFBFD3";
    }

  });
  }
}

changeStyle(switcherInputs);
changeStyle(solidLinks);
changeStyle(linesLinks);
defaultState(indicators);
