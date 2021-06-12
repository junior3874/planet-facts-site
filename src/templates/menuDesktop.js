import getPlanetOptionTemplate from "./planetOption.js";

export default function getMenuDesktopTemplate(planetNames) {
	return `
        <ul id="menu_desktop">
            ${getPlanetOptionTemplate(planetNames)}
        </ul>
    `;
}
