// Define variables inside a function or a class to avoid global scope issues

function displayInfo() {
    let nom: string = "Awa";
    let age: number = 2;
    let estmalade: boolean = true;
    let nombres: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
    let idt: [string, number] = ["developpeuse", 12];

    console.log(`Nom: ${nom}`);
    console.log(`Age: ${age}`);
    console.log(`Est malade: ${estmalade}`);
    console.log(`Nombres: ${nombres}`);
    console.log(`Id: ${idt}`);
}

// Call the function to execute
displayInfo();
