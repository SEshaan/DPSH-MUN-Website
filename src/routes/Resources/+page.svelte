<script>

</script>

<div id="content">
    <h1>Resources</h1><br>
    <div id="cards">
        <div class="card">
            <a href="handbook.pdf"><img src="preview/handbook.jpg" alt=""></a><br><br>
            <h2 style="text-align: center;">Delegate Handbook</h2>
        </div>
    </div>
</div>



<style>
    #cards{
        display: flex;
        justify-content: start;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;
        row-gap: 5%;
    }
    .card{
        aspect-ratio: 1/2;
        width: 75%;
    }
    .card img{
        object-fit: contain;
        width: 100%;
    }
    #content{
        padding: 5%;
        min-height: 80vh;
        color:#d0bea8
    }
    #content a{
        text-decoration: underline;
        color: #d0bea8;
    }
    #content h1{
        font-size: xxx-large;
    }
    #content h2{
        font-size: xx-large;
    }
    @media (min-width:600px){
        .card{
            width: 25%;
        }
        #cards{
            flex-direction: row;
        }
    }
</style>