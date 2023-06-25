<div id="intro">
    <img src="./committees/UNSC.jpg" alt="" id="post">
    <!-- <h1>DISEC</h1> -->
</div>

<div id="content">
    <div id="Description">
        <h1>UNSC</h1><br>
        <div>UNSC, a principal organ of the UN, aims to maintain international peace and security through international cooperation in solving problems while promoting respect for human rights. Being the only body of the UN with the purview of adopting legally binding resolutions, its mandate encompasses an extensive array of both thematic and situational issues.</div>
    </div>
    
    <div id="Agenda">
        <h1>Agenda</h1><br>
        <div>To ensure that nukes arent in the hands of osama bin laden</div>
    </div>
    
    <div id="Eb">
        <h1>EB Members</h1><br>
        <ul>
            <li>Osama Bin Laden</li>
        </ul>
    </div>
    
    <div id="Resources">
        <h1>Resources</h1><br>
        <ul>
            <li><a href="www.google.com">Background Guides →</a></li>
        </ul>
    </div>
</div>


<style>
    a{
        color: #D0BEA8;
        text-decoration: underline;
    }
    #Description,#Agenda,#Eb,#Resources{
        padding: 5%;
        text-align: justify;
        font-size: large;
    }
    #content{
        color: #D0BEA8;
    }
    #content::before{
        position: absolute;
        width: 3px;
        background-color: black;
    }
    h1{
        font-size: xxx-large;
        color: #D0BEA8;
    }
    #intro{
        width: 100vw;
        height: 70vh;
        
        background-image: url("/DISEC.png");
        background-repeat: no-repeat;
        background-size: cover;

        color: white;

        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    #post{
        width: 50vmin;
        height: auto;
        aspect-ratio: 1/1;
        box-shadow: 0px 10px 20px 20px rgba(0,0,0,0.75)
    }
    @media (min-width:600px){
        #content{
            columns: 2;
        }
    }
</style>