function changeData(value) {
    switch(value) {
        case "about":
            $("#data").html(`<p> <em>Hi there!</em> <br><br>My name is Ronak Shah, and I'm a senior in High School. <br><br>I like to build things in my free time, from ciphers to utilities. I'm also an avid reader, and I'd love to hear a book recommendation -- I'm into sci-fi, political, and philosophical texts -- so feel free to <a href="mailto:contact@ronakshah.net">email me</a> with a suggestion. <br><br>I also <a href="https://blog.ronakshah.net" target="_blank">blog</a>, if you're into that. </p>`)
            $("#about-wrapper").addClass("selected")
            $("#projects-wrapper").removeClass("selected")
            $("#achievements-wrapper").removeClass("selected")
            $("#resume-wrapper").removeClass("selected")
            break
        case "projects":
            $("#data").html(`<div class="row"> <div class="col s12 m4 project-card card"> <h5>Project Name</h5> <p>Description of said project</p></div><div class="col s12 m4 project-card card"> <h5>Project Name</h5> <p>Description of said project</p></div><div class="col s12 m4 project-card card"> <h5>Project Name</h5> <p>Description of said project</p></div><div class="col s12 m4 project-card card"> <h5>Project Name</h5> <p>Description of said project</p></div><div class="col s12 m4 project-card card"> <h5>Project Name</h5> <p>Description of said project</p></div><div class="col s12 m4 project-card card"> <h5>Project Name</h5> <p>Description of said project</p></div><div class="col s12 m4 project-card card"> <h5>Project Name</h5> <p>Description of said project</p></div><div class="col s12 m4 project-card card"> <h5>Project Name</h5> <p>Description of said project</p></div><div class="col s12 m4 project-card card"> <h5>Project Name</h5> <p>Description of said project</p></div></div>`)
            $("#projects-wrapper").addClass("selected")
            $("#about-wrapper").removeClass("selected")
            $("#achievements-wrapper").removeClass("selected")
            $("#resume-wrapper").removeClass("selected")
    }
}
   $(document).ready(function(){
      $('.carousel').carousel();

    });
        