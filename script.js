var acc = document.getElementsByClassName("accordion");
var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
    
    function myFunction1() {
      var element = document.getElementById("icon1");
      element.classList.toggle("rotate");
    }

    function myFunction2() {
      var element = document.getElementById("icon2");
      element.classList.toggle("rotate");
    }

    function myFunction3() {
      var element = document.getElementById("icon3");
      element.classList.toggle("rotate");
    }

    function myFunction4() {
      var element = document.getElementById("icon4");
      element.classList.toggle("rotate");
    }

    function myFunction5() {
      var element = document.getElementById("icon5");
      element.classList.toggle("rotate");
    }