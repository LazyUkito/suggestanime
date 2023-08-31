const name =document.getElementById('name');
const email =document.getElementById('email');
const submit =document.getElementsByClassName('container')[0];

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("Clicked")

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "suggestmeanime@gmail.com",
        Password : "7017F94C38290D05EB02D37D2CD52C53C4BE",
        To : 'suggestmeanime@gmail.com',
        From : 'suggestmeanime@gmail.com',
        Subject : "New contact from suggest ani-me",
        Body : "Name: " + document.getElementById("name").value
                + "<br> Email: " + document.getElementById("email").value
                + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert(message)
    );
});
