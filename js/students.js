$(document).ready(function(){
console.log('HI Mose');

var studentList;

function getall(){
    $(".studentList").html(" ");
    $.ajax({
        url: "http://localhost/crud/api/getStudents.php",
        method: "GET",
        success: function(data){
            studentList = JSON.parse(data);
            console.log('student info are',studentList);
            for(var i = 0; i < studentList.length; i++){
                $(".studentList").append('<tr>' + '<td>' + studentList[i]["firstname"] + '</td>' + '<td>' + studentList[i]["lastname"] + '</td>' + '<td>' + studentList[i]["course"] + "</td><td><input class='btn btn-warning btn-sm btn-edit stdID' type='button' value='Edit' + data-sid="+ studentList[i]["id"] + " /><input class='btn btn-danger btn-sm btn-del stdID' type='button' value='Delete' + data-sid="+ studentList[i]["id"] + " />" + '</td>' + '</tr>');
            }
        }
    })
}
getall();

console.log(studentList);

// Update button


$('#tbody').on("click", ".btn-edit", function(){
    console.log('Edit Button Cliked');
    $('#editModal').show();
    var index = $(this).parents("tr").index();
    var studentID = $(".studentList .stdID").val();
    //console.log('Student ID is', studentID);
    //console.log('Student Index is', index);

    $(".edit-form #fname").val(studentList[index]["firstname"]);
    $(".edit-form #lname").val(studentList[index]["lastname"]);
    $(".edit-form #course").val(studentList[index]["course"]);
    $(".edit-form #sid").val(studentList[index]["id"]);


});


$(".save-student").click(function(){
    console.log('Student is saved');
    var fname = $(".edit-form #fname").val();
    var lname = $(".edit-form #lname").val();
    var course = $(".edit-form #course").val();
    var siD = $(".edit-form #sid").val();
    console.log('Student ... ',siD)

  

    $.ajax({
        url: "http://localhost/crud/api/editStudent.php",
        method: "POST",
        data : {sid:siD, firstname:fname, lastname:lname, course:course},

        success:function(data){
            console.log('Updated ');
            getall();
            $('#editModal').hide();
        },

        error:function(request,status,error){
            console.log(request.responseText);
            console.log('Failed To Update')
        }
    })
});



// Close edit Modal
$("#emodalbutton").click(function(){
    $('#editModal').hide();
});


// Delete Button
$("#tbody").on("click", ".btn-del", function(){
    console.log('Delete Button Clicked');
    var index = $(this).parents("tr").index();
    let studentID = $(this).attr("data-sid");
    console.log('Student ID is',studentID);

    $.ajax({
        url: "http://localhost/crud/api/deleteStudent.php",
        method: "POST",
        data: {sid: studentID},

        success:function(data){
            console.log('Data deleted');
            $(this).closest("tr").fadeOut();
            getall();
        }

    })

});

// Add student
$('#btnsave').click(function(){
    // console.log('Save button clicked');
    let fn = $('#fname').val();
    let ln = $('#lname').val();
    let co = $('#course').val();

    //console.log(fn);
    //console.log(ln);
    //console.log(co);

    if(fn == ""){
        //alert("Please Enter First Name");
        $('#fnameModal').show();
        $("#fmodalbutton").click(function(){
            $('#fnameModal').hide();
        });
    }else if(ln == ""){
        //alert("Please Enter Last Name");
        $('#lnameModal').show();
        $("#lmodalbutton").click(function(){
            $('#lnameModal').hide();
        });
    }else if(co == ""){
        // alert("Please Enter Course Name");
        $('#cnameModal').show();
        $("#cmodalbutton").click(function(){
            $('#cnameModal').hide();
        });
    }else {
        // console.log("All Required Fileds Are Filled");
        
        mydata = {firstname:fn, lastname:ln, course:co};
        $.ajax({
            url: "http://localhost/crud/api/addStudent.php",
            method: "POST",
            data: mydata,
            success:function(data){
                $('form')[0].reset();
                getall();

            }

        });
    }


});




});