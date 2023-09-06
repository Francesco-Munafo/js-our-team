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

        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        pic: './assets/img/wayne-barnett-founder-ceo.jpg'

    },
    {

        name: 'Angela Caroll',
        role: 'Chief Editor',
        pic: './assets/img/angela-caroll-chief-editor.jpg'

    },
    {

        name: 'Walter Gordon',
        role: 'Office Manager',
        pic: './assets/img/walter-gordon-office-manager.jpg'

    },
    {

        name: 'Angela Lopez',
        role: 'Social Media Manager',
        pic: './assets/img/angela-lopez-social-media-manager.jpg'

    },
    {

        name: 'Scott Estrada',
        role: 'Developer',
        pic: './assets/img/scott-estrada-developer.jpg'

    },
    {

        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        pic: './assets/img/barbara-ramos-graphic-designer.jpg'

    }
    
]

/*
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
*/

 for (const key in team) {
     console.log(team[key]);
 }

/*
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
*/

for (let i = 0; i < team.length; i++) {
    const member = team[i];

    const containerDomEl = document.querySelector('.container')
    containerDomEl.insertAdjacentHTML("beforeend" )
    
}