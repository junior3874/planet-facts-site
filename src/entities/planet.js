class PlanetProp {
	constructor(prop) {
		this.prop = {
			content: prop.content,
			source: prop.source,
		};
	}
}

export default class Planet {
	constructor({
		name,

		rotation,
		revolution,
		radius,
		temperature,

		overview,
		structure,
		geology,
		images,
	}) {
		this.images = images;
		this.name = name;

		this.structure = new PlanetProp(structure);
		this.geology = new PlanetProp(geology);
		this.overview = new PlanetProp(overview);

		this.rotation = rotation;
		this.revolution_time = revolution;
		this.radius = radius;
		this.temperature = temperature;
	}
}
