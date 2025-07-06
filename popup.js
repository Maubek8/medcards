// popup.js atualizado com a interação "Curioso?"
document.addEventListener('DOMContentLoaded', function() {
  // Get elements
  const popupContainer = document.getElementById('popup-container');
  const closePopup = document.getElementById('close-popup');
  const mainCta = document.getElementById('main-cta');
  const floatCta = document.querySelector('.cta-float');
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  // Show popup with custom message
  function showPopup() {
    // Create a temporary message element
    const tempMessage = document.createElement('div');
    tempMessage.className = 'curious-message';
    tempMessage.innerHTML = `
      <div class="curious-content">
        <p>Curioso? 😊</p>
        <p>Aguarde o projeto final!</p>
        <div class="smiley">😉</div>
      </div>
    `;
    
    // Style it directly (you can also add these styles to your CSS)
    tempMessage.style.position = 'fixed';
    tempMessage.style.top = '50%';
    tempMessage.style.left = '50%';
    tempMessage.style.transform = 'translate(-50%, -50%)';
    tempMessage.style.backgroundColor = 'white';
    tempMessage.style.padding = '2rem';
    tempMessage.style.borderRadius = '12px';
    tempMessage.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
    tempMessage.style.zIndex = '1001';
    tempMessage.style.textAlign = 'center';
    tempMessage.style.maxWidth = '300px';
    
    document.body.appendChild(tempMessage);
    
    // Add animation to smiley
    const smiley = tempMessage.querySelector('.smiley');
    smiley.style.display = 'inline-block';
    smiley.style.fontSize = '2rem';
    smiley.style.animation = 'bounce 0.5s ease infinite alternate';
    
    // Add the animation to the head
    const style = document.createElement('style');
    style.textContent = `
      @keyframes bounce {
        from { transform: translateY(0); }
        to { transform: translateY(-10px); }
      }
    `;
    document.head.appendChild(style);
    
    // Remove after 3 seconds
    setTimeout(() => {
      tempMessage.style.opacity = '0';
      tempMessage.style.transition = 'opacity 0.5s ease';
      
      setTimeout(() => {
        document.body.removeChild(tempMessage);
        document.head.removeChild(style);
        
        // Now show the actual popup
        popupContainer.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }, 500);
    }, 3000);
  }
  
  // Hide popup
  function hidePopup() {
    popupContainer.style.display = 'none';
    document.body.style.overflow = '';
  }
  
  // Event listeners for CTAs
  if (mainCta) mainCta.addEventListener('click', function(e) {
    e.preventDefault();
    showPopup();
  });
  
  if (floatCta) floatCta.addEventListener('click', function(e) {
    e.preventDefault();
    showPopup();
  });
  
  // Close popup
  if (closePopup) closePopup.addEventListener('click', hidePopup);
  
  // Close when clicking outside popup content
  popupContainer.addEventListener('click', function(e) {
    if (e.target === popupContainer) {
      hidePopup();
    }
  });
  
  // FAQ functionality
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      this.classList.toggle('active');
      const answer = this.nextElementSibling;
      if (this.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = '0';
      }
    });
  });
  
  // Form submission
  const signupForm = document.getElementById('signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Here you would normally send the form data to your server
      alert('Cadastro realizado com sucesso! Redirecionando...');
      // Simulate form submission
      setTimeout(() => {
        window.location.href = 'https://seucheckout.com';
      }, 1500);
    });
  }
  
  // Auto-open popup after 30 seconds (without the curious message)
  setTimeout(() => {
    const alreadyShown = localStorage.getItem('popupShown');
    if (!alreadyShown) {
      popupContainer.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      localStorage.setItem('popupShown', 'true');
    }
  }, 30000);
});
