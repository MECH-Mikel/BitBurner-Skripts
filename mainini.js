/** @param {NS} ns */
export async function main(ns) {
  
  //Alle Nodes mit 0 benötigten Portöffnungen
  const target0 = ["n00dles", "foodnstuff", "sigma-cosmetics", "joesguns", "hong-fang-tea", "harakiri-sushi", "nectar-net"];

  //Alle Nodes mit 0 benötigten Portöffnungen
  const target1 = ["CSEC", "max-hardware", "zer0", "iron-gym"];

  //Alle Nodes mit 0 benötigten Portöffnungen
  const target2 = ["phantasy", "silver-helix", "omega-net"];

  const target = [target0, target1, target2];

  //Kopieren und Ausführen von serverini.js
  //Öffnet Ports und Nuked die Server

  for (let i = 0; i < target.length; i++) {
    for (let j = 0; j < target[i].length; j++) {
      ns.tprint("I ist: ", i, ", J ist: ", j);

      switch (i) {
        //Die ersten Nodes werden angegriffen
        case 0:
          ns.tprint("Der Inhalt von Array target0 Platz ", j, " ist: ", target0[j]);
          ns.tprint("Das an serverini.js übergebene Argument lautet: ", target0[j]);
          ns.scp("serverini.js", target0[j]);

          //Terminalnachricht, dass das Skript serverini.js auf einen Server übertragen wurde
          if (j < target[i].length - 1) {
            ns.tprint("Skript: serverini.js wurde auf den Server: ", target0[j], " übertragen.");
          }

          else {
            ns.tprint("Das letzte (", j, ".) Script von target0 wurde auf den Server: ", target0[j], " übertragen");
          }

          ns.exec("serverini.js", target0[j], 1, target0[j]);
          ns.tprint("Das Skript serverini.js wird jetzt auf dem Server: ", target0[j], " und wird mit dem Argument: ", target0[j], " ausgeführt.");
          break;

        //Die zweiten Nodes werden angegriffen
        case 1:
          ns.tprint("Der Inhalt von Array target1 Platz ", j, " ist: ", target1[j]);
          ns.tprint("Das an serverini.js übergebene Argument lautet: ", target1[j]);
          ns.scp("serverini.js", target1[j]);

          //Terminalnachricht, dass das Skript serverini.js auf einen Server übertragen wurde
          if (j < target[i].length - 1) {
            ns.tprint("Skript: serverini.js wurde auf den Server: ", target1[j], " übertragen.");
          }

          else {
            ns.tprint("Das letzte (", j, ".) Script von target0 wurde auf den Server: ", target1[j], " übertragen");
          }

          ns.exec("serverini.js", target1[j], 1, target1[j]);
          ns.tprint("Das Skript serverini.js wird jetzt auf dem Server: ", target1[j], " und wird mit dem Argument: ", target1[j], " ausgeführt.");
          break;

        //Die dritten Nodes werden angegriffen
        case 2:
          ns.tprint("Der Inhalt von Array target2 Platz ", j, " ist: ", target2[j]);
          ns.tprint("Das an serverini.js übergebene Argument lautet: ", target2[j]);
          ns.scp("serverini.js", target2[j]);

          //Terminalnachricht, dass das Skript serverini.js auf einen Server übertragen wurde
          if (j < target[i].length - 1) {
            ns.tprint("Skript: serverini.js wurde auf den Server: ", target2[j], " übertragen.");
          }

          else {
            ns.tprint("Das letzte (", j, ".) Script von target0 wurde auf den Server: ", target2[j], " übertragen");
          }

          ns.exec("serverini.js", target2[j], 1, target2[j]);
          ns.tprint("Das Skript serverini.js wird jetzt auf dem Server: ", target2[j], " und wird mit dem Argument: ", target2[j], " ausgeführt.");
          break;
      }
    }
  }
}