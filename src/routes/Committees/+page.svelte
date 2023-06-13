<script>
	import { onMount } from "svelte";


    let commities = ["DISEC","NATO","UNSC","UNHRC","LK","IMF","IP"]
    
</script>

<div id="intro">
    <h1 >Our Committees</h1>
</div>
<div id="committees">
    {#each commities as i}
        <div class="section">
            <img src={"./committees/"+i+".jpg"} alt="">
            <div>
            <a href="./Resources?{i}">Resources → </a><br>
            <a href="./Allocations?{i}">Allocations →</a>
            </div>
        </div>
    {/each}
</div>



<style>

#committees{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        min-height: 80vh;
    }
    .section a{
        text-decoration: none;
        color: #057019;
        font-size:small
    }
    .section a:hover{
        color:black;
        transition:0.5s
    }
    .section a:not(:hover){
        color:#057019;
        transition:0.5s
    }
    .section{
        margin: 2.5%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        aspect-ratio: 1/1;
        height: auto;
        width: 40vw;
    }
    .section img{
        aspect-ratio: 1/1;
        width: 30vw;
        height: auto;
        object-fit: contain;
    }
    #intro{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 50vh;
        background-image:url("./another bg.png");
		background-position: 50% 50%;
		background-repeat: no-repeat;
		background-size: cover;
        color: white;
    }
    @media (min-width:600px){
        .section{
            width: 20vw;
        }
        .section img{
            width: 15vw;
        }
        .section a{
            font-size:large
        }
        #intro {
            font-size:x-large
        }
    }
</style>