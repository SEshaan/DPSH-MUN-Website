    <br>
    <div id="bgguide">
        
        <img src="./preview/itenary.jpg" alt="" id="itenary">

    </div>


<style>
    *{
        color: #d0bea8;
    }
    #bgguide #preview img{
        object-fit: contain;
        height: auto;
        width: 100%;
    }
    #bgtitle{
        font-size: xxx-large;
        margin-left: 5%;
    }
    #bgguide #itenary{
        width: 80vw;
    }
    #bgguide{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
    }
    @media (min-width:600px){
        #bgguide #itenary{
            width: 60vw;
        }
    }
</style>