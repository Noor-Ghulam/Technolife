//
//
//   
//    
//function show(){
//var output;
//
//
//
//     
//  output= "\
//<div class='modal' tabindex='-1' role='dialog'>\
//  <div class="modal-dialog" role="document">\
//    <div class="modal-content">\
//      <div class="modal-header">\
//        <h5 class="modal-title">Modal title</h5>\
//        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\
//          <span aria-hidden="true">&times;</span>\
//        </button>
//      </div>
//      <div class="modal-body">\
//        <p>Modal body text goes here.</p>\
//      </div>\\
//      <div class="modal-footer">\
//        <button type='button' class="btn btn-secondary" data-dismiss="modal">Close</button>\
//      </div>\
//    </div>\
//  </div>\
//</div>\
//
//";
//
//
//                      
//               
//
//    
//            $('#detail-prod').html(output).modal('show');
//
//}
//else{
//      
//            alert("fail");
//
//
//                          
//    }
//            }
//
//	}
////
//
// function sizepro(idpro){
//           "use strict";
//
//
//   var html= " ";
//		    var output,idpro=idpro;
//               $.ajax({
//                    url:"pages/pro_fun.php",
//                    data:{idpro:idpro},
//                    type: 'post',
//                    success: function (response)
//                    {
//                        if (response)
//                        {
//                       var data = JSON.parse(response);
//                       for (var i = 0; i < data.length; i++) {
//
//          html +="<input type='radio' id='tab-"+i+"' name='tab-group-1' class='tab-radio' value='" +  data[i]['size']  +"' ><label class='tab-label' for='tab-"+i+"'>" +  data[i]['size']  +"</label>";
// 
//                        }
//                           $('#parent').html(html);
//                        }
//
//                else
//                        {
//                            alert("Failed");
//                        }
//                       }
//                      });
//                      }
//
//
// function colorpro(idp){
//           "use strict";
//
//console.log(idp);
//
//   var html= " ";
//		    var output,idp=idp;
//               $.ajax({
//                    url:"pages/pro_fun.php",
//                    data:{idp:idp},
//                    type: 'post',
//                    success: function (response)
//                    {
//                        if (response)
//                        {
//                       var data = JSON.parse(response);
//                       for (var i = 0; i < data.length; i++) {
//
//          html +="<option value='"+data[i]['color']+"'>" +  data[i]['color']  +"</option>";
// 
//                        }
//                           $('#outcol').html("<option selected disabled>Choose</option>"+html);
//                        }
//
//                else
//                        {
//                            alert("Failed");
//                        }
//                       }
//                      });
//                      }
//
//
//
//
//
//
//
//

 
//



function total_item(){

 var total=0;
      $.ajax({
            url: 'pages/delpro.php',
            async: false,
            type: 'post',
            data: {total:total},
            success:function(data)
            {
       total=data;

document.getElementById("totleItem").innerHTML=total;
            } 
});
//return total;

             }


   function deletetprodect(idprod) {
       if (confirm('Are you sure you want to delete this?')) {


           $.ajax({
            url: 'pages/delpro.php',
            async: false,
            type: 'post',
            data: {idprod:idprod},
            success:function(data)
            {
alert(data)
location.reload();
            }
                                });            
                
}}



   function saveprodect(idp) {


var q=$('#numberqua_'+idp).val();
console.log(q)
           $.ajax({
            url: 'pages/delpro.php',
            async: false,
            type: 'post',
            data: {idp:idp,q:q},
            success:function(data)
            {

alert(data);

            }
                                });            
                
}





 function add(idprodect){
      "use strict";
  
var idprodect=idprodect; 
    

var idsize ="";
var  idcolor ="";


if ($('span:has(:radio)').length > 0 && $('select[name=selector]').length > 0 ) {

if($("input[type='radio'][name='tab-group-1']:checked").val() > 0){

idsize = $("input[type='radio'][name='tab-group-1']:checked").val();

}

if($('select[name=selector]').val() > 0){
idcolor = $('select[name=selector]').val(); 

}

if(idsize !=="" && idcolor !=="" ){
//console.log(idsize);      
//   console.log(idcolor);

     $.ajax({
                    url:"pages/pro_fun.php",
                    data:{idprodect:idprodect,idsize:idsize,idcolor:idcolor},
                    type: 'post',
                    success: function (response)
                    {
alert(response);

total_item();

                       }
                      });
}

}



else {

if ($('span:has(:radio)').length > 0  ) {

if($("input[type='radio'][name='tab-group-1']:checked").val() > 0){

idsize = $("input[type='radio'][name='tab-group-1']:checked").val();

}

if(idsize !==""){
console.log(idsize);      
   console.log(idcolor);

     $.ajax({
                    url:"pages/pro_fun.php",
                    data:{idprodect:idprodect,idsize:idsize,idcolor:idcolor},
                    type: 'post',
                    success: function (response)
                    {
alert(response);
total_item();

                       }
                      });
}

}
else if($('select[name=selector]').length > 0){
    
    
  
if($('select[name=selector]').val() > 0){
idcolor = $('select[name=selector]').val(); 

}

if( idcolor !=="" ){
console.log(idsize);      
   console.log(idcolor);

     $.ajax({
                    url:"pages/pro_fun.php",
                    data:{idprodect:idprodect,idsize:idsize,idcolor:idcolor},
                    type: 'post',
                    success: function (response)
                    {
alert(response);
total_item();

                       }
                      });
}  
}

else{
$.ajax({
                    url:"pages/pro_fun.php",
                    data:{idprodect:idprodect,idsize:idsize,idcolor:idcolor},
                    type: 'post',
                    success: function (response)
                    {
alert(response);
total_item();

                       }
                      });


 
}
}
}



































// function add(idprodect){
//      "use strict";
//  
//var idprodect=idprodect; 
//
//
//var idsize ="";
//var  idcolor ="";
//
//
//if ($('span:has(:radio)').length > 0 ) {
//idsize = $("input[type='radio'][name='tab-group-1']:checked").val();
//}
//
//if($('select[name=selector]').length > 0){   
//idcolor = $('select[name=selector]').val();     
//}
//
//
//console.log(idsize);      
//   console.log(idcolor);
//
//if(idsize !="" && idcolor !="" ){
//
//     $.ajax({
//                    url:"pages/pro_fun.php",
//                    data:{idprodect:idprodect,idsize:idsize,idcolor:idcolor},
//                    type: 'post',
//                    success: function (response)
//                    {
//console.log(response);
//                       }
//                      });
//
//}
//if(idsize =="" && idcolor =="" ){
//
//     $.ajax({
//                    url:"pages/pro_fun.php",
//                    data:{idprodect:idprodect,idsize:idsize,idcolor:idcolor},
//                    type: 'post',
//                    success: function (response)
//                    {
//console.log(response);
//                       }
//                      });
//
//}
//if(idsize ==""  ){
//
//
//     $.ajax({
//                    url:"pages/pro_fun.php",
//                    data:{idprodect:idprodect,idsize:idsize,idcolor:idcolor},
//                    type: 'post',
//                    success: function (response)
//                    {
//console.log(response);
//                       }
//                      });
//}
//if(idcolor =="" ){
//
//     $.ajax({
//                    url:"pages/pro_fun.php",
//                    data:{idprodect:idprodect,idsize:idsize,idcolor:idcolor},
//                    type: 'post',
//                    success: function (response)
//                    {
//console.log(response);
//                       }
//                      });
//
//
//}
//
//                      }












$(document).ready(function(){
 var name=$('#name').val();
console.log(name);
total_item();

    $('#create').click(function(){
		
		 var name=$('#name').val();
		 var pass=$('#pass').val();
		 var pass1=$('#pass1').val();
		 var email=$('#email').val();
		 if(name !='' && pass!=''  &&  pass1!='' && email!=''  )
		 {
			 
			 $.ajax({
				url:"include/action.php",
				method:"POST",
				data:{name:name,pass:pass,pass1:pass1,email:email},
				success:function(data){

					if(data =="password is not conformable"|| data=="Enter the password is not less than 6 letters."|| data=="Email is not corecct" || data=="Enter youe name first,please" || data=="Email is reserved" )
					{
//						$('.alert').show();
				        $('#result').html(data);
					}
					else
					{
 var name=$('#name').val();
console.log(name);
if(name == 1){

alert("account successfully created ");
window.open("cart.php","_self");


    
}
else {
    
alert("account successfully created ");
window.location.reload(true);
    
}
						
                  

					}
				} 
			 });
			 
			 
		 }
		 else 
		 {
			 alert("<?php echo bothFieldsarerequired; ?>");
		 }
		 
	});




        $('#logout').click(function(){

             var action="logout";
                 $.ajax({
                    url:"include/action.php",
                    method:"POST",
                    data:{action:action},
                    success:function(){
                        window.location ="index.php";
                    } 
                 })
        });


    $('#login').click(function(){
		
		 var nameemail=$('#emailuser').val();
		 var passu=$('#passu').val();
		 if(nameemail !='' && passu!=''  )
		 {
			 
			 $.ajax({
				url:"include/action.php",
				method:"POST",
				data:{nameemail:nameemail,passu:passu},
				success:function(data){
                    				console.log(data);	
                    if(data =="Email or password not vaild" || data=="Your acount is not active" )
					{

				        $('#result_login').html(data);
					}
					else
					{
						
						alert(" welcome ");
					    
						window.location.reload(true);
					}
				} 
			 });
			 
			 
		 }
		 else 
		 {
			 alert("<?php echo bothFieldsarerequired; ?>");
		 }
		 
	});
	



/******************************** Det ****************************/



    	});



