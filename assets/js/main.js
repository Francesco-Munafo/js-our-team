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
    
];

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

+++++++

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede
*/

const rowDomEl = document.querySelector('.row');

function addTeamMembersToDom() {
    
    for (let i = 0; i < team.length; i++) {
        const member = team[i];
    
        const markupEl = 
        `<div class="col-3 mb-4">
        <div class="card bg-dark">
            <img class="card-img-top" src="${member["pic"]}" alt="">
            <div class="card-body">
                <h4 class="fs-5 text-light">${member["name"]}</h4>
                <p class="text-light">${member["role"]}</p>
            </div>
        </div>
    </div> `;
    
        rowDomEl.insertAdjacentHTML("beforeend", markupEl);
        
    }
}

addTeamMembersToDom();



const addMemberForm = document.getElementById('add_member');

addMemberForm.addEventListener('submit', function (ev) {

    ev.preventDefault();

    const newMemberName = document.getElementById('name').value;
    const newMemberRole = document.getElementById('role').value;
    let loremId = Math.floor(Math.random() * 999) + 100;
    const newMemberPic = `https://picsum.photos/id/${loremId}/400/429`
    const newMember = {
        name: newMemberName,
        role: newMemberRole,
        pic: newMemberPic
    };

    team.push(newMember);

    rowDomEl.innerHTML = '';
    addTeamMembersToDom();
    
})


/*
BONUS 3:
Aggiungete un form in pagina per permettere all’utente di aggiungere nuovi membri del team: cliccando sul pulsante “add” viene creato un nuovo oggetto, 
il quale viene inserito nell’array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall’utente.
*/