// first option - FOR

function triangle (height , symbol){

    for (let i = 1; i <= height ; i++){

        let line = "-";

        for (let j = 1; j <= i; j++){

            line = line + symbol
        }

        console.log (line)
        
    }
}

triangle(6,"*");