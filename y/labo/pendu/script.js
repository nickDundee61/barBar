
/*DESCRIPTION DU PROGRAMME
ETAPE 1 : le programme choisi un mot parmi une liste
(tableau avec des mots et un nombre aléatoire pour choisir le mot )

ETAPE 2 : déconstruire le mot dans un tableau
(let chaineDeLettre = ["M","O","T"])

ETAPE 3 : afficher les div qui resprésentent les lettres du mot

ETAPE 4 : afficher les div qui représentent les lettres de l'alphabet

ETAPE 5 : ajouter un écouteur d'événement pour traiter la lettre choisi par l'utilisateur

ETAPE 6 : comparaison de la lettre avec les lettres du mot chosi par le programme

ETAPE 7 : assignation des variables globles en conséquences

ETAPE 8 : contrôle de la fin du jeu

ETAPE 9 : réinitialisation du jeu 
*/
//########################### CONSTANTES ET VARIABLES GLOBALES ################################################

//déclaration d'un tableau pour stocker les mots que devra choisir le programme
const CGAS_tableauDeMotDeveloppement = [
    "programming",
    "coding",
    "debugging",
    "algorithm",
    "source code",
    "version control",
    "git",
    "repository",
    "commit",
    "merge",
    "branch",
    "function",
    "variable",
    "object",
    "class",
    "method",
    "library",
    "framework",
    "API",
    "database",
    "frontend",
    "backend",
    "full-stack",
    "web development",
    "mobile development",
    "responsive design",
    "testing",
    "unit testing",
    "integration testing",
    "agile",
    "scrum",
    "kanban",
    "waterfall",
    "sprint",
    "user story",
    "bug",
    "feature",
    "documentation",
    "debugging",
    "refactoring",
    "IDE",
    "text editor",
    "compiler",
    "interpreter",
    "server",
    "client",
    "HTTP",
    "HTTPS",
    "API endpoint",
    "authentication",
    "authorization",
    "security",
    "encryption",
    "deployment",
    "continuous integration",
    "continuous deployment",
    "DevOps",
    "containerization",
    "Docker",
    "Kubernetes",
    "cloud computing",
    "AWS",
    "Azure",
    "Google Cloud",
    "front-end framework",
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Angular",
    "Vue.js",
    "backend framework",
    "Node.js",
    "Ruby on Rails",
    "Django",
    "Laravel",
    "programming language",
    "Java",
    "Python",
    "C++",
    "C#",
    "PHP",
    "Ruby",
    "JavaScript",
    "SQL",
    "NoSQL",
    "REST",
    "SOAP",
    "database management",
    "SQL database",
    "NoSQL database",
    "version control system",
    "code review",
    "software architecture",
    "scalability",
    "agile methodology",
    "codebase",
    "API design",
    "web server",
    "serverless",
    "dependency",
    "framework",
    "open-source",
    "software engineer",
    "developer",
    "programmer",
    "debugger",
    "software testing",
    "frontend development",
    "backend development",
    "software project",
    "project management",
    "software lifecycle",
];
//déclaration d'une variable globale qui est un tableau contentant des proverbes
const CGAS_proverbes = [
    "Qui sème le vent récolte la tempête.",
    "L'habit ne fait pas le moine.",
    "Chassez le naturel, il revient au galop.",
    "On n'est jamais mieux servi que par soi-même.",
    "Mieux vaut prévenir que guérir.",
    "Tout vient à point à qui sait attendre.",
    "L'union fait la force.",
    "Petit à petit, l'oiseau fait son nid.",
    "Quand le chat n'est pas là, les souris dansent.",
    "Tel père, tel fils",
    "La vérité sort de la bouche des enfants.",
    "Les absents ont toujours tort.",
    "À chaque jour suffit sa peine.",
    "La nuit porte conseil.",
    "On ne fait pas d'omelette sans casser des œufs.",
    "La fortune sourit aux audacieux.",
    "La patience est mère de toutes les vertus.",
    "Rira bien qui rira le dernier.",
    "Qui vole un œuf vole un bœuf.",
    "Chacun voit midi à sa porte.",
    "Chien qui aboie ne mord pas.",
    "L'argent ne fait pas le bonheur.",
    "Tout ce qui brille n'est pas d'or.",
    "Le client a toujours raison.",
    "Il n'y a pas de fumée sans feu.",
    "Les actes parlent plus fort que les paroles.",
    "L'habit ne fait pas le moine.",
    "Les paroles s'envolent, les écrits restent.",
    "Mieux vaut tard que jamais.",
    "C'est en forgeant qu'on devient forgeron.",
    "Tout est bien qui finit bien.",
    "Chacun voit midi à sa porte.",
    "La nuit porte conseil.",
    "La vérité sort de la bouche des enfants.",
    "Les absents ont toujours tort.",
    "L'argent ne fait pas le bonheur.",
    "Tout ce qui brille n'est pas d'or.",
    "Le client a toujours raison.",
    "Il n'y a pas de fumée sans feu.",
    "Les actes parlent plus fort que les paroles.",
    "Les paroles s'envolent, les écrits restent.",
    "Mieux vaut tard que jamais.",
    "C'est en forgeant qu'on devient forgeron.",
    "Tout est bien qui finit bien.",
    "Chacun voit midi à sa porte.",
    "La nuit porte conseil.",
    "La vérité sort de la bouche des enfants.",
    "Les absents ont toujours tort.",
    "L'argent ne fait pas le bonheur.",
    "Tout ce qui brille n'est pas d'or.",
    "Le client a toujours raison.",
    "Il n'y a pas de fumée sans feu.",
    "Les actes parlent plus fort que les paroles.",
    "Les paroles s'envolent, les écrits restent.",
    "Mieux vaut tard que jamais.",
    "C'est en forgeant qu'on devient forgeron.",
    "Tout est bien qui finit bien.",
    "Chacun voit midi à sa porte.",
    "La nuit porte conseil.",
    "La vérité sort de la bouche des enfants.",
    "Les absents ont toujours tort.",
    "L'argent ne fait pas le bonheur.",
    "Tout ce qui brille n'est pas d'or.",
    "Le client a toujours raison.",
    "Il n'y a pas de fumée sans feu.",
    "Les actes parlent plus fort que les paroles.",
    "Les paroles s'envolent, les écrits restent.",
    "Mieux vaut tard que jamais.",
    "C'est en forgeant qu'on devient forgeron.",
    "Tout est bien qui finit bien.",
    "Chacun voit midi à sa porte.",
    "La nuit porte conseil.",
    "La vérité sort de la bouche des enfants.",
    "Les absents ont toujours tort.",
    "L'argent ne fait pas le bonheur.",
    "Tout ce qui brille n'est pas d'or.",
    "Le client a toujours raison.",
    "Il n'y a pas de fumée sans feu.",
    "Les actes parlent plus fort que les paroles.",
    "L'habit ne fait pas le moine.",
    "Les paroles s'envolent, les écrits restent.",
    "Mieux vaut tard que jamais.",
    "C'est en forgeant qu'on devient forgeron.",
    "Tout est bien qui finit bien."
];

//déclaration de l'alphabet  (constante globale)
const CGAS_alphabetEnCapital = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'È', 'É', "Ê", "Â", "À", "Ù","Û", "Î", "Ô", "Ç", "Œ", ",", "'", ".", " "
];

//déclaration d'une variable globale pour représenter le nombre maximum d'essais (VARIABLE GLOBALE type NOMBRE)
let VGN_maxEssais = 10;
//Décalration d'une variable gloable qui statut sur la fin du jeu
let VGB_fini = false;

//déclaration d'une variable globale pour compter les essais initialisée à zéro
let VGN_essais = 0;
//déclaration d'un tableau au global qui prendra la valeur du mot "splité" que choisira le programme
let VGAS_chaineDeLettre = [];

//déclaration d'un entier qui représente la progression du joueur
//à chaque fois que le joueur sélectionne une bonne CLS_lettre , "VGN_progressionEnCours" est incrémenté de 1
let VGN_progressionEnCours = 0

//déclaration du bloc de CLS_lettre
let VGH_blocDeLettre;

//délcaration d'un container pour l'alphabet
//délcaration d'un objet 
let VGH_alphaC;
//########################### FONCTIONS DE CONSTRUCTION ################################################

const creationPanneauDesOptions = () => {
    // Création de la div principale
    const CGH_panneauDesOptions = document.createElement("div");
    //ajout d'une classe css
    CGH_panneauDesOptions.classList.add("panneauDesOptions");
    //ajout d'une id
    CGH_panneauDesOptions.id = "panneauDesOptions";


    // Création du selecteur
    const CGH_selectDifficulte = document.createElement("select");
    //ajout d'une id
    CGH_selectDifficulte.id = "select"
    //ajout d'un écouteur d'événement
    CGH_selectDifficulte.addEventListener("change", (e) => {
        //la valeur sélectionnée est assignée au nombre maximum d'essais après convertion en nombre entier
        VGN_maxEssais = parseInt(e.target.value);

        if (document.getElementById("boutonDeNouvellePartie")) {

            document.getElementById("boutonDeNouvellePartie").remove()
        }
        //après avoir choisi un niveau de difficulté, la partie est complétement réiniatlisée
        retinitialiserPartie()

    })
    //le niveau de difficulté commence à 4 et va jusqu'à 11
    for (let i = 4; i < 12; i++) {
        //création des éléments d'options qui sont associés à une balise <select>
        let VLS_option = document.createElement("option");
        //ajout d'un texte (le nombre)
        VLS_option.textContent = i.toString();
        //ajout d'une id pour récupérer la valeur sélectionnée en temps voulu
        VLS_option.id = i.toString();
        //initialisation du sélecteur à la valeur maxEssais par défaut
        if (i === VGN_maxEssais) {
            VLS_option.selected = true;
        }
        //ajout des options au sélecteur
        CGH_selectDifficulte.appendChild(VLS_option);
    }
    //création d'un label pour le sélecteur
    const CGH_labelDifficulte = document.createElement("label");
    //ajout d'un texte
    CGH_labelDifficulte.textContent = "Difficulté";
    //association du label au sélecteur
    CGH_labelDifficulte.for = "select ";
    //ajout du label à la div parente
    CGH_selectDifficulte.appendChild(CGH_labelDifficulte)
    //ajout du label et du sélecteur à la div parente
    CGH_panneauDesOptions.appendChild(CGH_labelDifficulte);
    CGH_panneauDesOptions.appendChild(CGH_selectDifficulte);

    // Append the panneauDesOptions div to the body
    document.body.appendChild(CGH_panneauDesOptions);
}
//création du bouton de nouvelle partie
const boutonDeNouvellePartie = () => {
    const CGH_bouton = document.createElement("div");
    //ajout d'une classe css
    CGH_bouton.classList.add("boutonNouvellePartie");
    //ajout d'un texte
    CGH_bouton.textContent = "Rejouer";
    //ajout d'une id
    CGH_bouton.id = "boutonDeNouvellePartie";
    //ajout d'un écouteur d'événement
    CGH_bouton.addEventListener("click", () => {
        retinitialiserPartie()
    })
    //ajout du bouton au body du document
    document.body.appendChild(CGH_bouton)

}
//construction d'un container pour acceuillir les lettres de l'alphabet
const creationDuConteneurAlphabet = () => {

    //si l'objet n'existe pas 
    if (!document.getElementById("alphaC")) {
        //création de l'objet
        VGH_alphaC = document.createElement("div");
        //ajout d'une classe css
        VGH_alphaC.classList.add("alphaC");
        //ajout d'id
        VGH_alphaC.id = "alphaC"
        //ajout de la div au body du document

        document.body.appendChild(VGH_alphaC)
    } else {
        //sinon
        VGH_alphaC = document.getElementById("alphaC");
    }
    //remplissage du conteneur avec les lettres de l'alphabet
    for (let CLS_lettre of CGAS_alphabetEnCapital) {
        // création d'une div
        const CGH_alphaLetter = document.createElement("div")
        //ajout d'un classe css
        CGH_alphaLetter.classList.add('alphaLetter');
        //ajout de la CLS_lettre sur la div
        CGH_alphaLetter.textContent = CLS_lettre;
        //ajout d'une id unique
        CGH_alphaLetter.id = CLS_lettre;
        //ajout d'un état "déjà cliqué"
        CGH_alphaLetter.dejaClick = false;
        //ajout d'un écouteur d'événement
        CGH_alphaLetter.addEventListener("click", (e) => {
            if (VGB_fini) {
                return;
            }
            traitementChoixLettre(e.target.id)

        })
        //ajout d'id
        alphaC.id = "alphaC"
        //ajout de la CLS_lettre au conteneur
        alphaC.appendChild(CGH_alphaLetter);
    }


}


//contructeur des div pour chaque CLS_lettre du mot. Ces div sont contenues dans un bloc parent
const constructeurDuBlocDeLettre = () => {

    //déclaration d'une variable pour le conteneur parent

    //l'approche suivante n'est pas nécessaire car le bloc de CLS_lettre
    //ne sera construit qu'une seule fois pour toute la durée du programme
    //mais dans un autre contexte, il peut être nécessaire de vérifier qu'une div existe ou pas
    //car éventuellement détruite par une autre partie du programme
    //ainsi VGH_blocDeLettre est créé à l'extérieur des conditions suivantes car il devra être référencé dans tous les cas

    //si le conteneur n'existe pas
    if (!document.getElementById("blockConstructor")) {
        //création 
        VGH_blocDeLettre = document.createElement("div")
        //ajout d'une classe
        VGH_blocDeLettre.classList.add("blockConstructor")
        //ajout d'une id pour un référencement future
        VGH_blocDeLettre.id = "blockConstructor"
        //ajout de la div parente au body du document
        document.body.appendChild(VGH_blocDeLettre)
    } else {
        //sinon obtention
        VGH_blocDeLettre = document.getElementById("blockConstructor")
    }


    //création des blocs de lettres dans la div VGH_blocDeLettre
    for (let el of VGAS_chaineDeLettre) {
        //ici "el" n'est pas utilisé car les blocs de lettres doivent restés vide au début du jeu
        //la valeur de el ne sera pas ajoutée à la propriété textContent

        //création d'un bloc (une div)
        let block = document.createElement("div");
        //ajout d'une classe css
        block.classList.add("block")
        //ajout du bloc crée à la div parente
        VGH_blocDeLettre.appendChild(block)
    }
}
//construction du bloc qui acceuillera les div représentant les coups manqués par le joueur
const constructionBlockDuPendu = () => {
    //création d'une div
    const blockDuPendu = document.createElement("div");
    //ajout d'une id
    blockDuPendu.id = "blockDuPendu"
    //ajout d'une classe
    blockDuPendu.classList.add("blocDuPendu")
    //ajout de la div au body du document
    document.body.appendChild(blockDuPendu)
}

//########################### FONCTIONS DE GESTION ################################################

//fonction pour choisir un mot, le fait de lui passer un tableau en paramètre
//permettra de choisir plusieurs lexiques 
const choisirUnMot = (CGAS_tableau) => {
    //déclaration d'un nombre alétoire entier compris dans la longueur
    //du tableau en paramètre
    let VLN_nombreAleatoire = Math.floor(Math.random() * CGAS_tableau.length);
    //sélection du mot et stockage dans la variable mot
    let VLS_mot = CGAS_tableau[VLN_nombreAleatoire];

    //passage du mot en capital pour filtrer les lettres qui pourraient être éventuellement en minuscule 
    //et donc être mal traitées dans la suite du programme
    VLS_mot = VLS_mot.toUpperCase()
    //décomposition du mot en tableau et assignation au tableau global "VGAS_chaineDeLettre"
    VGAS_chaineDeLettre = VLS_mot.split('')


    //renvoit le mot sélectionné
    return VLS_mot;
}

//traite le mot obtenu par l'API
const traitementMotApi = (CLS_mot) => {

    //passage du mot en capital pour filtrer les lettres qui pourraient être éventuellement en minuscule 
    //et donc être mal traitées dans la suite du programme
    CLS_mot = CLS_mot.toUpperCase()
    //décomposition du mot en tableau et assignation au tableau global "VGAS_chaineDeLettre"
    VGAS_chaineDeLettre = CLS_mot.split('')
    //si le mot est composé d'espace, il faut incrémenter la progression du joueur d'autant. 
    //pour qu'à la dernière CLS_lettre à trouver, la longueur du mot soit égale à la progression
    //pour finir le jeu
  for (let i of VGAS_chaineDeLettre) {
        if (i === " ") {
            VGN_progressionEnCours++;
        }
    }
    //renvoit le mot sélectionné
    return CLS_mot;
}

//la fonction suivante gère la bordure des blocs de lettres selon que la lettre choisie par l'utilisateur est juste ou pas

//la lettre (unique dans l'alphabet) et aussi l'id de la div 
//(créée par la fonction creationDuConteneurAlphabet())

//une CLS_lettre et le résultat (true ou false) en paramètre
const gestionDesCouleursDeBlock = (CLS_lettre, CLB_resultat) => {
    //récupération de la div correspondant à la CLS_lettre en paramètre
    const CGH_divAlphabet = document.getElementById(CLS_lettre);
    //déclaration de deux variables pour contenir des noms de couleur
    const CLS_bon = "lime";
    let CLS_pasBon = "red"
    //si le résultat est vrai (peut aussi s'écrire : if(CLB_resultat===true)
    if (CLB_resultat) {
        //change le style de la div avec la technique du "dollar" (interpolation) qui permet 
        //d'intégrer une variable dans une chaîne de caractère
        CGH_divAlphabet.setAttribute("style", `border-color : ${CLS_bon}`)

    } else {
        CGH_divAlphabet.setAttribute("style", `border-color : ${CLS_pasBon}`)
    }


    //il est tout à fait possible d'ajouter une propriété à notre objet CGH_divAlphabet.
    //cette propriété à été crée en même temps que la div
    //par défaut la propriété était paramétrée à false (pas cliquée)
    //après avoir cliqué sur la div, le programme passera obligatoirement par cette fonction
    //et la proprété dejaClick passe à true;
    CGH_divAlphabet.dejaClick = true;
}

//la fonction suivante compare le nombre d'VGN_essais au nombre maximum d'VGN_essais
//si le nombre d'VGN_essais est égal au nombre maximum d'VGN_essais, le jeu est VGB_fini

const gestionDuNombreEssais = () => {

    if (VGN_essais >= VGN_maxEssais) {
        VGB_fini = true;
        let CGH_bouton = document.getElementById("boutonDeNouvellePartie");
        montrerLeMot(false)
        CGH_bouton.classList.toggle("boutonShow")
    }
    //implémenter la fin du jeu (apparition d'une div, remise à zéro des compteurs, choix d'un nouveau mot etc...)
}
//fonction pour effacer le contenu d'un conteneur
const effacerBlock = (VGH_blocDeLettre) => {

    while (VGH_blocDeLettre.firstChild) {
        VGH_blocDeLettre.removeChild(VGH_blocDeLettre.firstChild);
    }

}
//détermine la fin du jeu la progression à la longueur de VGAS_chaineDeLettre

const finDuJeu = () => {
    if (VGN_progressionEnCours === VGAS_chaineDeLettre.length) {

        VGB_fini = true;
        const CGH_bouton = document.getElementById("boutonDeNouvellePartie");
        CGH_bouton.classList.toggle("boutonShow")
        montrerLeMot(true)

    }

}
//gère l'ajout de div au bloc du pendu
const ajoutAuBlocDuPendu = (CLB_bonChoix, CLS_lettre) => {
    //récupération de la div en cours car si elle a déjà été cliqué, le joueur aura une pénalité
    const CGH_lettreCourrante = document.getElementById(CLS_lettre);
    //si mauvais choix OU (||) CLS_lettre déjà cliquée (bon choix mais déjà cliqué : bonChoix && CGH_lettreCourrante.dejaClick)
    if (!CLB_bonChoix || (CLB_bonChoix && CGH_lettreCourrante.dejaClick)) {
        //incrémentation de la variable globale VGN_essais
        VGN_essais++;
        //création d'une div
        const CLH_blPendu = document.createElement("div")
        //ajout d'une classe
        CLH_blPendu.classList.add("tilePendu")
        //référencement du conteneur du pendu
        const CGH_containerDuPendu = document.getElementById("blockDuPendu")
        //ajout du nombre d'essai à la div
        CLH_blPendu.textContent = VGN_essais.toString()
        //ajout de la div à la div parente
        CGH_containerDuPendu.appendChild(CLH_blPendu)
    }



}
//la fonction suivante est activée lorsque le joueur clique sur une CLS_lettre
//elle prend une CLS_lettre en paramètre car non seulement la CLS_lettre sera comparée au mot 
//mais aussi car la CLS_lettre est aussi l'ID de la div
const traitementChoixLettre = (CLS_lettre) => {
    //initialisation de la variable VLB_bonChoix à false (à ce stade on ne sait pas si le joueur a fait le bon choix)
    let VLB_bonChoix = false;
    //récupération de la div cliquée pour traitement ultérieur
    const CGH_lettreCourrante = document.getElementById(CLS_lettre)
    //récupération du bloc de CLS_lettre pour éventuellement faire apparaître la CLS_lettre choisie 
    const CGH_blocDeLettre = document.getElementById("blockConstructor");
    //passage dans le bloc de CLS_lettre 
    for (let i in CGH_blocDeLettre.children) {
        //si la CLS_lettre choisie par le joueur correspond à une CLS_lettre d'une des div du conteneur de CLS_lettre
        //et SI la div n'a pas déjà été cliquée (&& !CGH_lettreCourrante.dejaClick)
        if (CLS_lettre === VGAS_chaineDeLettre[i] && !CGH_lettreCourrante.dejaClick) {

            //on fait apparaître la CLS_lettre sur la div
            if (CLS_lettre === " ") {
                CGH_blocDeLettre.children[i].textContent = VGAS_chaineDeLettre[i] = "-"
            }
            CGH_blocDeLettre.children[i].textContent = VGAS_chaineDeLettre[i]
            //incrémentation de la progression
            VGN_progressionEnCours++;
            //bon choix du joueur
            VLB_bonChoix = true;
        }
    }
    //lancement de la fonction ajoutAuBlocDuPendu 
    ajoutAuBlocDuPendu(VLB_bonChoix, CLS_lettre)
    //changement des couleurs des div
    gestionDesCouleursDeBlock(CLS_lettre, VLB_bonChoix)
    //contrôle de perte du jeu
    gestionDuNombreEssais()
    //contrôle de la fin du jeu
    finDuJeu()

}
//réinitialise la partie avec les paramétres d'origine et appelle la fonction detruireLesBlocks pour vider les containers
const retinitialiserPartie = () => {
    //déclare un tableau pour stocker les containers à vider
    let VLAH_tableauDeBlocs = []
    //réinitialiser les variables globales
    VGB_fini = false;
    VGAS_chaineDeLettre = [];
    VGN_progressionEnCours = 0;
    VGN_essais = 0;
    //récupérer le bloque de lettre et le place dans VLAH_tableauDeBlocs
    const CGH_blocDeLettre = document.getElementById("blockConstructor");
    VLAH_tableauDeBlocs.push(CGH_blocDeLettre)
    //récupérer le bloc d'alphabet et le place dans VLAH_tableauDeBlocs
    const CGH_blocAlphabet = document.getElementById("alphaC")
    VLAH_tableauDeBlocs.push(CGH_blocAlphabet)
    //récupérer le bloc du pendu et le place dans VLAH_tableauDeBlocs
    const CGH_blocPendu = document.getElementById("blockDuPendu")
    VLAH_tableauDeBlocs.push(CGH_blocPendu)

    detruireLesBlocks(VLAH_tableauDeBlocs)
    //si le bouton de nouvelle partie existe, le retirer
    if (document.getElementById("boutonDeNouvellePartie")) {

        document.getElementById("boutonDeNouvellePartie").remove()
    }
    //relance le programme
    Principal()

}

const detruireLesBlocks = (CLAH_tableauDeBlocs) => {
    for (let index of CLAH_tableauDeBlocs) {

        index.remove();
    }
}

//montrer le mot entier (vert si trouvé, rouge si pas trouvé)
const montrerLeMot = (CLB_resultat) => {
    for (let index in VGAS_chaineDeLettre) {
        if (CLB_resultat) {
            //changement de la couleur de fond en "lime" si le résutat est true
            VGH_blocDeLettre.children[index].style = "background-color :lime"
        } else {
            //changement de la couleur de fond en "tomato" si le résutat est false
            VGH_blocDeLettre.children[index].style = "background-color :tomato"

        }
        //dans tous les cas, afficher toutes les lettres
        VGH_blocDeLettre.children[index].textContent = VGAS_chaineDeLettre[index]
    }

}

//########################### FONCTION PRINCIPALE ################################################

//fonction principale
const Principal = async () => {
    //sélection d'un mot ATTENTE DE LA REPONSE AVEC await
    let VLS_mot = await fetchApi()
    traitementMotApi(VLS_mot)
    //Création du tableau d'option
    if(!document.getElementById("panneauDesOptions")){

       creationPanneauDesOptions();  
    }
   
    //construction du bloc de lettres
    constructeurDuBlocDeLettre()

    //construction du block d'alphabet
    creationDuConteneurAlphabet();
    //construction du block pendu
    constructionBlockDuPendu();
    //création du bouton de nouvelle partie
    boutonDeNouvellePartie();

}

//########################### REQUËTES API ################################################

//FONCTION ASYNCHRONE

const fetchApi = async () => {
    const url = "https://trouve-mot.fr/api/random/2" //'https://random-word-api.p.rapidapi.com/get_word';
    //option pour l'api random-word

    //bloc try catch  = essayer l'opération, attrapper l'erreur si échec
    try {
        //attente du résultat
        const response = await fetch(url);
        console.log(response, "**** response")
        //attente de la mise au format json
        const result = await response.json();
        console.log(result, "***result")
        //l'api renvoit 2 mots à la fois dans un tableau, nous prenons la valeur de la propriété "name" de la première cellule
        return result[0].name;
        //"attrappe" l'erreur et affichage dans la console.
    } catch (error) {
        console.error(error);
    }

}

//LANCEMENT DU PROGRAMME PRINCIPAL
Principal()







