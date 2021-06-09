export default function getPlanetOptionMobileTemplate(name) {
  return `
    <li class="planet_option_mobile">
        <div class="planet_option_icon" id="${name}"></div>
        <span>${name}</span>
        <img src="./src/assets/icon-chevron.svg" alt="go to">
    </li>
`;
}
