document.getElementById("whatsappForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let nama    = document.getElementById("nama").value;
    let telepon = document.getElementById("telepon").value;
    let rute 	= document.getElementById("rute").value;
    let jumlah = document.getElementById("jumlah").value;
    let mobil = document.getElementById("mobil").value;
    let contact = document.getElementById("cp").value;
    let tgl = document.getElementById("tgl").value;

    let encodedMessage = encodeURIComponent(
        "Halo Traversa saya dengan	 \n" +
        "Nama 	                : " + nama + "\n" +
        "Ingin memesan mobil    : " + mobil + "\n" +
        "Dengan jumlah orang    : " + jumlah +"\n" +
        "Tanggal keberangkatan  : " + tgl +"\n" +
        "Rute   : "+rute
    );


    let link;

      // Check if user is on a mobile device
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        link = `whatsapp://send?phone=${contact}&text=${encodedMessage}`;
    } else { // Desktop device
        link = `https://api.whatsapp.com/send?phone=${contact}&text=${encodedMessage}`;
    }


    window.open(link, '_blank');
});