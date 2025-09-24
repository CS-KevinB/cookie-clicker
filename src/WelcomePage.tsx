import React, { Component } from "react";
import "./WelcomePage.css"; // use your cookie-clicker CSS for the welcome page
const cookieImage = "/cookie.png"; // public folder (Vite) — change if you keep it elsewhere

// Full typed state that exactly matches your original JS state keys and values
interface WelcomeState {
  totalCookies: number;
  cookiesPerClick: number;
  cookiesPerSecond: number;

  totalCursors: number;
  totalGrandmas: number;
  totalPirates: number;
  totalNinjas: number;
  totalWizards: number;
  totalAliens: number;
  totalCyborgs: number;
  totalDragons: number;

  cursorPrice: number;
  grandmaPrice: number;
  piratePrice: number;
  ninjaPrice: number;
  wizardPrice: number;
  alienPrice: number;
  cyborgPrice: number;
  dragonPrice: number;

  clicker1UpgradePurchased: boolean;
  clicker1UpgradePrice: number;
  clicker2UpgradePurchased: boolean;
  clicker2UpgradePrice: number;
  clicker3UpgradePurchased: boolean;
  clicker3UpgradePrice: number;
  clicker4UpgradePurchased: boolean;
  clicker4UpgradePrice: number;
  clicker5UpgradePurchased: boolean;
  clicker5UpgradePrice: number;
  clicker6UpgradePurchased: boolean;
  clicker6UpgradePrice: number;

  grandma1UpgradePurchased: boolean;
  grandma1UpgradePrice: number;
  grandma2UpgradePurchased: boolean;
  grandma2UpgradePrice: number;
  grandma3UpgradePurchased: boolean;
  grandma3UpgradePrice: number;
  grandma4UpgradePurchased: boolean;
  grandma4UpgradePrice: number;

  pirate1UpgradePurchased: boolean;
  pirate1UpgradePrice: number;
  pirate2UpgradePurchased: boolean;
  pirate2UpgradePrice: number;
  pirate3UpgradePurchased: boolean;
  pirate3UpgradePrice: number;
  pirate4UpgradePurchased: boolean;
  pirate4UpgradePrice: number;

  ninja1UpgradePurchased: boolean;
  ninja1UpgradePrice: number;
  ninja2UpgradePurchased: boolean;
  ninja2UpgradePrice: number;
  ninja3UpgradePurchased: boolean;
  ninja3UpgradePrice: number;

  wizard1UpgradePurchased: boolean;
  wizard1UpgradePrice: number;
  wizard2UpgradePurchased: boolean;
  wizard2UpgradePrice: number;
  wizard3UpgradePurchased: boolean;
  wizard3UpgradePrice: number;

  alien1UpgradePurchased: boolean;
  alien1UpgradePrice: number;
  alien2UpgradePurchased: boolean;
  alien2UpgradePrice: number;

  cyborg1UpgradePurchased: boolean;
  cyborg1UpgradePrice: number;

  grandmaCookiesPerSecond: number;
  pirateCookiesPerSecond: number;
  ninjaCookiesPerSecond: number;
  wizardCookiesPerSecond: number;
  alienCookiesPerSecond: number;
  cyborgCookiesPerSecond: number;
  dragonCookiesPerSecond: number;

  activeTab: "buildings" | "upgrades";
  activeSecondaryTab: "stats" | "updates";
}

class WelcomePage extends Component<{}, WelcomeState> {
  // environment-safe interval type
  private interval: ReturnType<typeof setInterval> | null = null;

  constructor(props: {}) {
    super(props);
    this.state = {
      totalCookies: 0,
      cookiesPerClick: 1,
      cookiesPerSecond: 0,

      totalCursors: 0,
      totalGrandmas: 0,
      totalPirates: 0,
      totalNinjas: 0,
      totalWizards: 0,
      totalAliens: 0,
      totalCyborgs: 0,
      totalDragons: 0,

      cursorPrice: 10,
      grandmaPrice: 100,
      piratePrice: 1000,
      ninjaPrice: 11000,
      wizardPrice: 115000,
      alienPrice: 1300000,
      cyborgPrice: 18000000,
      dragonPrice: 3100000000,

      clicker1UpgradePurchased: false,
      clicker1UpgradePrice: 100,
      clicker2UpgradePurchased: false,
      clicker2UpgradePrice: 500,
      clicker3UpgradePurchased: false,
      clicker3UpgradePrice: 10000,
      clicker4UpgradePurchased: false,
      clicker4UpgradePrice: 100000,
      clicker5UpgradePurchased: false,
      clicker5UpgradePrice: 10000000,
      clicker6UpgradePurchased: false,
      clicker6UpgradePrice: 100000000,

      grandma1UpgradePurchased: false,
      grandma1UpgradePrice: 1000,
      grandma2UpgradePurchased: false,
      grandma2UpgradePrice: 5000,
      grandma3UpgradePurchased: false,
      grandma3UpgradePrice: 50000,
      grandma4UpgradePurchased: false,
      grandma4UpgradePrice: 5000000,

      pirate1UpgradePurchased: false,
      pirate1UpgradePrice: 10000,
      pirate2UpgradePurchased: false,
      pirate2UpgradePrice: 50000,
      pirate3UpgradePurchased: false,
      pirate3UpgradePrice: 500000,
      pirate4UpgradePurchased: false,
      pirate4UpgradePrice: 50000000,

      ninja1UpgradePurchased: false,
      ninja1UpgradePrice: 110000,
      ninja2UpgradePurchased: false,
      ninja2UpgradePrice: 600000,
      ninja3UpgradePurchased: false,
      ninja3UpgradePrice: 6000000,

      wizard1UpgradePurchased: false,
      wizard1UpgradePrice: 1250000,
      wizard2UpgradePurchased: false,
      wizard2UpgradePrice: 6250000,
      wizard3UpgradePurchased: false,
      wizard3UpgradePrice: 62500000,

      alien1UpgradePurchased: false,
      alien1UpgradePrice: 12000000,
      alien2UpgradePurchased: false,
      alien2UpgradePrice: 65000000,

      cyborg1UpgradePurchased: false,
      cyborg1UpgradePrice: 200000000,

      grandmaCookiesPerSecond: 1,
      pirateCookiesPerSecond: 7,
      ninjaCookiesPerSecond: 48,
      wizardCookiesPerSecond: 270,
      alienCookiesPerSecond: 1500,
      cyborgCookiesPerSecond: 8000,
      dragonCookiesPerSecond: 45000,

      activeTab: "buildings",
      activeSecondaryTab: "stats",
    };
  }

  // keep the same lifecycle behavior
  componentDidMount() {
    this.interval = setInterval(this.updateCookiesPerSecond, 1000);
    this.setState({ activeTab: "buildings" });
  }

  componentWillUnmount() {
    if (this.interval) clearInterval(this.interval);
  }

  // exactly same logic as original
  handleCookieClick = () => {
    this.setState((prevState) => ({
      totalCookies: prevState.totalCookies + prevState.cookiesPerClick,
    }));
  };

  // Buildings buy methods
  buyCursor = (e: React.MouseEvent) => {
    e.preventDefault();
    if (this.state.totalCookies >= this.state.cursorPrice) {
      const newCursorPrice = Math.round(this.state.cursorPrice * 1.17);
      this.setState((prevState) =>
        ({
          totalCursors: prevState.totalCursors + 1,
          totalCookies: prevState.totalCookies - prevState.cursorPrice,
          cookiesPerSecond: prevState.cookiesPerSecond + 0.2,
          cursorPrice: newCursorPrice,
        } as unknown as Pick<WelcomeState, keyof WelcomeState>)
      );
    }
  };

  buyGrandma = (e: React.MouseEvent) => {
    e.preventDefault();
    if (this.state.totalCookies >= this.state.grandmaPrice) {
      const newGrandmaPrice = Math.round(this.state.grandmaPrice * 1.17);
      this.setState((prevState) =>
        ({
          totalGrandmas: prevState.totalGrandmas + 1,
          totalCookies: prevState.totalCookies - prevState.grandmaPrice,
          cookiesPerSecond: prevState.cookiesPerSecond + prevState.grandmaCookiesPerSecond,
          grandmaPrice: newGrandmaPrice,
        } as unknown as Pick<WelcomeState, keyof WelcomeState>)
      );
    }
  };

  buyPirate = (e: React.MouseEvent) => {
    e.preventDefault();
    if (this.state.totalCookies >= this.state.piratePrice) {
      const newPiratePrice = Math.round(this.state.piratePrice * 1.17);
      this.setState((prevState) =>
        ({
          totalPirates: prevState.totalPirates + 1,
          totalCookies: prevState.totalCookies - prevState.piratePrice,
          cookiesPerSecond: prevState.cookiesPerSecond + prevState.pirateCookiesPerSecond,
          piratePrice: newPiratePrice,
        } as unknown as Pick<WelcomeState, keyof WelcomeState>)
      );
    }
  };

  buyNinja = (e: React.MouseEvent) => {
    e.preventDefault();
    if (this.state.totalCookies >= this.state.ninjaPrice) {
      const newNinjaPrice = Math.round(this.state.ninjaPrice * 1.17);
      this.setState((prevState) =>
        ({
          totalNinjas: prevState.totalNinjas + 1,
          totalCookies: prevState.totalCookies - prevState.ninjaPrice,
          cookiesPerSecond: prevState.cookiesPerSecond + prevState.ninjaCookiesPerSecond,
          ninjaPrice: newNinjaPrice,
        } as unknown as Pick<WelcomeState, keyof WelcomeState>)
      );
    }
  };

  buyWizard = (e: React.MouseEvent) => {
    e.preventDefault();
    if (this.state.totalCookies >= this.state.wizardPrice) {
      const newWizardPrice = Math.round(this.state.wizardPrice * 1.17);
      this.setState((prevState) =>
        ({
          totalWizards: prevState.totalWizards + 1,
          totalCookies: prevState.totalCookies - prevState.wizardPrice,
          cookiesPerSecond: prevState.cookiesPerSecond + prevState.wizardCookiesPerSecond,
          wizardPrice: newWizardPrice,
        } as unknown as Pick<WelcomeState, keyof WelcomeState>)
      );
    }
  };

  buyAlien = (e: React.MouseEvent) => {
    e.preventDefault();
    if (this.state.totalCookies >= this.state.alienPrice) {
      const newAlienPrice = Math.round(this.state.alienPrice * 1.17);
      this.setState((prevState) =>
        ({
          totalAliens: prevState.totalAliens + 1,
          totalCookies: prevState.totalCookies - prevState.alienPrice,
          cookiesPerSecond: prevState.cookiesPerSecond + prevState.alienCookiesPerSecond,
          alienPrice: newAlienPrice,
        } as unknown as Pick<WelcomeState, keyof WelcomeState>)
      );
    }
  };

  buyCyborg = (e: React.MouseEvent) => {
    e.preventDefault();
    if (this.state.totalCookies >= this.state.cyborgPrice) {
      const newCyborgPrice = Math.round(this.state.cyborgPrice * 1.17);
      this.setState((prevState) =>
        ({
          totalCyborgs: prevState.totalCyborgs + 1,
          totalCookies: prevState.totalCookies - prevState.cyborgPrice,
          cookiesPerSecond: prevState.cookiesPerSecond + prevState.cyborgCookiesPerSecond,
          cyborgPrice: newCyborgPrice,
        } as unknown as Pick<WelcomeState, keyof WelcomeState>)
      );
    }
  };

  buyDragon = (e: React.MouseEvent) => {
    e.preventDefault();
    if (this.state.totalCookies >= this.state.dragonPrice) {
      const newDragonPrice = Math.round(this.state.dragonPrice * 1.17);
      this.setState((prevState) =>
        ({
          totalDragons: prevState.totalDragons + 1,
          totalCookies: prevState.totalCookies - prevState.dragonPrice,
          cookiesPerSecond: prevState.cookiesPerSecond + prevState.dragonCookiesPerSecond,
          dragonPrice: newDragonPrice,
        } as unknown as Pick<WelcomeState, keyof WelcomeState>)
      );
    }
  };

  // ---- Upgrades (clicker) ----
  buyClicker1Upgrade = (e: React.MouseEvent) => {
    e.preventDefault();
    if (this.state.totalCookies >= this.state.clicker1UpgradePrice && !this.state.clicker1UpgradePurchased) {
      this.setState((prevState) =>
        ({
          clicker1UpgradePurchased: true,
          totalCookies: prevState.totalCookies - prevState.clicker1UpgradePrice,
          cookiesPerClick: prevState.cookiesPerClick * 2,
        } as unknown as Pick<WelcomeState, keyof WelcomeState>)
      );
    }
  };

  buyClicker2Upgrade = (e: React.MouseEvent) => {
    e.preventDefault();
    if (this.state.totalCookies >= this.state.clicker2UpgradePrice && !this.state.clicker2UpgradePurchased && this.state.clicker1UpgradePurchased) {
      this.setState((prevState) =>
        ({
          clicker2UpgradePurchased: true,
          totalCookies: prevState.totalCookies - prevState.clicker2UpgradePrice,
          cookiesPerClick: prevState.cookiesPerClick * 2,
        } as unknown as Pick<WelcomeState, keyof WelcomeState>)
      );
    }
  };

  buyClicker3Upgrade = (e: React.MouseEvent) => {
    e.preventDefault();
    if (this.state.totalCookies >= this.state.clicker3UpgradePrice && !this.state.clicker3UpgradePurchased && this.state.clicker2UpgradePurchased) {
      this.setState((prevState) =>
        ({
          clicker3UpgradePurchased: true,
          totalCookies: prevState.totalCookies - prevState.clicker3UpgradePrice,
          cookiesPerClick: prevState.cookiesPerClick * 2,
        } as unknown as Pick<WelcomeState, keyof WelcomeState>)
      );
    }
  };

  buyClicker4Upgrade = (e: React.MouseEvent) => {
    e.preventDefault();
    if (this.state.totalCookies >= this.state.clicker4UpgradePrice && !this.state.clicker4UpgradePurchased && this.state.clicker3UpgradePurchased) {
      this.setState((prevState) =>
        ({
          clicker4UpgradePurchased: true,
          totalCookies: prevState.totalCookies - prevState.clicker4UpgradePrice,
          cookiesPerClick: prevState.cookiesPerClick * 5,
        } as unknown as Pick<WelcomeState, keyof WelcomeState>)
      );
    }
  };

  buyClicker5Upgrade = (e: React.MouseEvent) => {
    e.preventDefault();
    if (this.state.totalCookies >= this.state.clicker5UpgradePrice && !this.state.clicker5UpgradePurchased && this.state.clicker4UpgradePurchased) {
      this.setState((prevState) =>
        ({
          clicker5UpgradePurchased: true,
          totalCookies: prevState.totalCookies - prevState.clicker5UpgradePrice,
          cookiesPerClick: prevState.cookiesPerClick * 5,
        } as unknown as Pick<WelcomeState, keyof WelcomeState>)
      );
    }
  };

  buyClicker6Upgrade = (e: React.MouseEvent) => {
    e.preventDefault();
    if (this.state.totalCookies >= this.state.clicker6UpgradePrice && !this.state.clicker6UpgradePurchased && this.state.clicker5UpgradePurchased) {
      this.setState((prevState) =>
        ({
          clicker6UpgradePurchased: true,
          totalCookies: prevState.totalCookies - prevState.clicker6UpgradePrice,
          cookiesPerClick: prevState.cookiesPerClick * 10,
        } as unknown as Pick<WelcomeState, keyof WelcomeState>)
      );
    }
  };

  // ---- Grandma Upgrades ----
  buyGrandma1Upgrade = (e: React.MouseEvent) => {
    e.preventDefault();
    if (this.state.totalCookies >= this.state.grandma1UpgradePrice && !this.state.grandma1UpgradePurchased) {
      this.setState((prevState) =>
        ({
          grandma1UpgradePurchased: true,
          totalCookies: prevState.totalCookies - prevState.grandma1UpgradePrice,
          grandmaCookiesPerSecond: prevState.grandmaCookiesPerSecond * 2,
          cookiesPerSecond: prevState.cookiesPerSecond + prevState.totalGrandmas * prevState.grandmaCookiesPerSecond,
        } as unknown as Pick<WelcomeState, keyof WelcomeState>)
      );
    }
  };

  buyGrandma2Upgrade = (e: React.MouseEvent) => {
    e.preventDefault();
    if (this.state.totalCookies >= this.state.grandma2UpgradePrice && !this.state.grandma2UpgradePurchased && this.state.grandma1UpgradePurchased) {
      this.setState((prevState) =>
        ({
          grandma2UpgradePurchased: true,
          totalCookies: prevState.totalCookies - prevState.grandma2UpgradePrice,
          grandmaCookiesPerSecond: prevState.grandmaCookiesPerSecond * 2,
          cookiesPerSecond: prevState.cookiesPerSecond + prevState.totalGrandmas * prevState.grandmaCookiesPerSecond,
        } as unknown as Pick<WelcomeState, keyof WelcomeState>)
      );
    }
  };

  buyGrandma3Upgrade = (e: React.MouseEvent) => {
    e.preventDefault();
    if (this.state.totalCookies >= this.state.grandma3UpgradePrice && !this.state.grandma3UpgradePurchased && this.state.grandma2UpgradePurchased) {
      this.setState((prevState) =>
        ({
          grandma3UpgradePurchased: true,
          totalCookies: prevState.totalCookies - prevState.grandma3UpgradePrice,
          grandmaCookiesPerSecond: prevState.grandmaCookiesPerSecond * 2,
          cookiesPerSecond: prevState.cookiesPerSecond + prevState.totalGrandmas * prevState.grandmaCookiesPerSecond,
        } as unknown as Pick<WelcomeState, keyof WelcomeState>)
      );
    }
  };

  buyGrandma4Upgrade = (e: React.MouseEvent) => {
    e.preventDefault();
    if (this.state.totalCookies >= this.state.grandma4UpgradePrice && !this.state.grandma4UpgradePurchased && this.state.grandma3UpgradePurchased) {
      this.setState((prevState) =>
        ({
          grandma4UpgradePurchased: true,
          totalCookies: prevState.totalCookies - prevState.grandma4UpgradePrice,
          grandmaCookiesPerSecond: prevState.grandmaCookiesPerSecond * 2,
          cookiesPerSecond: prevState.cookiesPerSecond + prevState.totalGrandmas * prevState.grandmaCookiesPerSecond,
        } as unknown as Pick<WelcomeState, keyof WelcomeState>)
      );
    }
  };

  // ---- Pirate Upgrades ----
  buyPirate1Upgrade = (e: React.MouseEvent) => {
    e.preventDefault();
    if (this.state.totalCookies >= this.state.pirate1UpgradePrice && !this.state.pirate1UpgradePurchased) {
      this.setState((prevState) =>
        ({
          pirate1UpgradePurchased: true,
          totalCookies: prevState.totalCookies - prevState.pirate1UpgradePrice,
          pirateCookiesPerSecond: prevState.pirateCookiesPerSecond * 2,
          cookiesPerSecond: prevState.cookiesPerSecond + prevState.totalPirates * prevState.pirateCookiesPerSecond,
        } as unknown as Pick<WelcomeState, keyof WelcomeState>)
      );
    }
  };

  buyPirate2Upgrade = (e: React.MouseEvent) => {
    e.preventDefault();
    if (this.state.totalCookies >= this.state.pirate2UpgradePrice && !this.state.pirate2UpgradePurchased && this.state.pirate1UpgradePurchased) {
      this.setState((prevState) =>
        ({
          pirate2UpgradePurchased: true,
          totalCookies: prevState.totalCookies - prevState.pirate2UpgradePrice,
          pirateCookiesPerSecond: prevState.pirateCookiesPerSecond * 2,
          cookiesPerSecond: prevState.cookiesPerSecond + prevState.totalPirates * prevState.pirateCookiesPerSecond,
        } as unknown as Pick<WelcomeState, keyof WelcomeState>)
      );
    }
  };

  buyPirate3Upgrade = (e: React.MouseEvent) => {
    e.preventDefault();
    if (this.state.totalCookies >= this.state.pirate3UpgradePrice && !this.state.pirate3UpgradePurchased && this.state.pirate2UpgradePurchased) {
      this.setState((prevState) =>
        ({
          pirate3UpgradePurchased: true,
          totalCookies: prevState.totalCookies - prevState.pirate3UpgradePrice,
          pirateCookiesPerSecond: prevState.pirateCookiesPerSecond * 2,
          cookiesPerSecond: prevState.cookiesPerSecond + prevState.totalPirates * prevState.pirateCookiesPerSecond,
        } as unknown as Pick<WelcomeState, keyof WelcomeState>)
      );
    }
  };

  buyPirate4Upgrade = (e: React.MouseEvent) => {
    e.preventDefault();
    if (this.state.totalCookies >= this.state.pirate4UpgradePrice && !this.state.pirate4UpgradePurchased && this.state.pirate3UpgradePurchased) {
      this.setState((prevState) =>
        ({
          pirate4UpgradePurchased: true,
          totalCookies: prevState.totalCookies - prevState.pirate4UpgradePrice,
          pirateCookiesPerSecond: prevState.pirateCookiesPerSecond * 2,
          cookiesPerSecond: prevState.cookiesPerSecond + prevState.totalPirates * prevState.pirateCookiesPerSecond,
        } as unknown as Pick<WelcomeState, keyof WelcomeState>)
      );
    }
  };

  // ---- Ninja Upgrades ----
  buyNinja1Upgrade = (e: React.MouseEvent) => {
    e.preventDefault();
    if (this.state.totalCookies >= this.state.ninja1UpgradePrice && !this.state.ninja1UpgradePurchased) {
      this.setState((prevState) =>
        ({
          ninja1UpgradePurchased: true,
          totalCookies: prevState.totalCookies - prevState.ninja1UpgradePrice,
          ninjaCookiesPerSecond: prevState.ninjaCookiesPerSecond * 2,
          cookiesPerSecond: prevState.cookiesPerSecond + prevState.totalNinjas * prevState.ninjaCookiesPerSecond,
        } as unknown as Pick<WelcomeState, keyof WelcomeState>)
      );
    }
  };

  buyNinja2Upgrade = (e: React.MouseEvent) => {
    e.preventDefault();
    if (this.state.totalCookies >= this.state.ninja2UpgradePrice && !this.state.ninja2UpgradePurchased && this.state.ninja1UpgradePurchased) {
      this.setState((prevState) =>
        ({
          ninja2UpgradePurchased: true,
          totalCookies: prevState.totalCookies - prevState.ninja2UpgradePrice,
          ninjaCookiesPerSecond: prevState.ninjaCookiesPerSecond * 2,
          cookiesPerSecond: prevState.cookiesPerSecond + prevState.totalNinjas * prevState.ninjaCookiesPerSecond,
        } as unknown as Pick<WelcomeState, keyof WelcomeState>)
      );
    }
  };

  buyNinja3Upgrade = (e: React.MouseEvent) => {
    e.preventDefault();
    if (this.state.totalCookies >= this.state.ninja3UpgradePrice && !this.state.ninja3UpgradePurchased && this.state.ninja2UpgradePurchased) {
      this.setState((prevState) =>
        ({
          ninja3UpgradePurchased: true,
          totalCookies: prevState.totalCookies - prevState.ninja3UpgradePrice,
          ninjaCookiesPerSecond: prevState.ninjaCookiesPerSecond * 2,
          cookiesPerSecond: prevState.cookiesPerSecond + prevState.totalNinjas * prevState.ninjaCookiesPerSecond,
        } as unknown as Pick<WelcomeState, keyof WelcomeState>)
      );
    }
  };

  // ---- Wizard Upgrades ----
  buyWizard1Upgrade = (e: React.MouseEvent) => {
    e.preventDefault();
    if (this.state.totalCookies >= this.state.wizard1UpgradePrice && !this.state.wizard1UpgradePurchased) {
      this.setState((prevState) =>
        ({
          wizard1UpgradePurchased: true,
          totalCookies: prevState.totalCookies - prevState.wizard1UpgradePrice,
          wizardCookiesPerSecond: prevState.wizardCookiesPerSecond * 2,
          cookiesPerSecond: prevState.cookiesPerSecond + prevState.totalWizards * prevState.wizardCookiesPerSecond,
        } as unknown as Pick<WelcomeState, keyof WelcomeState>)
      );
    }
  };

  buyWizard2Upgrade = (e: React.MouseEvent) => {
    e.preventDefault();
    if (this.state.totalCookies >= this.state.wizard2UpgradePrice && !this.state.wizard2UpgradePurchased && this.state.wizard1UpgradePurchased) {
      this.setState((prevState) =>
        ({
          wizard2UpgradePurchased: true,
          totalCookies: prevState.totalCookies - prevState.wizard2UpgradePrice,
          wizardCookiesPerSecond: prevState.wizardCookiesPerSecond * 2,
          cookiesPerSecond: prevState.cookiesPerSecond + prevState.totalWizards * prevState.wizardCookiesPerSecond,
        } as unknown as Pick<WelcomeState, keyof WelcomeState>)
      );
    }
  };

  buyWizard3Upgrade = (e: React.MouseEvent) => {
    e.preventDefault();
    if (this.state.totalCookies >= this.state.wizard3UpgradePrice && !this.state.wizard3UpgradePurchased && this.state.wizard2UpgradePurchased) {
      this.setState((prevState) =>
        ({
          wizard3UpgradePurchased: true,
          totalCookies: prevState.totalCookies - prevState.wizard3UpgradePrice,
          wizardCookiesPerSecond: prevState.wizardCookiesPerSecond * 2,
          cookiesPerSecond: prevState.cookiesPerSecond + prevState.totalWizards * prevState.wizardCookiesPerSecond,
        } as unknown as Pick<WelcomeState, keyof WelcomeState>)
      );
    }
  };

  // ---- Alien Upgrades ----
  buyAlien1Upgrade = (e: React.MouseEvent) => {
    e.preventDefault();
    if (this.state.totalCookies >= this.state.alien1UpgradePrice && !this.state.alien1UpgradePurchased) {
      this.setState((prevState) =>
        ({
          alien1UpgradePurchased: true,
          totalCookies: prevState.totalCookies - prevState.alien1UpgradePrice,
          alienCookiesPerSecond: prevState.alienCookiesPerSecond * 2,
          cookiesPerSecond: prevState.cookiesPerSecond + prevState.totalAliens * prevState.alienCookiesPerSecond,
        } as unknown as Pick<WelcomeState, keyof WelcomeState>)
      );
    }
  };

  buyAlien2Upgrade = (e: React.MouseEvent) => {
    e.preventDefault();
    if (this.state.totalCookies >= this.state.alien2UpgradePrice && !this.state.alien2UpgradePurchased && this.state.alien1UpgradePurchased) {
      this.setState((prevState) =>
        ({
          alien2UpgradePurchased: true,
          totalCookies: prevState.totalCookies - prevState.alien2UpgradePrice,
          alienCookiesPerSecond: prevState.alienCookiesPerSecond * 2,
          cookiesPerSecond: prevState.cookiesPerSecond + prevState.totalAliens * prevState.alienCookiesPerSecond,
        } as unknown as Pick<WelcomeState, keyof WelcomeState>)
      );
    }
  };

  // ---- Cyborg Upgrades ----
  buyCyborg1Upgrade = (e: React.MouseEvent) => {
    e.preventDefault();
    if (this.state.totalCookies >= this.state.cyborg1UpgradePrice && !this.state.cyborg1UpgradePurchased) {
      this.setState((prevState) =>
        ({
          cyborg1UpgradePurchased: true,
          totalCookies: prevState.totalCookies - prevState.cyborg1UpgradePrice,
          cyborgCookiesPerSecond: prevState.cyborgCookiesPerSecond * 2,
          cookiesPerSecond: prevState.cookiesPerSecond + prevState.totalCyborgs * prevState.cyborgCookiesPerSecond,
        } as unknown as Pick<WelcomeState, keyof WelcomeState>)
      );
    }
  };

  // helper: update CPS accumulation every second
  updateCookiesPerSecond = () => {
    this.setState((prevState) => ({
      totalCookies: prevState.totalCookies + prevState.cookiesPerSecond,
    }));
  };

  // method to handle clicking items (mirrors original)
  handleItemClick = (e: React.MouseEvent, type: string) => {
    e.preventDefault();
    if (type === "cursor") {
      this.buyCursor(e);
    } else if (type === "grandma") {
      this.buyGrandma(e);
    } else if (type === "pirate") {
      this.buyPirate(e);
    } else if (type === "ninja") {
      this.buyNinja(e);
    } else if (type === "wizard") {
      this.buyWizard(e);
    } else if (type === "alien") {
      this.buyAlien(e);
    } else if (type === "cyborg") {
      this.buyCyborg(e);
    } else if (type === "dragon") {
      this.buyDragon(e);
    }
  };

  render() {
  return (
    <div className="App">
      <div className="container">
        {/* Column 1 */}
        <div className="column1">
          {/* Top Section: Welcome Text */}
          <div className="welcome-text" onMouseDown={(e) => e.preventDefault()}>
            <h1>Welcome to Cookie Clicker!</h1>
          </div>

          {/* Middle Section: Cookie Image */}
          <div className="image-container">
            <img
              src={cookieImage}
              alt="cookie"
              className="image"
              onClick={this.handleCookieClick}
            />
          </div>

          {/* Bottom Section: Total Cookies and CPS */}
          <div className="game-info" onMouseDown={(e) => e.preventDefault()}>
            <p>Total Cookies:</p>
            <p>{Math.round(this.state.totalCookies)}</p>
            <p>Cookies Per Second:</p>
            <p>{Math.round(this.state.cookiesPerSecond)}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* Column 2: Combined Buildings and Upgrades */}
        <div className="column2">
          {/* Toggle Button */}
          <div className="toggle-container">
            <button
              className={`toggle-button ${
                this.state.activeTab === "buildings" ? "active" : ""
              }`}
              onClick={() => this.setState({ activeTab: "buildings" })}
            >
              Buildings
            </button>
            <button
              className={`toggle-button ${
                this.state.activeTab === "upgrades" ? "active" : ""
              }`}
              onClick={() => this.setState({ activeTab: "upgrades" })}
            >
              Upgrades
            </button>
          </div>

          {/* Display Buildings or Upgrades */}
          {this.state.activeTab === "buildings" && (
            <div className="buildings">
              {[
                { key: "cursor", name: "Cursors", price: "cursorPrice", owned: "totalCursors" },
                { key: "grandma", name: "Grandmas", price: "grandmaPrice", owned: "totalGrandmas" },
                { key: "pirate", name: "Pirates", price: "piratePrice", owned: "totalPirates" },
                { key: "ninja", name: "Ninjas", price: "ninjaPrice", owned: "totalNinjas" },
                { key: "wizard", name: "Wizards", price: "wizardPrice", owned: "totalWizards" },
                { key: "alien", name: "Aliens", price: "alienPrice", owned: "totalAliens" },
                { key: "cyborg", name: "Cyborgs", price: "cyborgPrice", owned: "totalCyborgs" },
                { key: "dragon", name: "Dragons", price: "dragonPrice", owned: "totalDragons" },
              ].map(({ key, name, price, owned }) => {
                const priceVal = this.state[price as keyof WelcomeState] as number;
                const ownedVal = this.state[owned as keyof WelcomeState] as number;
                return (
                  <div
                    key={key}
                    className="item"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={(e) => this.handleItemClick(e, key)}
                  >
                    <p>{name}</p>
                    <div className="price-container">
                      <span>{priceVal} </span>
                      <img src={cookieImage} alt="Cookie" className="inline-icon" />
                    </div>
                    <p>Owned: {ownedVal}</p>
                  </div>
                );
              })}
            </div>
          )}

          {this.state.activeTab === "upgrades" && (
            <div className="upgrades">
              {[
                { category: "clicker", count: 6 },
                { category: "grandma", count: 4 },
                { category: "pirate", count: 4 },
                { category: "ninja", count: 3 },
                { category: "wizard", count: 3 },
                { category: "alien", count: 2 },
                { category: "cyborg", count: 1 },
              ].map(({ category, count }) =>
                [...Array(count).keys()].map((i) => {
                  const upgradeNumber = i + 1;
                  const purchasedKey = `${category}${upgradeNumber}UpgradePurchased` as keyof WelcomeState;
                  const priceKey = `${category}${upgradeNumber}UpgradePrice` as keyof WelcomeState;
                  const upgradePurchased = this.state[purchasedKey] as boolean;
                  const upgradePrice = this.state[priceKey] as number;
                  const prevPurchasedKey =
                    upgradeNumber === 1
                      ? null
                      : (`${category}${upgradeNumber - 1}UpgradePurchased` as keyof WelcomeState);
                  const previousUpgradePurchased =
                    upgradeNumber === 1 ||
                    (prevPurchasedKey ? (this.state[prevPurchasedKey] as boolean) : false);

                  if (!upgradePurchased && previousUpgradePurchased) {
                    const methodName = `buy${
                      category.charAt(0).toUpperCase() + category.slice(1)
                    }${upgradeNumber}Upgrade`;
                    const handler = (this as any)[methodName] as
                      | ((e: React.MouseEvent) => void)
                      | undefined;
                    return (
                      <div
                        className="item"
                        key={`${category}-${upgradeNumber}`}
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={handler ? handler : undefined}
                      >
                        <p>
                          {category.charAt(0).toUpperCase() + category.slice(1)} {upgradeNumber}
                        </p>
                        <div className="price-container">
                          <span>{upgradePrice} </span>
                          <img src={cookieImage} alt="Cookie" className="inline-icon" />
                        </div>
                      </div>
                    );
                  }

                  return null;
                })
              )}
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* Column 3: Stats and Updates */}
        <div className="column3">
          {/*toggle button*/}
          <div className="toggle-container">
            <button
              className={`toggle-button ${
                this.state.activeSecondaryTab === "stats" ? "active" : ""
              }`}
              onClick={() => this.setState({ activeSecondaryTab: "stats" })}
            >
              Stats
            </button>
            <button
              className={`toggle-button ${
                this.state.activeSecondaryTab === "updates" ? "active" : ""
              }`}
              onClick={() => this.setState({ activeSecondaryTab: "updates" })}
            >
              Updates
            </button>
          </div>
          {/*logout button*/}
          <button className="logout-button">Logout</button>
        </div>
      </div>
    </div>
  );
}
}


export default WelcomePage;
