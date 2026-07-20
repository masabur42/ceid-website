class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="contact.html">Contact Us</a></li>
        </ul>
    `;
    }
}  

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <p><small>&copy; 2026 CEID. All rights reserved.</small></p>
            <small><a href="mailto:info@ceinnovative.com">info@ceinnovative.com</a></small>
        </footer>
        `;
    }   
}

customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);
