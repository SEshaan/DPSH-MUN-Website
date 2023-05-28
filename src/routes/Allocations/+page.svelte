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

    <div id="🧐">
        <h1>Allocations</h1>
    <br>
    <select name="" id="com_sel">
        <option value="disec" id="disec">DISEC</option>
        <option value="sc" id="sc">SC</option>
    </select>
    </div>
    <iframe id="frame" title="fuck_off" src="./map.html" frameborder="0"></iframe>




<style>
    #🧐{
        margin-left: 5vw;
    }
    #com_sel{
        font-size: large;
        border-radius: 5px;
    }
    iframe{
        aspect-ratio: 2/1;
        width: 75vw;
        margin:auto;
        display: block;
    }
</style>