

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


// -- FUNZIONI --

// Funzione che mi manda un messaggio
function sendMsg (){

    // Salvo Data-Ref di questo bottone (Che servirà per collegare gli altri elementi)
    var dataRefContact = $(this).attr("data-ref");
    console.log("Questo è dataRefContact: ", dataRefContact);
    

    var parent = this;

    // Mi salva l'ora
    var d = new Date;
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());

    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }


    


    // Salviamo il valore dell'input / testo
    var msg = $(".msgTypeText[data-ref=" + dataRefContact +"]").val();
    console.log(msg);

    // Clono il mio template / div da riutilizzare
    var elementmsg = $("#template .msgSent").clone();

    // Modifica questa copia di "msgSent" aggiungendogli il testo del messaggio al paragrafo
    elementmsg.find(".msgSentText").text(msg);
    elementmsg.find(".msgTime").text(h + ":" + m);

    // Appendiamo una copa con testo valorizzato del div "msgSent"
    $(".msgWindowOutput[data-ref=" + dataRefContact +"]").prepend(elementmsg);

    // ripuliamo il contenuto dell'input
    $(".msgTypeText[data-ref=" + dataRefContact +"]").val("");

    setTimeout(sendMsgRobot, 1500);
    function sendMsgRobot (){
    
        // Salvo Data-Ref di questo bottone (Che servirà per collegare gli altri elementi)
        var dataRefContactRobot = $(parent).attr("data-ref");
        console.log("Questo è dataRefContactRobot: ", dataRefContactRobot);
    
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
        $(".msgWindowOutput[data-ref=" + dataRefContactRobot +"]").prepend(elementmsgRobot);
    
    }
}

// Funzione che il robot manda messaggio

// Funzione di ricerca
function search() {
    // Declare variables
    var input, filter, contactContainer, contact, name, j, txtValue;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    contactContainer = document.getElementsByClassName('contactContainer'); // Macro contenitore che conterrà i risultati
    contact = document.getElementsByClassName('contact'); // Contenitore che contiene tutti i dati del contatto (foto, nome, testo, tempo)
  
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


// function contattiGen (pic, name, text, time){
//     this.pic = '<img class="profilePic" src="/assets/img/' + pic + '" alt=""></img>';
//     this.name = '<h3 class="name">' + name + '</h3>';
//     this.text = '<p class="lastMsg">' + text + '</p>';
//     this.time = '<p class="contactTime">' + time + '</p>';
// }

// var stanley = new contattiGen("stan.JPG", "Stanley Napenas", "prova", "11:30");
// console.log(stanley);

// $("#prova").append(stanley);

// Array di oggetti 
// Questi oggetti contengono nome, testo, foto, tempo
// For each > Append






$(".contact").click(function (){
    var clickedcontact = $(this).attr("data-ref");
    console.log(clickedcontact);
    
    $(".msgWindowOutput").removeClass("activeflex");
    $(".msgTypeText").removeClass("active");
    $(".msgSendBtn").removeClass("activeflex");

    
    $(".msgWindowOutput[data-ref=" + clickedcontact +"]").addClass("activeflex");
    $(".msgTypeText[data-ref=" + clickedcontact +"]").addClass("active");
    $(".msgSendBtn[data-ref=" + clickedcontact +"]").addClass("activeflex");
})