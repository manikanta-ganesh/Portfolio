$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass("sticky")
        }else{
            $('.navbar').removeClass("sticky")
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }

    });
    
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    })

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

});


function SendMessage(){
    var temp = {
        from_name: document.getElementById("from_name").value,
        from_email: document.getElementById("from_email").value,
        message: document.getElementById("message").value
    }

    emailjs.send('service_rwjvy5n','template_zwzsb9h',temp)
    .then((res)=>{
        console.log("Success",res.status)
    })
    

}
