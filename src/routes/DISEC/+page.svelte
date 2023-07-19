<script>
    // @ts-nocheck
    
        import { onMount } from "svelte";
    
        function secret(){
            window.location = "./Secret"
        }
    
        onMount(() => {
            let x = 0
            document.querySelector("#secret").onclick = () => {x+=1;if (x >= 10){secret()}}
        })
</script>    

<div id="intro">
    <img src="./committees/DISEC.jpg" alt="" id="post">
    <!-- <h1>DISEC</h1> -->
</div>

<div id="content">
    <div id="desc">
        <div id="img">
            <img src="./committees_logos/disec.png" alt="" id="secret">
        </div>
        <div id="info">
            <h1>Disarmament and International Security Committee</h1><br>
            <p>Being the General Assembly's First Committee DISEC aims at establishing and maintaining international peace and security by preventing the negative armament of the world's human and economic resources. It considers all disarmament and international security matters within the scope of the UN Charter or relating to the powers and functions of any other organ of the UN. All of its resolutions are recommendatory in nature.</p>
        </div>
    </div>

    <div id="agenda">
        <h1>Agenda</h1><br>
        <p>Discussing international security policies with special emphasis on extremist factions.
        </p>
    </div>
    <br><hr><br>

    <div id="eb">
        <h1>EB Members</h1><br>
        <div id="cards">
            <div class="card">
                <img src="./EB/Kabeer.jpeg" alt=""><br><br>
                <h2>Kabeer Bajaj</h2><h3>Co-Chairperson</h3><br>
                <p>Kabeer, one of our very own. He is incredibly excited to utilise his knowledge to provide everyone with invaluable experience. <br><br>

                    Having had experience as a delegate, a member of the Executive Board and a successful Deputy Secretary General Kabeer is back to set his juniors on this path that he started many years ago. "I was inspired and mentored by my seniors and friends to take up the role of understanding: better than ever before, I plan to do the same." He looks forward to making this a delightful confrence for all.</p>
            </div>
            <div class="card">
                <img src="./EB/Rishabh.jpeg" alt="" style="object-fit: contain;"><br><br>
                <h2>Rishabh Chaudhari</h2><h3>Co-Chairperson</h3><br>
                <p>Rishabh is a prolific MUNner with multiple awards at various high level conferences. Having chaired DISEC last year, he is back with more ideas and plans to make a more fun, exciting, and informative committee this year.
                    <br><br>
                    Having graduated from DPSH just this year, Rishabh is gearing up for college at the Indian Institute of Science Education and Research. However, a career in Science isn't going to stop him from getting involved in every conference he can get into.
                    <br><br>
                    When not MUNning, Rishabh can be found daydreaming about fantasy worlds, reading, binging Star Wars and Lord of the Rings, drooling over sushi, and cursing at his DnD party for trivialising his combat encounters.
                    <br><br>
                    He looks forward to a thought-provoking MUN experience for all.
                    
                    </p>
            </div>
            
            <div class="card">
                <img src="./EB/Navya.jpg" alt="" style="object-fit: contain;"><br><br>
                <h2>Navya Sreya</h2><h3>Committee Expert</h3><br>
                <p>Navya sreya is an alumni of DPSH and is  going to study  economics and finance at the University of Leeds. She loves to read about geopolitics and economics, and occasionally a romance novel.She has been in several MUNs as a delegate, but this will be her first time as a committee expert. She has previously won best delegate the Cambridge MUN, SGIAMUN to name a few and can write pretty savvy position paper :)
                </p>
            </div>
        </div>
    </div><br><br>

    <h1 id="bgtitle">Background Guide</h1>
    <div id="bgguide">
        
        <div id="bgdesc">
        <p><br>
            A Background Guide is a document prepared by the EB which gives information about the committee, agenda and other details. This document will also provide a list of key topics to prepare and be ready for, at the same time gives preparation tips. Reading this document will allow the delegates to understand what the committee expects from them and how to prepare accordingly.
        <br><br><a href="./guides/DISEC.pdf">View Background Guide →</a> <br><br></p>
        </div>
        <div id="preview">
            <img src="./preview/DISEC.jpg" alt="">
        </div>
    </div>
    
    <div id="links" class="unavailable">
        <h1>Links</h1>
        <div id="link_holder">
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
        
        background-image: url("/committees_background/DISEC.png");
        background-repeat: no-repeat;
        background-size: cover;

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
        padding-bottom: 5%;
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
        width: 80vw;
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
            padding-bottom: 0%;
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