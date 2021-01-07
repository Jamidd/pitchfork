class Wasap extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <a  href="https://wa.me/+56990804866" >
          <img src="images/WhatsApp.png" class="wapp";/>
        </a>
        `;
      }
  }
  
customElements.define('whatsapp-component', Wasap);