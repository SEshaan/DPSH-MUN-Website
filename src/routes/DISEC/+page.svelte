<div id="intro">
    <img src="./committees/DISEC.jpg" alt="" id="post">
    <!-- <h1>DISEC</h1> -->
</div>

<div id="content">
    <div id="Description">
        <h1>DISEC</h1><br>
        <div>Being the General Assembly's First Committee DISEC aims at establishing and maintaining international peace and security by preventing the negative armament of the world's human and economic resources. It considers all disarmament and international security matters within the scope of the UN Charter or relating to the powers and functions of any other organ of the UN. All of its resolutions are recommendatory in nature.</div>
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
        
        background-image: url("/disec.jpeg");
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
    }
    @media (min-width:600px){
        #content{
            columns: 2;
        }
    }
</style>