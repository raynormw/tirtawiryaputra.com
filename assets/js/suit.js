// Simple JavaScript Game
// Tirta Wirya Putra - Hacktiv8 bootcamp phase0 week2 weekly project
var pilihan = ["batu", "gunting", "kertas"];

function permainan() {
  // Pilihan Komputer
  this.komputerInput = function() {
    this.pilihanKomputer = Math.random();
    if(this.pilihanKomputer < 0.34) {
      return (this.pilihanKomputer = pilihan[0]);
    }
    else if(this.pilihanKomputer <= 0.67) {
      return (this.pilihanKomputer = pilihan[1]);
    }
    else {
      return (this.pilihanKomputer = pilihan[2]);
    } 
  };

  // Siapa yang menang?
  this.bandingkan = function(pilihan1, pilihan2) {
    if(pilihan1 === pilihan2) {
      return "Uh Oh, hasilnya seri.";
    }
    else if(pilihan1 === "batu") {
      if(pilihan2 === "kertas") {
        return "yah.. kamu kalah..";
      }
      else {
        return "Hore, kamu menang!!";
      }
    }
    else if(pilihan1 === "kertas") {
      if(pilihan2 === "gunting") {
        return "yah.. kamu kalah..";    
      }
      else {
        return "Hore, kamu menang!!";
      }
    }
    else if(pilihan1 === "gunting") {
      if(pilihan2 === "batu") {
        return "yah.. kamu kalah..";
      }
      else {
        return "Hore, kamu menang!!";   
      }
    }
  };
}

function pilihGambar(gambar) {
  if(gambar == "batu"){
    return "<img src='../assets/images/batu-resize.png' />";
  }
  else if(gambar == "gunting"){
    return "<img src='../assets/images/gunting-resize.png' />";
  }
  else {
    return "<img src='../assets/images/kertas-resize.png' />";
  }
}

var mulai = new permainan();
var pilihanPemain = "";
var pilihanKomputer = "";
var hasil = "";
var buttons = document.getElementsByClassName("button");
var pemainMemilih = document.getElementById("pemain");
var komputerMemilih = document.getElementById("komputer");
var tampilkanHasil = document.getElementById("hasil");

/* jshint loopfunc:true */
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
  pilihanPemain = this.id;
  if(pilihanPemain == 1) {
    pilihanPemain = pilihan[0];
  }
  else if(pilihanPemain == 2) {
    pilihanPemain = pilihan[1];
  }
  else {
    pilihanPemain = pilihan[2];
  }
  var gambarTampil = pilihGambar(pilihanPemain);
  pemainMemilih.innerHTML = "Kamu memilih " + pilihanPemain + " " + gambarTampil;
  pilihanKomputer = mulai.komputerInput();
  var gambarTampil = pilihGambar(pilihanKomputer);
  komputerMemilih.innerHTML = "Komputer memilih " + pilihanKomputer + " " + gambarTampil;
  hasil = mulai.bandingkan(pilihanPemain, pilihanKomputer);
  tampilkanHasil.innerHTML = hasil;
  }, false);
}