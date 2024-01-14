/**
 *
 * Web Component that renders a header element with a title attribute.
 *
 * ---
 *
 * @example```html
 * <app-header title="Web Components"></app-header>
 * ```
 */
class HeaderComponent extends HTMLElement {
  constructor(title: string = "Title") {
    super();
    this.title = title;
    this.innerHTML = `
            <header>
                    <h1>${title}</h1>

                    }
            </header>
            `;
  }

  connectedCallback() {
    console.log("Header component added to the DOM");
  }

  disconnectedCallback() {
    console.log("Header component removed from the DOM");
  }

  adoptedCallback() {
    console.log("Header component moved to a new page");
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    console.log("Header component attributes changed");

    console.table([{ name, oldValue, newValue }]);
  }

  static get observedAttributes() {
    return ["title"];
  }

  get title(): string {
    return this.getAttribute("title") || "";
  }

  set title(value: string) {
    this.setAttribute("title", value);
  }
}

customElements.define("app-header", HeaderComponent);

export default HeaderComponent;
