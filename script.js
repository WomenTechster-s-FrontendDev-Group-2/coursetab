const btns = document.querySelectorAll('[data-target-tab]');

btns.forEach((btn)=> {
    btn.addEventListener("click", ()=> {
        btns.forEach((btn) =>btn.classList.remove("active"));

        constitems = document.querrySelectorAll(".item");

        items.forEach((item) =>  item.classList.remove("active"));
        btn.classList.add("active");
        document.querySelector(btn.dataset.targetTab).classList.add("active");


    });
});