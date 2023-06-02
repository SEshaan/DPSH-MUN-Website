<script>

</script>

<div id="intro">
    <h1>Our Committees</h1>
</div>
<div id="committees">
    {#each ["DISEC" ,"UNSC" ,"NATO","UNHRC","IP","LS","IMF"] as i}
        <div class="section">
            <img src={"./committees/"+i+".png"} alt="">
            <h1>{i}</h1>
            <a href="./Allocations?{i}">View Allocations →</a>
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
        color: black;
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
        border: solid black 2px;
        padding: 2.5%;
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
        background-color: #057019;
        color: white;
    }
    @media (min-width:600px){
        .section{
            width: 20vw;
        }
        .section img{
            width: 15vw;
        }
    }
</style>