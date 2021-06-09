import Controller from "./controller.js";
import Service from "./service.js";
import View from "./view.js";

const service = new Service({ url: "data.json" });

const dependeciesController = {
  view: View,
  service,
};

(async () => Controller.initialize(dependeciesController))();
