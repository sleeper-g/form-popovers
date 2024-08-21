/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: ./src/js/Form.js
class Form {
  constructor(parent) {
    this.parent = parent;
  }
  init() {
    this.parent.innerHTML = this.constructor.markup;
    const btn = document.querySelector(".form-button");
    btn.addEventListener("click", this.BtnClick);
  }
  static get markup() {
    return `<div class="widget">
        <div class="form">
        <h3 class="form-header">Popover title</h3>
        <p class="form-text">And here's some amazing
         content. It's very engaging. Right?</p>
        </div>
        <button class="form-button" type="button">Click to toggle popover</button>
        </div>`;
  }
  BtnClick() {
    const formHide = document.querySelector(".form");
    formHide.classList.toggle("active");
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const app_parent = document.querySelector("body");
const app_form = new Form(app_parent);
app_form.init();
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;
//# sourceMappingURL=main.js.map