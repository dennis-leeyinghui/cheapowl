var adList = [
    "Atlantic Canadians capture spring in their communities - CBC",

    "Island Abbey Foods: Sales Analyst",

    "Increase in N.L. visitors to Tourism P.E.I. website little 'glimmers of hope' for future travel",
]

var marqueeContent = document.getElementById("marquee-Content");

var shuffledList = shuffle(adList);

//  generate random marquee position
function shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}

function generateMarqueeContent() {

    var newAdList = ""
    var emoji = "<img src='cheapowl-small-emoji.png' width='50px'></img>"

    // add <span> tags to newAdList
    for (var i = 0; i < shuffledList.length; i++) {
        newAdList += "<span>" + "&nbsp;" + emoji + "&nbsp;" + shuffledList[i] + "&nbsp;" + "</span>"
    }

    marqueeContent.innerHTML = newAdList
    console.log ("Successfully added to newAdList!!!");

}

generateMarqueeContent();