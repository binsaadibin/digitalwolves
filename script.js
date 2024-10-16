document.addEventListener("DOMContentLoaded", () => {
    // Get the current page URL
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';

    // Select all navigation links
    const navLinks = document.querySelectorAll(".navlist li a");

    // Loop through all navigation links
    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        // If the href attribute matches the current page URL or it's empty and the page is index.html
        if (href === currentPage || (href === '' && currentPage === 'index.html')) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    // Toggle menu icon and navlist visibility
    const menuIcon = document.querySelector(".menu-icon");
    const navlist = document.querySelector(".navlist");

    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle("active");
        navlist.classList.toggle("active");
        document.body.classList.toggle("open");
    });

    // Close navlist when clicking outside
    document.addEventListener("click", (event) => {
        if (!navlist.contains(event.target) && !menuIcon.contains(event.target)) {
            navlist.classList.remove("active");
            menuIcon.classList.remove("active");
            document.body.classList.remove("open");
        }
    });

    // Close navlist when any navigation link is clicked (for mobile)
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navlist.classList.remove("active");  // Close the nav menu
            menuIcon.classList.remove("active"); // Reset the menu icon
            document.body.classList.remove("open"); // Remove the open class to allow body scroll
        });
    });

    // Rotate text effect (if applicable)
    const text = document.querySelector(".text p");
    if (text) {
        text.innerHTML = text.innerHTML.split("").map((char, i) =>
            `<b style="transform:rotate(${i * 6.3}deg)">${char}</b>`
        ).join("");
    }
});









// Partners Section Starts 
$('.partners-slider').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        700:{
            items:3
        },
        1000:{
        	items:5
        }
    }
})
// Partners Section End

// Testimonials Section Starts
$('.testimonials-slider').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        }
    }
})
// Testimonials Section Ends





// switch between about buttons 

const buttons = document.querySelectorAll('.about-btn button');
const contents = document.querySelectorAll('.content');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    contents.forEach(content => content.style.display = 'none');
    contents[index].style.display = 'block';
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});



// portfolio fillter 

var mixer = mixitup('.portfolio-gallery',{
    selectors: {
        target: '.portfolio-box'
    },
    animation: {
        duration: 500
    }
});


// Initialize swiperjs 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },

    breakpoints: {
        576:{
            slidesPerView:2,
            spaceBetween:10,
        },
        1200:{
            slidesPerView:3,
            spaceBetween:20,
        },
    }
  });



//   skill Progress bar 

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

window.addEventListener("scroll",()=>{
    if(!skillsPlayed)
    skillsCounter();
})


function hasReached(el){
    let topPosition = el.getBoundingClientRect().top;
    if(window.innerHeight >= topPosition + el.offsetHeight)return true;
    return false;
}

function updateCount(num,maxNum){
    let currentNum = +num.innerText;
    
    if(currentNum < maxNum){
        num.innerText = currentNum + 1;
        setTimeout(()=>{
            updateCount(num,maxNum)
        },12)
    }
}


let skillsPlayed = false;

function skillsCounter(){
    if(!hasReached(first_skill))return;
    skillsPlayed = true;
    sk_counters.forEach((counter,i)=>{
        let target = +counter.dataset.target;
        let strokeValue = 465 - 465 * (target / 100);

        progress_bars[i].style.setProperty("--target",strokeValue);

        setTimeout(()=>{
            updateCount(counter,target);
        },400)
    });

    progress_bars.forEach(p => p.style.animation = "progress 2s ease-in-out forwards");
}


// side progress bar 

let calcScrollValue = ()=>{
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;

    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100)/calcHeight);
    
    if(pos > 100){
        scrollProgress.style.display = "grid";
    }else{
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click",()=>{
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(#fff ${scrollValue}%,#e6006d ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


// Active Menu on Page Load
document.addEventListener("DOMContentLoaded", () => {
    const menuLi = document.querySelectorAll("header ul li a");
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';

    menuLi.forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentPage || (href === '' && currentPage === 'index.html')) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

// Scroll Reveal
ScrollReveal({
    distance: "90px",
    duration: 2000,
    delay: 200,
    // reset: true, // Uncomment if you want the reveal effect to trigger again on scroll back up
});

ScrollReveal().reveal('.hero-info, .main-text, .proposal, .heading', { origin: "top" });
ScrollReveal().reveal('.about-img, .fillter-buttons, .contact-info', { origin: "left" });
ScrollReveal().reveal('.about-content, .skills', { origin: "right" });
ScrollReveal().reveal('.allServices, .portfolio-gallery, .blog-box, footer, .img-hero', { origin: "bottom" });

// Initialize EmailJS
(function() {
    emailjs.init('NUcJlFSdLMd-KryN5'); // Replace with your EmailJS public key
})();

// Add event listener to form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const firstName = document.querySelector('input[placeholder="First Name"]').value;
    const lastName = document.querySelector('input[placeholder="Last Name"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const phoneNumber = document.querySelector('input[placeholder="Phone Number"]').value;
    const project = document.querySelector('input[placeholder="Your Project/Service"]').value;
    const message = document.querySelector('textarea').value;

    // Define the template parameters for EmailJS
    const templateParams = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phoneNumber,
        project: project,
        message: message
    };

    // Send the email using EmailJS
    emailjs.send('service_ogdtpy4', 'template_r5b55uz', templateParams)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        
        // Clear form fields after submission
        document.getElementById('contact-form').reset(); // This line resets the form fields

        // Display success alert with colorful styling
        const alertDiv = document.createElement('div');
        alertDiv.classList.add('success-alert');
        alertDiv.innerText = 'Message sent successfully!';

        // Append alert to the form container or specific element
        document.getElementById('contact-form').appendChild(alertDiv);

        // Automatically remove alert after a few seconds (optional)
        setTimeout(() => {
            alertDiv.remove();
        }, 1000); // 5 seconds
    }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send the message. Please try again.');
    });
});
