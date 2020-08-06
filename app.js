const fs = require("fs");
const { dialog } = require("electron").remote;
const stat = document.getElementById("status");
const edit = document.getElementById("editor");
const load = document.getElementById("btnLoad");
const save = document.getElementById("btnSave");
const blank = document.getElementById("btnNew");

//create structural elements for blank a file
const newDiv = document.createElement("DIV");
const newBr = document.createElement("BR");

//global vars
let filePath = document.getElementById("path").innerText;

//blank the editor
blank.addEventListener("click", () => {
	edit.innerText = "";
	edit.appendChild(newDiv).appendChild(newBr);
	stat.innerText = "Ready.";
});

/*
load the contents of a file to the editor
*/
load.addEventListener("click", () => {
	fs.readFile(filePath, (err, data) => {
		if (err) throw err;
		edit.innerText = data;
	});
	stat.innerText = "Loaded.";
});

/*
//load #editor.innerHTML into mem
//for each div in #editor
//remove "<br>"
//remove "<div>"
//replace "</div>" with \r\n
load.addEventListener("click", () => {
	fs.readFile(filePath, (err, data) => {
		if (err) throw err;
		edit.innerText = data;
	});
	stat.innerText = "Loaded.";
});
*/

/*
//save the editor contents of innerText to file 
*/
save.addEventListener("click", () => {
 	let data = edit.innerText;
 	fs.writeFile(filePath, data, 'utf-8', (err) => {
 		if (err) throw err;
 		stat.innerText = "Saved.";
 	});
});

/*
//load #editor.innerHTML into mem
//for each div in #editor
//remove "<br>"
//remove "<div>"
//replace "</div>" with \r\n
save.addEventListener("click", () => {
 	let data = edit.innerHTML;
});
*/
//listen for changes in the editor
edit.addEventListener("keydown", () => {
	stat.innerText = "Changed.";
});
