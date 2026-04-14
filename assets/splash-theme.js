/* ============================================
   SPLASH NORGE - Theme JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

  // === Mobile Menu Toggle ===
  const mobileToggle = document.querySelector('[data-mobile-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      const isOpen = mobileMenu.classList.contains('active');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // === Sticky Header Shadow ===
  const header = document.querySelector('[data-header]');
  if (header) {
    window.addEventListener('scroll', function() {
      header.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  // === Product Image Gallery ===
  const thumbs = document.querySelectorAll('.product-gallery__thumb');
  const mainImage = document.getElementById('product-main-image');

  thumbs.forEach(function(thumb) {
    thumb.addEventListener('click', function() {
      const imageUrl = this.dataset.imageUrl;
      if (mainImage && imageUrl) {
        mainImage.src = imageUrl;
        thumbs.forEach(function(t) { t.classList.remove('active'); });
        thumb.classList.add('active');
      }
    });
  });

  // === Quantity Selector ===
  document.querySelectorAll('.quantity-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const input = this.parentNode.querySelector('.quantity-input');
      if (!input) return;

      const action = this.dataset.action;
      let value = parseInt(input.value) || 1;

      if (action === 'increase') {
        value++;
      } else if (action === 'decrease' && value > 1) {
        value--;
      }

      input.value = value;
    });
  });

  // === Variant Selector (Product Page) ===
  const variantSelect = document.querySelector('.product-variant-select');
  const optionInputs = document.querySelectorAll('.product-option__value input');

  if (variantSelect && optionInputs.length > 0) {
    optionInputs.forEach(function(input) {
      input.addEventListener('change', function() {
        updateVariant();
      });
    });
  }

  function updateVariant() {
    const selectedOptions = [];
    document.querySelectorAll('.product-option').forEach(function(optionGroup) {
      const checked = optionGroup.querySelector('input:checked');
      if (checked) {
        selectedOptions.push(checked.value);
      }
    });

    if (variantSelect) {
      const options = variantSelect.querySelectorAll('option');
      for (let i = 0; i < options.length; i++) {
        const optionText = options[i].textContent.trim();
        const matches = selectedOptions.every(function(opt) {
          return optionText.includes(opt);
        });
        if (matches) {
          variantSelect.value = options[i].value;
          break;
        }
      }
    }
  }

  // === Add to Cart Animation ===
  document.querySelectorAll('.add-to-cart-btn, .product-card__add').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const cartCount = document.querySelector('[data-cart-count]');
      if (cartCount) {
        cartCount.style.transform = 'scale(1.4)';
        setTimeout(function() {
          cartCount.style.transform = 'scale(1)';
        }, 300);
      }
    });
  });
});
