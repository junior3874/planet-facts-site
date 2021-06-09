const menuMobileIcon = "./src/assets/icon-hamburger.svg";
export default function getMenuMobileTemplate() {
  return `
    <span id="menu_select_planet">
        <img class="icon-hamburger"src="${menuMobileIcon}" alt="">
    </span>
    <ul id="list_planets">

    </ul>
  `;
}
