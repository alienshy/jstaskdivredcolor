document.addEventListener("DOMContentLoaded", function() {
    let divElemanlari = document.querySelectorAll("div");
    let oncekiRenk;
  
    divElemanlari.forEach(function(div) {
      div.addEventListener("click", function() {
        if (div.style.backgroundColor === "red") {
          div.style.backgroundColor = div.dataset.originalColor;
          oncekiRenk = null;
        } else {
          div.dataset.originalColor = div.style.backgroundColor;
          div.style.backgroundColor = "red";
          if (oncekiRenk && oncekiRenk !== div) {
            oncekiRenk.style.backgroundColor = oncekiRenk.dataset.originalColor;
          }
          oncekiRenk = div;
        }
      });
    });
  });
  