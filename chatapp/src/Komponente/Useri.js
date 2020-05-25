export function randomName() {
    const ime = [
      "Pero", "Mate", "Marin", "Dado", "Slavko", "Ivan", "Matea", "Antonija",
      "Jasmina", "Lana", "Benjamin", "Roko", "Dragan", "Darjan", "Mihael", "Mladen",
      "Dubravka", "Joško", "Aneta", "Petar", "Lucija", "Vesna", "Fabijan"
    ];
    const prezime = [
      "Perić", "Marić", "Leontenko", "Matić", "Kavšek", "Grubić", "Veselski", "Brkić",
      "Obradović", "Kuridža", "Cindrić", "Mrša", "Jurković", "Kolarek", "Markešić", "Lubina",
      "Babić", "Horvat", "Župan", "Divjak", "Jakšić", "Miloloža", "Muslić", "Delać",
    ];
    const imee = ime[Math.floor(Math.random() * ime.length)];
    const prezimee = prezime[Math.floor(Math.random() * prezime.length)];
    return imee + ' ' + prezimee;
  }
  
  export function randomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";
  }