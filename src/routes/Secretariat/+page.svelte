<script>
    let spec_bois = [
        {"Name": "Dhruv B Nair", "Image": "./SC/Dhruv.jpeg ", "Designation": "Secretary General","Message":"Dhruv B Nair, the Sec-Gen for this year's DPSHMUN, is a visionary young mind filled with passion and enthusiasm towards doing what he loves. He has always believed in making an impact and has an overstriding attitude of never settling for mediocrity. A quality of his that is praised, at the same time considered to be a hassle, is his strive for perfection.\n One of his favorite quotes being - 'Never tell the sky is the limit, when there are footprints on the moon'  He is currently a commerce student with law being his field of interest. He has been in the MUN circuit since 2017 and has had 20+ experience in various national and international MUNs. His interest in public speaking never fades, as he still loves participating in debates and similar competitions. This year he comes up with a goal of providing the best through simplicity and he works with his team to achieve the same at the highest level and to make sure this edition of the DPSHMUN is something to be remembered for a long time."},
        {"Name": "Bhavani Shankar Adusumilli", "Image": "./SC/Bhavani Shankar.JPG ", "Designation": "Deputy Secretary General","Message":"Shankar has an unwavering passion for photography, cinema and technology. He immerses himself in the world around him, constantly seeking unique perspectives and adding tangible inputs to the people around him. Being a cinephile, his main topic of conversation during lunch breaks is the beauty of Imax format, whose repeated discussion is not appreciated by his peers. Shankar's journey as a photographer, videographer and cinephile is not just about the technical aspects; it's about connecting with people, telling stories, and capturing the essence of the human experience. Through his photographs, videos and his appreciation for the world of movies, he seeks to inspire others to see the world differently and appreciate the power of visual storytelling. As the deputy secretary general for this edition of the conference, he aims to provide delegates with a friendly field to express their views, thoughts, and arguments about pressing global issues. Shankar extends his warm welcome as the  deputy secretary general of DPSHMUN 2023, as we embark on an extraordinary journey of diplomacy, dialogue, and the making of future policymakers."},
        {"Name": "Srinivas Kantheti", "Image": "./SC/Srinivas Portrait.JPG", "Designation": "Director General","Message":"Srinivas, leads with quiet confidence and genuine desire to foster collaboration. With a keen organisational acumen and effective communication skills, he guides teams towards success. Beyond his professional role, he engages in creative endeavors and actively contributes to social causes.\n In addition, Srinivas harbors a deep passion for design. He possesses a keen eye for aesthetics and a creative mindset, which he applies to various aspects of his work. As the Director General , his commitment to fostering meaningful dialogue and promoting collaborative problem-solving sets the tone for an engaging and transformative conference."},
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
{"Name": "Eshaan Sistla", "Image": "./SC/Eshaan.JPG", "Designation": "Head of IT"},
{"Name": "Yajat Varma", "Image": "./SC/Yajat.JPG", "Designation": "Head of IT"},
{"Name": "Sreyoshi Dutta", "Image": "./SC/Sreyoshi.JPG", "Designation": "Head of Design"},
{"Name": "Anavi Anand", "Image": "./SC/Anavi.JPG", "Designation": "USG of Design"},
{"Name": "Shweta Kraleti", "Image": "./SC/Shweta.JPG", "Designation": "Head of Conference Affairs"},
{"Name": "Alekhya Ajay Kumar", "Image": "./SC/Alekhya.JPG", "Designation": "USG of Conference Affairs"},
{"Name": "Sruti Boyapati", "Image": "./SC/Sruti.JPG", "Designation": "Head of Marketing"},
{"Name": "Sri Sai Vyshnavi", "Image": "./SC/Vyshnavi.JPG", "Designation": "Head of Marketing"},
{"Name": "Prisha Pradhan", "Image": "./SC/Prisha.JPG", "Designation": "USG of Marketing"},
{"Name": "Preethi Uyyuru", "Image": "./SC/Preethi (2).JPG", "Designation": "Head of Photography"},
{"Name": "Gayatri Gorti", "Image": "./SC/Gayatri.JPG", "Designation": "USG of Photography"}
    ]
</script>

<div id="intro">
    <img class="bg" src="./SC/SEC GROUP.JPG" alt="">
    <div style="text-align: center;">
        <span style="font-weight: 700;">Secretariat</span>
    </div>
</div>

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
        box-sizing: border-box;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        width: 100vw;
        height: auto;
        aspect-ratio:2.25/1;
        color: #ccd4d7;
        background-color: #3f4f5f;
        font-size:15vmin
    }
    #intro div{
        z-index: 2;
        margin-top: 2.5%;
    }
    .bg{
        left: 0;
        width: 100%;
        height: auto;
        aspect-ratio: 2.25/1;
        position: absolute;
        object-fit: cover;
        object-position: bottom;
        z-index: 1;
        filter: saturate(0.7) opacity(0.75);
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

    .spec_bois:nth-child(odd){
        flex-direction: row-reverse;
    }

    .spec_bois #image{
        aspect-ratio:3/2;
        background-color:black;
        height:100%;
        overflow-y: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
    }

    .spec_bois #image img{
        object-fit: cover;
        object-position: center;
        width: auto;
        height: 100%;
        aspect-ratio: 3/2;
    }
    
    .spec_bois .info{
        width: auto;
        flex-grow: 1;
        height: 100%;
        text-align: center;
        padding: 2.5%;
        box-sizing: border-box;
    }

    .spec_bois .msg{
        word-wrap: break-word;
        max-width: 40vw;
        margin: auto;
        text-align: justify;
        font-size: medium;
    }

    @media (min-width:600px){
        .card{
            width: 21vw;
        }
        .spec_bois #image{
            max-width:50vw;
        }
        .card h4{
            font-size: large;
        }
    }

    @media (max-width:600px){
        .spec_bois{
            height: auto;
            min-height: 60vw;
            padding: 2.5% 0 2.5% 0;
        }
        .spec_bois,.spec_bois:nth-child(odd){
            flex-direction: column;
        }
        .spec_bois .info{
            width: 100vw;
            padding: 0;
        }
        .spec_bois #image{
            width: 100vw;
        }
        .spec_bois #image img{
            height: auto;
            width: 100%;
        }
        .spec_bois .msg{
            max-width: 90vw;
        }
        #intro{
            font-size: 10vmin;
        }
    }
</style>
