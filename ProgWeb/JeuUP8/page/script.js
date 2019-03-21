const trouve = 100;
const pastrouve = 20;
var pairConsecs = 0;
var score,active,carte1,carte2;
var arrayimagesID=[];
var arrayimagestrouve=[];
var arrayimages=[];
var intGame = function() {
    document.getElementById('resultat').style.display='none';
    document.getElementById('jeu').style.display = 'block';
    paireConsecs=0
    arrayimagesID[0]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    arrayimagesID[1]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    arrayimagesID[0]=shuffleArray(arrayImagesID[0]);
    arrayimagesID[1]=shuffleArray(arrayImagesID[1]);
    active = true;
    carte1=null;
    carte2=null;
    score = 0
    arrayimagestrouve=[];
    document.getElementById('score')innerHTML = score;
    document.getElementById('score2')innerHTML = score;
    initCartes();

}


var shuffleArray = function(array){
    for (var i = array.length-1;i > 0 ; i--){
        var j = math.floor(math.random()i+1));
        var temp = array[i];
        array [j] = array [i];
        array [i] = array [j];
        }
        return array;
    }

}

/var initcartes = function (){
    var table = document.getElementbyId('tabbody');
    var cpt = 0;
    for (i = 0 ; i < table.children.length;i++){
        var tr = table.children[i];
        for (j=0 ; j < tr.children.length;j++){
            tr.children[j].children[o].id =  arrayimagesID[0][cpt]+"a";
            tr.children[j+1]

        }
    }
}