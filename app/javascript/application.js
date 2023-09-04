// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

import 'bootstrap'
// import ./add_jquery'import "@hotwired/turbo-rails"
// import "controllers"

document.addEventListener("DOMContentLoaded", function(event) {
  const profileDeleteBtn = document.getElementById("profile-delete-btn");

  profileDeleteBtn.onclick = function(evt) {
    if (!confirm("Are you sure?")) {
      return evt.preventDefault();
    }
  };
});

document.addEventListener("DOMContentLoaded", function(event) {
  const articleDeleteBtn = document.getElementById("article-delete-btn");

  articleDeleteBtn.onclick = function(evt) {
    if (!confirm("Are you sure?")) {
      return evt.preventDefault();
    }
  };
});
