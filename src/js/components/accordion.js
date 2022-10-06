
"use strict";

document.addEventListener('DOMContentLoaded', function () {
  $(".accordion-list").accordion({
    heightStyle: "content",
    collapsible: true

  });
  document.getElementById("ui-id-1").tabIndex = -1;
  document.getElementById("ui-id-2").tabIndex = -1;
  document.getElementById("ui-id-3").tabIndex = -1;
  document.getElementById("ui-id-4").tabIndex = -1;
  document.getElementById("ui-id-5").tabIndex = -1;

  document.querySelectorAll('.accordion-list__title').forEach(function (element) {

    element.addEventListener('keydown', function (event) {
      var keyName = event.key;

      if (keyName === ' ' || keyName === 'Enter') {

        document.getElementById("ui-id-1").tabIndex = -1;
        document.getElementById("ui-id-2").tabIndex = -1;
        document.getElementById("ui-id-3").tabIndex = -1;
        document.getElementById("ui-id-4").tabIndex = -1;
        document.getElementById("ui-id-5").tabIndex = -1;

        document.querySelectorAll('.accordion-list__title').forEach(function (el) {
          el.closest('.accordion-list__title').setAttribute('aria-expanded', 'false');
        });
        this.closest('.accordion-list__title').setAttribute('aria-expanded', 'true');
      }
    });

    element.addEventListener('click', function (event) {

        document.getElementById("ui-id-1").tabIndex = -1;
        document.getElementById("ui-id-2").tabIndex = -1;
        document.getElementById("ui-id-3").tabIndex = -1;
        document.getElementById("ui-id-4").tabIndex = -1;
        document.getElementById("ui-id-5").tabIndex = -1;

        document.querySelectorAll('.accordion-list__title').forEach(function (el) {
          el.closest('.accordion-list__title').setAttribute('aria-expanded', 'false');
        });

        if(this.getAttribute("aria-expanded")=="true")
        {
           var childElement = this.firstElementChild;
           var nextNode = childElement.nextElementSibling;
           nextNode.closest('.accordion-list__title').setAttribute('aria-expanded', 'true');
        }
    });
  });

});
