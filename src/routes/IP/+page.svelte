<div id="intro">
    <img src="./committees/IP.jpg" alt="" id="post">
    <!-- <h1>DISEC</h1> -->
</div>

<div id="content">
    <div id="desc">
        <div id="img">
            <img src="./committees_logos/ip.png" alt="">
        </div>
        <div id="info">
            <h1>Internation Press</h1><br>
            <p>IP is a collection of international press agencies that gather from all corners of the world to capture, document and report on the proceedings of various UN committees. They are mandated with the task of providing comprehensive and unbiased coverage of issues of debate and simulating the role of the media in international affairs.</p>
        </div>
    </div>

    <div id="agenda">
        <h1>Agenda</h1><br>
        <p>Classified</p>
    </div>
    <br><hr><br>

    <div id="eb">
        <h1>EB Members</h1><br>
        <div id="cards">
            <div class="card">
                <img src="./EB/Default_pfp.png" alt="" style="object-fit: contain;"><br><br>
                <h2>Avi Kotpalia</h2><h3>Head of IP</h3><br>
                <p>Available soon</p>
            </div>
            <div class="card">
                <img src="./EB/Aryan.jpg" alt=""><br><br>
                <h2>Aryan Kumar</h2><h3>Editor-in-Chief</h3><br>
                <p>Aryan is an incoming first-year student at Cornell University, majoring in Computer Science. He is delighted to be serving as the Editor-in-Chief for the International Press at DPSHMUN '23 <br><br>

                    Having surmounted invaluable debate experience throughout his MUN journey — spanning over 15 conferences in the capacity of a Delegate, EB member, and a Secretariat member — he believes that everyone can efficiently utilize the MUN platform as a gateway to realize their utmost potential in the art of prolific debate and discussion. He looks forward to creating a delightful conference experience for all.</p>
            </div>
        </div>
    </div><br><br>

    <h1 id="bgtitle">Background Guide</h1>
    <div id="bgguide">
        
        <div id="bgdesc">
            <p><br>
                A Background Guide is a document prepared by the EB which gives information about the committee, agenda and other details. This document will also provide a list of key topics to prepare and be ready for, at the same time gives preparation tips. Reading this document will allow the delegates to understand what the committee expects from them and how to prepare accordingly.
            <br><br><a href="./">View Background Guide →</a> <br><br></p>
        </div>
        <div id="preview">
            <img src="./preview/default.png" alt="">
        </div>
    </div>
    
    <div id="links"     class="unavailable">
        <h1>Links</h1>
        <div id="link_holder" >
            <iframe src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
</div>


<style>
    #intro{
        width: 100vw;
        height: 70vh;
        
        background-image: url("/committees_background/IP.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;

        color: white;

        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    #post{
        width: 50vmin;
        height: auto;
        aspect-ratio: 1/1;
        box-shadow: 0px 10px 20px 20px rgba(0,0,0,0.75)
    }
    #content{
        width: 100vw;
        color: #D0BEA8;
    }
    #desc{
        background-color: #be9460;
        color: #3e4f5f;
    }
    #desc #img img{
        width: 50vw;
        height: auto;
        margin: auto;
        filter: brightness(0);
    }
    #img{
        width: 100vw;
        padding: 5% 0 5% 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #info{
        width: 80vw;
        margin: auto;
    }
    #info h1{
        text-align: center;
    }
    #info p{
        text-align: justify;
    }
    #agenda{
        width: 100vw;
        text-align: center;
        padding: 5%;
        box-sizing: border-box;
    }
    #agenda p{
        text-align: center;
        font-size: x-large;
    }
    #agenda h1{
        font-size: xxx-large;
        text-align: center;
    }
    #eb h1{
        font-size: xxx-large;
        margin-left: 5%;
    }
    #cards{
        width: 100vw;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .card{
        width: 60vw;
        margin: 5%;
    }
    .card img{
        aspect-ratio: 4/3;
        width: 100%;
        height: auto;
        object-fit: cover;
    }
    .card h2{
        font-size: xx-large;
        text-align: center;
    }
    .card h3{
        font-weight: 100;
        text-align: center;
    }
    .card p{
        text-align: justify;
    }
    #bgguide #preview img{
        object-fit: contain;
        height: auto;
        width: 100%;
    }
    #bgtitle{
        font-size: xxx-large;
        margin-left: 5%;
    }
    #bgguide #preview{
        width: 60vw;
    }
    #bgguide p{
        width: 75vw;
        text-align: justify;
    }
    #bgguide{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
    }
    #bgdesc a{
        text-decoration: underline;
        color: #D0BEA8;
        font-weight: 600;
    }
    #links h1{
        margin-left: 5%;
        font-size: xxx-large;
    }
    #link_holder{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    #link_holder iframe{
        margin: 2.5%;
        width: 40vw;
        height: auto;
        aspect-ratio: 16/9;
    }
    
    .unavailable {
        display: none;
    }
    @media (min-width:600px){
        #desc{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            min-height: 50vh;
        }
        #info{
            max-width: 50vw;
            margin: 0;
            font-size: large;
        }
        #info h1{
            text-align: right;
        }
        #info p{
            text-align: justify;
            text-align-last: right;
        }
        #desc #img{
            width: 20vw;
            justify-self: stretch;
        }
        #agenda p{
            max-width: 50vw;
            margin: auto;
        }
        #eb h1{
            font-size: xxx-large;
        }
        #cards{
            flex-direction: row;
            justify-content: space-evenly;
        }
        .card{
            margin: 0;
            width: 25vw;
        }
        #bgguide{
            flex-direction: row-reverse;
            align-items: start;
            box-sizing: border-box;
            padding: 5%;
        }
        #bgguide p{
            max-width: 40vw;
            font-size: large;
            align-self: flex-start;
        }
        #bgguide #bgdesc{
            box-sizing: border-box;
        }
        #bgguide #preview{
            width: 25vw;
        }
        #link_holder iframe{
            width: 25vw;
        }
    }
</style>