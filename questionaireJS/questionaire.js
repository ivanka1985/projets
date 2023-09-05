
function soumettreQuiz(){
    let commentaire = document.getElementById("commentaire");

/* je récupère les réponses (attribut value dans mon HTML) que j'ai coché dans mon quizz */
    if(document.querySelector('input[name="question1"]:checked') === null ||
        document.querySelector('input[name="question2"]:checked') === null ||
        document.querySelector('input[name="question3"]:checked') === null ||
        document.querySelector('input[name="question4"]:checked') === null ||
        document.querySelector('input[name="question5"]:checked') === null){
        commentaire.innerHTML = "Veuillez répondre à toutes les questions";

    }else{
        question1 = document.querySelector('input[name="question1"]:checked').value;
        question2 = document.querySelector('input[name="question2"]:checked').value;
        question3 = document.querySelector('input[name="question3"]:checked').value;
        question4 = document.querySelector('input[name="question4"]:checked').value;
        question5 = document.querySelector('input[name="question5"]:checked').value;
    }

// je cree ma variable qui correspoujn a ma div queston 1 2 3 4 5 
let div1 = document.getElementById("divQuestion1");
let div2 = document.getElementById("divQuestion2");
let div3 = document.getElementById("divQuestion3");
let div4 = document.getElementById("divQuestion4");
let div5 = document.getElementById("divQuestion5");

//j'initialise mon score a 0
let score = 0;
let paragrapheScore = document.getElementById("score");

// QUESTION 1 (ICI J'AI FAIT 3 IF/ELSE MAIS ON PEUT FAIRE UNE BOUCLE POUR OPTIMISER)
if(question1 == "Tim"){
    div1.style.backgroundColor = "green"
    score++;
}else{
    div1.style.backgroundColor = "red"
}

if(question2 == "Python"){
    div2.style.backgroundColor = "green"
    score++;
}else{
    div2.style.backgroundColor = "red"
}

if(question3 == "Console"){
    div3.style.backgroundColor = "green"
    score++;
}else{
    div3.style.backgroundColor = "red"
}

if(question4 == "Accessible"){
    div4.style.backgroundColor = "green"
    score++;
}else{
    div4.style.backgroundColor = "red"
}

if(question5 == "Amazon"){
    div5.style.backgroundColor = "green"
    score++;
}else{
    div5.style.backgroundColor = "red"
}

//COMMENTAIRE PAR RAPPORT AU RESULTAT
paragrapheScore.innerText = "Votre score est de : "+ score +" /5";
switch(score){
    case 0: 
    case 1:
    case 2:
        commentaire.innerHTML = "Peut mieux faire";
        break;
    case 3:
    case 4:
        commentaire.innerHTML = "C'est pas mal";
        break;
    case 5:
        commentaire.innerHTML = "C'est parfait";
        break;
        default:
            console.log("erreur");
}}
