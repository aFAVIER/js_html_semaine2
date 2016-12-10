//////////////////////////////////////////ex1_1////////////////////////////////////////////
//var nb = 4;
//alert(nb);

//////////////////////////////////////////ex1_2////////////////////////////////////////////
//var nom = 'Doe';
//var prenom = 'John';
//var ville = 'New-York';
//alert('Nom : '+nom+'\n'+'Prénom : '+prenom+'\n'+'Ville : '+ville);

//////////////////////////////////////////ex1_3////////////////////////////////////////////
//var name;
//name = prompt('Indiquer votre nom.');
//alert('Bonjour, '+name);

//////////////////////////////////////////ex1_5////////////////////////////////////////////
//var age;
//age = prompt('Indiquer votre âge.')
//if (age >= 18) {
//	alert('Vous êtes majeur.');
//}
//else {
//	alert('Vous êtes mineur.');
//}

//////////////////////////////////////BONUS//ex1_6//////////////////////////////////////////
//var tab = new Array;
//tab.push(prompt('Quel est votre nom?'));
//tab.push(prompt('Quel est votre prénom?'));
//tab.push(prompt('Indiquer votre ville.'));
//alert('Nom : '+tab[0]+'\n'+'Prénom : '+tab[1]+'\n'+'Ville : '+tab[2]);

/////////////////////////////////////BONUS//ex1_7//////////////////////////////////////////
var tab = new Array;
var age;
tab.push(prompt('Quel est votre sexe? (Réponder par "une fille" ou "un garçon")'));
tab.push(prompt('Indiquer votre âge.'));
tab.push(prompt('De quelle origine êtes-vous? (ex : "allemand" ou "allemande")'));
if (tab[1] >= 18) {
	age = 'majeur';
} 
else {
	age = 'mineur';
}
alert('Vous êtes '+tab[0]+' '+age+' '+tab[2]+'.');