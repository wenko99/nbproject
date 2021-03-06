let map = document.getElementById('map');
let selected_coordinate = new Array();
for(let i = 0; i < map.rows.length; i++) {
    for(let j = 0; j < map.rows[0].cells.length; j++) {
        let cellname = `cell,${i},${j}`;
        let cell = document.getElementById(cellname);

        if(cell.className !== 'map_else') {
            cell.addEventListener('click', () => {
                cell.classList.toggle('highlighted');
                let find = selected_coordinate.indexOf(cellname);
                if(find < 0) {
                    selected_coordinate.push(cellname);
                    show_selected(selected_coordinate);
                }
                else {
                    selected_coordinate.splice(find, 1);
                    show_selected(selected_coordinate);
                }
            });
        }
    }
}

function show_selected(selected_coordinate) {
    let x_coord = document.getElementById('x_coord');
    let y_coord = document.getElementById('y_coord');

    let show_x = '';
    let show_y = '';

    for(let i = 0; i < selected_coordinate.length; i++) {
        if(i === selected_coordinate.length - 1) {
            show_x += selected_coordinate[i].split(',')[1];
            show_y += selected_coordinate[i].split(',')[2];
        }
        else {
            show_x += selected_coordinate[i].split(',')[1] + ' ';
            show_y += selected_coordinate[i].split(',')[2] + ' ';
        }
    }

    x_coord.value = show_x;
    y_coord.value = show_y;
    
    /*
    // temporary code for checking the margins of the map
    let temp = document.getElementById('temp');
    let show_temp = '';
    if(selected_coordinate.length % 2 === 0) {
        for(let i = 0; i < selected_coordinate.length / 2; i++) {
            show_temp += '[';
            show_temp += '\'' + `${i}` + ',' + `${Number(selected_coordinate[i * 2].split(',')[2])}` + '\', ';
            show_temp += '\'' + `${i}` + ',' + `${Number(selected_coordinate[i * 2 + 1].split(',')[2])}` + '\'';
            if(i === selected_coordinate.length / 2 - 1) {
                show_temp += ']';
            }
            else {
                show_temp += '],'
            }
        }
    }
    temp.value = show_temp;
    */
}