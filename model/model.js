var galleryContent = `<div class="gallery-wrapper">
<div class="column">
    <div class="photo" id="l-photo1"></div>
    <div class="photo" id="l-photo2"></div>
    <div class="photo" id="l-photo3"></div>
    <div class="photo" id="l-photo4"></div>
</div>

<div class="column">
    <div class="photo" id="r-photo1"></div>
    <div class="photo" id="r-photo2"></div>
    <div class="photo" id="r-photo3"></div>
    <div class="photo" id="r-photo4"></div>
</div>
    </div>`

var aboutContent = `        <div class="about-wrapper">
    <div class="about-photo"></div>
    <div class="about-text">
        <h1>ABOUT</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra convallis posuere morbi leo urna molestie at. Hendrerit dolor magna eget est. Eget felis eget nunc lobortis mattis aliquam faucibus purus. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Amet porttitor eget dolor morbi non. Leo duis ut diam quam nulla porttitor massa. Nascetur ridiculus mus mauris vitae ultricies leo. </p>
        <p>Feugiat in ante metus dictum at tempor commodo. Porttitor rhoncus dolor purus non. Aliquam etiam erat velit scelerisque in dictum non. Mattis rhoncus urna neque viverra justo nec. Nulla posuere sollicitudin aliquam ultrices sagittis orci a. Dolor sit amet consectetur adipiscing.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus tenetur temporibus quasi, itaque totam aut atque autem nulla necessitatibus natus molestias quisquam,</p>
    </div>
    </div>`

var clientsContent = ` <div class="clients-wrapper">

    <div class="client-examples">
        <div class="example-column">
            <div id="logo01" class="example-photo"></div>
            <div id="logo02" class="example-photo"></div>
            <div id="logo03" class="example-photo"></div>
        </div>
        <div class="example-column">
            <div id="logo04" class="example-photo"></div>
            <div id="logo05" class="example-photo"></div>
            <div id="logo06" class="example-photo"></div>
        </div>
    </div>


    <div class="clients-text">
        <h1><em>Clients & Partners</em></h1>

        <div class="columns">
            <div class="column">
                <p>Starboard Design</p>
                <p>Proweb</p>
                <p>Adaptibuild</p>
                <p>Tacket.io</p>
                <p>Monki</p>
                <p>H&M</p>
                <p>-cology</p>
            </div>
            <div class="column">
                <p>CSign</p>
                <p>TWORKS</p>
                <p>ttools</p>
                <p>graphicswitch</p>
                <p>sketch stack</p>
            </div>
        </div>
    </div>
</div>`

var contactContent = `        <div class="contact-wrapper">
    <div class="contact-form">
        <form>      
            <input name="name" type="text" class="contact" placeholder="name..." />   

            <input name="email" type="text" class="contact" placeholder="email..." />

            <textarea name="text" class="contact" placeholder="message..."></textarea>

            <input type="submit" value="SUBMIT"/>
        </form>
    </div>

    <div class="contact-info">
        <h1>Jie Hayashi Photography</h1>
        <p>8901 Marmora Road,</p>
        <p>Glasgow, D04 89GR.</p>
        <p>+1 800 603 6035</p>
        <p>youremail@gmail.com</p>
    </div>`

 

export function getName(){
    console.log("sierra");
}

export function getPageContent(pageID) {
    $("#app").html(eval(pageID));

}