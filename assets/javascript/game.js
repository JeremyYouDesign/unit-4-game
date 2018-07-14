var characterSelected = false;
var defenderSelected = false;
var character = [];
var defender = [];
var enemiesDefeated =  0;

var batman = {name: "Batman", image: "assets/Images/batman.png", healthValue: 1750, baseAtk: 90, attack: 90, maxDamage: 630, counterValue: 60};
var superman = {name: "Superman", image: "assets/Images/superman.png", healthValue: 1400, baseAtk: 120, attack: 120, maxDamage: 720, counterValue: 35};
var wonderWoman = {name: "Wonder Woman", image: "assets/Images/wonderWoman.png", healthValue: 1250, baseAtk: 150, attack: 150, maxDamage: 750, counterValue: 40};
var aquaman = {name: "Aquaman", image: "assets/Images/aquaman.png", healthValue: 1350, baseAtk: 130, attack: 130,maxDamage: 650, counterValue: 30};
var joker = {name: "The Joker", image: "assets/Images/theJoker.png", healthValue: 1300,  attack: Math.floor(Math.random() * 301) + 100, baseAtk: Math.floor(Math.random() * 201), maxDamage: 1000, counterValue: Math.floor(Math.random() * 201) + 100};
var catwoman = {name: "Catwoman", image: "assets/Images/catwoman.png", healthValue: 1200, baseAtk: 100,  attack: 100, maxDamage: 900, counterValue: 40};
var poisonIvy = {name: "Poison Ivy", image: "assets/Images/poisonIvy.png", healthValue: 1275, baseAtk: 110,  attack: 110, maxDamage: 660, counterValue: 50};
var darkseid = {name: "Darkseid", image: "assets/Images/darkseid.png", healthValue: 1500, baseAtk: 80,  attack: 80,maxDamage: 640, counterValue: 45};
var ironman = {name: "Iron Man", image: "assets/Images/ironman.png", healthValue: 1650, baseAtk: 80,  attack: 80,maxDamage: 560, counterValue: 35};
var captainAmerica = {name: "Captain America", image: "assets/Images/captainAmerica.png", healthValue: 1800, baseAtk: 75,  attack: 75, maxDamage: 600, counterValue: 30};
var thor = {name: "Thor", image: "assets/Images/thor.png", healthValue: 1450, baseAtk: 125,  attack: 125,maxDamage: 750, counterValue: 55};
var hulk = {name: "The Hulk", image: "assets/Images/theHulk.png", healthValue: 2000, baseAtk: 50,  attack: 50, maxDamage: 600, counterValue: 15};
var thanos = {name: "Thanos", image: "assets/Images/thanos.png", healthValue: 1900, baseAtk: 65,  attack: 65, maxDamage: 585, counterValue: 50};
var ultron = {name: "Ultron", image: "assets/Images/ultron.png", healthValue: 1150, baseAtk: 200,  attack: 200, maxDamage: 800, counterValue: 75};
var hela = {name: "Hela", image: "assets/Images/hela2.png", healthValue: 1100, baseAtk: 150,  attack: 150, maxDamage: 1050, counterValue: 60};
var venom = {name: "Venom", image: "assets/Images/venom.png", healthValue: 1600, baseAtk: 70,  attack: 70, maxDamage: 540, counterValue: 35};


var gameOver = false;
var victory = false;

//var displayValues = function() {
  //  var displayHealth = [];
  //  var displayName = "";
   // var displayAtk = [];

   // for (var i = 0; i < characterRoster.length; i++) {
   //     displayHealth = characterRoster[i].healthValue
   //     $(".playerHealth" + i).text("HP: " + displayHealth)
   //     displayName = characterRoster[i].name
   //     $(".playerName" + i).text(displayName)
   //     displayAtk = characterRoster[i].baseAtk
   //     $(".playerAtk" + i).text("Attack: " + displayAtk)
  //  }
//};

//displayValues();

var initializeCharacter = function(chosenCharacter) {
    character.name = chosenCharacter.name;
    character.healthValue = chosenCharacter.healthValue;
    character.baseAtk = chosenCharacter.baseAtk;
    character.attack = chosenCharacter.attack;
    character.maxDamage = chosenCharacter.maxDamage;
    $("#mainContents").show();
};

var initializeDefender = function(chosenDefender) {
    defender.name = chosenDefender.name;
    defender.healthValue = chosenDefender.healthValue;
    defender.counterValue = chosenDefender.counterValue;
};

var moveToStandby = function() {
    $(".availableCharacter").removeClass("availableCharacter").addClass("enemyCharacter")
    $("#standbyCharacter").append($(".enemyCharacter"));
};

var resetGame = function() {
    $(".card").removeClass("enemyCharacter chosenCharacter chosenDefender defeatedCharacter").addClass("availableCharacter")
    var available = $(".availableCharacter").show();
    $("#characterRoster").html(available);

    characterSelected = false;
    defenderSelected = false;
    enemiesDefeated = 0;
    isDefeat = false;

    character = [];
    defender = [];
};

//var charNum = [];

//var getNumber = function() {
  //  var charInfo = $(".availableCharacter").attr("class").split("_");
    //charNum = charInfo[1];
//};

$(document).ready(function() {

    $("#restart").hide();
    $("#mainContents").hide();

    $("#batman").on("click", function() {
        console.log("Batman was selected")

        if (characterSelected == false) {
            
            initializeCharacter(batman);
            characterSelected = true;

            $("#batman").removeClass("availableCharacter").addClass("chosenCharacter");
            $("#playerCharacter").append(this);

            moveToStandby();
        } else if ((characterSelected == true) && (defenderSelected == false)) {
            
            if ($("#batman").hasClass("enemyCharacter")) {

                initializeDefender(batman);
                defenderSelected = true;

                $("#batman").removeClass("enemyCharacter").addClass("defenderCharacter");
                $("#enemyCharacter").append(this);
            }
        }
    });    
    
    $("#superman").on("click", function() {
        console.log("Superman was selected")

        if (characterSelected == false) {
            
            initializeCharacter(superman)
            characterSelected = true;

            $("#superman").removeClass("availableCharacter").addClass("chosenCharacter");
            $("#playerCharacter").append(this);

            moveToStandby();
        } else if ((characterSelected == true) && (defenderSelected == false)) {
            
            if ($("#superman").hasClass("enemyCharacter")) {

                initializeDefender(superman);
                defenderSelected = true;

                $("#superman").removeClass("enemyCharacter").addClass("defenderCharacter");
                $("#enemyCharacter").append(this);
            }
        }
    });

    $("#wonderWoman").on("click", function() {
        console.log("Wonder Woman was selected")

        if (characterSelected == false) {
            
            initializeCharacter(wonderWoman)
            characterSelected = true;

            $("#wonderWoman").removeClass("availableCharacter").addClass("chosenCharacter");
            $("#playerCharacter").append(this);

            moveToStandby();
        } else if ((characterSelected == true) && (defenderSelected == false)) {
            
            if ($("#wonderWoman").hasClass("enemyCharacter")) {

                initializeDefender(wonderWoman);
                defenderSelected = true;

                $("#wonderWoman").removeClass("enemyCharacter").addClass("defenderCharacter");
                $("#enemyCharacter").append(this);
            }
        }
    });

    $("#aquaman").on("click", function() {
        console.log("Aquaman was selected")

        if (characterSelected == false) {
            
            initializeCharacter(aquaman)
            characterSelected = true;

            $("#aquaman").removeClass("availableCharacter").addClass("chosenCharacter");
            $("#playerCharacter").append(this);

            moveToStandby();
        } else if ((characterSelected == true) && (defenderSelected == false)) {
            
            if ($("#aquaman").hasClass("enemyCharacter")) {

                initializeDefender(aquaman);
                defenderSelected = true;

                $("#aquaman").removeClass("enemyCharacter").addClass("defenderCharacter");
                $("#enemyCharacter").append(this);
            }
        }
    });

    $("#theJoker").on("click", function() {
        console.log("Joke's on you!")

        if (characterSelected == false) {
            
            initializeCharacter(joker)
            characterSelected = true;

            $("#theJoker").removeClass("availableCharacter").addClass("chosenCharacter");
            $("#playerCharacter").append(this);

            moveToStandby();
        } else if ((characterSelected == true) && (defenderSelected == false)) {
            
            if ($("#theJoker").hasClass("enemyCharacter")) {

                initializeDefender(joker);
                defenderSelected = true;

                $("#theJoker").removeClass("enemyCharacter").addClass("defenderCharacter");
                $("#enemyCharacter").append(this);
            }
        }
    });

    $("#catwoman").on("click", function() {
        console.log("Catwoman was selected")

        if (characterSelected == false) {
            
            initializeCharacter(catwoman)
            characterSelected = true;

            $("#catwoman").removeClass("availableCharacter").addClass("chosenCharacter");
            $("#playerCharacter").append(this);

            moveToStandby();
        } else if ((characterSelected == true) && (defenderSelected == false)) {
            
            if ($("#catwoman").hasClass("enemyCharacter")) {

                initializeDefender(catwoman);
                defenderSelected = true;

                $("#catwoman").removeClass("enemyCharacter").addClass("defenderCharacter");
                $("#enemyCharacter").append(this);
            }
        }
    });

    $("#poisonIvy").on("click", function() {
        console.log("Poison Ivy was selected")

        if (characterSelected == false) {
            
            initializeCharacter(poisonIvy)
            characterSelected = true;

            $("#poisonIvy").removeClass("availableCharacter").addClass("chosenCharacter");
            $("#playerCharacter").append(this);

            moveToStandby();
        } else if ((characterSelected == true) && (defenderSelected == false)) {
            
            if ($("#poisonIvy").hasClass("enemyCharacter")) {

                initializeDefender(poisonIvy);
                defenderSelected = true;

                $("#poisonIvy").removeClass("enemyCharacter").addClass("defenderCharacter");
                $("#enemyCharacter").append(this);
            }
        }
    });

    $("#darkseid").on("click", function() {
        console.log("The anti-life equation will be mine!")

        if (characterSelected == false) {
            
            initializeCharacter(darkseid)
            characterSelected = true;

            $("#darkseid").removeClass("availableCharacter").addClass("chosenCharacter");
            $("#playerCharacter").append(this);

            moveToStandby();
        } else if ((characterSelected == true) && (defenderSelected == false)) {
            
            if ($("#darkseid").hasClass("enemyCharacter")) {

                initializeDefender(darkseid);
                defenderSelected = true;

                $("#darkseid").removeClass("enemyCharacter").addClass("defenderCharacter");
                $("#enemyCharacter").append(this);
            }
        }
    });

    $("#ironman").on("click", function() {
        console.log("Ironman was selected")

        if (characterSelected == false) {
            
            initializeCharacter(ironman)
            characterSelected = true;

            $("#ironman").removeClass("availableCharacter").addClass("chosenCharacter");
            $("#playerCharacter").append(this);

            moveToStandby();
        } else if ((characterSelected == true) && (defenderSelected == false)) {
            
            if ($("#ironman").hasClass("enemyCharacter")) {

                initializeDefender(ironman);
                defenderSelected = true;

                $("#ironman").removeClass("enemyCharacter").addClass("defenderCharacter");
                $("#enemyCharacter").append(this);
            }
        }
    });

    $("#captainAmerica").on("click", function() {
        console.log("Captain America was selected")

        if (characterSelected == false) {
            
            initializeCharacter(captainAmerica)
            characterSelected = true;

            $("#captainAmerica").removeClass("availableCharacter").addClass("chosenCharacter");
            $("#playerCharacter").append(this);

            moveToStandby();
        } else if ((characterSelected == true) && (defenderSelected == false)) {
            
            if ($("#captainAmerica").hasClass("enemyCharacter")) {

                initializeDefender(captainAmerica);
                defenderSelected = true;

                $("#captainAmerica").removeClass("enemyCharacter").addClass("defenderCharacter");
                $("#enemyCharacter").append(this);
            }
        }
    });

    $("#thor").on("click", function() {
        console.log("Thor was selected")

        if (characterSelected == false) {
            
            initializeCharacter(thor)
            characterSelected = true;

            $("#thor").removeClass("availableCharacter").addClass("chosenCharacter");
            $("#playerCharacter").append(this);

            moveToStandby();
        } else if ((characterSelected == true) && (defenderSelected == false)) {
            
            if ($("#thor").hasClass("enemyCharacter")) {

                initializeDefender(thor);
                defenderSelected = true;

                $("#thor").removeClass("enemyCharacter").addClass("defenderCharacter");
                $("#enemyCharacter").append(this);
            }
        }
    });

    $("#theHulk").on("click", function() {
        console.log("HULK SMASH")

        if (characterSelected == false) {
            
            initializeCharacter(hulk)
            characterSelected = true;

            $("#theHulk").removeClass("availableCharacter").addClass("chosenCharacter");
            $("#playerCharacter").append(this);

            moveToStandby();
        } else if ((characterSelected == true) && (defenderSelected == false)) {
            
            if ($("#theHulk").hasClass("enemyCharacter")) {

                initializeDefender(hulk);
                defenderSelected = true;

                $("#theHulk").removeClass("enemyCharacter").addClass("defenderCharacter");
                $("#enemyCharacter").append(this);
            }
        }
    });

    $("#thanos").on("click", function() {
        console.log("Thanos was selected")

        if (characterSelected == false) {
            
            initializeCharacter(thanos)
            characterSelected = true;

            $("#thanos").removeClass("availableCharacter").addClass("chosenCharacter");
            $("#playerCharacter").append(this);

            moveToStandby();
        } else if ((characterSelected == true) && (defenderSelected == false)) {
            
            if ($("#thanos").hasClass("enemyCharacter")) {

                initializeDefender(thanos);
                defenderSelected = true;

                $("#thanos").removeClass("enemyCharacter").addClass("defenderCharacter");
                $("#enemyCharacter").append(this);
            }
        }
    });

    $("#ultron").on("click", function() {
        console.log("Ultron was selected")

        if (characterSelected == false) {
            
            initializeCharacter(ultron)
            characterSelected = true;

            $("#ultron").removeClass("availableCharacter").addClass("chosenCharacter");
            $("#playerCharacter").append(this);

            moveToStandby();
        } else if ((characterSelected == true) && (defenderSelected == false)) {
            
            if ($("#ultron").hasClass("enemyCharacter")) {

                initializeDefender(ultron);
                defenderSelected = true;

                $("#ultron").removeClass("enemyCharacter").addClass("defenderCharacter");
                $("#enemyCharacter").append(this);
            }
        }
    });

    $("#hela").on("click", function() {
        console.log("Hela was selected")

        if (characterSelected == false) {
            
            initializeCharacter(hela)
            characterSelected = true;

            $("#hela").removeClass("availableCharacter").addClass("chosenCharacter");
            $("#playerCharacter").append(this);

            moveToStandby();
        } else if ((characterSelected == true) && (defenderSelected == false)) {
            
            if ($("#hela").hasClass("enemyCharacter")) {

                initializeDefender(hela);
                defenderSelected = true;

                $("#hela").removeClass("enemyCharacter").addClass("defenderCharacter");
                $("#enemyCharacter").append(this);
            }
        }
    });

    $("#venom").on("click", function() {
        console.log("Venom was selected")

        if (characterSelected == false) {
            
            initializeCharacter(venom)
            characterSelected = true;

            $("#venom").removeClass("availableCharacter").addClass("chosenCharacter");
            $("#playerCharacter").append(this);

            moveToStandby();
        } else if ((characterSelected == true) && (defenderSelected == false)) {
            
            if ($("#venom").hasClass("enemyCharacter")) {

                initializeDefender(venom);
                defenderSelected = true;

                $("#venom").removeClass("enemyCharacter").addClass("defenderCharacter");
                $("#enemyCharacter").append(this);
            }
        }
    });

    $("#attackButton").on("click", function() {
        if (characterSelected && defenderSelected && !gameOver) {

            defender.healthValue = defender.healthValue - character.attack;

            $(".defenderCharacter").find(".health").html("HP: " + defender.healthValue);
            $("#statusUpdate").html("<h3>You dealt " + character.attack + " damage to " + defender.name + "</h3>");

            if (character.attack < character.maxDamage) {
                character.attack = character.attack + character.baseAtk;            
            }

            if (defender.healthValue > 0) {
                character.healthValue = character.healthValue - defender.counterValue;
                $(".chosenCharacter").find(".health").html("HP: " + character.healthValue);
            
                if (character.healthValue > 0) {
                    $("#statusUpdate").append("<h3>" + defender.name + " dealt " + defender.counterValue + " damage to you.</h3>");
                    } else {
                        gameOver = true;
                        $("#statusUpdate").html("<h3>You were defeated!!!</h3>")
                        $("#restart").show();
                    }

                } else {
                    enemiesDefeated +=1;
                    defenderSelected = false;
                    $("#statusUpdate").html("<h3>You have defeated " + defender.name +". Select your next opponent.</h3>")
                    $(".defenderCharacter").removeClass("chosenDefender defenderCharacter").addClass("defeatedCharacter")
                    $(".defeatedCharacter").find(".health").html("HP: 0");
                    $("#defeatedCharacters").append($(".defeatedCharacter"));

                    if (enemiesDefeated === 15) {
                        gameOver = true;
                        $("#statusUpdate").html("<h1>YOU WIN!!!</h1>");
                        $("#restart").show();
                    }
                }

            } else if (!characterSelected && !gameOver) {
                $("#statusUpdate").html("<h3>Choose a character</h3>");
            } else if (!defenderSelected && !gameOver) {
                $("#statusUpdate").html("<h3>Select an opponent</h3>");
        }
    });

    $("#restart").on("click", function() {
        resetGame();
    });
});

//console.log(joker.baseAtk);
//displayValues();
//moveToStandby();


//alert("Select a character to begin!")