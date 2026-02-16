function loading() {
  var tl = gsap.timeline();
  tl.to("#yellow1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.7,
    ease: "expo.out",
  })

    .from(
      "#yellow2",
      {
        top: "100%",
        delay: 0.6,
        duration: 0.7,
        ease: "expo.out",
      },
      "anim",
    )
    .to(
      "#loader h1",
      {
        delay: 0.7,
        duration: 0.7,
        color: "black",
      },
      "anim",
    )
    .to("#loader", {
      opacity: 0,
    })
    .to("#loader", {
      display: "none",
    });
}

function loco() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  document.querySelector(".footer .backtoTop").addEventListener("click", () => {
    scroll.scrollTo(0);
  });

  const opZero = document.querySelectorAll(".op");
  const project = document.querySelector(".proj");
  const cross = document.querySelector(".cross i");

  const tl = gsap.timeline({ paused: true });

  tl.to(opZero, {
    opacity: 0,
  })
    .to(
      project,
      {
        x: 250,
        duration: 1,
      },
      "<",
    )
    .to(
      cross,
      {
        rotation: 133,
        transformOrigin: "50% 50%",
      },
      "<",
    );
    
 
  scroll.on("scroll", (obj) => {
    // obj.scroll.y = scroll inside #main
    if (obj.scroll.y > 0 ) {
      tl.play();
    } else {
      tl.reverse();
      
    }
  });

 let openNav = false;

cross.addEventListener("click", (e) => {
  openNav = !openNav; // flip the state
  if(openNav){
    tl.play();
  } else {
    tl.reverse();
  }
});
  var elems = document.querySelectorAll(".elem");
  var page2 = document.querySelector("#page2");
  elems.forEach((ele) => {
    ele.addEventListener("mouseenter", () => {
      var bgimg = ele.getAttribute("data-img");

      page2.style.backgroundImage = `url(${bgimg})`;
    });

    ele.addEventListener("mouseleave", () => {
      page2.style.backgroundColor = "#000";
    });
  });
}

loading();
loco();
