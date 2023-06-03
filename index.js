// Ajouter ici le ou les require() pour importer les modules dont vous aurez besoin.
const readline = require("readline");

// Create readline interface instance.
const rlInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Hit parade, classé du premier au dernier.
const hitParade = [
    `Jain - Come`,
    `Matt Simons - Catch & Realease`,
    `Twety One Pilots - Stressed Out`,
    `Justin Bieber - Love Yourself`,
    `Kids United - On écrit sur les murs`,
    `Rihanna - Work`,
    `Julian Perretta - Miracle`,
    `Yall - Hundred Miles`,
    `Kendji Girac - No Me Mirès Màs`,
    `Feder - Blind (feat. Emmi)`
];

console.log(`Bienvenue dans le Hit MO'chine.\n
    Vous avez le choix entre les commandes 'chante', 'classement' ou 'quitter'.\n`);

// Check when user enter something.
rlInterface.on("line", userInput => {
    switch(userInput) {
        // If user enter `quitter`, we close the readline interface.
        case "quitter":
            rlInterface.close();
            break;
        // If user enter `chanter`, we print a define text in terminal.
        case "chante":
            console.log("Je m'appelle Charlu, je m'appelle Lili, vous êtes chez O'clock\n");
            break;
        // If user enter `classement`, we print the hit parade.
        case "classement":
            // To print the hit parade, we iterate through the hitParade array.
            // For each element in hitParate array, we print:
            // 1. his position, which is index+1, because the first index in array is 0.
            // 2. the value, which contain the artist and song's name string.
            hitParade.map((song, index) => {
                console.log(`${index+1}. ${song}\n`);
            });
            break;
        default:
            console.error(`${userInput} n'est pas une commande.\n
                Veuillez choisir parmi 'chante', 'classement' ou 'quitter'.\n`);
    }
});