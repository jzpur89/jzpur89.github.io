//Unloads all the necessary data and inserts appropriate date into html
function unloadData(){
  var pharmacist = localStorage.getItem("pharmacistName");
  var sender = localStorage.getItem("senderName");
  var fName = localStorage.getItem("fName");
  var lName = localStorage.getItem("lName");
  var fullName = localStorage.getItem("fullName");
  var dateOB2 = localStorage.getItem("dateOB2");
  var pharmTransfer = localStorage.getItem("pharmacyName")
  var medOther = localStorage.getItem("medication");
  var notes1 = localStorage.getItem("notes")

  detectPharmacy(pharmTransfer);
  $('.lName').html(lName);
  $('.fName').html(fName);
  $('.fullName').html(fullName);
  $('.dateOB2').html(dateOB2);
  $('.medOther').html(medOther);
  $('.pharmacist').html(pharmacist);
  $('.notes1').html(notes1);
  $('.sender').html(sender);
}

//Formats the date into MONDAY MM-DD-YYYY and makes everything a string
function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  var days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
  var namedDay = days[d.getDay()];
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + " " + ampm;
  var currentDateTime = date.getMonth()+1 + "-" + date.getDate() + "-" + date.getFullYear() + " " + namedDay + " " + strTime;
  var currentMonth = date.getMonth() + 1;
  var currentDate = namedDay + " " + currentMonth + "-" + date.getDate() + "-" + date.getFullYear();
  $('.date').html(currentDate);
  $('.time').html(strTime);
}

var d = new Date();
var e = formatDate(d);

function detectPharmacy(pharmacy){
  var pharmacyName = "PHARMACY NAME"
  var pharmacyAddress = "PHARMACY ADDRESS"
  var pharmacyPhone = "PHARMACY PHONE"
  var pharmacyFax = "PHARMACY FAX"
  if(pharmacy == "ANOP"){
    var pharmacyName = "A&O PHARMACY"
    var pharmacyAddress = "610 E ROMIE LN STE 1"
    var pharmacyPhone = "831-758-0976"
    var pharmacyFax = "831-758-4961"
  }
  if(pharmacy == "ACP"){
    var pharmacyName = "ALLCARE PHARMACY"
    var pharmacyAddress = "331 S MAIN ST"
    var pharmacyPhone = "831-424-8053"
    var pharmacyFax = "831-424-4707"
  }
  if(pharmacy == "COST"){
    var pharmacyName = "COSTCO PHARMACY"
    var pharmacyAddress = "1339 N DAVIS RD"
    var pharmacyPhone = "831-751-0414"
    var pharmacyFax = "831-751-0435"
  }
  if(pharmacy == "CVS1"){
    var pharmacyName = "CVS PHARMACY"
    var pharmacyAddress = "110 E LAUREL DR"
    var pharmacyPhone = "831-754-1551"
    var pharmacyFax = "831-754-1302"
  }
  if(pharmacy == "CVS2"){
    var pharmacyName = "CVS PHARMACY"
    var pharmacyAddress = "1140 S MAIN ST"
    var pharmacyPhone = "831-422-8448"
    var pharmacyFax = "831-422-4630"
  }
  if(pharmacy == "CVS3"){
    var pharmacyName = "CVS PHARMACY"
    var pharmacyAddress = "347 E ALISAL ST"
    var pharmacyPhone = "831-424-0026"
    var pharmacyFax = "831-424-1829"
  }
  if(pharmacy == "CVS4"){
    var pharmacyName = "CVS PHARMACY"
    var pharmacyAddress = "662 E BORONDA RD"
    var pharmacyPhone = "831-443-0702"
    var pharmacyFax = "831-443-1850"
  }
  if(pharmacy == "CVS5"){
    var pharmacyName = "CVS-TARGET PHARMACY"
    var pharmacyAddress = "1640 N MAIN ST"
    var pharmacyPhone = "831-442-2961"
    var pharmacyFax = "831-998-9745"
  }
  if(pharmacy == "NHP"){
    var pharmacyName = "NOB HILL PHARMACY"
    var pharmacyAddress = "1320 S MAIN ST"
    var pharmacyPhone = "831-759-2163"
    var pharmacyFax = "831-759-2198"
  }
  if(pharmacy == "RITEAID"){
    var pharmacyName = "RITE AID PHARMACY"
    var pharmacyAddress = "602 WILLIAMS RD"
    var pharmacyPhone = "831-784-1606"
    var pharmacyFax = "831-784-1819"
  }
  if(pharmacy == "RLP"){
    var pharmacyName = "ROMIE LANE PHARMACY"
    var pharmacyAddress = "505 E ROMIE LN STE H"
    var pharmacyPhone = "831-424-0395"
    var pharmacyFax = "831-424-7949"
  }
  if(pharmacy == "SAFEWAY1"){
    var pharmacyName = "SAFEWAY PHARMACY"
    var pharmacyAddress = "1516 CONSTITUTION BLVD"
    var pharmacyPhone = "831-444-3630"
    var pharmacyFax = "831-444-3634"
  }
  if(pharmacy == "SAFEWAY2"){
    var pharmacyName = "SAFEWAY PHARMACY"
    var pharmacyAddress = "1546 N MAIN ST"
    var pharmacyPhone = "831-442-7502"
    var pharmacyFax = "831-442-7505"
  }
  if(pharmacy == "SHERMANP"){
    var pharmacyName = "SHERMAN'S PHARMACY"
    var pharmacyAddress = "1212 S MAIN ST #101"
    var pharmacyPhone = "831-422-5988"
    var pharmacyFax = "831-422-5999"
  }
  if(pharmacy == "STARP"){
    var pharmacyName = "STAR PHARMACY"
    var pharmacyAddress = "1273 S MAIN ST"
    var pharmacyPhone = "831-621-5558"
    var pharmacyFax = "831-621-5579"
  }
  if(pharmacy == "WAG1"){
    var pharmacyName = "WALGREENS PHARMACY"
    var pharmacyAddress = "1532 N MAIN ST"
    var pharmacyPhone = "831-443-8717"
    var pharmacyFax = "831-443-0413"
  }
  if(pharmacy == "WAG2"){
    var pharmacyName = "WALGREENS PHARMACY"
    var pharmacyAddress = "575 N SANBORN RD"
    var pharmacyPhone = "831-751-9319"
    var pharmacyFax = "831-751-1657"
  }
  if(pharmacy == "WAL1"){
    var pharmacyName = "WALMART PHARMACY"
    var pharmacyAddress = "1375 N DAVIS RD"
    var pharmacyPhone = "831-998-9087"
    var pharmacyFax = "831-998-9081"
  }
  if(pharmacy == "WAL2"){
    var pharmacyName = "WALMART PHARMACY"
    var pharmacyAddress = "1800 N MAIN ST"
    var pharmacyPhone = "831-751-0260"
    var pharmacyFax = "831-751-0276"
  }
  if(pharmacy == "OTHER"){
    var pharmacyName = localStorage.getItem("oPharmacyName");
    var pharmacyAddress = "ADDRESS N/A"
    var pharmacyPhone = "N/A"
    var pharmacyFax = localStorage.getItem("oPharmacyFax");
  }
  $('.pharmacyName').html(pharmacyName);
  $('#pharmacyAddress').html(pharmacyAddress);
  $('.pharmacyPhone').html(pharmacyPhone);
  $('.pharmacyFax').html(pharmacyFax);
}

window.onload = unloadData();
window.onload = formatDate();
