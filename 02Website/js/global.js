import { includeHTML } from "./ui/include.js";
import { copy } from "./ui/clipboard.js";
import { gallery } from "./ui/gallery.js";
import { comment } from "./comment.js";

includeHTML("/02Website/include/header.html", ".header");
includeHTML("/02Website/include/footer.html", ".footer");

copy();
comment();
gallery();
