document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#btn');
  const ta = new TextAnimation('.animate-title');
  console.log(ta);
  const ta2 = new TextAnimation('.animate-title-2');
  btn.addEventListener('click', function(){
    ta.animate();
    ta2.animate();
  });
});

// console.log(this);

class TextAnimation {
  constructor(el) {
    console.log(this);
    this.el = document.querySelector(el);
    this.chars = this.el.innerHTML.trim().split('');
    this.el.innerHTML = this._splitText();
  }
  _splitText() {
    return this.chars.reduce((acc, curr) => {
      curr = curr.replace(/\s+/, '&nbsp;');
      return  `${acc}<span class="char">${curr}</span>`;
    }, '');

  }
  animate() {
    this.el.classList.toggle('inview');
  }
}
