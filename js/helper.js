function ntpopen() {
    var x = document.getElementById("ntpo");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } 

  function ntsopen() {
    var x = document.getElementById("ntso");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  // Modal functionality for enlarged images
  function openModal(img) {
    console.log("OpenModal called with:", img);
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("modalCaption");
    
    console.log("Modal elements:", modal, modalImg, captionText);
    
    if (modal && modalImg && captionText) {
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt;
      
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    } else {
      console.error("Modal elements not found!");
    }
  }

  function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
    
    // Restore body scroll
    document.body.style.overflow = "auto";
  }

  // Close modal when pressing Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }); 