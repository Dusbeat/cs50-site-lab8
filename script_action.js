document.addEventListener("DOMContentLoaded", function(){
    let review_btn = document.querySelector('.btn-click-review')
    review_btn.addEventListener('click', function(){
        let user_review = document.querySelector('.user-text-text')
        let desc_review = document.querySelector('.review-text')
        document.querySelector('.review-desc').innerHTML = desc_review.value;
        document.querySelector('.user-title').innerHTML = user_review.value;
        document.querySelector('.feedback-desc').innerHTML = "Opinião enviada! Você pode ve-la rolando pra baixo";
    });
});

