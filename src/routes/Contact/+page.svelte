

<div id="content">
    <h1 id="title">Contact Us</h1>
    <div id="card_cont">
        <div class="card">
            <form action="">
                <h4>Name</h4>
                <input type="text">
                <h4>Email</h4>
                <input type="text">
                <h4>Phone</h4>
                <input type="text">
                <h4>Questions/Messages</h4><br>
                <textarea name="" id="" cols="30" rows="10"></textarea><br><br>
                <button>Submit</button>
            </form>
        </div>
        <div class="card">
            <iframe title="map" class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3177.8396650489076!2d78.36211373353493!3d17.43603045514316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93aa78147351%3A0x91d35a329aca87f2!2sDelhi%20Public%20School%2C%20Hyderabad%20Sr.%20Sec.%20Campus!5e0!3m2!1sen!2sin!4v1684669283155!5m2!1sen!2sin" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div style="height:30%;margin:10% 0 10% 5%">
                <h2 style="font-weight: 400;">Delhi Public School,<br>Hyderabad</h2>
            </div>
        
        </div>
    </div>
</div>




<style>
    

    #title{
        text-align: center;
        padding: 5vmin 0 7.5vmin 0;
        margin: auto;
    }
    
    #card_cont{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width:100vw;
        min-height: 100vh;
    }

    .card{
        aspect-ratio: 3.5/5;
        width: 80vw;
        border: 3px solid rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        margin-bottom: 5%;
    }
    
    .card h4{
        font-weight: 400;
        margin-top: 7.5%;
    }

    .card textarea{
        height: 20%;
        width: 90%;
        margin: auto;
        display: block;
    }

    .card button{
        background-color: #06562F;
        color: white;
        border: none;
        border-radius: 25px;
        padding: 5%;
        width: 25vw;
        margin:auto;
        display: block;
    }

    .card form{
        width: 80%;
        height: 100%;
        margin: auto;
    }
    .card input{
        height: 7.5%;
        border:none;
        border-bottom: solid 1px black;
        width: 100%;
    }

    .map{
        width: 100%;
        height: 50%;
    }


    @media (min-width:600px){
        #title{
            padding: 2.5vh 5vw 7.5vh 5vw;
            text-align: left;
        }
        .card{
            width:40vw;
            aspect-ratio: 1;
        }
        #card_cont{
            min-height: 80vh;
            flex-direction: row;
        }
        
    }
</style>