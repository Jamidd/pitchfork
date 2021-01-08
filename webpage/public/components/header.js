class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar" style="background-color:GhostWhite;" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="/images/logo.png" width="40" height="40">
                </a>

                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarData" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" href="/">
                        Home
                    </a>

                    <a class="navbar-item" href="/simulate/log">
                        Simular
                    </a>
                    <!-- <a class="navbar-item" href="/">
                        Nosotros
                    </a>

                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link" href="/">
                            More
                        </a>

                        <div class="navbar-dropdown">
                            <a class="navbar-item" href="/">
                                About
                            </a>
                            <a class="navbar-item" href="/">
                                Jobs
                            </a>
                        </div>
                    </div> -->

                    <div class="navbar-end">
                    </div>
                </div>
            </div>
        </nav>
        `;
    }
}

customElements.define('header-component', Header);