<div id="content">
	<div id="con">
		<h1>Contact Us</h1>
		<form action="POST">
			<div class="field_cont">
                <h3>Name</h3>
			    <input type="text" />
            </div>
			<div class="field_cont">
                <h3>Email</h3>
			    <input type="text" />
            </div>
			<div class="field_cont">
                <h3>Phone</h3>
			    <input type="text" />
            </div>
			<div class="field_cont">
                <h3>Questions/Messages</h3>
			    <textarea name="messages" id="" cols="30" rows="2" />
            </div>
            <button>Submit →</button>
		</form>
	</div>
</div>


<style>
	#content {
		background-color: white;
		height: 90vh;
		display: flex;
		align-items: center;
		justify-content: center;
        background-image: url("/contactbg.png");
        background-position: 90% 90%;
        backdrop-filter: blur(4px);

	}
	#con {
		height: 80vh;
		width: auto;
		aspect-ratio: 1/1;
		background-color: white;
		text-align: center;
        box-shadow: rgb(63, 63, 63) -4px 4px 16px;
	}
	#con input {
		background: none;
		border: solid lightgray 1px;
        width: 95%;
        height: 25px;
	}
	#con textarea {
		background: none;
		border: solid lightgray 1px;
		resize: none;
        width: 95%;
	}
	#con h1 {
		padding: 5%;
	}
    #con h3{
        font-size: small;
        font-weight: 200;
        
    }
    #con form{
        width: 60%;
        height: 80%;
        margin: auto;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: start;
    }
    #con .field_cont{
        width: 100%;
        min-height: 10%;
    }
    #con button{
        width: 6rem;
        height: 2rem;
        border: none;
        background-color: black;
        color: white;
        margin: 0 auto 0 auto;
        border-radius: 5%;
    }

    @media (max-width:800px){
        #con{
            aspect-ratio: 3/5;
            height: auto;
            width: 70vw;
        }
    }
</style>
