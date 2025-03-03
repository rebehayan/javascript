import { Details } from "./Details.js";
import { Tab } from "./Tab.js";
import { Title } from "./Title.js";
import { Back } from "./Back.js";
import { GNB } from "./GNB.js";
import { Sidebar } from "./Sidebar.js";
import { Header } from "./Header.js";
import { Frame } from "./Frame.js";

// Tab("tab");
// Title();
// Back();
(async () => {
  await GNB();
  Frame();
  Sidebar();
  Header();
})();
