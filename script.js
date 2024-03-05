document.addEventListener("DOMContentLoaded", function() {
    var sidebarItems = document.querySelectorAll('.sidebar-item');

    sidebarItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var targetId = this.getAttribute('data-target-id');
            var targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

window.addEventListener('scroll', function() {
    var scrollY = window.scrollY;
    var sidebar = document.getElementById('side_bar');
    var header = document.getElementById('header');

    if (window.innerWidth >= 1124 && scrollY > 607) {
        sidebar.style.display = 'block';
        header.style.display = 'none';
    } else {
        sidebar.style.display = 'none';
        header.style.display = 'flex';
    }
});


document.getElementById("todo1").addEventListener("click", function() {
    window.location.href = "https://joohwanleejjang.github.io/todoapp.github.io";
});

document.getElementById("todo2").addEventListener("click", function() {
    window.location.href = "https://joohwanleejjang.github.io/todoapp.github.io";
});


document.getElementById("github").addEventListener("click", function() {
    window.location.href = "https://github.com/JoohwanLeeJJang";
});

document.getElementById("Java").addEventListener("click", function() {
    window.location.href = "https://github.com/JoohwanLeeJJang/Java-Algolithm-";
});

document.getElementById("imglink1").addEventListener("click", function() {
    window.location.href = "https://github.com/JoohwanLeeJJang/clock"; 
});

document.getElementById("imglink2").addEventListener("click", function() {
    window.location.href = "https://joohwanleejjang.github.io/Business/"; 
});

document.getElementById("imglink3").addEventListener("click", function() {
    window.location.href = "https://github.com/JoohwanLeeJJang/JoohwanLeeJJang2.github.io"; 
});




