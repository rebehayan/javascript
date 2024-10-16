import { ScrollTable } from "./ui/ScrollTable.js";
import { ThDataClone } from "./ui/ThDataClone.js";
import { Login } from "./Login.js";

ThDataClone();
ScrollTable();
Login();

const input = document.querySelector("input[type=checkbox]");
input.checked = true;
