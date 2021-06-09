import getMenuMobileTemplate from "./templates/menuMobile.js";

// const btnListPlanets = document.getElementById();
const navContent = document.getElementById("planet_options");

const mobileViewPort = window.matchMedia("(max-width: 786px)");

export default class View {
  //menumobile
  static initializeMobileViewPort() {
    mobileViewPort.addListener(View._monitoringMobileViewPort);
  }

  static _monitoringMobileViewPort() {
    View._removeOldContentHeader();
    mobileViewPort.matches ? View._setMenuMobile() : View._removeMenuMobile();
  }

  static _removeOldContentHeader() {
    navContent.innerHTML = "";
  }
  static _setMenuMobile() {
    const htmlTemplateMenuDesktop = getMenuMobileTemplate();
    navContent.innerHTML = `${htmlTemplateMenuDesktop}`;
  }

  static _setMenuDesktop() {
    console.log("OK");
  }
}
