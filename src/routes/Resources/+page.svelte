<script>
// @ts-nocheck

	import { onMount } from "svelte";

    onMount(() => {
        let e = document.querySelector("#presentation")
        e.innerHTML = '<iframe title="PPT" src="https://onedrive.live.com/embed?resid=3F03CFDBE97CB596%211207&amp;authkey=!ALcI72XXhkJ5j28&amp;em=2&amp;wdAr=1.7777777777777777&amp;wdEaaCheck=0" width="' + window.innerWidth*0.9 + '" height="'+ window.innerWidth*0.6*0.9 +'" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>'
        console.log('ifrme')
    })
</script>

<div id="content">
    <div id="intro">
        <h1>Resources</h1><br>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit similique nesciunt, non perferendis blanditiis facilis suscipit aut placeat. Dolorem quae aliquid adipisci saepe laudantium nisi consectetur dicta vel reprehenderit velit!
        </p>
    </div>

    <div id="ppt">
        <h1 class="heading">MUN PPT</h1>
        <br>
        <div id="presentation">
        
        </div>
    </div><br>

    <div id="bgguides">
        <h1 class="heading">Background Guides</h1><br>
        <div id="guides">
            <div class="guide">
                <a href="./guides/handbook.pdf">
                    <img src="./preview/handbook.jpg" alt="">
                </a>
            </div>
            <div class="guide">
                <a href="./guides/handbook.pdf">
                    <img src="./preview/handbook.jpg" alt="">
                </a>
            </div>
            <div class="guide">
                <a href="./guides/handbook.pdf">
                    <img src="./preview/handbook.jpg" alt="">
                </a>
            </div>
            <div class="guide">
                <a href="./guides/handbook.pdf">
                    <img src="./preview/handbook.jpg" alt="">
                </a>
            </div>
            <div class="guide">
                <a href="./guides/handbook.pdf">
                    <img src="./preview/handbook.jpg" alt="">
                </a>
            </div>
            <div class="guide">
                <a href="./guides/handbook.pdf">
                    <img src="./preview/handbook.jpg" alt="">
                </a>
            </div>
        </div>
    </div>

    <div>

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
    @media (min-width:600px){
        .guide{
            width: 25vw;
        }
    }
</style>