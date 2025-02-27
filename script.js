document.addEventListener("DOMContentLoaded", function () {
    const showAnimationBtn = document.getElementById("showAnimation");
    const animationModal = document.getElementById("animationModal");
    const closeAnimation = document.getElementById("closeAnimation");

    // Tugmani bosganda Jaguar animatsiyasi chiqadi
    showAnimationBtn.addEventListener("click", function () {
        animationModal.style.display = "flex";
    });

    // Yopish tugmachasi bosilganda modal oynani yopish
    closeAnimation.addEventListener("click", function () {
        animationModal.style.display = "none";
    });

    // Foydalanuvchi ekrandan tashqariga bossa, modal oyna yopiladi
    window.addEventListener("click", function (event) {
        if (event.target === animationModal) {
            animationModal.style.display = "none";
        }
    });
});