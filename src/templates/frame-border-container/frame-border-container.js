export class MyFrame extends HTMLElement {
    value = this.textContent
    margin = this.getAttribute('margin')
    connectedCallback() {
        this.innerHTML =
            `<div class="frame">
                    <div class="frame-container">
                        <p class="paragraph" 
                        style='
                            margin: 
                                ${this.margin}'>
                            ${this.value}
                        </p>
                    </div>
            </div>`

    }

}

customElements.define('my-frame', MyFrame)
