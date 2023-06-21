<script>
    let spec_bois = [
        {"Name": "Dhruv B Nair", "Image": "./SC/Dhruv.JPG ", "Designation": "Secretary General","Message":"some positive message"},
        {"Name": "Bhavani Shankar Adusumilli", "Image": "./SC/Bhavani Shankar.JPG ", "Designation": "Deputy Secretary General","Message":"some positive message"},
            {"Name": "Srinivas Kantheti", "Image": "./SC/Srinivas.JPG", "Designation": "Director General","Message":"some positive message"},
    ]
    let normie_bois = [
        
{"Name": "Sai Srikar", "Image": "./SC/Srikar.JPG", "Designation": "Charge’ D Affairs"},
{"Name": "Rishika Karpurapu", "Image": "./SC/Rishika.JPG", "Designation": "Chief of Staff"},
{"Name": "Yamini Tumu", "Image": "./SC/Yamini.JPG", "Designation": "Head of Policy"},
{"Name": "Sai Sriya Talatam", "Image": "./SC/Sriya.JPG", "Designation": "USG of Policy"},
{"Name": "Siddharth Gumma", "Image": "./SC/Siddarth.JPG", "Designation": "Head of Delegate Affairs"},
{"Name": "Sanya Thakur", "Image": "./SC/Sanya.JPG", "Designation": "USG of Delegate Affairs"},
{"Name": "Ashmita Sirivella", "Image": "./SC/Ashmita.JPG", "Designation": "Head of Logistics"},
{"Name": "Abhinav Vadadi", "Image": "./SC/Abhinav.JPG", "Designation": "Head of Hospitality"},
{"Name": "Naila Sarah", "Image": "./SC/Naila Sarah (2).JPG", "Designation": "USG of Hospitality"},
{"Name": "Shravishta Ghawalkar", "Image": "/SC/Shravishta.JPG", "Designation": "Head of OC"},
{"Name": "Ditti Vijay Maroo", "Image": "./SC/Ditti.JPG", "Designation": "Head of OC"},
{"Name": "Yajat Varma", "Image": "./SC/Yajat.JPG", "Designation": "Head of IT"},
{"Name": "Eshaan Sistla", "Image": "./SC/Eshaan.JPG", "Designation": "Head of IT"},
{"Name": "Sreyoshi Dutta", "Image": "./SC/Sreyoshi.JPG", "Designation": "Head of Design"},
{"Name": "Anavi Anand", "Image": "./SC/Anavi.JPG", "Designation": "USG of Design"},
{"Name": "Shweta Kraleti", "Image": "./SC/Shweta.JPG", "Designation": "Head of Conference Affairs"},
{"Name": "Alekhya Ajay Kumar", "Image": "./SC/Alekhya.JPG", "Designation": "USG of Conference Affairs"},
{"Name": "Sruti Boyapati", "Image": "./SC/Sruti.JPG", "Designation": "Head of Marketing"},
{"Name": "Sri Sai Vyshnavi", "Image": "./SC/Vyshnavi.JPG", "Designation": "DR Sri Sai Vyshnavi"},
{"Name": "Prisha Pradhan", "Image": "./SC/Prisha.JPG", "Designation": "USG of Marketing"},
{"Name": "Preethi Uyyuru", "Image": "./SC/Preethi (2).JPG", "Designation": "Head of Photography"},
{"Name": "Gayatri Gorti", "Image": "./SC/Gayatri.JPG", "Designation": "USG of Photography"}
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
    <div class="info">
        <div><h1>{specboi["Name"]}</h1><h4 style="font-weight: 100;">{specboi["Designation"]}</h4></div><br>
        <div class="msg"><span>{specboi["Message"]}</span></div>
    </div>
</div>
{/each}

<div id="grid">
{#each normie_bois as normie}
    <div class="card">
        <img src={normie.Image} alt="">
        <h5 style="font-weight: 300;">{normie.Designation}</h5>
        <h4 style="font-weight: 700;">{normie.Name}</h4>
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
        background-color: #3f4f5f;
        color: #D0BEA8;
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
        height: 60vh;
        background-color: #3f4f5f;
        color: #D0BEA8;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .spec_bois{

    }
    .spec_bois:nth-child(odd){
        flex-direction: row-reverse;
    }
    .spec_bois #image{
        aspect-ratio:3/2;
        background-color:black;
        height:100%;
        overflow-y: hidden;
    }
    .spec_bois #image img{
        
        width: auto;
        height: 100%;
        aspect-ratio: 3/2;
    }
    
    .spec_bois .info{
        width: auto;
        flex-grow: 1;
        height: 100%;
        text-align: center;
        padding: 5%;
        box-sizing: border-box;
    }

    @media (min-width:600px){
        .card{
            width: 15vw;
        }
        .spec_bois img{
            height: 20vh;
        }
        .card h4{
            font-size: large;
        }
    }

    @media (max-width:600px){
        .spec_bois,.spec_bois:nth-child(odd){
            flex-direction: column;
        }
        .spec_bois .info{
            width: 100vw;
        }
        .spec_bois #image{
            width: 100vw;
        }
        .spec_bois #image img{
            height: auto;
            width: 100%;
        }
    }
</style>