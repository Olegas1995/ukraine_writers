// first option - FOR

function triangle (height , symbol){

    for (let i = 1; i <= height ; i++){

        let line = "-";

        for (let j = 1; j <= i; j++){

            line = line + symbol;
        }

        console.log (line);
        
    }
}

triangle(5,"*");

// second option - While


function triangle_2(height, symbol) {

let i = 1;

while (i <= height) {

    let line = "";

    let j = 1;

    while (j <= i) {
      line = line + symbol;
        j++;
    }
    console.log(line);
    i++;
}
}

triangle_2(5, "*");