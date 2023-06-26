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
				left: event.deltaY * 3,
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
	<br />

	<div id="letter">
		<h1>Letter from the Secretary-General</h1>
		<br />
		<div id="lettercont">
			<img src="./SC/letter.JPG" alt="" id="letterimg" />
			<p>
				<br><br>
				Dear Dipsites and honorable Delegates,<br /><br />
				It gives me immense pleasure to welcome all the esteemed participants to yet another edition
				of the Delhi Public School Model United Nations 2023 (DPSHMUN'23). Irrespective of the number
				of editions of DPSHMUN, our main principles for the MUN remain the same – Debate.Discuss.Deliberate
				<br /><br />
				MUN is indeed an art form in itself. It's more than just debates or speeches. It's also about
				lobbying, negotiations; a showcase of diplomacy in its true sense. To truly enjoy and relish
				this art form, students only require the skill and courage to speak up when the time comes. In
				MUNs, one must have the ability to be passionate about the topic they speak about and the portfolio
				they represent. Students usually discover their hidden skills and talents while they participate
				in a MUN. I, myself, am deeply indebted to the craft of participating in MUNs as it gave me the
				realization which changed my interests in many ways. <br /><br />
				We, the Secretariat, are grateful for the enthusiasm shown by the participants. The motive is
				to keep things simple but significant, and the team has done the same. A new edition, and we
				have brought a new set of committees and agendas for the delegates to explore. From international
				security and global conflicts to human rights and economic policies, this edition offers it all.
				We also provide experience-packed EB members who are dynamic and will make sure that the conference
				will be filled with energy. To make sure this the conference is beginner friendly, we aim to
				provide all resources and guidance to kick start your journey in the MUN. <br /><br />
				So, join us this July and get to experience this yourself. I and the team cannot wait to host
				you all at the DPSHMUN'23. <br /><br />
				Sincerely,<br />
				Dhruv B Nair <br />
				Secretary General, DPSHMUN'23
				<br /><br />
			</p>
		</div>
	</div>

	<br />
	<div id="stats">
		<div id="stats_holder">
			<div class="stat">
				<h1>2</h1>
				<h3>Days</h3>
			</div>
			<div class="stat">
				<h1>7</h1>
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
	<br />
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
					
						<div id="img">
							<a href="./{com}">
							<img id="poster" src="./committees/{com}.jpg" alt="" />
						</a>
						</div>
					
				{/each}
			</div>
		</div>
	</div>

	<br />

	<div id="FAQs">
		<h1 style="font-size:xxx-large">FAQs</h1><br>
		<ul>
			<li>
				<h3>Will there be any help or technical guidance provided?</h3><br>
				<span>Yes, as part of our training sessions, we will discuss how the committee would operate and what the effective Rules of Procedure (ROP) would stand at. We look forward to meeting you there! 
					<br><br>Additionally, we have already released a Delegate Handbook that aims to aid you with general navigation through the committee. 
				</span>
			</li>
			<br>
			<li>
				<h3>How do we prepare for the conference?</h3><br>
				<span> Pre-conference preparation majorly consists of research. Analysis and understanding of the agenda at hand play a major role in this. Background Guides that will be released by the said committee will provide you with a foundation to initiate your research. For further tips on preparation please refer to the "Tips & tricks to secure awards at DPSHMUN’23” section of the delegate Handbook. 

				</span>
			</li>
			<br>
			<li>
				<h3>What is the dress code for the conference?</h3><br>
				<span>
					DPSHMUN’23 strives to ensure professionalism in all aspects of the conference; hence delegates are expected to adhere to a dress code throughout the 2 days. If you are a member of the Lok Sabha, traditionals are compulsory on both days. Jeans, cargo pants, hats, caps, skirts with inappropriate length and other indecent clothing
					are strictly prohibited <br><br>
					Day 1: Western Business Attire <br>
					Day 2: Indian Traditional Attire <br>
					
				</span>
			</li>
			<br>
			<li>
				<h3>When will the allocations be released?</h3><br>
				<span> The allocations will be released sometime in the week, and you will be notified on both GCR and allocations will also be posted on the softboard.
 
				</span>
			</li>
			<br>
			<li>
				<h3>What would be the timing of the conference?</h3><br>
				<span>The conference timings will be the same as the school timings  (7:45-2:30)
				</span>
			</li>
			<br>
			<li>
				<h3>Is there a payment that is to be made?</h3><br>
				<span>No, the conference is free for all DPSH students. 

				</span>
			</li>
			<br>
			<li>
				<h3>What are the ideal criterias for a delegate to win an award?</h3><br>
				<span>Every delegate who participates can’t win an award however, it is certain that the award goes to those who speak, provide a substantial debate and also have the ability to influence and move the committee. Besides that, participation certificates will be provided to everyone who attends both the days of the conference.
				</span>
			</li>
		</ul>
	</div>
</div>

<style>
	#FAQs{
		padding: 5%;
	}
	#FAQs h3{
		font-size: x-large;
	}
	#letterimg{
		aspect-ratio:3/4;
		height: auto;
		width:80%;
		margin: auto;
		object-fit: cover;
	}
	#lettercont{
		display:flex;
		justify-content:space-evenly;
		flex-direction: column;
	}
	#letter {
		padding: 5%;
		font-size: x-large;
	}
	#letter p {
		text-align: justify;
		width: 90%;
		margin: auto;
		font-size: medium;
		line-height: 24px;
	}
	#comhold {
		display: flex;
		justify-content: space-between;
		align-items: center;
		min-width: 200vw;
	}
	#comhold a {
		margin: 2.5%;
		width: auto;
		height: auto;
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
		text-shadow: 2px 2px 16px rgba(0,0,0,0.75);
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
		#letterimg{
			width: 45%;
			margin: initial;
		}
		#lettercont{
			flex-direction: row;
			font-size: large;
		}
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
		#letter p {
			width: 45%;
			margin: initial;
		}
	}
</style>
