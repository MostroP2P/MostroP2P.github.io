

document.addEventListener('DOMContentLoaded', function () {

  // site is loaded
  document.querySelector("#documentBody").classList.add("loaded")

  // Function to handle the intersection of an element with the viewport
  function handleIntersection(entries, observer) {
      entries.forEach(function(entry) {
          if (entry.isIntersecting && !entry.target.classList.contains("animate-in")) {
              entry.target.classList.add("animate-in");
          }
      });
  }

  // Create an Intersection Observer
  var observer = new IntersectionObserver(handleIntersection);

  // Select all elements with class "animate-me"
  var elements = document.querySelectorAll(".animate-me");

  // Observe each element
  elements.forEach(function(element) {
      observer.observe(element);
  });


  document.querySelector('.menu-button').addEventListener('click', function() {
   // Get the elements to toggle class on
    var menuBtn = document.querySelectorAll('.menu-button');

    // Iterate over the NodeList and toggle the 'expand' class on each element
    menuBtn.forEach(function(element) {
      element.classList.toggle('expand');
    });
  });

// active menu item
  var menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach(function (menuItem) {
     menuItem.addEventListener('click', function (event) {
        // Prevent the default behavior of the link
        event.preventDefault();

        // Remove 'active' class from all menu items
        menuItems.forEach(function (item) {
           item.classList.remove('active');
        });

        // Add 'active' class to the clicked menu item
        menuItem.classList.add('active');
     });
  });

// scroll to achor
  var links = document.querySelectorAll('a[href^="#"]');

   links.forEach(function(link) {
     link.addEventListener('click', function(e) {
       e.preventDefault();

       var targetId = this.getAttribute('href').substring(1);
       var targetElement = document.getElementById(targetId);

       if (targetElement) {
         var targetPosition = targetElement.offsetTop;
         var startPosition = window.pageYOffset;
         var distance = targetPosition - startPosition - 100;
         var duration = 500; // Adjust the duration as needed
         var startTime = null;

         function scrollAnimation(currentTime) {
           if (startTime === null) startTime = currentTime;
           var timeElapsed = currentTime - startTime;
           var progress = timeElapsed / duration;

           window.scrollTo(0, startPosition + distance * easeInOut(progress));

           if (timeElapsed < duration) {
             requestAnimationFrame(scrollAnimation);
           }
         }

         function easeInOut(t) {
           return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
         }

         requestAnimationFrame(scrollAnimation);
       }
     });
   });

});
