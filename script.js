window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  //   AFTER DOM FULLY LOADED

  console.log("Window size: " + document.documentElement.clientWidth);
  let mediaBreakpointSize = 1000;
  if (document.documentElement.clientWidth > mediaBreakpointSize) {
    // DESKTOP
    var hiddenHeaderDiv = document.querySelector(".hidden-header-div");
    document
      .querySelector(".header-more-link")
      .addEventListener("click", function () {
        if (!hiddenHeaderDiv.classList.contains("active")) {
          hiddenHeaderDiv.style.display = "flex";
          hiddenHeaderDiv.classList.add("active");
          this.children[0].classList.remove("fa-plus");
          this.children[0].classList.add("fa-minus");
        } else {
          hiddenHeaderDiv.style.display = "none";
          hiddenHeaderDiv.classList.remove("active");
          this.children[0].classList.remove("fa-minus");
          this.children[0].classList.add("fa-plus");
        }

        console.log(this.children[0]);
      });

    // LITTLE TAG
    var littleTag = document.querySelector(".little-tag");
    var t = setInterval(function () {
      var scrollTop =
        window.pageYOffset !== undefined
          ? window.pageYOffset
          : (
              document.documentElement ||
              document.body.parentNode ||
              document.body
            ).scrollTop;

      if (scrollTop > 150) {
        littleTag.style.bottom = "-100px";
        littleTag.style.transition = "0.5s";
      } else {
        littleTag.style.bottom = "0px";
      }

      if (scrollTop > 2000) {
        littleTag.style.display = "none";
      } else {
        littleTag.style.display = "flex";
      }
    }, 10);

    //
  } else {
    // MOBILE
    // -------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------
    // HEADER
    document
      .querySelector(".header-more-link")
      .children[0].classList.remove("fa-minus");
    document
      .querySelector(".header-more-link")
      .children[0].classList.add("fa-plus");
    document.querySelector(".hidden-header-div").style.display = "none";
    document.querySelector(".hidden-header-div").classList.remove("active");
  }

  var mobileMenuButton = document.querySelector(".header-mobile-menu-button");
  var mobileMenuDiv = document.querySelector(".header-hidden-mobile-div");
  var headerLogo = document.querySelector("#header-logo");
  var menuButtonArrow = document.querySelector(
    "#header-mobile-menu-button-arrow"
  );
  mobileMenuButton.addEventListener("click", function () {
    if (!mobileMenuDiv.classList.contains("active")) {
      mobileMenuDiv.style.top = "0";
      mobileMenuDiv.classList.add("active");
      mobileMenuButton.style.color = "white";
      mobileMenuButton.style.transition = "0.5s";
      headerLogo.src = "slike/mobile-logo.PNG";
      menuButtonArrow.style.color = "white";
      menuButtonArrow.style.transform = "rotate(90deg) scale(0.6,1)";
    } else {
      mobileMenuDiv.style.top = "-1000px";
      mobileMenuDiv.classList.remove("active");
      mobileMenuButton.style.color = "black";
      headerLogo.src = "slike/logo.PNG";
      menuButtonArrow.style.color = "black";
      menuButtonArrow.style.transform = "rotate(-90deg) scale(0.6,1)";
    }
  });
  console.dir(mobileMenuButton);
});
