/*

Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

#######################################################

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede

*/

/*

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

*/

const team = [
    {

        name: 'Cicciomax',
        role: 'Team Leader | Sentinel',
        pic: './assets/img/......'

    },
    {

        name: 'Hycron',
        role: 'Duelist',
        pic: './assets/img/......'

    },
    {

        name: 'Warwolf',
        role: 'Initiator',
        pic: './assets/img/......'

    },
    {

        name: 'Ginomax',
        role: 'Controller',
        pic: './assets/img/......'

    },
    {

        name: 'Doketmantis',
        role: 'Duelist',
        pic: './assets/img/......'

    },
    {

        name: 'Samu11x',
        role: 'Reserve#1',
        pic: './assets/img/......'

    },
    {

        name: 'Cav',
        role: 'Reserve#2',
        pic: './assets/img/......'

    },
]

/*
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
*/

for (const key in team) {
    console.log(team[key]);
}