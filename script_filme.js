document.addEventListener("DOMContentLoaded", function(){
    let action = document.querySelector('#action')
    action.addEventListener('click', function(){
        window.location = "./action.html"
    });

    let adventure = document.querySelector('#aventura')
    adventure.addEventListener('click', function(){
        window.location = "./adventure.html"
    });
    let comedy = document.querySelector('#comédia')
    comedy.addEventListener('click', function(){
        window.location = "./comedy.html"
    });
});

