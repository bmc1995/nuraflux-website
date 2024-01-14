class NavigationComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
        </nav>
        `;
  }
}
// Register the component
customElements.define("app-navigation", NavigationComponent);
