<script>
    let spec_bois = [
        {"S.No":1,"Name":"Srinivas Confetti","Message":"Topper fellow i am","Picture":"./committees/UNHRC.png"},
        {"S.No":2,"Name":"SAT Fellow","Message":"aakash i bunk","Picture":"./committees/NATO.png"},
        {"S.No":3,"Name":"The other guy","Message":"insert positive message here","Picture":"./committees/NATO.png"}
    ]
    let normie_bois = [
        {"Name":"Osama Bin Laden","Image":"./committees/NATO.png","Designation":"Head of Creative Solutions"},
        {"Name":"Donald Trump","Image":"./committees/NATO.png","Designation":"Head of MUN"},
        {"Name":"Osama Bin Laden","Image":"./committees/NATO.png","Designation":"Head of Creative Solutions"},
        {"Name":"Donald Trump","Image":"./committees/NATO.png","Designation":"Head of MUN"},
        {"Name":"Osama Bin Laden","Image":"./committees/NATO.png","Designation":"Head of Creative Solutions"},
        {"Name":"Donald Trump","Image":"./committees/NATO.png","Designation":"Head of MUN"},
        {"Name":"Osama Bin Laden","Image":"./committees/NATO.png","Designation":"Head of Creative Solutions"},
        {"Name":"Donald Trump","Image":"./committees/NATO.png","Designation":"Head of MUN"}
    ]
</script>

<div id="intro">
    <div style="text-align: center;">
        <span style="font-weight: 100;">The</span><br>
        <span style="font-weight: 700;font-size:xxx-large">Secretariat</span>
    </div>
</div>

{#each spec_bois as specboi}
<div class="spec_bois {(specboi["S.No"] % 2 == 0) ? "right" : ""}">
    <img src={specboi.Picture} alt="">
    <div style="width: 60vw;">
        <h2>{specboi["Name"]}</h2><br>
        <span>{specboi["Message"]}</span>
    </div>
</div>
{/each}
<div id="grid">
{#each normie_bois as normie}
    <div class="card">
        <img src={normie.Image} alt="">
        <h6>{normie.Designation}</h6>
        <h2>{normie.Name}</h2>
    </div>
{/each}
</div>

<style>
    #grid{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
    .card{
        aspect-ratio: 3/4;
        width: 40vw;
        height: auto;
        text-align: center;
        margin: 2.5%;
        overflow: visible;
    }
    .card img{
        height: 75%;
        aspect-ratio: 1/1;
        width: auto;
        object-fit: contain;
        
    }
    #intro{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100vw;
        height: 50vh;
    }
    .spec_bois{
        width: 100vw;
        height: 30vh;
        background-color: #057019;
        color: white;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .spec_bois.right{
        flex-direction: row-reverse;
        text-align: right;
    }
    .spec_bois img{
        width: auto;
        height: 10vh;
        object-fit: contain;
    }

    @media (min-width:600px){
        .card{
            width: 15vw;
        }
        .spec_bois img{
            height: 20vh;
        }
    }
</style>