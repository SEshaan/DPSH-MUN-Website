<script>
	import { onMount } from 'svelte';

	let d1 = new Date('2023-07-22');
	let date = new Date();

	let countdown = new Date().getTime();

	/**
	 * @type {string}
	 */
	// @ts-ignore
	// @ts-ignore
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
		days = Math.floor(countdown / (1000 * 60 * 60 * 24)).toString();
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
	// @ts-ignore
	// @ts-ignore
	let announcements = [{ date: '12/12/12', title: 'Delegate registrations are open' }];

	let commities = ['DISEC', 'NATO', 'UNSC', 'UNHRC', 'LK', 'IMF', 'IP'];
	let status = 0;
	/**
	 * @param {Number} x
	 */
	// @ts-ignore
	// @ts-ignore
	function move(x) {
		if (status + x < 0) {
			status = commities.length;
		}
		status = (status + x) % commities.length;
		// @ts-ignore
		document.getElementById('poster').src = './committees/' + commities[status] + '.jpg';
	}

	onMount(() => {
		const scrollableElement = document.querySelector('#committiees');
		// @ts-ignore
		scrollableElement.addEventListener('wheel', (event) => {
			event.preventDefault();
			// @ts-ignore
			scrollableElement.scrollBy({
				// @ts-ignore
				left: event.deltaY*3,
				behavior: 'smooth'
			});
		});
	});
</script>

{#each commities as com}
	<link rel="preload" as="image" href="./committees/{com}.jpg" />
{/each}

<div id="😲">
	<div id="Title" style="font-weight: 300;">
		<h6 style="font-weight: 100;">Debate•Discuss•Deliberate</h6>
		<h3>Delhi Public School, Hyderabad</h3>
		Model United Nations<br /> 2023-24<br />
	</div>
</div>
<div id="Content">
	<br />
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

	<div id="letter">
		<h1>Letter from the Secretary</h1><br>
		<p>
			Dear Delegates and Faculty Advisors,<br><br>

It is my great pleasure to invite you to the 13th edition of Harvard Model United Nations India, from August 12th to 15th 2023. Every year, HMUN India sees hundreds of delegates from across India and around the world come together to debate and develop solutions for some of the most pressing issues on the planet. I am ecstatic to watch the debate unfold again, this year. I am also honored to welcome you, for the first time in conference history, to the host city of Bengaluru (which happens to be my hometown too).
<br><br>
Our conference theme - Exploring New Horizons - recognises the bold actions that our generation will have to take in the coming years. HMUN India’s new home is one example of these horizons, as are the adaptations that everyone makes in this constantly changing world. But more pressingly, people across the world need to push boundaries in order to accomplish the goals that we have set for ourselves.
<br><br>
Our team has been hard at work ensuring that our conference continues to further the high standard of the past 12 years. Our diverse slate of committees covers some of the most pressing issues of today - from the ongoing crisis in Myanmar to the growing threat of weapons in space - while also addressing fascinating historical topics that still have an impact on our world. Every one of these committees will challenge you to think beyond the boundaries of conventional wisdom and hopefully offer a new perspective to take with you beyond this conference.
<br><br>
To our delegates - whether this is your first conference or your fifteenth - I hope that this year’s conference helps you view the world in a different light and think of old problems in new and innovative ways. As a former delegate at HMUN India myself, I have been witness to the transformative power of this incredible experience. I am truly excited to share this opportunity with you.
<br><br>
The Conference Team and I cannot wait to see you at The Hilton, Bengaluru in August!
<br><br>
Sincerely,<br>

Arpit B. Bhate
<br><br>
<img src="./SC/Dhruv.JPG" alt="">
		</p>
	</div>

	<br>
	<div id="stats">
		<div id="stats_holder">
			<div class="stat">
				<h1>2</h1>
				<h3>Days</h3>
			</div>
			<div class="stat">
				<h1>8</h1>
				<h3>Commities</h3>
			</div>
			<div class="stat">
				<h1>15+</h1>
				<h3>EB Members</h3>
			</div>
			<div class="stat">
				<h1>200+</h1>
				<h3>Delegates</h3>
			</div>
		</div>
		<br />
	</div>
	<br>
	<div id="combg">
		<h1 id="com" style="padding-left: 5%;">Committees</h1>
	<br />
	<!-- <div id="commities">
		<div id="current">
	
				<button on:click={() => {move(-1)}}>←</button>
				<div id="img">
					<img id="poster" src="./committees/DISEC.jpg" alt="">
				</div>
				<button on:click={() => {move(1)}}>→</button>
			
		</div>
	</div> -->

	<div id="committiees">
		<div id="comhold">
			{#each commities as com}
				<a href="./{com}">
					<div id="img">
						<img id="poster" src="./committees/{com}.jpg" alt="" />
					</div>
				</a>
			{/each}
		</div>
	</div>
	</div>

	<br />
	
<div id="FAQs">
	<h1 style="padding: 5%;font-size:xxx-large">FAQs</h1>
</div>
</div>

<style>
	#letter{
		padding: 5%;
		font-size: x-large;
	}
	#letter img{
		width: 100%;
		height: auto;
		aspect-ratio: 2/1;
		object-fit: cover;
		object-position: bottom;
	}
	#letter p{
		text-align: justify;
		width: 90%;
		margin: auto;
		font-size: medium;
	}
	#comhold {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 200vw;
	}
	#comhold #img {
		margin: 2.5%
	}
	#committiees {
		overflow-x: scroll;
		scroll-behavior: smooth;
	}
	#committiees::-webkit-scrollbar {
		width: 20px;
	}

	#committiees::-webkit-scrollbar-track {
		background-color: transparent;
	}

	#committiees::-webkit-scrollbar-thumb {
		background-color: #d6dee1;
		border-radius: 20px;
		border: 6px solid transparent;
		background-clip: content-box;
	}

	#committiees::-webkit-scrollbar-thumb:hover {
		background-color: #a8bbbf;
	}
	.pair {
		width: 25%;
	}
	#dat {
		text-align: center;
	}
	button {
		font-size: xxx-large;
		background-color: transparent;
		color: #d0bea8;
		border: none;
	}
	#com {
		text-align: left;
		font-size: xxx-large;
	}
	#commities {
		width: 100vw;
		min-height: 30vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	#img {
		height: auto;
		width: 50vw;
		aspect-ratio: 1/1;
		overflow: hidden;
	}
	#current {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	#img img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: 0.5s;
	}
	#stats_holder {
		width: 100vw;
		min-height: 20vh;
		background-color: #bf975b;
		color: #3f4f5f;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}
	.stat {
		width: 50%;
		height: 30vh;
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
		color: #d0bea8;
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
	.pair h2 {
		font-weight: 600;
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
		#countdown {
			padding: 0;
		}
		.stat {
			width: 25%;
		}
		#stats_holder {
			width: 100vw;
			margin: auto;
		}
		#countdown {
			width: 75vw;
		}
		#img {
			width: 40vh;
		}

		.stat h1 {
			font-size: xxx-large;
		}
		.stat h3 {
			font-size: x-large;
			font-weight: 700;
		}
		#letter p{
			width: 75%;
		}
	}
</style>
