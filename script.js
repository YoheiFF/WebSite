document.addEventListener('DOMContentLoaded', function () {
    // Modal-related elements
    var showModalBtn = document.getElementById('showModalBtn');
    var modalContainer = document.getElementById('modalContainer');
    var closeModalBtn = document.getElementById('closeModalBtn');
  
    // Modal button click event
    showModalBtn.addEventListener('click', function () {
      modalContainer.style.display = 'block';
    });
  
    // Close modal button click event
    closeModalBtn.addEventListener('click', function () {
      modalContainer.style.display = 'none';
    });
  
    // Close modal if clicked outside the modal
    window.addEventListener('click', function (event) {
      if (event.target === modalContainer) {
        modalContainer.style.display = 'none';
      }
    });
  
    const fadeInImage = document.getElementById('fadeInImage');

    // 画像のフェードイン関数
    const fadeIn = () => {
      if (fadeInImage) {
        fadeInImage.style.opacity = '1';
      }
    };
    
    // 指定した時間後にフェードインの表示を行う
    setTimeout(fadeIn, 500); // 1秒後にフェードイン表示
  });
  