<script>
	let d1 = new Date('2023-07-22');
	let date = new Date();

	let countdown = new Date().getTime();

	/**
	 * @type {string}
	 */
	let months = '00';
	/**
	 * @type {string | any[]}
	 */
	let days = '00';
	/**
	 * @type {string | any[]}
	 */
	let hours = '00';
	/**
	 * @type {string | any[]}
	 */
	let minutes = '00';
	/**
	 * @type {string | any[]}
	 */
	let seconds = '00';
	setInterval(() => {
		date = new Date();
		// @ts-ignore
		countdown = new Date(d1 - date).getTime();
		days = Math.floor((countdown / (1000 * 60 * 60 * 24))).toString();
		hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();
		minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60)).toString();
		seconds = Math.floor((countdown % (1000 * 60)) / 1000).toString();

		if (days.length != 2) {
			days = '0' + days;
		}
		if (hours.length != 2) {
			hours = '0' + hours;
		}
		if (minutes.length != 2) {
			minutes = '0' + minutes;
		}
		if (seconds.length != 2) {
			seconds = '0' + seconds;
		}
	}, 100);


    // @ts-ignore and fuck yourself
    let announcements = [{date:"12/12/12",title:"Delegate registrations are open"}]


	let commities = ["DISEC","NATO","UNSC","UNHRC","LK","IMF","IP"]
	let status = 0
	/**
	 * @param {Number} x
	 */
	function move(x){
		if(status + x < 0){status = commities.length}
		status = (status + x) % commities.length
		// @ts-ignore
		document.getElementById("poster").src = "./committees/" + commities[status] + ".jpg"
	}
</script>


<div id="😲">
	<div id="Title" style="font-weight: 300;">
		<h6 style="font-weight: 100;">Debate•Discuss•Deliberate</h6><h3>Delhi Public School, Hyderabad</h3>Model United Nations<br> 2023-24<br>
	</div>
</div>
<div id="Content">
	<br>
	<div id="countdown">
		<div class="pair">
			<div class="card_holder">
				<div class="card">{days}</div>
			</div>
			<h2>Days</h2>
		</div>
		<div class="pair">
			<div class="card_holder">
				<div class="card">{hours}</div>
			</div>
			<h2>Hours</h2>
		</div>
		<div class="pair">
			<div class="card_holder">
				<div class="card">{minutes}</div>
			</div>
			<h2>Minutes</h2>
		</div>
		<div class="pair">
			<div class="card_holder">
				<div class="card">{seconds}</div>
			</div>
			<h2>Seconds</h2>
		</div>
	</div>
	<br>
	<div id="stats">
		<div id="stats_holder">
			<div class="stat">
				<h1>5+</h1>
				<h3>Commities</h3>
			</div>
			<div class="stat">
				<h1>10+</h1>
				<h3>People</h3>
			</div>
			<div class="stat">
				<h1>1+</h1>
				<h3>Days</h3>
			</div>
			<div class="stat">
				<h1>atleast 2+</h1>
				<h3>Chairpeople</h3>
			</div>
		</div>
		<br>
	</div>
	<h1 id="com">Committees</h1><br>
	<div id="commities">
		<div id="current">
	
				<button on:click={() => {move(-1)}}>←</button>
				<div id="img">
					<img id="poster" src="./committees/DISEC.jpg" alt="">
				</div>
				<button on:click={() => {move(1)}}>→</button>
			
		</div>
	</div>
	<br>
	<h1 id="dat">Important Dates</h1>
	<ul>
		<li></li>
	</ul>
	
</div>

<style>
	#dat{
		text-align: center;
	}
	button{
		font-size: xxx-large;
		background-color: transparent;
		color:#D0BEA8;
		border: none;
	}
	#com{
		text-align: center;
	}
	#commities{
		width: 100vw;
		min-height: 30vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	#img{
		height: auto;
		width: 50vw;
		aspect-ratio: 1/1;
		overflow: hidden;
		
	}
	#current{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	#img img{
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: 0.5s;
	}
	#stats_holder{
		width: 100vw;
		min-height: 20vh;
		background-color: #bf975b;
		color: #3f4f5f;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}
	.stat{
		width: 50%;
		height: 20vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}


	#😲 {
		width: 100vw;
		height: 80vh;
		background-image: url('/munbg.jpeg');
		background-position: 50% 50%;
		background-repeat: no-repeat;
		background-size: cover;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	#Title {
		color: white;
		font-size: xx-large;
		text-align: center;
	}


	#Content {
		width: 100vw;
		height: auto;
		background: #3f4f5f;
		color: #D0BEA8;
	}

	#countdown {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
        flex-wrap: wrap;
		width: 85vw;
		margin: auto;
		text-align: center;
        border: solid gray 2px;
        border-radius: 1em;
        min-height: 30vh;
        padding: 5%;
        
	}
	.card {
		display: flex;
        justify-content: center;
        align-items: center;
		font-size: xx-large;
		font-weight: 100;
		aspect-ratio: 1/2;
		padding: 1rem;
		height: 3rem;
		width: auto;
		text-align: center;
	}
    .pair h2{
        font-weight: 400;
    }
	.card_holder {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media (min-width: 600px) {
		#Title {
			font-size: xxx-large;
		}
        #countdown{
            padding: 0;
        }
		.stat{
			width: 25%;
		}
		#stats_holder{
			width: 100vw;
			margin: auto;
		}
		#countdown{
			width: 50vw;
		}
		#img{
			width: 40vh;
		}
	}
</style>
