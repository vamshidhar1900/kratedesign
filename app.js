
const button1 = document.querySelector(".accordion-button1");


  button1.addEventListener("click", () => {
    const contentDiv = document.querySelector('.p1');
    const icon = button1.querySelector("img");
    const main1=document.querySelector('.mainparent1');
    const hr=document.querySelector('.hr1');

    button1.parentElement.parentElement.classList.toggle("active");
    

    if (contentDiv.style.display === "none") {
      // Content is hidden, show it
      contentDiv.style.display = "block";
      icon.style.transform = "rotate(135deg)"; // Rotate icon for open state (optional)
      contentDiv.classList.add("active");
      main1.classList.add("active");
      button1.classList.add("active") // Add "active" class to the content div
      hr.style.display="none";
    } else {
      // Content is visible, hide it
      contentDiv.style.display = "none";
      icon.style.transform = "rotate(0deg)"; // Rotate icon for closed state (optional)
      contentDiv.classList.remove("active");
      main1.classList.remove("active"); 
      button1.classList.remove("active")     // Remove "active" class from the content div
      hr.style.display="block";
    }
  });

  const button2 = document.querySelector(".accordion-button2");


  button2.addEventListener("click", () => {
    const contentDiv = document.querySelector(".p2");
    const icon = button2.querySelector("img");
    const main2=document.querySelector('.mainparent2');
    const hr2=document.querySelector('.hr2');

    button2.parentElement.parentElement.classList.toggle("active");

    if (contentDiv.style.display === "none") {
      // Content is hidden, show it
      contentDiv.style.display = "block";
      icon.style.transform = "rotate(135deg)"; // Rotate icon for open state (optional)
      contentDiv.classList.add("active"); 
      main2.classList.add("active");
      button2.classList.add("active") // Add "active" class to the content div
      hr2.style.display="none";// Add "active" class to the content div
    } else {
      // Content is visible, hide it
      contentDiv.style.display = "none";
      icon.style.transform = "rotate(0deg)"; // Rotate icon for closed state (optional)
      contentDiv.classList.remove("active"); // Remove "active" class from the content div
      main2.classList.remove("active"); 
      button2.classList.remove("active")     // Remove "active" class from the content div
      hr2.style.display="block";
    }
  });

  const button3 = document.querySelector(".accordion-button3");


  button3.addEventListener("click", () => {
    const contentDiv = document.querySelector(".p3");
    const icon = button3.querySelector("img");
    const main3=document.querySelector(".mainparent3");
    const hr3=document.querySelector('.hr3');

    button3.parentElement.parentElement.classList.toggle("active");

    if (contentDiv.style.display === "none") {
      // Content is hidden, show it
      contentDiv.style.display = "block";
      icon.style.transform = "rotate(135deg)"; // Rotate icon for open state (optional)
      contentDiv.classList.add("active");
      main3.classList.add("active");
      button3.classList.add("active") // Add "active" class to the content div
      hr3.style.display="none"; // Add "active" class to the content div
    } else {
      // Content is visible, hide it
      contentDiv.style.display = "none";
      icon.style.transform = "rotate(0deg)"; // Rotate icon for closed state (optional)
      contentDiv.classList.remove("active"); 
      main3.classList.remove("active"); 
      button3.classList.remove("active")     // Remove "active" class from the content div
      hr3.style.display="block";// Remove "active" class from the content div
    }
  });

  const button4 = document.querySelector(".accordion-button4");


  button4.addEventListener("click", () => {
    const contentDiv = document.querySelector(".p4");
    const icon = button4.querySelector("img");
    const main4=document.querySelector(".mainparent4");
    const hr4=document.querySelector('.hr4');


    button4.parentElement.parentElement.classList.toggle("active");

    if (contentDiv.style.display === "none") {
      // Content is hidden, show it
      contentDiv.style.display = "block";
      icon.style.transform = "rotate(135deg)"; // Rotate icon for open state (optional)
      contentDiv.classList.add("active");
      main4.classList.add("active");
      button4.classList.add("active") // Add "active" class to the content div
      hr4.style.display="none"; // Add "active" class to the content div
    } else {
      // Content is visible, hide it
      contentDiv.style.display = "none";
      icon.style.transform = "rotate(0deg)"; // Rotate icon for closed state (optional)
      contentDiv.classList.remove("active");
      main4.classList.remove("active"); 
      button4.classList.remove("active")     // Remove "active" class from the content div
      hr4.style.display="block"; // Remove "active" class from the content div
    }
  }); 

  const button5 = document.querySelector(".accordion-button5");


  button5.addEventListener("click", () => {
    const contentDiv = document.querySelector(".p5");
    const icon = button5.querySelector("img");
    const main5=document.querySelector(".mainparent5");
    const hr5=document.querySelector('.hr5');

    button5.parentElement.parentElement.classList.toggle("active");

    if (contentDiv.style.display === "none") {
      // Content is hidden, show it
      contentDiv.style.display = "block";
      icon.style.transform = "rotate(135deg)"; // Rotate icon for open state (optional)
      contentDiv.classList.add("active"); 
      main5.classList.add("active");
      button5.classList.add("active") // Add "active" class to the content div
      hr5.style.display="none";// Add "active" class to the content div
    } else {
      // Content is visible, hide it
      contentDiv.style.display = "none";
      icon.style.transform = "rotate(0deg)"; // Rotate icon for closed state (optional)
      contentDiv.classList.remove("active");
      main5.classList.remove("active"); 
      button5.classList.remove("active")     // Remove "active" class from the content div
      hr5.style.display="block"; // Remove "active" class from the content div
    }
  }); 

const close=document.querySelector('.close') ;
const clickimg=document.querySelector('.sub1') ;
const zoom1=document.querySelector('.zoom1');
const images=document.querySelector('.images');
const sec6=document.querySelector('.sec6') ;
zoom1.parentElement.parentElement.classList.toggle("active")
sec6.classList.toggle("active");
clickimg.addEventListener("click", ()=>{
      zoom1.style.display="block";
      zoom1.classList.add("active");
      images.classList.add("active");
      sec6.classList.add("active");
      sec6.style.filter = "blur(15px)";
      sec6.classList.add("active");
})
close.addEventListener("click", ()=>{
   zoom1.style.display="none";
   sec6.style.filter="none";
})

const close1=document.querySelector('.close1') ;
const clickimg1=document.querySelector('.sub2') ;
const zoom2=document.querySelector('.zoom2');
const images1=document.querySelector('.images');
const sec61=document.querySelector('.sec6') ;
zoom1.parentElement.parentElement.classList.toggle("active")

clickimg1.addEventListener("click", ()=>{
      zoom2.style.display="block";
      zoom2.classList.add("active");
      images1.classList.add("active");
      sec61.classList.add("active");
      sec61.style.filter = "blur(15px)";
   })
close1.addEventListener("click", ()=>{
   zoom2.style.display="none";
   sec61.style.filter="none";
})

const close2=document.querySelector('.close2') ;
const clickimg2=document.querySelector('.sub3') ;
const zoom3=document.querySelector('.zoom3');
const images2=document.querySelector('.images');
const sec62=document.querySelector('.sec6') ;
zoom1.parentElement.parentElement.classList.toggle("active")

clickimg2.addEventListener("click", ()=>{
      zoom3.style.display="block";
      zoom3.classList.add("active");
      images2.classList.add("active");
      sec62.classList.add("active");
      sec62.style.filter = "blur(15px)";
  })
close2.addEventListener("click", ()=>{
   zoom3.style.display="none";
   sec62.style.filter="none";
})

const close3=document.querySelector('.close3') ;
const clickimg3=document.querySelector('.sub4') ;
const zoom4=document.querySelector('.zoom4');
const images3=document.querySelector('.images');
const sec63=document.querySelector('.sec6') ;
zoom1.parentElement.parentElement.classList.toggle("active")

clickimg3.addEventListener("click", ()=>{
      zoom4.style.display="block";
      zoom4.classList.add("active");
      images3.classList.add("active");
      sec63.classList.add("active");
      sec63.style.filter = "blur(15px)";
  })
close3.addEventListener("click", ()=>{
   zoom4.style.display="none";
   sec63.style.filter="none";
})

const close4=document.querySelector('.close4') ;
const clickimg4=document.querySelector('.sub5') ;
const zoom5=document.querySelector('.zoom5');
const images4=document.querySelector('.images');
const sec64=document.querySelector('.sec6') ;
zoom1.parentElement.parentElement.classList.toggle("active")

clickimg4.addEventListener("click", ()=>{
      zoom5.style.display="block";
      zoom5.classList.add("active");
      images4.classList.add("active");
      sec64.classList.add("active");
      sec64.style.filter = "blur(15px)";
  })
close4.addEventListener("click", ()=>{
   zoom5.style.display="none";
   sec64.style.filter="none";
})

const close5=document.querySelector('.close5') ;
const clickimg5=document.querySelector('.sub6') ;
const zoom6=document.querySelector('.zoom6');
const images5=document.querySelector('.images');
const sec65=document.querySelector('.sec6') ;
zoom1.parentElement.parentElement.classList.toggle("active")

clickimg5.addEventListener("click", ()=>{
      zoom6.style.display="block";
      zoom6.classList.add("active");
      images5.classList.add("active");
      sec65.classList.add("active");
      sec65.style.filter = "blur(15px)";
  })
close5.addEventListener("click", ()=>{
   zoom6.style.display="none";
   sec65.style.filter="none";
})


