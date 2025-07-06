// popup.js - Versão refatorada com todas as funcionalidades solicitadas

document.addEventListener('DOMContentLoaded', function() {
  // Elementos
  const popupContainer = document.getElementById('popup-container');
  const closePopup = document.getElementById('close-popup');
  const mainCta = document.getElementById('main-cta');
  const floatCta = document.querySelector('.cta-float');
  const secondaryCta = document.querySelector('.cta-secondary');
  const finalCta = document.querySelector('.final-cta .cta-primary');
  const faqQuestions = document.querySelectorAll('.faq-question');
  const curiousPopup = document.getElementById('curious-popup');
  const closeCurious = document.getElementById('close-curious');
  
  // Mostrar popup de cadastro
  function showPopup() {
    popupContainer.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
  
  // Esconder popup de cadastro
  function hidePopup() {
    popupContainer.style.display = 'none';
    document.body.style.overflow = '';
  }
  
  // Mostrar popup "Curioso?"
  function showCuriousPopup() {
    curiousPopup.style.display = 'flex';
    
    // Fechar automaticamente após 10 segundos
    const autoClose = setTimeout(() => {
      hideCuriousPopup();
    }, 10000);
    
    // Se o usuário interagir, cancelar o auto-close
    curiousPopup.addEventListener('mouseenter', () => {
      clearTimeout(autoClose);
    });
  }
  
  // Esconder popup "Curioso?"
  function hideCuriousPopup() {
    curiousPopup.style.display = 'none';
  }
  
  // Event listeners para CTAs principais
  if (mainCta) mainCta.addEventListener('click', function(e) {
    e.preventDefault();
    showCuriousPopup();
  });
  
  if (floatCta) floatCta.addEventListener('click', function(e) {
    e.preventDefault();
    showCuriousPopup();
  });
  
  if (secondaryCta) secondaryCta.addEventListener('click', function(e) {
    e.preventDefault();
    showCuriousPopup();
  });
  
  if (finalCta) finalCta.addEventListener('click', function(e) {
    e.preventDefault();
    showCuriousPopup();
  });
  
  // Fechar popups
  if (closePopup) closePopup.addEventListener('click', hidePopup);
  if (closeCurious) closeCurious.addEventListener('click', hideCuriousPopup);
  
  // Fechar ao clicar fora do conteúdo
  popupContainer.addEventListener('click', function(e) {
    if (e.target === popupContainer) hidePopup();
  });
  
  curiousPopup.addEventListener('click', function(e) {
    if (e.target === curiousPopup) hideCuriousPopup();
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
      // Aqui você enviaria os dados para seu servidor
      alert('Cadastro realizado com sucesso! Redirecionando...');
      // Simulação de envio
      setTimeout(() => {
        window.location.href = 'https://seucheckout.com';
      }, 1500);
    });
  }
  
  // Removido o auto-popup inicial conforme solicitado
});
