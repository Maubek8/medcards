// popup.js - AXIS Vent Premium Refatorado com interação "Curioso?"

document.addEventListener('DOMContentLoaded', () => {
  const popupContainer = document.getElementById('popup-container');
  const closePopup = document.getElementById('close-popup');
  const mainCta = document.getElementById('main-cta');
  const floatCta = document.querySelector('.cta-float');
  const faqQuestions = document.querySelectorAll('.faq-question');
  const signupForm = document.getElementById('signup-form');

  const showCuriousMessage = () => {
    const tempMessage = document.createElement('div');
    tempMessage.className = 'curious-message';
    tempMessage.innerHTML = `
      <div class="curious-content">
        <p>Curioso? 😊</p>
        <p>Aguarde o projeto final!</p>
        <div class="smiley">😉</div>
      </div>
    `;
    Object.assign(tempMessage.style, {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: 'white',
      padding: '1.5rem',
      borderRadius: '10px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
      zIndex: '1001',
      textAlign: 'center',
      maxWidth: '280px',
      transition: 'opacity 0.5s ease',
    });

    document.body.appendChild(tempMessage);

    const style = document.createElement('style');
    style.textContent = `
      .smiley { 
        display: inline-block; 
        font-size: 2rem; 
        animation: bounce 0.6s ease infinite alternate; 
      }
      @keyframes bounce {
        0% { transform: translateY(0); }
        100% { transform: translateY(-8px); }
      }
    `;
    document.head.appendChild(style);

    setTimeout(() => {
      tempMessage.style.opacity = '0';
      setTimeout(() => {
        tempMessage.remove();
        style.remove();
        openPopup();
      }, 500);
    }, 2500);
  };

  const openPopup = () => {
    popupContainer.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  };

  const closePopupHandler = () => {
    popupContainer.style.display = 'none';
    document.body.style.overflow = '';
  };

  const attachCtaListeners = (cta) => {
    if (cta) {
      cta.addEventListener('click', (e) => {
        e.preventDefault();
        showCuriousMessage();
      });
    }
  };

  const initFaqToggle = () => {
    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        question.classList.toggle('active');
        const answer = question.nextElementSibling;
        answer.style.maxHeight = question.classList.contains('active') 
          ? `${answer.scrollHeight}px` 
          : '0';
      });
    });
  };

  const handleFormSubmission = () => {
    if (signupForm) {
      signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('✅ Cadastro realizado! Redirecionando...');
        setTimeout(() => {
          window.location.href = 'https://seucheckout.com';
        }, 1200);
      });
    }
  };

  const autoOpenPopup = () => {
    const alreadyShown = localStorage.getItem('popupShown');
    if (!alreadyShown) {
      setTimeout(() => {
        openPopup();
        localStorage.setItem('popupShown', 'true');
      }, 25000);
    }
  };

  attachCtaListeners(mainCta);
  attachCtaListeners(floatCta);

  if (closePopup) closePopup.addEventListener('click', closePopupHandler);

  popupContainer.addEventListener('click', (e) => {
    if (e.target === popupContainer) closePopupHandler();
  });

  initFaqToggle();
  handleFormSubmission();
  autoOpenPopup();
});

document.querySelectorAll('.info-button').forEach(button => {
  button.addEventListener('click', () => {
    const topic = button.dataset.info;
    showInfoModal(topic);
  });
});

function showInfoModal(topic) {
  closeExistingInfoModals();

  const modal = document.createElement('div');
  modal.className = 'info-modal';
  modal.innerHTML = `
    <div class="info-content">
      <button class="close-info" title="Fechar">×</button>
      <h3>ℹ️ ${getInfoTitle(topic)}</h3>
      <p>${getInfoText(topic)}</p>
      ${getInfoImage(topic)}
    </div>
  `;
  document.body.appendChild(modal);

  modal.querySelector('.close-info').addEventListener('click', () => modal.remove());
  
  // Fechar ao clicar fora (opcional)
  document.addEventListener('click', function handleOutside(e) {
    if (!modal.contains(e.target)) {
      modal.remove();
      document.removeEventListener('click', handleOutside);
    }
  });
}

function closeExistingInfoModals() {
  document.querySelectorAll('.info-modal').forEach(modal => modal.remove());
}

function getInfoTitle(topic) {
  const titles = {
    'peep': 'O que é PEEP?',
    'driving-pressure': 'Driving Pressure',
    'plato': 'Pressão de Platô',
  };
  return titles[topic] || 'Informação';
}

function getInfoText(topic) {
  const texts = {
    'peep': 'PEEP (Positive End-Expiratory Pressure) é a pressão positiva mantida no final da expiração para prevenir o colapso alveolar, melhorando a oxigenação.',
    'driving-pressure': 'Driving Pressure (DP) é calculado como Platô - PEEP e indica a pressão que realmente distende os pulmões. DP elevado (>15 cmH2O) está associado a maior risco de VILI.',
    'plato': 'A Pressão de Platô (Pplat) é medida em pausa inspiratória e reflete a pressão nos alvéolos, sendo usada para avaliar complacência e risco de barotrauma.',
  };
  return texts[topic] || 'Informação não disponível.';
}

function getInfoImage(topic) {
  const images = {
    'peep': '<img src="https://via.placeholder.com/250x150?text=Curva+PEEP" alt="Curva PEEP" />',
    'driving-pressure': '<img src="https://via.placeholder.com/250x150?text=F%C3%B3rmula+DP" alt="Fórmula Driving Pressure" />',
    'plato': '<img src="https://via.placeholder.com/250x150?text=Plat%C3%B4+Press%C3%A3o" alt="Pressão de Platô" />',
  };
  return images[topic] || '';
}
