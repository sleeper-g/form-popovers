export default class Form {
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
