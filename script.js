// script.js
document.addEventListener('DOMContentLoaded', function () {
    // ボタンと子画面の要素を取得
    var showModalBtn = document.getElementById('showModalBtn');
    var modalContainer = document.getElementById('modalContainer');
    var closeModalBtn = document.getElementById('closeModalBtn');
  
    // ボタンがクリックされたときの処理
    showModalBtn.addEventListener('click', function () {
      modalContainer.style.display = 'block';
    });
  
    // 子画面の閉じるボタンがクリックされたときの処理
    closeModalBtn.addEventListener('click', function () {
      modalContainer.style.display = 'none';
    });
  
    // 子画面の外側（背景）がクリックされたときの処理
    window.addEventListener('click', function (event) {
      if (event.target === modalContainer) {
        modalContainer.style.display = 'none';
      }
    });
  });
  