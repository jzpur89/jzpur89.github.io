<!-- FUNCTIONS STARTS -->

//Form validation via bootstrap
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        } else if (form.checkValidity() === true) {
          getData(); //-----------------------------------------------------------------------MAKE NEW WEBPAGE HERE ONCE VALIDATED!
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

//Hides appropriate fields when page loads
function hideOtherFields(){
  $('#pharmacist-input1').hide();
  $('#pharmacist-input2').hide();
  $('#otherMed2').hide();
  $('#otherPharmName').hide();
  $('#pharmFax').hide();
}

//Only allow alpha keys when typing also backspace=8, tab=9, space=32, delete=46
function alphaOnly(event){
  var key = event.keyCode;
  return ((key >= 65 && key <= 90) || key == 8 || key == 9 || key == 32 || key == 46);
}

//Only allow numeric keys when typing also backspace=8, tab=9, delete=46
function numericOnly(event){
  var key = event.keyCode;
  return ((key >= 48 && key <= 57) || (key >= 96 && key <= 105) || key == 8 || key == 9 || key == 46)
}

//Takes 10 digit phone number 1234567890 and turns it into format 123-456-7890
function formatPhone(x){
  var areaCode = x.slice(0, 3);
  var first3 = x.slice(3, 6);
  var last4 = x.slice(6, 11);
  var phone = areaCode + "-" + first3 + "-" + last4;
  return phone;
}

//Checks and stores pharmacist on duty into local storage
function pharmacistCheck(){
  var pharmacist = $('#pharmacist-input2').val().trim().toUpperCase();
  localStorage.setItem("pharmacistName", pharmacist);
}

//Checks and stores sender into local storage
function senderCheck(){
  var sender = $('#sender3').val().trim().toUpperCase();
  localStorage.setItem("senderName", sender);
}

//Trims and stores patient first name and last name into local storage
function patientCheck(){
  var fName = $('#fName').val().trim().toUpperCase();
  localStorage.setItem("fName", fName);
  var lName = $('#lName').val().trim().toUpperCase();
  localStorage.setItem("lName", lName);
  var fullName = (lName + ', ' + fName);
  localStorage.setItem("fullName", fullName);
  alert("Creating Transfer Sheet For "  + fullName);
}

//Converts date of birth into format 04-03-1987 MM-DD-YYYY and stores it into local storage
function dobCheck(){
  var dateOB = $('#dateOB').val();
  var splitDOB = dateOB.split('-');
  var dateOB2 = splitDOB[1] + '-' + splitDOB[2] + '-' + splitDOB[0];
  localStorage.setItem("dateOB2", dateOB2);
}

//Checks if other pharmacy is selected and stores pharmacy information into local storage
function pharmacyCheck(){
  var pharmacy = $('#pharmacySelect option:selected').val();
  if(pharmacy == 'OTHER'){
    var pharmacyName = $('#otherPharmName2').val().trim().toUpperCase();
    var pharmacyFax = $('#pharmFax2').val().trim();
    var pharmacyFax2 = formatPhone(pharmacyFax);
    localStorage.setItem("oPharmacyName", pharmacyName);
    localStorage.setItem("oPharmacyFax", pharmacyFax2);
    localStorage.setItem("pharmacyName", pharmacy);
  } else {
    var pharmacy = $('#pharmacySelect option:selected').val();
    localStorage.setItem("pharmacyName", pharmacy);
  }
}

//Checks if other medication is selected and stores medication information into local storage
function medicationCheck(){
  var medication = $('#otherMed option:selected').val();
  if (medication == 'OTHER'){
    var medicationBox = $('#otherMed3').val().toUpperCase();
    localStorage.setItem("medication", medicationBox);
  } else {
    var medication = $('#otherMed option:selected').val();
    localStorage.setItem("medication", medication);
  }
}

//Stores all notes into local storage
function getNotes(){
  var notes = $('#notesInput').val().toUpperCase();
  localStorage.setItem("notes", notes);
}

function getData(){
  pharmacistCheck();
  senderCheck();
  patientCheck();
  dobCheck();
  pharmacyCheck();
  medicationCheck();
  getNotes();
  window.open("Transfer2.html", "_blank")
}

//Test function to alert stuff as needed, for debugging only
function testMe(){
  getData();
}

<!-- FUNCTIONS ENDS -->

//Sets pharmacist name into field so that it can be validated properly.
$('#pharmacist').change(function(){
  if($('#pharmacist').val() == 'OTHER'){
    $('#pharmacist-input2').val('');
    $('#pharmacist-input1').show();
    $('#pharmacist-input2').show();
  } else if($('#pharmacist').val() == 'TUNG (Best Option)') {
    $('#pharmacist-input2').val('TUNG');
    $('#pharmacist-input1').hide();
    $('#pharmacist-input2').hide();
  } else if($('#pharmacist').val() == 'AKIRA') {
    $('#pharmacist-input2').val('AKIRA');
    $('#pharmacist-input1').hide();
    $('#pharmacist-input2').hide();
  } else if($('#pharmacist').val() == 'JESSE') {
    $('#pharmacist-input2').val('JESSE');
    $('#pharmacist-input1').hide();
    $('#pharmacist-input2').hide();
  } else {
    $('#pharmacist-input1').hide();
    $('#pharmacist-input2').hide();
  }
})

//Sets other sender so that is can be validated properly.
$('#sender').change(function(){
  if($('#sender').val() == 'OTHER'){
    $('#sender3').val('');
    $('#sender2').show();
    $('#sender3').show();
  } else if($('#sender').val() == 'ALMA'){
    $('#sender3').val('ALMA');
    $('#sender2').hide();
    $('#sender3').hide();
  } else if($('#sender').val() == 'CINTIA'){
    $('#sender3').val('CINTIA');
    $('#sender2').hide();
    $('#sender3').hide();
  } else if($('#sender').val() == 'CLAUDIA'){
    $('#sender3').val('CLAUDIA');
    $('#sender2').hide();
    $('#sender3').hide();
  } else if($('#sender').val() == 'EMILY'){
    $('#sender3').val('EMILY');
    $('#sender2').hide();
    $('#sender3').hide();
  } else if($('#sender').val() == 'ISELA'){
    $('#sender3').val('ISELA');
    $('#sender2').hide();
    $('#sender3').hide();
  } else if($('#sender').val() == 'JUAN'){
    $('#sender3').val('JUAN');
    $('#sender2').hide();
    $('#sender3').hide();
  } else if($('#sender').val() == 'MESELINA'){
    $('#sender3').val('MESELINA');
    $('#sender2').hide();
    $('#sender3').hide();
  } else if($('#sender').val() == 'VIVIAN'){
    $('#sender3').val('VIVIAN');
    $('#sender2').hide();
    $('#sender3').hide();
  } else {
    $('#sender2').hide();
    $('#sender3').hide();
  }
})

//Sets other pharmacy so that it can be validated properly.
$('#pharmacySelect').change(function(){
  if($('#pharmacySelect').val() == 'OTHER'){
    $('#otherPharmName2').val('');
    $('#pharmFax2').val('');
    $('#otherPharmName').show();
    $('#pharmFax').show();
  } else if($('#pharmacySelect').val() == 'ANOP'){
    $('#otherPharmName2').val('A&O');
    $('#pharmFax2').val('8314240197');
    $('#otherPharmName').hide();
    $('#pharmFax').hide();
  } else if($('#pharmacySelect').val() == 'ACP'){
    $('#otherPharmName2').val('ALLCARE');
    $('#pharmFax2').val('8314240197');
    $('#otherPharmName').hide();
    $('#pharmFax').hide();
  } else if($('#pharmacySelect').val() == 'COST'){
    $('#otherPharmName2').val('COSTCO');
    $('#pharmFax2').val('8314240197');
    $('#otherPharmName').hide();
    $('#pharmFax').hide();
  } else if($('#pharmacySelect').val() == 'CVS1'){
    $('#otherPharmName2').val('CVS (EAST LAUREL)');
    $('#pharmFax2').val('8314240197');
    $('#otherPharmName').hide();
    $('#pharmFax').hide();
  } else if($('#pharmacySelect').val() == 'CVS2'){
    $('#otherPharmName2').val('CVS (SOUTH MAIN)');
    $('#pharmFax2').val('8314240197');
    $('#otherPharmName').hide();
    $('#pharmFax').hide();
  } else if($('#pharmacySelect').val() == 'CVS3'){
    $('#otherPharmName2').val('CVS (EAST ALISAL)');
    $('#pharmFax2').val('8314240197');
    $('#otherPharmName').hide();
    $('#pharmFax').hide();
  } else if($('#pharmacySelect').val() == 'CVS4'){
    $('#otherPharmName2').val('CVS (EAST BORONDA)');
    $('#pharmFax2').val('8314240197');
    $('#otherPharmName').hide();
    $('#pharmFax').hide();
  } else if($('#pharmacySelect').val() == 'CVS5'){
    $('#otherPharmName2').val('CVS-TARGET (NORTH MAIN)');
    $('#pharmFax2').val('8314240197');
    $('#otherPharmName').hide();
    $('#pharmFax').hide();
  } else if($('#pharmacySelect').val() == 'NHP'){
    $('#otherPharmName2').val('NOB HILL');
    $('#pharmFax2').val('8314240197');
    $('#otherPharmName').hide();
    $('#pharmFax').hide();
  } else if($('#pharmacySelect').val() == 'RITEAID'){
    $('#otherPharmName2').val('RITE AID');
    $('#pharmFax2').val('8314240197');
    $('#otherPharmName').hide();
    $('#pharmFax').hide();
  } else if($('#pharmacySelect').val() == 'RLP'){
    $('#otherPharmName2').val('ROMIE LANE');
    $('#pharmFax2').val('8314240197');
    $('#otherPharmName').hide();
    $('#pharmFax').hide();
  } else if($('#pharmacySelect').val() == 'SAFEWAY1'){
    $('#otherPharmName2').val('SAFEWAY (CONSTITUTION)');
    $('#pharmFax2').val('8314240197');
    $('#otherPharmName').hide();
    $('#pharmFax').hide();
  } else if($('#pharmacySelect').val() == 'SAFEWAY2'){
    $('#otherPharmName2').val('SAFEWAY (NORTH MAIN)');
    $('#pharmFax2').val('8314240197');
    $('#otherPharmName').hide();
    $('#pharmFax').hide();
  } else if($('#pharmacySelect').val() == 'SHERMANP'){
    $('#otherPharmName2').val("SHERMAN'S");
    $('#pharmFax2').val('8314240197');
    $('#otherPharmName').hide();
    $('#pharmFax').hide();
  } else if($('#pharmacySelect').val() == 'STARP'){
    $('#otherPharmName2').val('STAR');
    $('#pharmFax2').val('8314240197');
    $('#otherPharmName').hide();
    $('#pharmFax').hide();
  } else if($('#pharmacySelect').val() == 'WAG1'){
    $('#otherPharmName2').val('WALGREENS (NORTH MAIN)');
    $('#pharmFax2').val('8314240197');
    $('#otherPharmName').hide();
    $('#pharmFax').hide();
  } else if($('#pharmacySelect').val() == 'WAG2'){
    $('#otherPharmName2').val('WALGREENS (NORTH SANBORN)');
    $('#pharmFax2').val('8314240197');
    $('#otherPharmName').hide();
    $('#pharmFax').hide();
  } else if($('#pharmacySelect').val() == 'WAL1'){
    $('#otherPharmName2').val('WALMART (NORTH DAVIS)');
    $('#pharmFax2').val('8314240197');
    $('#otherPharmName').hide();
    $('#pharmFax').hide();
  } else if($('#pharmacySelect').val() == 'WAL2'){
    $('#otherPharmName2').val('WALMART (NORTH MAIN)');
    $('#pharmFax2').val('8314240197');
    $('#otherPharmName').hide();
    $('#pharmFax').hide();
  } else {
    $('#otherPharmName').hide();
    $('#pharmFax').hide();
  }
})

//Sets other medications so that it can be validated properly.
$('#otherMed').change(function(){
  if($('#otherMed').val() == 'OTHER'){
    $('#otherMed3').val('');
    $('#otherMed2').show();
    $('#otherMed3').show();
  } else if($('#otherMed').val() == 'ALL ACTIVE PRESCRIPTION(S) DURING LAST 90 DAYS'){
    $('#otherMed3').val('ALL ACTIVE PRESCRIPTION(S) DURING LAST 90 DAYS');
    $('#otherMed2').hide();
    $('#otherMed3').hide();
  } else if($('#otherMed').val() == 'NEW OR RECENT PRESCRIPTION(S) DURING LAST 14 DAYS'){
    $('#otherMed3').val('NEW OR RECENT PRESCRIPTION(S) DURING LAST 14 DAYS');
    $('#otherMed2').hide();
    $('#otherMed3').hide();
  } else {
    $('#otherMed2').hide();
    $('#otherMed3').hide();
  }
})



//On load, it hides appropriate fields that should be hidden
window.onload = hideOtherFields();
