document.addEventListener("DOMContentLoaded", function () {

  const menuBtn = document.getElementById("menuBtn");
  const navigation = document.querySelector(".navigation");

  menuBtn.addEventListener("click", function () {
    navigation.classList.toggle("mobile-open");
  });

  navigation.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navigation.classList.remove("mobile-open");
    });
  });

});
