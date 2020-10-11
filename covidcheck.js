var readline = require("readline").CreateInterface({
    input:process.stdin,
    output:process.stdout
})
readline.question("Name of your city",function(city){
        if (city === "Gampaha")
        {console.log("High risk area");}

        else if (city === "Colombo")
        {console.log("Low risk area");}

        else if (city === "Galle")
        {console.log("Low risk area");}

        else
        {console.log("any other city")}
        console.log("Stay Safe");
readline.close();
});


