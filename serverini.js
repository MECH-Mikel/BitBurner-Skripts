/** @param {NS} ns */
export async function main(ns) {


  var targ = ns.args[0];
  ns.tprint("Serverini erhält die Anweisung: ", ns.args[0]);



  //SSH-Port und FTP-Port öffnen und Nuken von target 
  if (ns.fileExists("BruteSSH.exe", "home")) {
    ns.brutessh(targ);
    ns.tprint("BruteSSH.exe wurde auf dem Server: ", targ, " ausgeführt.");
  }

  if (ns.fileExists("FTPCrack.exe", "home")) {
    ns.ftpcrack(targ);
    ns.tprint("FTPCrack.exe wurde auf dem Server: ", targ, " ausgeführt.");
  }
  ns.nuke(targ);
  ns.tprint("Server: ", targ, " wurde genuked und ist jetzt bereit gehackt zu werden.");
}

