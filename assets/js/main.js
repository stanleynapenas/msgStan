

 // Questo permette di cambiare il colore dell'input quando scrivo
 $(".msgTypeText").click(function (){
    $(this).css("color" , "#333333");
})

// Al click di invio messaggio ".msgSendBtn"
$(".msgSendBtn").click(sendMsg);
// Quando premono Invio, invia messaggio
$(window).on({
    keyup: function (e) {
        if (e.keyCode == "13"){
            sendMsg()
        }
    }
})



// Funzione che mi manda un messaggio
function sendMsg (){
    var d = new Date;
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    console.log(h + ":" + m);

    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    // Salviamo il valore dell'input / testo
    var msg = $(".msgTypeText").val();
    console.log(msg);

    // Clono il mio template / div da riutilizzare
    var elementmsg = $("#template .msgSent").clone();

    // Modifica questa copia di "msgSent" aggiungendogli il testo del messaggio al paragrafo
    elementmsg.find(".msgSentText").text(msg);
    elementmsg.find(".msgTime").text(h + ":" + m);
    console.log(h + ":" + m);

    // Appendiamo una copa con testo valorizzato del div "msgSent"
    $(".msgWindowOutput").prepend(elementmsg);

    // ripuliamo il contenuto dell'input
    $(".msgTypeText").val("");

    setTimeout(sendMsgRobot, 1500);
}

// Funzione che il robot manda messaggio
function sendMsgRobot (){
    var d = new Date;
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    console.log(h + ":" + m);

    function addZero(f) {
        if (f < 10) {
            f = "0" + f;
        }
        return f;
    }

    // Salviamo il valore dell'input / testo
    robotmsg = "Ciao Stan";
    console.log(robotmsg);

    // Clono il mio template / div da riutilizzare
    var elementmsgRobot = $("#template .msgRobot").clone();

    // Modifica questa copia di "msgSent" aggiungendogli il testo del messaggio al paragrafo
    elementmsgRobot.find(".msgSentText.robotText").text(robotmsg);
    elementmsgRobot.find(".msgTimeRobot").text(h + ":" + m);
    console.log(h + ":" + m);

    // Appendiamo una copa con testo valorizzato del div "msgSent"
    $(".msgWindowOutput").prepend(elementmsgRobot);

}

function search() {
    // Declare variables
    var input, filter, contactContainer, contact, name, j, txtValue;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    contactContainer = document.getElementsByClassName('contactContainer');
    contact = document.getElementsByClassName('contact');
  
    // Loop through all list items, and hide those who don't match the search query
    for (j = 0; j < contact.length; j++) {
      name = contact[j].getElementsByClassName('name')[0];
      txtValue = name.textContent || name.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        contact[j].style.display = "";
      } else {
        contact[j].style.display = "none";
      }
    }
  }


function contattiGen (pic, name, text, time){
    this.pic = '<img class="profilePic" src="/assets/img/' + pic + '" alt=""></img>';
    this.name = '<h3 class="name">' + name + '</h3>';
    this.text = '<p class="lastMsg">' + text + '</p>';
    this.time = '<p class="contactTime">' + time + '</p>';
}

var stanley = new contattiGen("stan.JPG", "Stanley Napenas", "prova", "11:30");
console.log(stanley);

$("#prova").append(stanley);

// Array di oggetti 
// Questi oggetti contengono nome, testo, foto, tempo
// For each > Append