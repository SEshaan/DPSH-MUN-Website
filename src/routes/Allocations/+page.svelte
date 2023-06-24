<script>
    import { onMount } from 'svelte';

    onMount(() => {            
        
        const e = document.querySelector("#com_sel")
        e?.addEventListener("change", () => {
            // @ts-ignore
            var text = e.options[e.selectedIndex].text;
            // @ts-ignore
            document.getElementById('frame').contentWindow.postMessage(text , '*')
        })
        
    });
    
</script>

    
    <br>
    <div id="🧐">
        <h1>Allocations</h1>
    <br>
    <select name="" id="com_sel">
        <option value="disec" id="disec">DISEC</option>
        <option value="sc" id="sc">SC</option>
    </select>
    </div>
    <div class="frame">
        <iframe id="frame" title="map" src="./map.html" frameborder="0"></iframe>
    </div>

    <div id="red">
        
    </div>


<style>
    h1{
        color: #D0BEA8;
    }
    #🧐{
        margin-left: 5vw;
    }
    #com_sel{
        font-size: large;
        border-radius: 5px;
    }
    #frame{
        width: 100%;
        height: 100%;
    }
    .frame{
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 2/1;
        width: 75vw;
        margin:auto;
        overflow: visible;
    }
    @media (max-width:600px){
        iframe{
            width: 150vw !important;
        }
        .frame{   
            display: block;
            overflow-x: scroll;
        }
        .frame{
            height: 50vh;
            width: 100vw;
        }
    }
</style>