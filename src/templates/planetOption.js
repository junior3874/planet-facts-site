export default function getPlanetOptionTemplate(planetNames) {
	const planetsHtmlList = planetNames.map(
		(name) => `
        <li id="${name}" class="planet_option">
            <a>${name}</a>
        </li>
    `
	);

	return planetsHtmlList.join(" ");
}
