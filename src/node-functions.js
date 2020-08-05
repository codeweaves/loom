
function getData(path){
	data = fs.readFileSync( path, 'utf-8');
	return data
}
/*

load.addEventListener("click", () => {
	var path = pathField.innerText;
	data = fs.readFileSync( path, 'utf-8');
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
*/
