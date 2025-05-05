/** @param {NS} ns */
export async function main(ns) {

  //Hostname der Maschine
  //ns.tprint(ns.getHostname());
  //Möglicherweise verfügbares Geld (nicht sicher)
  //ns.tprint(ns.getMoneySources());
  //Zu öffnen benötigte Ports
  //ns.tprint(ns.getServerNumPortsRequired("zer0"));
  //Abfrage ob ich root Access bei n00dles habe
  //ns.tprint(ns.hasRootAccess("n00dles"));

  //ns.tprint(ns.scan("n00dles"));
  //ns.tprint(ns.hackAnalyze("n00dles"));
  //ns.tprint(ns.getHackingLevel());

  //Variable die die Anzahl der vergangenen Nodes zählt, damit diese mit den gesamtmöglichen verbindungen abgeglichen werden kann.
  //
  /*
  var nodecount = 0;
  function hackini(x, y) {

    ns.scp("hack.js", x);
    ns.exec("hack.js", x, 1, x);

    if(y!=0){
      ns.tprint(ns.scan(x));
    }

    return;
  }
  */
  /*
  Die Funktion scannt jede Node ab und liest, ob der weitere Verbundene Nodes gibt, indem die Länge des Arrays ausgelesen wird.
  Falls ja, wird die nächste verbundene Node angesteuert und der Vorgang wird wiederholt
  */
  var missingServers = [];

  function nodeTreeScan(x) {



    const node_length = ns.scan(x).length;
    const serverHackingLevel = ns.getServerRequiredHackingLevel(x);
    const playerHackingLevel = ns.getHackingLevel();

    ns.tprint("Der Server: ", x, " ist ausgewählt");


    //Wenn das Spielerlevel hoch genug ist, wird der Server gehackt
    if (playerHackingLevel >= serverHackingLevel) {
      if (ns.scan(x).length == 1) {
        ns.tprint("Der Server: ", x, " besitzt keine weitere Node.");
        ns.tprint("Kopieren und Ausführen der Skripte wird begonnen.");

      }
      else {

        for (let i = 0; i < ns.scan(x).length; ++i) {
          let next_x = ns.scan(x);
          ns.tprint("An diesem Server liegen noch: ", node_length - 1, " Nodes.");
          ns.tprint("Kopieren und Auführen der Skripte wird begonnen");
          nodeTreeScan(next_x[i]);
        }
      }
    }
    else {
      missingServers.push(x);
    }

    return;
  }


  //Hier fängt das Main-Skript an
  for (let i = 0; i < ns.scan().length; i++) {
    const target = ns.scan()[i];
    nodeTreeScan(target);


  }
  ns.tprint("Das Level der Server: ", missingServers, " liegt über dem Spielerlevel und kann daher noch nicht gehackt werden");


  /*
    for (var i = 0; i < ns.scan().length; i++) {
  
      const target = ns.scan()[i];
      ns.tprint("Ausgewähltes Ziel: ", target);
  
      if (ns.scan(target).length > 0) {
        hackini(target, nodecount);
      }
      else {
        ns.tprint(ns.scan(target));
      }
    }
  */
}