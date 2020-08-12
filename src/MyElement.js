export class MyElement extends HTMLElement {
    static get tag() {
        return "my-element";
    }

    constructor() {
        super();
        this.getAttributes = this.getAttributes.bind(this);
        this.getHtml = this.getHtml.bind(this);
        const attributes = this.getAttributes(this);
        const shadowRoot = this.attachShadow({mode: 'open'});

        const styleNode = `
        <style type="text/css">
            .salutation {
                color: ${attributes.color};
            }
        </style>`;

        shadowRoot.innerHTML = styleNode + this.getHtml(attributes.name);
    }

    getAttributes(element) {
        const attributes = {};
        attributes.name = element.getAttribute('name');
        attributes.color = element.getAttribute('color');
        return attributes;
    }

    getHtml(name) {
        return `<div class="salutation">hello ${name}</div>`;
    }
}
