document.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

// challenges animation section
document.addEventListener('DOMContentLoaded', () => {
    const typingText = document.getElementById('typing-text');
    const slidingItems = document.getElementById('sliding-items');
    const finalParagraph = document.getElementById('final-paragraph');
  
    // Typing animation
    const typingMessage = "The real challenges in organizations are, and what it's people should pay attention to is...";
    let typingIndex = 0;
  
    function typeText() {
      if (typingIndex < typingMessage.length) {
        typingText.textContent += typingMessage.charAt(typingIndex);
        typingIndex++;
        setTimeout(typeText, 50); // Speed of typing
      } else {
        // Start sliding animation after typing completes
        setTimeout(startSliding, 1000);
      }
    }
  
    // Sliding items animation
    const slidingMessages = [
      "resolving problems",
      "being creative",
      "thinking out of box",
      "foresee current",
      "future challenges",
      "seeing the broad spectrum of possibilities",
      // "also.....",
      // "learning how life changes",
      // "market shifts",
      // "politics",
      // "science/high-tech",
      // "new resources",
      // "economics",
      // "social needs"
    ];
  
    let slideIndex = 0;
  
    function startSliding() {
      if (slideIndex < slidingMessages.length) {
        const span = document.createElement('span');
        span.textContent = slidingMessages[slideIndex];
        slidingItems.innerHTML = ''; // Clear previous content
        slidingItems.appendChild(span);
  
        // Apply slide-in-out animation
        span.style.animation = 'slide-in-out 3s forwards ease-in-out';
        slideIndex++;
  
        // Schedule next message
        setTimeout(startSliding, 3000); // Total animation duration
      } else {
        // Show final paragraph
        showFinalParagraph();
      }
    }
  
    function showFinalParagraph() {
      finalParagraph.classList.remove('d-none');
      finalParagraph.style.animation = 'slide-in-final 1s ease-in-out forwards';
    }
  
    // Start the typing animation after 2 seconds
    setTimeout(typeText, 2000);
  });
  
  

  