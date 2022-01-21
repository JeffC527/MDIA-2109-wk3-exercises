var b_template = document.createElement("template"); //<template></template>
b_template.innerHTML = `
<style>
h1{
    color:forestgreen;
}
</style>
<h1>Banner</h1>
`;

class TheBanner extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.shadowRoot.appendChild(b_template.content.cloneNode(true));
    }    
}

customElements.define("the-banner", TheBanner);
