const fs = require("fs");
const { dialog } = require("electron").remote;

const stat = document.getElementById("status");
const edit = document.getElementById("editor");
const load = document.getElementById("btnLoad");
const save = document.getElementById("btnSave");
const blank = document.getElementById("btnNew");
const pathField = document.getElementById("path");

blank.addEventListener("click", () => {
	edit.innerText = ""; 
	stat.innerText = "Ready.";
});

load.addEventListener("click", () => {
	var path = pathField.innerText;
	var data = fs.readFileSync( path, 'utf-8');
	edit.innerText = data; 
	stat.innerText = "Loaded.";
});

save.addEventListener("click", () => {
 	var path = pathField.innerText;
 	var data = edit.innerText;
 	fs.writeFileSync(path, data, "utf-8");
 	stat.innerText = "Saved.";
});

edit.addEventListener("keydown", () => {
	stat.innerText = "Changed.";
});
