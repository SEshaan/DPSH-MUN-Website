<script>
    import { onMount } from 'svelte';

    onMount(() => {            
        
        const e = document.querySelector("#com_sel")
        e?.addEventListener("change", () => {
            // @ts-ignore
            var text = e.options[e.selectedIndex].text;
            // @ts-ignore
            document.getElementById("frame").contentWindow.postMessage(text, '*');
        })
        
    });
    
</script>

    <div style="width:100vw;height:100vh;backdrop-filter:blur(16px);position:fixed;">

        <br><br><br>
<div style="border-top: solid 10px;
border-image: repeating-linear-gradient( -75deg, yellow, yellow 10px, black 10px, black 20px) 20;">
</div>
<br><br><br>
<!-- svelte-ignore a11y-invalid-attribute -->
<center><h1 style="font-size: xxx-large;">Uh Oh!</h1><br><p style="font-size: x-large;">Allocations aren't out yet! Check back soon for updates</p><br><a style="text-decoration: none;color:black;font-weight:600" href="javascript:history.back()">Go Back →</a></center>
<br><br><br>
<div style="border-top: solid 10px;
border-image: repeating-linear-gradient( -75deg, yellow, yellow 10px, black 10px, black 20px) 20;">
</div>

    </div>

    <div id="🧐">
        <h1>Allocations</h1>
    <br>
    <select name="" id="com_sel">
        <option value="disec" id="disec">DISEC</option>
        <option value="sc" id="sc">SC</option>
    </select>
    </div>
    <div id="frame">
        <iframe id="frame" title="map" src="./map.html" frameborder="0"></iframe>
    </div>

    <div>hi</div>


<style>
    #🧐{
        margin-left: 5vw;
    }
    #com_sel{
        font-size: large;
        border-radius: 5px;
    }
    #frame{
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 2/1;
        width: 75vw;
        margin:auto;
        display: block;
        overflow: scroll;
    }
    @media (max-width:600px){
        iframe{
            width: 150vw !important;
        }
        #frame{
            height: 50vh;
            width: 100vw;
        }
    }
</style>