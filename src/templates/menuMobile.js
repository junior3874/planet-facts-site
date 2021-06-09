import getPlanetOptionMobileTemplate from "./planetOptionMobile.js";

const menuMobileIcon = "./src/assets/icon-hamburger.svg";
export default function getMenuMobileTemplate(planetNames) {
  return `
    <a id="menu_select_planet">
        <img class="icon-hamburger"src="${menuMobileIcon}" alt="">
    </a>
    <ul id="list_planets">
      ${getPlanetOptionMobileTemplate(planetNames)}
    </ul>
  `;
}
