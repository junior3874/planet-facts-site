import { constants } from "../_shared/constants.js";

export default function getPlanetOptionMobileTemplate(planets) {
	const planetsHtmlList = planets.map(
		(name) =>
			`
        <li id="${name}" class="planet_option">
            <div class="planet_option_icon" style="background-color:${constants.planetColorsReferences[name]};"></div>
            <span>${name}</span>
            <img src="./src/assets/icon-chevron.svg" alt="go to">
        </li>
    `
	);
	return planetsHtmlList.join(" ");
}
