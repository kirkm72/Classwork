  
//Initialize Firebase
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAbot-kYaPDw2fa-LCB7aOJg3YOI8Q5wfM",
    authDomain: "addemployee-f4a22.firebaseapp.com",
    databaseURL: "https://addemployee-f4a22.firebaseio.com",
    projectId: "addemployee-f4a22",
    storageBucket: "",
    messagingSenderId: "797100296920",
    appId: "1:797100296920:web:92b6e4f8355d789d5925ad"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var database = firebase.database().ref();

// var startDateTemp;
// $('#submit').on('click', function() {
//     var employeeName = $('#employeeName').val().trim();
//     var role = $('#role').val().trim();
//     var startDate = $('#startDate').val().trim();
//     var monthlyRate = $('#monthlyRate').val().trim();

//     startDateTemp = new Date($('#startDate').val());
//     console.log(startDateTemp);

//     //database.push({
//     database.push({
//         'employeeName': employeeName,
//         'role': role,
//         'startDate': startDate,
//         'monthlyRate': monthlyRate,
//     });
//     //database.set({});
// });

// function dateDifference(date) {
//     return moment().diff(date, 'months');
// }

// $('#clearDatabase').on('click', function() {
//     database.set({});
//     location.reload();
// });

// function generateNewRow(sv) {
//     var startDate = new Date(sv.startDate).getTime();
//     var dateDiff = dateDifference(startDate);
//     console.log('Date difference: ' + dateDiff);
//     var totalBilled = parseInt(dateDiff) * parseInt(sv.monthlyRate);
//     console.log('Total billed: ' + totalBilled);

//     var newTBody = $('<tbody>');
//     var newRow = $('<tr>');

//     newRow.append('<td>' + sv.employeeName + '</td>');
//     newRow.append('<td>' + sv.role + '</td>');
//     newRow.append('<td>' + sv.startDate + '</td>');
//     newRow.append('<td>' + dateDiff + '</td>');
//     newRow.append('<td>$' + sv.monthlyRate + '</td>');
//     newRow.append('<td>$' + totalBilled + '</td>');

//     newTBody.html(newRow);
//     $('#employeeTable').append(newTBody);
// }

// //database.orderByChild('startDate').limitToLast(1).on('child_added', function(snapshot) {
// //database.orderByChild('startDate').limitToLast(1).on('value', function(snapshot) {
// database.on('child_added', function(snapshot) {
//     var sv = snapshot.val();
//     console.log(sv);
//     console.log(sv.employeeName);
//     console.log(sv.role);
//     console.log(sv.startDate);
//     console.log(sv.monthlyRate);

//     generateNewRow(sv);
// }, function(err) {
//     console.log("Error handled" + err.code);
// });
