for(let i = 0; i < document.querySelectorAll(".drop-down-header").length; i++) {
    document.querySelectorAll(".drop-down-header")[i].addEventListener("click", function() {
        document.querySelectorAll(".dropDownContent")[i].classList.toggle("dropDownDisplayTrue");
    });
}