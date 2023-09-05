var texteResultat1=document.getElementById("texteResultat1");
var texteResultat2=document.getElementById("texteResultat2");
var texteResultat3=document.getElementById("texteResultat3");
var texteResultatFinal=document.getElementById("texteResultatFinal");

function verifierQuizz(){
// SI UNE DES QUESTIONS N'EST PAS REPONDUE, ON NE PASSE PAS A LA SUITE
    if(document.querySelector('input[name="question1"]:checked') === null
    || document.querySelector('input[name="question2"]:checked') === null
    || document.querySelector('input[name="question3"]:checked') === null){
        texteResultatFinal.innerText="Vous devez répondre à tout le quiz";
    }
// SINON ON VERIFIE ET CALCULE LE RESULTAT DU QUIZ
    else{
        var rep1 = document.querySelector('input[name="question1"]:checked').value;
        var rep2 = document.querySelector('input[name="question2"]:checked').value;
        var rep3 = document.querySelector('input[name="question3"]:checked').value;
        var resultat = 0;
// QUESTION 1 (ICI J'AI FAIT 3 IF/ELSE MAIS ON PEUT FAIRE UNE BOUCLE POUR OPTIMISER)
        if(rep1=="correct"){
            texteResultat1.innerText="Question 1 : Bonne réponse";
            texteResultat1.style.color="green";
            resultat++;
        }
        else{
            texteResultat1.innerText="Question 1 : Mauvaise réponse";
            texteResultat1.style.color="red";
        }
// QUESTION 2
        if(rep2=="correct"){
            texteResultat2.innerText="Question 2 : Bonne réponse";
            texteResultat2.style.color="green";
            resultat++;
        }else{
            texteResultat2.innerText="Question 2 : Mauvaise réponse";
            texteResultat2.style.color="red";
        }
// QUESTION 3
        if(rep3=="correct"){
            texteResultat3.innerText="Question 3 : Bonne réponse";
            texteResultat3.style.color="green";
            resultat++;
        }else{
            texteResultat3.innerText="Question 3 : Mauvaise réponse";
            texteResultat3.style.color="red";
        }
//COMMENTAIRE PAR RAPPORT AU RESULTAT
        texteResultatFinal.innerText="Vous avez une note de : "+resultat+" sur 3.";
        if(resultat==0 || resultat==1){
            texteResultatFinal.innerHTML=texteResultatFinal.innerText+" <b>Vous êtes nul</b>";
        }
        if(resultat==2){
            texteResultatFinal.innerText=texteResultatFinal.innerText+" Vous êtes moyen";
        }
        if(resultat==3){
            texteResultatFinal.innerText=texteResultatFinal.innerText+" Vous êtes bon !";
        }
//EMPECHER L'UTILISATEUR DE RE-CLIQUER SUR "ENVOYER"
        document.getElementById("mySubmit").disabled = true;
    }
}