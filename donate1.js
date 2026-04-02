function selectAmount(amount){
    document.getElementById("customAmount").value = amount;
}

document.getElementById("donationForm").addEventListener("submit", function(e){

    e.preventDefault(); //to prevent default actions after submitting the form

    document.getElementById("thankYouPopup").style.display="flex";

});

function closeThankYou(){  
    document.getElementById("thankYouPopup").style.display="none";
}