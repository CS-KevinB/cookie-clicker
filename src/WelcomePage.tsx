import React, { Component } from "react";
import { NavigateFunction } from "react-router-dom";
import "./WelcomePage.css"; 
const cookieImage = "/cookie.png";

const buildingImages = {
  cursor: "https://images.unsplash.com/flagged/photo-1562599838-8cc871c241a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXJzb3IlMjBwb2ludGVyfGVufDF8fHx8MTc2MTI1NTIwNHww&ixlib=rb-4.1.0&q=80&w=1080",
  grandma: "https://images.unsplash.com/photo-1577048982761-cfe6df488c27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuZG1vdGhlciUyMGJha2luZ3xlbnwxfHx8fDE3NjEyNTUyMDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  pirate: "https://images.unsplash.com/photo-1508094902356-db488e227d75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXJhdGUlMjBzaGlwfGVufDF8fHx8MTc2MTI1NTIwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  ninja: "https://images.unsplash.com/photo-1620747918218-0d99c4bf8647?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaW5qYSUyMHdhcnJpb3J8ZW58MXx8fHwxNzYxMTYyNjE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  wizard: "https://images.unsplash.com/photo-1494389945381-0fe114b8ea4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXphcmQlMjBtYWdpY3xlbnwxfHx8fDE3NjEyNTUyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  alien: "https://images.unsplash.com/photo-1604916851289-390266e08c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbGllbiUyMHNwYWNlc2hpcHxlbnwxfHx8fDE3NjEyNTUyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  cyborg: "https://images.unsplash.com/photo-1495512446763-b2bdc445b4db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJvcmclMjByb2JvdHxlbnwxfHx8fDE3NjEyNTUyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  dragon: "https://images.unsplash.com/photo-1610926597998-fc7f2c1b89b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFnb24lMjBmYW50YXN5fGVufDF8fHx8MTc2MTI0MjU5MXww&ixlib=rb-4.1.0&q=80&w=1080",
};

interface WelcomePageProps {
  navigate: NavigateFunction;
  name?: string;
}

interface WelcomeState {
  totalCookies: number;
  cookiesPerClick: number;
  cookiesPerSecond: number;
  buildings: Array<{
    id?: number;
    type: string;
    amount: number;
    basePrice: number;
    baseRate: number;
    purchased: boolean;
  }>;

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

  cursorCookiesPerSecond: number;
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

class WelcomePage extends Component<WelcomePageProps, WelcomeState> {
  private interval: ReturnType<typeof setInterval> | null = null;

  constructor(props: WelcomePageProps) {
    super(props);
    this.state = {
      totalCookies: 0,
      cookiesPerClick: 1,
      cookiesPerSecond: 0,
      buildings: [],

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

      cursorCookiesPerSecond: 0.2,
      grandmaCookiesPerSecond: 1,
      pirateCookiesPerSecond: 7,
      ninjaCookiesPerSecond: 48,
      wizardCookiesPerSecond: 270,
      alienCookiesPerSecond: 1500,
      cyborgCookiesPerSecond: 8000,
      dragonCookiesPerSecond: 45000,

      activeTab: "buildings",
      activeSecondaryTab: "updates",
    };
  }

  private getTotalCookiesMemory = async () => {
  const { name } = this.props;
  if (!name) return;

  try {
    const res = await fetch(`http://localhost:4000/api/users/${name}/cookies`);
    if (!res.ok) throw new Error("Failed to fetch cookies");
    const data = await res.json();
    console.log("Fetched cookies:", data);
    this.setState(prevState =>({
      ...prevState,
      totalCookies: data.totalCookies
    }));
  } catch (err) {
    console.error("Failed to load total cookies:", err);
  }
};

private updateTotalCookiesMemory = async () => {
  const { name } = this.props;
  if (!name) return;

  try {
    await fetch(`http://localhost:4000/api/users/${name}/cookies`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ totalCookies: this.state.totalCookies }),
    });
  } catch (err) {
    console.error("Failed to save total cookies:", err);
  }
};

private getBuildingsMemory = async () => {
  const { name } = this.props;
  if (!name) return;

  try {
    const res = await fetch(`http://localhost:4000/api/users/${name}/buildings`);
    if (!res.ok) throw new Error("Failed to fetch buildings");
    const data = await res.json();

    const cookiesPerSecond = data.reduce((sum: number, b: any) => sum + b.amount * b.baseRate, 0);

    const newState: Partial<WelcomeState> = {
      buildings: data,
      cookiesPerSecond,
    };

    const totalMap: Record<string, keyof WelcomeState> = {
      cursor: "totalCursors",
      grandma: "totalGrandmas",
      pirate: "totalPirates",
      ninja: "totalNinjas",
      wizard: "totalWizards",
      alien: "totalAliens",
      cyborg: "totalCyborgs",
      dragon: "totalDragons",
    };

    const priceMap: Record<string, keyof WelcomeState> = {
      cursor: "cursorPrice",
      grandma: "grandmaPrice",
      pirate: "piratePrice",
      ninja: "ninjaPrice",
      wizard: "wizardPrice",
      alien: "alienPrice",
      cyborg: "cyborgPrice",
      dragon: "dragonPrice",
    };

    const rateMap: Record<string, keyof WelcomeState> = {
      cursor: "cursorCookiesPerSecond",
      grandma: "grandmaCookiesPerSecond",
      pirate: "pirateCookiesPerSecond",
      ninja: "ninjaCookiesPerSecond",
      wizard: "wizardCookiesPerSecond",
      alien: "alienCookiesPerSecond",
      cyborg: "cyborgCookiesPerSecond",
      dragon: "dragonCookiesPerSecond",
    };

    data.forEach((b: any) => {
      const type = b.type.toLowerCase();
      if (totalMap[type]) newState[totalMap[type]] = b.amount;
      if (priceMap[type]) newState[priceMap[type]] = b.basePrice;
      if (rateMap[type]) newState[rateMap[type]] = b.baseRate;
    });

    this.setState(newState as WelcomeState);
  } catch (err) {
    console.error("Failed to load buildings:", err);
  }
};


private updateBuildingsMemory = async () => {
  const { name } = this.props;
  if (!name || !this.state.buildings) return;

  try {
    await fetch(`http://localhost:4000/api/users/${name}/buildings`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ buildings: this.state.buildings }),
    });
  } catch (err) {
    console.error("Failed to save buildings:", err);
  }
};

handleLogout = async () => {
  await this.updateTotalCookiesMemory();
  await this.updateBuildingsMemory();
  this.props.navigate("/", { replace: true });
};

componentDidMount() {
  this.interval = setInterval(this.updateCookiesPerSecond, 1000);
  this.setState({ activeTab: "buildings" });
  this.getTotalCookiesMemory();
  this.getBuildingsMemory();
}

componentWillUnmount() {
  if (this.interval) clearInterval(this.interval);
}

handleCookieClick = () => {
  this.setState((prevState) => ({
    totalCookies: prevState.totalCookies + prevState.cookiesPerClick,
  }));
};


  buyCursor = async (e: React.MouseEvent) => {
  e.preventDefault();
  const { totalCookies, cursorPrice, cursorCookiesPerSecond, buildings } = this.state;

  if (totalCookies < cursorPrice) return;

  const existing = buildings.find((b) => b.type === "cursor");

  let updatedBuildings;
  let newAmount = 1;

  if (existing) {
    newAmount = existing.amount + 1;

    updatedBuildings = buildings.map((b) =>
      b.type === "cursor"
        ? { ...b, amount: newAmount, purchased: true, basePrice: Math.round(cursorPrice * 1.17) }
        : b
    );
  } else {
    updatedBuildings = [
      ...buildings,
      {
        type: "cursor",
        amount: 1,
        purchased: true,
        basePrice: Math.round(cursorPrice * 1.17), 
        baseRate: cursorCookiesPerSecond,
      },
    ];
  }

  this.setState(
    (prevState) => ({
      totalCursors: prevState.totalCursors + 1,
      totalCookies: prevState.totalCookies - cursorPrice,
      cookiesPerSecond: prevState.cookiesPerSecond + cursorCookiesPerSecond,
      cursorPrice: Math.round(cursorPrice * 1.17), 
      buildings: updatedBuildings,
    }),
    this.updateBuildingsMemory
  );
};


  buyGrandma = async (e: React.MouseEvent) => {
    e.preventDefault();
    const { totalCookies, grandmaPrice, grandmaCookiesPerSecond, buildings } = this.state;

    if (totalCookies < grandmaPrice) return;

    const existing = buildings.find((b) => b.type === "grandma");

    let updatedBuildings;
    let newAmount = 1;

    if (existing) {
      newAmount = existing.amount + 1;

      updatedBuildings = buildings.map((b) =>
        b.type === "grandma"
          ? { ...b, amount: newAmount, purchased: true, basePrice: Math.round(grandmaPrice * 1.17) }
          : b
      );
    } else {
      updatedBuildings = [
        ...buildings,
        {
          type: "grandma",
          amount: 1,
          purchased: true,
          basePrice: Math.round(grandmaPrice * 1.17),
          baseRate: grandmaCookiesPerSecond,
        },
      ];
    }

    this.setState(
      (prevState) => ({
        totalGrandmas: prevState.totalGrandmas + 1,
        totalCookies: prevState.totalCookies - grandmaPrice,
        cookiesPerSecond: prevState.cookiesPerSecond + grandmaCookiesPerSecond,
        grandmaPrice: Math.round(grandmaPrice * 1.17),
        buildings: updatedBuildings,
      }),
      this.updateBuildingsMemory
    );
  };

  buyPirate = async (e: React.MouseEvent) => {
    e.preventDefault();
    const { totalCookies, piratePrice, pirateCookiesPerSecond, buildings } = this.state;

    if (totalCookies < piratePrice) return;

    const existing = buildings.find((b) => b.type === "pirate");

    let updatedBuildings;
    let newAmount = 1;

    if (existing) {
      newAmount = existing.amount + 1;

      updatedBuildings = buildings.map((b) =>
        b.type === "pirate"
          ? { ...b, amount: newAmount, purchased: true, basePrice: Math.round(piratePrice * 1.17) }
          : b
      );
    } else {
      updatedBuildings = [
        ...buildings,
        {
          type: "pirate",
          amount: 1,
          purchased: true,
          basePrice: Math.round(piratePrice * 1.17),
          baseRate: pirateCookiesPerSecond,
        },
      ];
    }

    this.setState(
      (prevState) => ({
        totalPirates: prevState.totalPirates + 1,
        totalCookies: prevState.totalCookies - piratePrice,
        cookiesPerSecond: prevState.cookiesPerSecond + pirateCookiesPerSecond,
        piratePrice: Math.round(piratePrice * 1.17),
        buildings: updatedBuildings,
      }),
      this.updateBuildingsMemory
    );
  };

  buyNinja = async (e: React.MouseEvent) => {
    e.preventDefault();
    const { totalCookies, ninjaPrice, ninjaCookiesPerSecond, buildings } = this.state;

    if (totalCookies < ninjaPrice) return;

    const existing = buildings.find((b) => b.type === "ninja");

    let updatedBuildings;
    let newAmount = 1;

    if (existing) {
      newAmount = existing.amount + 1;

      updatedBuildings = buildings.map((b) =>
        b.type === "ninja"
          ? { ...b, amount: newAmount, purchased: true, basePrice: Math.round(ninjaPrice * 1.17) }
          : b
      );
    } else {
      updatedBuildings = [
        ...buildings,
        {
          type: "ninja",
          amount: 1,
          purchased: true,
          basePrice: Math.round(ninjaPrice * 1.17),
          baseRate: ninjaCookiesPerSecond,
        },
      ];
    }

    this.setState(
      (prevState) => ({
        totalNinjas: prevState.totalNinjas + 1,
        totalCookies: prevState.totalCookies - ninjaPrice,
        cookiesPerSecond: prevState.cookiesPerSecond + ninjaCookiesPerSecond,
        ninjaPrice: Math.round(ninjaPrice * 1.17), 
        buildings: updatedBuildings,
      }),
      this.updateBuildingsMemory
    );
  };


  buyWizard = async (e: React.MouseEvent) => {
    e.preventDefault();

    const { totalCookies, wizardPrice, wizardCookiesPerSecond, buildings } = this.state;
    
    if (totalCookies < wizardPrice) return;

    const existing = buildings.find((b) => b.type === "wizard");
    let updatedBuildings;
    let newAmount = 1;

    if (existing) {
      newAmount = existing.amount + 1;
      updatedBuildings = buildings.map((b) =>
        b.type === "wizard"
          ? { ...b, amount: newAmount, purchased: true, basePrice: Math.round(wizardPrice * 1.17) }
          : b
      );
    } else {
      updatedBuildings = [
        ...buildings,
        {
          type: "wizard",
          amount: 1,
          purchased: true,
          basePrice: Math.round(wizardPrice * 1.17),
          baseRate: wizardCookiesPerSecond,
        },
      ];
    }
    this.setState(
      (prevState) => ({
        totalWizards: prevState.totalWizards + 1,
        totalCookies: prevState.totalCookies - wizardPrice,
        cookiesPerSecond: prevState.cookiesPerSecond + wizardCookiesPerSecond,
        wizardPrice: Math.round(wizardPrice * 1.17),
        buildings: updatedBuildings,
      }),
      this.updateBuildingsMemory
    );
  };

  buyAlien = async (e: React.MouseEvent) => {
    e.preventDefault();
    const { totalCookies, alienPrice, alienCookiesPerSecond, buildings } = this.state;

    if (totalCookies < alienPrice) return;

    const existing = buildings.find((b) => b.type === "alien");
    let updatedBuildings;
    let newAmount = 1;

    if (existing) {
      newAmount = existing.amount + 1;
      updatedBuildings = buildings.map((b) =>
        b.type === "alien"
          ? { ...b, amount: newAmount, purchased: true, basePrice: Math.round(alienPrice * 1.17) }
          : b
      );
    } else {
      updatedBuildings = [
        ...buildings,
        {
          type: "alien",
          amount: 1,
          purchased: true,
          basePrice: Math.round(alienPrice * 1.17),
          baseRate: alienCookiesPerSecond,
        },
      ];
    }

    this.setState(
      (prevState) => ({
        totalAliens: prevState.totalAliens + 1,
        totalCookies: prevState.totalCookies - alienPrice,
        cookiesPerSecond: prevState.cookiesPerSecond + alienCookiesPerSecond,
        alienPrice: Math.round(alienPrice * 1.17),
        buildings: updatedBuildings,
      }),
      this.updateBuildingsMemory
    );
  };

  buyCyborg = async (e: React.MouseEvent) => {
    e.preventDefault();
    const { totalCookies, cyborgPrice, cyborgCookiesPerSecond, buildings } = this.state;

    if (totalCookies < cyborgPrice) return;

    const existing = buildings.find((b) => b.type === "cyborg");
    let updatedBuildings;
    let newAmount = 1;

    if (existing) {
      newAmount = existing.amount + 1;
      updatedBuildings = buildings.map((b) =>
        b.type === "cyborg"
          ? { ...b, amount: newAmount, purchased: true, basePrice: Math.round(cyborgPrice * 1.17) }
          : b
      );
    } else {
      updatedBuildings = [
        ...buildings,
        {
          type: "cyborg",
          amount: 1,
          purchased: true,
          basePrice: Math.round(cyborgPrice * 1.17),
          baseRate: cyborgCookiesPerSecond,
        },
      ];
    }

    this.setState(
      (prevState) => ({
        totalCyborgs: prevState.totalCyborgs + 1,
        totalCookies: prevState.totalCookies - cyborgPrice,
        cookiesPerSecond: prevState.cookiesPerSecond + cyborgCookiesPerSecond,
        cyborgPrice: Math.round(cyborgPrice * 1.17),
        buildings: updatedBuildings,
      }),
      this.updateBuildingsMemory
    );
  };

  buyDragon = async (e: React.MouseEvent) => {
    e.preventDefault();
    const { totalCookies, dragonPrice, dragonCookiesPerSecond, buildings } = this.state;

    if (totalCookies < dragonPrice) return;

    const existing = buildings.find((b) => b.type === "dragon");
    let updatedBuildings;
    let newAmount = 1;

    if (existing) {
      newAmount = existing.amount + 1;
      updatedBuildings = buildings.map((b) =>
        b.type === "dragon"
          ? { ...b, amount: newAmount, purchased: true, basePrice: Math.round(dragonPrice * 1.17) }
          : b
      );
    } else {
      updatedBuildings = [
        ...buildings,
        {
          type: "dragon",
          amount: 1,
          purchased: true,
          basePrice: Math.round(dragonPrice * 1.17),
          baseRate: dragonCookiesPerSecond,
        },
      ];
    }

    this.setState(
      (prevState) => ({
        totalDragons: prevState.totalDragons + 1,
        totalCookies: prevState.totalCookies - dragonPrice,
        cookiesPerSecond: prevState.cookiesPerSecond + dragonCookiesPerSecond,
        dragonPrice: Math.round(dragonPrice * 1.17),
        buildings: updatedBuildings,
      }),
      this.updateBuildingsMemory
    );
  };


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

  updateCookiesPerSecond = () => {
    this.setState((prevState) => ({
      totalCookies: prevState.totalCookies + prevState.cookiesPerSecond,
    }),
  this.updateTotalCookiesMemory
);
  };

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
              <h1>🍪 Cookie Clicker 🍪</h1>
            </div>

            {/* Middle Section: Cookie Image */}
            <div className="image-container">
              <div className="cookie-glow"></div>
              <img
                src={cookieImage}
                alt="cookie"
                className="image"
                onClick={this.handleCookieClick}
              />
            </div>

            {/* Bottom Section: Total Cookies and CPS */}
            <div className="game-info" onMouseDown={(e) => e.preventDefault()}>
              <div className="stat-row">
                <span className="stat-label">🍪 Total Cookies</span>
                <span className="stat-value">{Math.round(this.state.totalCookies).toLocaleString()}</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">⚡ Per Second</span>
                <span className="stat-value">{Math.round(this.state.cookiesPerSecond).toLocaleString()}</span>
              </div>
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
                🏢 Buildings
              </button>
              <button
                className={`toggle-button ${
                  this.state.activeTab === "upgrades" ? "active" : ""
                }`}
                onClick={() => this.setState({ activeTab: "upgrades" })}
              >
                ⭐ Upgrades
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
                  const canAfford = this.state.totalCookies >= priceVal;
                  return (
                    <div
                      key={key}
                      className={`item building-item ${canAfford ? 'can-afford' : 'cant-afford'}`}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={(e) => this.handleItemClick(e, key)}
                    >
                      <div className="item-image">
                        <img src={buildingImages[key as keyof typeof buildingImages]} alt={name} />
                      </div>
                      <div className="item-details">
                        <div className="item-name">{name}</div>
                        <div className="price-container">
                          <span className="price-value">{priceVal.toLocaleString()}</span>
                          <span className="cookie-icon">🍪</span>
                        </div>
                        <div className="owned-count">Owned: {ownedVal}</div>
                      </div>
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
                      const canAfford = this.state.totalCookies >= upgradePrice;
                      // Map category to building image
                      const imageKey = category === "clicker" ? "cursor" : category;
                      return (
                        <div
                          className={`item upgrade-item ${canAfford ? 'can-afford' : 'cant-afford'}`}
                          key={`${category}-${upgradeNumber}`}
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={handler ? handler : undefined}
                        >
                          <div className="item-image upgrade-badge">
                            <img
                              src={buildingImages[imageKey as keyof typeof buildingImages]} 
                              alt={category} 
                            />
                            <div className="upgrade-tier">Lv.{upgradeNumber}</div>
                          </div>
                          <div className="item-details">
                            <div className="item-name">
                              {category.charAt(0).toUpperCase() + category.slice(1)} Upgrade
                            </div>
                            <div className="price-container">
                              <span className="price-value">{upgradePrice.toLocaleString()}</span>
                              <span className="cookie-icon">🍪</span>
                            </div>
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
                📊 Stats
              </button>
              <button
                className={`toggle-button ${
                  this.state.activeSecondaryTab === "updates" ? "active" : ""
                }`}
                onClick={() => this.setState({ activeSecondaryTab: "updates" })}
              >
                📰 Updates
              </button>
            </div>
            
            {this.state.activeSecondaryTab === "stats" && (
              <div className="stats-info">
                <div className="stat-item">
                  <span className="stat-icon">👆</span>
                  <span>Cookies Per Click: <strong>{this.state.cookiesPerClick}</strong></span>
                </div>
                <div className="stat-section-title">🏢 Buildings Unlocked</div>
                <div className="unlocked-buildings">
                  {this.state.totalCursors > 0 && (
                    <div className="unlocked-item">✓ Cursor</div>
                  )}
                  {this.state.totalGrandmas > 0 && (
                    <div className="unlocked-item">✓ Grandma</div>
                  )}
                  {this.state.totalPirates > 0 && (
                    <div className="unlocked-item">✓ Pirate</div>
                  )}
                  {this.state.totalNinjas > 0 && (
                    <div className="unlocked-item">✓ Ninja</div>
                  )}
                  {this.state.totalWizards > 0 && (
                    <div className="unlocked-item">✓ Wizard</div>
                  )}
                  {this.state.totalAliens > 0 && (
                    <div className="unlocked-item">✓ Alien</div>
                  )}
                  {this.state.totalCyborgs > 0 && (
                    <div className="unlocked-item">✓ Cyborg</div>
                  )}
                  {this.state.totalDragons > 0 && (
                    <div className="unlocked-item">✓ Dragon</div>
                  )}
                </div>
              </div>
            )}

            {this.state.activeSecondaryTab === "updates" && (
              <div className="updates-info">
                <div className="update-section">
                  <div className="update-title">🎉 Latest Updates!</div>
                  <div className="update-text">Building progress now stored in memory even when you log out!</div>
                </div>
                <div className="update-section">
                  <div className="update-title">🔮 Upcoming Updates!</div>
                  <div className="update-text">Storing all your upgrades even when you log out!</div>
                </div>
              </div>
            )}

            {/*logout button*/}
            <button className="logout-button" onClick={this.handleLogout}>
              🚪 Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}


export default WelcomePage;
