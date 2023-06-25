<div id="intro">
    <img src="./committees/NATO.jpg" alt="" id="post">
    <!-- <h1>DISEC</h1> -->
</div>

<div id="content">
    <div id="Description">
        <h1>NATO</h1><br>
        <div> NATO, a collective security organisation, guarantees the freedom and security of its members through political and military means. Predominantly composed of Western nations it has played a key role in defining the global political landscape after WW2. Being an HCC, this committee would be stuck in a particular crisis period, enabling scope for a different approach to a historical crisis. 
        </div>
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