document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.modal').forEach(function (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target.classList.contains('color-btn')) {
        const btn = e.target;
        const modalContent = btn.closest('.modal-content');
        let prefix = '';

        if (modalContent.querySelector('#snake-main-image')) prefix = 'snake';
        if (modalContent.querySelector('#frog-main-image')) prefix = 'frog';
        if (modalContent.querySelector('#jellyfish-main-image')) prefix = 'jellyfish';
        if (modalContent.querySelector('#frogpride-main-image')) prefix = 'frogpride';
        if (modalContent.querySelector('#cat-main-image')) prefix = 'cat';
        if (modalContent.querySelector('#ajolote-main-image')) prefix = 'ajolote';
        if (modalContent.querySelector('#head-main-image')) prefix = 'head';
        if (modalContent.querySelector('#wings-main-image')) prefix = 'wings';

        if (prefix) {
          const mainImg = modalContent.querySelector(`#${prefix}-main-image`);
          const thumb1 = modalContent.querySelector(`#${prefix}-thumbnail-1`);
          const thumb2 = modalContent.querySelector(`#${prefix}-thumbnail-2`);

          if (mainImg && btn.dataset.main) mainImg.src = btn.dataset.main;
          if (thumb1 && btn.dataset.thumb1) thumb1.src = btn.dataset.thumb1;
          if (thumb2 && btn.dataset.thumb2) thumb2.src = btn.dataset.thumb2;
        }
      }

      // --- Nuevo: cambio de diseño ---
      if (e.target.classList.contains('design-btn')) {
        const btn = e.target;
        const modalContent = btn.closest('.modal-content');
        let prefix = '';

        if (modalContent.querySelector('#snake-main-image')) prefix = 'snake';
        if (modalContent.querySelector('#frog-main-image')) prefix = 'frog';
        if (modalContent.querySelector('#jellyfish-main-image')) prefix = 'jellyfish';
        if (modalContent.querySelector('#frogpride-main-image')) prefix = 'frogpride';
        if (modalContent.querySelector('#cat-main-image')) prefix = 'cat';
        if (modalContent.querySelector('#ajolote-main-image')) prefix = 'ajolote';
        if (modalContent.querySelector('#head-main-image')) prefix = 'head';
        if (modalContent.querySelector('#wings-main-image')) prefix = 'wings';

        if (prefix) {
          const mainImg = modalContent.querySelector(`#${prefix}-main-image`);
          const thumb1 = modalContent.querySelector(`#${prefix}-thumbnail-1`);
          const thumb2 = modalContent.querySelector(`#${prefix}-thumbnail-2`);

          if (mainImg && btn.dataset.main) mainImg.src = btn.dataset.main;
          if (thumb1 && btn.dataset.thumb1) thumb1.src = btn.dataset.thumb1;
          if (thumb2 && btn.dataset.thumb2) thumb2.src = btn.dataset.thumb2;
        }

        // activar botón seleccionado
        modalContent.querySelectorAll('.design-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
    });

    // Opcional: establecer imágenes por defecto al cargar
    const defaultButton = modal.querySelector('.color-btn.default');
    if (defaultButton) {
      const prefix = modal.id;
      const mainImage = modal.querySelector(`#${prefix}-main-image`);
      const thumbnail1 = modal.querySelector(`#${prefix}-thumbnail-1`);
      const thumbnail2 = modal.querySelector(`#${prefix}-thumbnail-2`);

      if (mainImage && defaultButton.dataset.main) mainImage.src = defaultButton.dataset.main;
      if (thumbnail1 && defaultButton.dataset.thumb1) thumbnail1.src = defaultButton.dataset.thumb1;
      if (thumbnail2 && defaultButton.dataset.thumb2) thumbnail2.src = defaultButton.dataset.thumb2;
    }
  });
});

// Animación de clientes solo mientras se está scrolleando
document.addEventListener("DOMContentLoaded", function () {
  const clientesRows = document.querySelectorAll("#clientes .clientes-row");
  let scrollTimeout = null;

  function setAnimationState(state) {
    clientesRows.forEach(row => {
      row.style.animationPlayState = state;
    });
  }

  function handleScroll() {
    setAnimationState("running");
    if (scrollTimeout) clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      setAnimationState("paused");
    }, 200);
  }

  // Inicialmente pausado
  setAnimationState("paused");

  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", handleScroll);
});

// Active state para los botones de color de camisa
document.querySelectorAll('.color-btn').forEach(button => {
  button.addEventListener('click', () => {
    const parent = button.closest('.col-md-6');
    parent.querySelectorAll('.color-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});
