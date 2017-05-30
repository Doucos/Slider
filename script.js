$(function(){

  // initialisation des variables :

  var indice = 1; // représente l'indice de l'image
  var tourne = true; // indique que le slider tourne
  var nbImage = $("img").length; // propriété qui indique le nombre d'éléments sélectionnés

  // Déclaration d'une fonction d'affichage des images :
  function affiche(){

  if (indice == nbImage) {
    indice = 0;
    $("img").hide();
  }

  // Affiche l'image :
  $("img").eq(indice).show()

  indice++; // incrémentation (+1)

  }

  // Fonction pour la pause :

  $("img").click(function(){
    if (tourne) { // si le slider tourne :
      clearInterval(timer); // on arrete le setInterval
      tourne = false; // et on indique que le slider est à l'arret
    } else {
      affiche();
      timer = setInterval(affiche, 1000); // on relance l'appel de la fonction affiche ttes les 3s
      tourne = true; // on indique que le slider est en marche
    }
  });

  // Appel de la fonction affiche() :
  var timer = setInterval(affiche, 1000); /* Appel la fonction affiche()
  toutes les 3s */


});
