// Smooth Scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const targetID = anchor.getAttribute('href');
    document.querySelector(targetID).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Button hover ripple effect
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('mouseenter', e => {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});



// Fade-in sections on scroll
const faders = document.querySelectorAll('.fade-in-on-scroll');
const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});



// Unified click event for all buttons
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault(); // Prevent default if needed (optional, depends on your button purpose)

    // You can customize the action here:
    // For demo, let's log the button text and do a simple alert
    console.log('Button clicked:', button.textContent.trim());

    // Example: Show an alert with button label
    alert(`You clicked the "${button.textContent.trim()}" button!`);

    // You can replace the alert with any custom function or AJAX request here
  });
});

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const targetID = anchor.getAttribute('href');
    document.querySelector(targetID).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
