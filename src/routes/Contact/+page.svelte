<script src="https://www.google.com/recaptcha/api.js" async defer></script>

<div id="content">
    
    <div id="block_cont" class="">
        <div class="block" id="form">
            <h1 id="title">Contact Us</h1>
            <form action="">
                <h2>Name</h2>
                <input type="text">
                <h2>Email</h2>
                <input type="text">
                <h2>Phone</h2>
                <input type="text">
                <h2>Questions/Messages</h2>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <div class="g-recaptcha" data-sitekey="your_site_key"></div>
                <input type="submit" value="Submit" class="button">
            </form>
        </div>
        <div class="block" id="deets">
            <iframe title="map" class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3177.8396650489076!2d78.36211373353493!3d17.43603045514316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93aa78147351%3A0x91d35a329aca87f2!2sDelhi%20Public%20School%2C%20Hyderabad%20Sr.%20Sec.%20Campus!5e0!3m2!1sen!2sin!4v1684669283155!5m2!1sen!2sin" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div>
                <h2 style="font-weight: 400;"><center>Delhi Public School,Hyderabad</center></h2>
            </div>
        </div>
    </div>
</div>




<style>
    #block_cont{
        /* Dimensions */
        width:100vw;
        height: auto;

        /*Flex Box*/
        display: grid;
    }

    .block{
        border: 1px solid black;
    }

    #title{
        height: 10vh;
        text-align: center;
    }

    #form form{
        margin: auto;
        height: 75vh;
        width: 80%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: stretch;
        flex-wrap: wrap;
    }

    #form .button{
        width: 50%;
        background-color: green;

    }

    #deets{
        height: 90vh;
    }

    /* Styles for Wider Screens */
    @media (min-width:600px){
        #block_cont{
            min-height: 80vh;
            grid-template-columns: auto auto;
        }
    }
</style>