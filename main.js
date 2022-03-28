/*** Object Constructors ***/
function Octopus(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "Our eight legged buddy";
  this.image = "octopus.png";
}

function Cat(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "Our favorite animal";
  this.image = "cat.png";
}

function Hamster(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "Our buddy that has an everlasting munchy";
  this.image = "hamster.png";
}



/*** Functions ***/
function generateRandomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
  let randomIdx = generateRandomIndex(names.length);
  return names[randomIdx];
}

function generateRandomAge() {
  return generateRandomIndex(10)
}

function generateRandomAnimal() {
    let randomIdx = generateRandomIndex(animals.length);
    let randomAnimal = animals[randomIdx];

    if (randomAnimal instanceof Octopus)
    {
        return new Octopus(generateRandomName(),generateRandomAge());
    }

    else if (randomAnimal instanceof Cat)
    {
        return new Cat(generateRandomName(),generateRandomAge());
    }

    else if (randomAnimal instanceof Hamster)
    {
    return new Hamster(generateRandomName(),generateRandomAge());
    }

}

/*** Global Variables ***/
let animals = [new Octopus(), new Cat(), new Hamster()];
let names = ["Tom", "Marshmallow", "Moe", "Coco", "Ophelia", "Oscar", "Bella", "Russell", "Harper", "Basil"];

/*** Document Load ****/
function onLoad () {

  // get the savedAnimal in local storage if one exists
  var animal = JSON.parse(localStorage.getItem("savedAnimal"));

  //use a boolean to keep track of whether you have saved an animal
  var hasSavedAnimal = false;

  //check if the saved animal exists in local storage
  if (animal === null)
  {
    //if there is no saved animal, the button should display the Save Animal text
    document.getElementById("button-storage").textContent = "Save Me!";

    //if there is no saved animal, we generate one
    animal = generateRandomAnimal();
  }
  else
  {
    //if there is a saved animal, the button should display Clear Animal text
    document.getElementById("button-storage").textContent = "Clear Me!";

    //change the boolean to note that this animal has been saved
    hasSavedAnimal = true;
  }

  // update the page based on the animal properties
  document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + "years old";
  document.getElementById("animal-img").setAttribute("src", animal.image);



  document.getElementById("button-storage").addEventListener("click", function() {
    //when we are clearing the animal
    if (hasSavedAnimal)
    {
      // clear the animal from the local storage
      localStorage.removeItem("savedAnimal");

      // if this button was clicked, hide button and show message to user
      document.getElementById("button-storage").style.display = "none";
      document.getElementById("button-text").textContent = "Cleared!";
      document.getElementById("button-text").style.display = "block";
    }
    //when we are saving the animal
    else
    {
      // save the animal to the local storage
      localStorage.setItem("savedAnimal", JSON.stringify(animal));

      var new_data = animal;
      if (localStorage.getItem('data') == null){
        localStorage.setItem('data','[]');
      }

      var old_data = JSON.parse(localStorage.getItem('data'));
      old_data.push(new_data);

      localStorage.setItem('data', JSON.stringify(old_data));


      // if this button was clicked, hide button and show message to user
      document.getElementById("button-storage").style.display = "none";
      document.getElementById("button-text").textContent = "Saved!";
      document.getElementById("button-text").style.display = "block";
    }
  });
};


function view(){
  if(localStorage.getItem('data') != null){
      var savedAnimal = JSON.parse(localStorage.getItem('data'));
      document.getElementById("saved1").textContent = animal.name + "  " + animal.age + "years old";
      document.getElementById("saved2").setAttribute("src", animal.image);
    }
}













