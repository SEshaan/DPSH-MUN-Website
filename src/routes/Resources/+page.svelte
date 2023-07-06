<script>
// @ts-nocheck

	import { onMount } from "svelte";

    onMount(() => {
        let e = document.querySelector("#presentation")
        e.innerHTML = '<iframe title="PPT" src="https://onedrive.live.com/embed?resid=3F03CFDBE97CB596%211296&amp;authkey=!APO4aGLS3106Q6w&amp;em=2&amp;wdAr=1.7770833333333333" width="' + window.innerWidth*0.9 + '" height="'+ window.innerWidth*0.6*0.9 +'" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>'
        console.log('ifrme')
    })
</script>

<div id="content">
    <div id="intro">
        <h1>Resources</h1><br>
        <p style="font-size:larger">
            This page will be the go-to guide for every delegate to excel in the MUN. Refer to all the materials provided here as it will help you more than anything else. The team has prepared a consolidated data of what's important for preparation including guides and videos about the MUN so that it's helpful for those who have just started their MUN journey and even those with experience.
        </p>
    </div>

    <h1 id="bgtitle">Delegate Handbook</h1>
    <div id="bgguide">
        
        <div id="bgdesc">
        <p><br>
            The Delegate Handbook serves as your essential guide, providing valuable information and instructions to navigate the conference proceedings. <br><br>

From committee rules and procedures to crucial tips for effective diplomacy, this handbook will equip you with the necessary tools to engage in constructive debates and work towards impactful resolutions. <br><br>

This book pdf is especially useful and recommended for those who have just started their MUN journey with us. <br> <br><a href="./handbook.pdf">View Delegate Handbook →</a>
        <br><br></p>
        </div>
        <div id="preview">
            <img src="./preview/handbook.jpg" alt="">
        </div>
    </div>

    <div id="ppt">
        <h1 class="heading">MUN PPT</h1>
        <br>
        <div id="presentation">
        
        </div>
    </div><br>

    <!-- <div id="bgguides">
        <h1 class="heading">Background Guides</h1><br>
        <div id="guides">
            <div class="guide">
                <a href="./">
                    <img src="./preview/default.png" alt="">
                </a>
            </div>
            <div class="guide">
                <a href="./">
                    <img src="./preview/default.png" alt="">
                </a>
            </div>
            <div class="guide">
                <a href="./">
                    <img src="./preview/default.png" alt="">
                </a>
            </div>
            <div class="guide">
                <a href="./">
                    <img src="./preview/default.png" alt="">
                </a>
            </div>
            <div class="guide">
                <a href="./">
                    <img src="./preview/default.png" alt="">
                </a>
            </div>
            <div class="guide">
                <a href="./">
                    <img src="./preview/default.png" alt="">
                </a>
            </div>
        </div>
    </div> -->

    <div id="links">
        <h1>Links</h1> <br>
        <p style="width: 90vw;margin:auto;font-size:larger">Refer to these links to get a concise understanding of the MUN. This will provide clarity as to what you will be doing in the conference. These videos are highly suggested for beginners <br><br> Do note that the links provided below is only for educational purposes and is meant to assist the delegates in their preparation
        </p> <br>
        <div id="link_holder">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/xZGhU6P3Dcc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/RPOFlQfwWVE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/DQqOWmVSasE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/7sQQAKghwhs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ukocFZ2MyDI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/8NwN1NiIDdI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
</div>

<style>
    #content{
        color: #D0BEA8;
    }
    h1{
        font-size: xxx-large;
    }
    .heading{
        font-size: xxx-large;
        margin-left: 5%;
    }
    #intro{
        padding: 5%;
        box-sizing: border-box;
    }
    #intro p{
        font-size: large;
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
    #presentation{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #guides{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .guide{
        width: 40vw;
        margin: 2.5%;
    }
    .guide img{
        width: 100%;
        height: auto;
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
        width: 90vw;
        height: auto;
        aspect-ratio: 16/9;
    }

    .unavailable {
        display: none;
    }
    @media (min-width:600px){
        .guide{
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
            width: 40vw;
        }
    }
</style>