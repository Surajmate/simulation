//  Window scroll sticky class add
function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
    ) {
        navbar.classList.add("nav-sticky");
    } else {
        navbar.classList.remove("nav-sticky");
    }
}

window.addEventListener('scroll', (ev) => {
    ev.preventDefault();
    windowScroll();
})


// Smooth scroll 
var scroll = new SmoothScroll('#navbar-navlist a', {
    speed: 300,
    offset: 60
});

// Navbar Active Class

var spy = new Gumshoe('#navbar-navlist a', {
    // Active classes
    navClass: 'active', // applied to the nav list item
    contentClass: 'active', // applied to the content
    offset: 70
});


//Counter

const counter = document.querySelectorAll(".counter_value");
const speed = 250; // The lower the slower
counter.forEach((counter_value) => {
  const updateCount = () => {
    const target = +counter_value.getAttribute("data-target");
    const count = +counter_value.innerText;
    const inc = target / speed;
    // Check if target is reached
    if (count < target) {
      // Add inc to count and output in counter_value
      counter_value.innerText = (count + inc).toFixed(0);
      // Call function every ms
      setTimeout(updateCount, 1);
    } else {
      counter_value.innerText = target;
    }
  };
  updateCount();
});



// typed
var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};
TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
    var that = this;
    var delta = 200 - Math.random() * 100;
    if (this.isDeleting) { delta /= 2; }
    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }
    setTimeout(function () {
        that.tick();
    }, delta);
};
function typewrite() {
    if (toRotate === 'undefined') {
        changeText()
    }
    else
        var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


// Contact Form
function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["password"].value;
    var subject = document.forms["myForm"]["subject"].value;
    var comments = document.forms["myForm"]["comments"].value;
    document.getElementById("error-msg").style.opacity = 0;
    document.getElementById('error-msg').innerHTML = "";
    if (name == "" || name == null) {
        document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning'>*Please enter a Name*</div>";
        fadeIn();
        return false;
    }
    if (email == "" || email == null) {
        document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning'>*Please enter a Email*</div>";
        fadeIn();
        return false;
    }
    if (password == "" || password == null) {
        document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning'>*Please enter a Password*</div>";
        fadeIn();
        return false;
    }
    if (subject == "" || subject == null) {
        document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning'>*Please enter a Subject*</div>";
        fadeIn();
        return false;
    }
    if (comments == "" || comments == null) {
        document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning'>*Please enter a Comments*</div>";
        fadeIn();
        return false;
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("simple-msg").innerHTML = this.responseText;
            document.forms["myForm"]["name"].value = "";
            document.forms["myForm"]["email"].value = "";
            document.forms["myForm"]["subject"].value = "";
            document.forms["myForm"]["comments"].value = "";
        }
    };
    xhttp.open("POST", "php/contact.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("name=" + name + "&email=" + email + "&subject=" + subject + "&comments=" + comments);
    return false;
}

function fadeIn() {
    var fade = document.getElementById("error-msg");
    var opacity = 0;
    var intervalID = setInterval(function () {
        if (opacity < 1) {
            opacity = opacity + 0.5
            fade.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 200);
}




//
/********************* Swicher js ************************/
//

function toggleSwitcher() {
    var i = document.getElementById("style-switcher");
    if (i.style.left === "-189px") {
      i.style.left = "-0px";
    } else {
      i.style.left = "-189px";
    }
  }
  
  function setColor(theme) {
    document.getElementById("color-opt").href = "./css/colors/" + theme + ".css";
    toggleSwitcher(false);
  }

// GLightbox Popup
var lightbox = GLightbox({
    selector: '.image-popup',
    title: false,
});

// Collapse Menu
const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('navbarCollapse');
let bsCollapse = '';
window.addEventListener('load', function () {
  window.dispatchEvent(new Event('resize'));
});
window.addEventListener('resize', function () {
  var windowSize = document.documentElement.clientWidth;
  bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
  if (windowSize < 980) {
    navLinks.forEach((l) => {
      l.addEventListener('click', () => { toggleMenu(); });
    });
  } else {
    toggleMenu();
  }
});
function toggleMenu() {
  var windowSize = document.documentElement.clientWidth;
  if (windowSize < 980) {
    bsCollapse.toggle();
  } else {
    bsCollapse = '';
  }
}