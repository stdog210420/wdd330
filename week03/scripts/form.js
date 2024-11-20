// get all selected values from multi-select
let selected = genres.options[genres.selectedIndex];
alert(selected.value); // blues

let newOption = new Option("Classic", "classic");
genres.append(newOption);

// 3)
newOption.selected = true;