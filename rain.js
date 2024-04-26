document.addEventListener("DOMContentLoaded", function() {
    var scrollAnimationSection = document.querySelector(".scroll-animation");

    function toggleScroll() {
        if (window.scrollY > 0) {
            document.body.classList.add("scrolled");
        } else {
            document.body.classList.remove("scrolled");
        }
    }

    toggleScroll(); // Check initial state
    window.addEventListener("scroll", toggleScroll);
});


