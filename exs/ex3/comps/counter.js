var c_template = document.createElement("template"); //<template></template>
c_template.innerHTML = `
<style>
    body {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
<style>
    #counter {
        background-color: #DAD;
        display: flex;
    }

    #counter > button {
        width: 30px;
        height: 30px;
        background-color: #ADD;
        border: none;
        border-radius: 5px; 
        margin: 5px;
    }

    #counter > div {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #bar {
        width: 0px;
        height: 15px;
        background-color: #BAD;
    }
</style>
<div id="counter">
    <button>-</button>
    <div>1</div>
    <button>+</button>
</div>
<div id="bar"></div>

`;
class TheCounter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.num = 1;
    }

    connectedCallback() {
        this.shadowRoot.appendChild(c_template.content.cloneNode(true));
        this.shadowRoot.querySelector("#i_but").onclick = () => this.inc();
        this.shadowRoot.querySelector("#d_but").onclick = () => this.dec();
    }

    dec() {
        this.num = this.num - 1;
        this.shadowRoot.querySelector("#number").innerText = this.num;
        this.shadowRoot.querySelector("#bar").style.width = (this.num + 10) + "px";
    }

    inc() {
        this.num = this.num + 1;
        this.shadowRoot.querySelector("#number").innerText = this.num;
        this.shadowRoot.querySelector("#bar").style.width = (this.num + 10) + "px";
    }
}

customElements.define("the-counter", TheCounter);
