"use strict";

/* Die Satzbau-Maschine | Arrays */

/**
 *   THEORIE
 * 
 */

/*** 02. Theorie: Array */




/**
 *   PRAXIS
 * 
 */


/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
// output(getSentence("Ich","bin","Max","Mütze"));
// output(getSentence("Ich","bin","die","coole","Maxine","Mützerich"));
output(getSentence(["Ich","bin","Max","Mütze", "cool"]));

// function getSentence(word1,word2,word3,word4,word5,word6) {
//     const GAP = " ";
//     const PUNCT = ".";
//     let str =   word1 + GAP +
//                 word2 + GAP +
//                 word3 + GAP +
//                 word4 + GAP +
//                 word5 + GAP +
//                 word6 +
//                 PUNCT;
//     return str;
// }

function getSentence(ary) {
    const GAP = " ";
    const PUNCT = ".";
    let outputStr = "";
    for (let i = 0; i < ary.length; i++) {
        outputStr += ary[i] + GAP;
    }
    outputStr = outputStr.trim() + PUNCT;
    return outputStr
}




// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}
