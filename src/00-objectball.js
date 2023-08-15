function gameObject() {
    return {
        "home": {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: "0",
                    shoe: "16",
                    points: "22",
                    rebounds: "12",
                    assists: "12",
                    steals: "3",
                    blocks: "1",
                    slamDunks: "1"
                },
                "Reggie Evans": {
                    number: "30",
                    shoe: "14",
                    points: "12",
                    rebounds: "12",
                    assists: "12",
                    steals: "12",
                    blocks: "12",
                    slamDunks: "7"
                },
                "Brook Lopez": {
                    number: "11",
                    shoe: "17",
                    points: "17",
                    rebounds: "19",
                    assists: "10",
                    steals: "3",
                    blocks: "1",
                    slamDunks: "15"
                },
                "Mason Plumlee": {
                    number: "1",
                    shoe: "19",
                    points: "26",
                    rebounds: "12",
                    assists: "6",
                    steals: "3",
                    blocks: "8",
                    slamDunks: "5"
                },
                "Jason Terry": {
                    number: "31",
                    shoe: "15",
                    points: "19",
                    rebounds: "2",
                    assists: "2",
                    steals: "4",
                    blocks: "11",
                    slamDunks: "1"
                }
            }
        },
        "away": {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: "4",
                    shoe: "18",
                    points: "10",
                    rebounds: "1",
                    assists: "1",
                    steals: "2",
                    blocks: "7",
                    slamDunks: "2"
                },
                "Bismak Biyombo": {
                    number: "0",
                    shoe: "16",
                    points: "12",
                    rebounds: "4",
                    assists: "7",
                    steals: "7",
                    blocks: "15",
                    slamDunks: "10"
                },
                "DeSagna Diop": {
                    number: "2",
                    shoe: "14",
                    points: "24",
                    rebounds: "12",
                    assists: "12",
                    steals: "4",
                    blocks: "5",
                    slamDunks: "5"
                },
                "Ben Gordon": {
                    number: "8",
                    shoe: "15",
                    points: "33",
                    rebounds: "3",
                    assists: "2",
                    steals: "1",
                    blocks: "1",
                    slamDunks: "0"
                },
                "Brendan Haywood": {
                    number: "33",
                    shoe: "15",
                    points: "6",
                    rebounds: "12",
                    assists: "112",
                    steals: "22",
                    blocks: "5",
                    slamDunks: "12"
                }
            }
        }
    }
}

function numPointsScored(playersName){
    const gameScore = gameObject();
    for (let key in gameScore) {
        for (let player in gameScore[key].players)
            if (player == playersName) {
                return gameScore[key].players[player].points
            }
    }
}

function shoeSize(playerName){
    const gameObj = gameObject();
    for (let key in gameObj) {
        for (let player in gameObj[key].players) {
            if (player == playerName) {
                return gameObj[key].players[player].shoe
            }
        }
    }
}

function teamColors(teamName){
    const gameObj = gameObject();
    for (let key in gameObj) {
        console.log(gameObj[key].teamName);
        const team = gameObj[key].teamName;
            if (team == teamName) {
                return gameObj[key].colors
            }
        }   
    }

function teamName(){
    const teamNameArray = [];
    for (let key in gameObject()) {
        teamNameArray.push(gameObject()[key].teamName);
    }
    return teamNameArray;
}

function playerNumbers(teamName){
    const numbersArray = [];
    const gameObj = gameObject();
    for (let key in gameObj) {
        if (teamName === gameObj[key].teamName){
            for (let player in gameObj[key].players){
                console.log(gameObj[key]["players"][player].number)
                numbersArray.push(gameObj[key]["players"][player].number);
            }
        }
    }
    return numbersArray;
}

function playerStats(playerWeAreLookingFor) {
    const gameObj = gameObject();
    for  (let key in gameObj) {
        // debugger;
        for (let player in gameObj[key].players){
        // debugger;
        if (player === playerWeAreLookingFor) {
        // debugger;
            return gameObj[key].players[player]
        }
        }
    }
    return statsObject;
}

// console.log(playerStats("Mason Plumlee"))

function bigShoeRebounds() {
    const gameObj = gameObject();
    let biggestShoe = 0;
    let biggestRebound = -1;

    for (let key in gameObj) {
        for (let player in gameObj[key].players) {
            if (parseInt(gameObj[key].players[player].shoe) > biggestShoe) {
                biggestShoe = parseInt(gameObj[key].players[player].shoe);
                biggestRebound = parseInt(gameObj[key].players[player].rebounds);
            }
        }
    }
    console.log("Largest Shoe Size:", biggestShoe, "Most Rebounds:", biggestRebound);
}

bigShoeRebounds();