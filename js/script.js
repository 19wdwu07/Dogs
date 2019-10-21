console.log('Array of objects');

var dogs = [
  {
      name : "Browny",
      id   : "AB101",
      breed: "Australian Bulldog",
      color: "Brown and White",
      height: 50,
      age   : 8,
      photo: "images/aussieBulldog.jpg"

  },
  {
    name : "Blacky",
    id   : "AS102",
    breed: "American Staffordshire",
    color: "Black and White",
    height: 60,
    age   : 10,
    photo: "images/americanStaffordshire.jpg"
  },
  {
    name : "Beaggie",
    id   : "B103",
    breed: "Beagle",
    color: "Brown, white and black",
    height: 35,
    age   : 6,
    photo: "images/beagle.jpg"
  },
  {
    name : "Alasky",
    id   : "AM104",
    breed: "Alaskan Malamute",
    color: "Black and White",
    height: 70,
    age   : 11,
    photo: "images/alaskanMalamute.jpg"
  },
  {
    name : "Britty",
    id   : "BB105",
    breed: "British Bulldog",
    color: "Brown and White",
    height: 30,
    age   : 13,
    photo: "images/britishBulldog.jpg"
  }
];
//all dogs

function allDogs(){
  document.getElementById('dogs').innerHTML = " "; //to clear the container
for(var i = 0; i < dogs.length; i++) {
  document.getElementById('dogs').innerHTML
  += '</br><h1 class="jumbotron text-danger">' + dogs[i].name + '</h1>'
  + '<div class="row">'
  +'<div class="col">'
  + '<img class="img-thumbnail mt-5 myDogs" src="' + dogs[i].photo + ' "  alt="Dog"/>'
  + '</div>'
  + '<div class="col">'
  + '</br></br> Breed : <h5 class="text-danger" >' + dogs[i].breed + '</h5>'
  + '</br> Age : <h5 class="text-danger" > ' + dogs[i].age + '</h5>'
  + '</br> Height : <h5 class="text-danger" >' + dogs[i].height + '</h5>'
  + '</div>'
  + '</div>';
}
}

//conditional display
//beagle
document.getElementById('beagle').addEventListener('click', function(){
  console.log(dogs);
  document.getElementById('dogs').innerHTML = " "; //to clear the container
  for(var i = 0; i < dogs.length; i++) {
    if (dogs[i].breed === "Beagle") {
      document.getElementById('dogs').innerHTML
      += '</br><h1 class="jumbotron text-danger">' + dogs[i].name + '</h1>'
      + '<div class="row">'
      +'<div class="col">'
      + '<img class="img-thumbnail mt-5 myDogs" src="' + dogs[i].photo + ' "  alt="Dog"/>'
      + '</div>'
      + '<div class="col">'
      + '</br></br> Breed : <h5 class="text-danger" >' + dogs[i].breed + '</h5>'
      + '</br> Age : <h5 class="text-danger" > ' + dogs[i].age + '</h5>'
      + '</br> Height : <h5 class="text-danger" >' + dogs[i].height + '</h5>'
      + '</div>'
      + '</div>';
   }
  }
});

//height >40
document.getElementById('height40').addEventListener('click', function(){
  console.log(dogs);
  document.getElementById('dogs').innerHTML = " "; //to clear the container
  for(var i = 0; i < dogs.length; i++) {
    if (dogs[i].height >= 40) {
      document.getElementById('dogs').innerHTML
      += '</br><h1 class="jumbotron text-danger">' + dogs[i].name + '</h1>'
      + '<div class="row">'
      +'<div class="col">'
      + '<img class="img-thumbnail mt-5 myDogs" src="' + dogs[i].photo + ' "  alt="Dog"/>'
      + '</div>'
      + '<div class="col">'
      + '</br></br> Breed : <h5 class="text-danger" >' + dogs[i].breed + '</h5>'
      + '</br> Age : <h5 class="text-danger" > ' + dogs[i].age + '</h5>'
      + '</br> Height : <h5 class="text-danger" >' + dogs[i].height + '</h5>'
      + '</div>'
      + '</div>';
   }
  }
});


//bulldog
document.getElementById('bullDog').addEventListener('click', function(){
  console.log(dogs);
  document.getElementById('dogs').innerHTML = " "; //to clear the container


  for(var i = 0; i < dogs.length; i++) {
    if (dogs[i].breed.indexOf("Bulldog") > (-1) ) {
      document.getElementById('dogs').innerHTML
      += '</br><h1 class="jumbotron text-danger">' + dogs[i].name + '</h1>'
      + '<div class="row">'
      +'<div class="col">'
      + '<img class="img-thumbnail mt-5 myDogs" src="' + dogs[i].photo + ' "  alt="Dog"/>'
      + '</div>'
      + '<div class="col">'
      + '</br></br> Breed : <h5 class="text-danger" >' + dogs[i].breed + '</h5>'
      + '</br> Age : <h5 class="text-danger" > ' + dogs[i].age + '</h5>'
      + '</br> Height : <h5 class="text-danger" >' + dogs[i].height + '</h5>'
      + '</div>'
      + '</div>';
   }
  }
});

 document.getElementById('changeName').addEventListener('click', function(){
   var oldName = document.getElementById('oldName').value;
   var newName = document.getElementById('newName').value;
   console.log(oldName, newName);
   for(var i = 0; i < dogs.length; i++) {
     if (oldName === dogs[i].name){
       dogs[i].name = newName;
     }
   }
   console.log(dogs);
   allDogs();
 });

document.getElementById('all').addEventListener('click', function(){
  allDogs();
});
