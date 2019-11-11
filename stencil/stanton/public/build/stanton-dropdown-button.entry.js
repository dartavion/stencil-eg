import { r as registerInstance, h } from './core-f40bc8c4.js';

const DropDownButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "stanton-dropdown-button" }, h("button", { class: "stanton-dropdown-button__button-snowman-icon" }, h("span", null), h("span", null), h("span", null)), h("div", { class: "stanton-dropdown-button__actions" }, h("slot", null))));
    }
    static get style() { return ".stanton-dropdown-button > button {\n  background: none;\n  border: none;\n  width: 40px;\n  height: 30px;\n  font-size: 24px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.stanton-dropdown-button .stanton-dropdown-button__button-snowman-icon span {\n  display: block;\n  background-color: black;\n  border: 2px solid black;\n  border-radius: 100px;\n  width: 2px;\n  height: 2px;\n}\n.stanton-dropdown-button .stanton-dropdown-button__actions {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n.stanton-dropdown-button .stanton-dropdown-button__actions button {\n  border: none;\n  background: none;\n}\n.stanton-dropdown-button .stanton-dropdown-button__actions::before {\n  content: \"\";\n  width: 0;\n  height: 0;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-bottom: 10px solid red;\n}"; }
};

export { DropDownButton as stanton_dropdown_button };
