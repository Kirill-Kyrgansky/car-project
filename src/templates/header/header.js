export class MyFrame extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `<section class="section">
  <div class='container'>
  <header class="header">
    <a href=''>
      <img src="../../assets/img/logo/dark-logo.svg" alt="">
    </a>
    <div class='header-links'>
      <a href='' class='header-links__element'>
        sos
      </a>
      <a href='' class='header-links__element'>
        лайфхаки
      </a>
      <a href='' class='header-links__element'>
        для будущих автомобилистов
      </a>
    </div>
  </header>
</div>
</section>`
  }

}

customElements.define('my-header', MyFrame)
