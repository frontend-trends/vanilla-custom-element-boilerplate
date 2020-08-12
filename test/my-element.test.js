import { MyElement } from '../src/MyElement';
import { TestUtils } from './test-utils';
window.customElements.define('my-element', MyElement);

describe('<my-element>', () => {
    it('should render', async () => {
        const {shadowRoot} = await TestUtils.render(MyElement.tag, {
            "name": "world",
            "color": "blue"
        });
        const saluation = shadowRoot.querySelectorAll('.salutation');
        expect(saluation.length).toEqual(1);
        expect(saluation[0].textContent).toEqual("hello world");
       
    });
});