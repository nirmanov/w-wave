// header-search
document.querySelector(".form-container__btn-open").addEventListener("click", function () {
  document.querySelector(".form-search").classList.add("form-search__active");
  this.classList.add("active");
})
document.addEventListener("click", function (e) {
  let target = e.target;
  let form = document.querySelector(".form-search");
  if (!target.closest(".form-container")) {
    form.classList.remove("form-search__active");
    form.querySelector("input").value = "";
    document.querySelector(".form-container__btn-open").classList.remove("active")
  }
});
document.querySelector(".form-search__close-btn").addEventListener("click", function () {
  document.querySelector(".form-search").classList.remove("form-search__active");
  document.querySelector(".form-container__btn-open").classList.remove("active")
})