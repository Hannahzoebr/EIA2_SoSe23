"use strict";
var RandomPoem;
(function (RandomPoem) {
    let subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let predicates = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogarts", "die Karte des Rumtreibers", "Dementoren"]; // Variablen, die außerhalb der Funktion deklariert werden
    //console.log(subjects);
    //console.log(predicates);
    //console.log(objects);
    for (let i = subjects.length; i > 0; i--) { // Bedingung in runden Klammern, Ausführung in geschweiften Klammern
        //console.log(i); 
        let sentence = getVerse(subjects, predicates, objects);
        //console.log(sentence);
    }
    function getVerse(_subjects, _predicates, _objects) {
        let randNum = Math.floor(Math.random() * _subjects.length); // der Variable zugewiesen, dann kann man Wert ausgeben
        //console.log(_subjects[randNum]);
        let randSubject = _subjects.splice(randNum, 1); //neue Deklaration: An Array _subjects wird mithilfe von 'splice' immer ein Element gelöscht
        let randPredicate = _predicates.splice(randNum, 1); // randNum in der Klammer bedeutet, dass ein Wort an einer zufälligen Stelle weggenommen werden soll
        let randObject = _objects.splice(randNum, 1); // 1 in der Klammer bedeutet, dass nur ein Element im Array weggenommen werden soll
        let verse = randSubject + " " + randPredicate + " " + randObject + "."; // Satz wird nun aus einem random Subjekt, Prädikat und Objekt gebildet, dass sich nach jeder Aktualisierung zufällig ändert
        console.log(verse);
        return verse;
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=script.js.map