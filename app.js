$('#submit').click(clickSubmit);
function clickSubmit() {
    var contact={
        name: $('#name').val(),
        email: $('#email').val(),
        comment: $('#comment').val(),
        captcha: $('#g-recaptcha-response').val()
    }
    $.ajax({
        url: 'api/contact',
        type:'POST',
        data: contact, success:function(data) {
            console.log(data);
        }});
}

//add my picture, put the picture in content folder DONE
//description of technologies that I use, html/css/javascript/node.js/.net DONE
//paragraph saying I am looking for projects to work on DONE
//link to my linkedIn profile DONE
//make a form that allows users to request my info/a space to type text in regards to what they want my help developing DONE
//only use name= for check boxes and radio buttons
//HTTP methods .get .post .put .delete

//get LinkedIn icon in top right corner or black header DONE
//put picture in black header DONE
//change color of header
//put name in header DONE
//leave the action links, shove everything in the right corner
//put a google captcha on the page
//you can nest rows inside each other
//dress up my inputs
//class is a recipe for making a 'contact domain object' an 'object of its name'