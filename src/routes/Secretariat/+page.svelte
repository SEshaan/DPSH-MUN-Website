<script>
    let spec_bois = [
        {"Name": "Dhruv B Nair", "Image": " ", "Designation": "Secretary General","Message":"some positive message"},
        {"Name": "Bhavani Shankar Adusumilli", "Image": " ", "Designation": "Deputy Secretary General","Message":"some positive message"},
        {"Name": "Srinivas Kantheti", "Image": " ", "Designation": "Director General","Message":"some positive message"},
    ]
    let normie_bois = [
        
{"Name": "Sai Srikar", "Image": " ", "Designation": "Charge’ D Affairs"},
{"Name": "Rishika Karpurapu", "Image": " ", "Designation": "Chief of Staff"},
{"Name": "Yamini Tumu", "Image": " ", "Designation": "Head of Policy"},
{"Name": "Sai Sriya Talatam", "Image": " ", "Designation": "USG of Policy"},
{"Name": "Siddharth Gumma", "Image": " ", "Designation": "Head of Delegate Affairs"},
{"Name": "Sanya Thakur", "Image": " ", "Designation": "USG of Delegate Affairs"},
{"Name": "Ashmita Sirivella", "Image": " ", "Designation": "Head of Logistics"},
{"Name": "Abhinav Vadadi", "Image": " ", "Designation": "Head of Hospitality"},
{"Name": "Naila Sarah", "Image": " ", "Designation": "USG of Hospitality"},
{"Name": "Shravishta Ghawalkar", "Image": " ", "Designation": "Head of OC"},
{"Name": "Ditti Vijay Maroo", "Image": " ", "Designation": "Head of OC"},
{"Name": "Yajat Varma", "Image": " ", "Designation": "Head of IT"},
{"Name": "Eshaan Sistla", "Image": " ", "Designation": "Head of IT"},
{"Name": "Sreyoshi Dutta", "Image": " ", "Designation": "Head of Design"},
{"Name": "Anavi Anand", "Image": " ", "Designation": "USG of Design"},
{"Name": "Shweta Kraleti", "Image": " ", "Designation": "Head of Conference Affairs"},
{"Name": "Alekhya Ajay Kumar", "Image": " ", "Designation": "USG of Conference Affairs"},
{"Name": "Sruti Boyapati", "Image": " ", "Designation": "Head of Marketing"},
{"Name": "Sri Sai Vyshnavi", "Image": " ", "Designation": "DR Sri Sai Vyshnavi"},
{"Name": "Prisha Pradhan", "Image": " ", "Designation": "USG of Marketing"},
{"Name": "Preethi Uyyuru", "Image": " ", "Designation": "Head of Photography"},
{"Name": "Gayatri Gorti", "Image": " ", "Designation": "USG of Photography"}
    ]
</script>

<!-- <div id="intro">
    <div style="text-align: center;">
        <span style="font-weight: 100;">The</span><br>
        <span style="font-weight: 700;font-size:xxx-large">Secretariat</span>
    </div>
</div> -->

{#each spec_bois as specboi}
<div class="spec_bois">
    <div id="image"><img src={specboi.Image} alt=""></div>
    <div style="width: 60vw;" class="info">
        <div><h1>{specboi["Name"]}</h1><h4 style="font-weight: 100;">{specboi["Designation"]}</h4></div><br>
        <div class="msg"><span>{specboi["Message"]}</span></div>
    </div>
</div>
{/each}

<div id="grid">
{#each normie_bois as normie}
    <div class="card">
        <img src={normie.Image} alt="">
        <h4 style="font-weight: 300;">{normie.Designation}</h4>
        <h3 style="font-weight: 700;">{normie.Name}</h3>
    </div>
{/each}
</div>

<style>
    #grid{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
        padding:1% 0.5% 0 0.5%;
    }
    .card{
        aspect-ratio: 5/3;
        width: 40vw;
        height: auto;
        text-align: center;
        margin: 0.75%;
        overflow: visible;
    }
    .card img{
        width: 100%;
        aspect-ratio: 3/2;
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
        height: 40vh;
        background-color: #057019;
        color: white;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .spec_bois{

    }
    .spec_bois #image{

    }
    

    @media (min-width:600px){
        .card{
            width: 15vw;
        }
        .spec_bois img{
            height: 20vh;
        }
        .card h3{
            font-size: x-large;
        }
    }

    @media (max-width:600px){
        
    }
</style>