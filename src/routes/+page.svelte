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
		months = Math.floor(countdown / (1000 * 60 * 60 * 24 * 30)).toString();
		days = Math.floor((countdown / (1000 * 60 * 60 * 24)) % 30).toString();
		hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();
		minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60)).toString();
		seconds = Math.floor((countdown % (1000 * 60)) / 1000).toString();

		if (months.length != 2) {
			months = '0' + months;
		}
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
</script>

<div id="😲">
	<div id="Title">
		<h2 id="🧐">DPSH MUN</h2>
		<span id="🤯">2023</span>
	</div>
</div>
<div id="Content">
	<br>
	<div id="countdown">
		<div class="pair">
			<div class="card_holder">
				<div class="card">{months[0]}</div>
				<div class="card">{months[1]}</div>
			</div>
			<h2>Months</h2>
		</div>
		<div class="pair">
			<div class="card_holder">
				<div class="card">{days[0]}</div>
				<div class="card">{days[1]}</div>
			</div>
			<h2>Days</h2>
		</div>
		<div class="pair">
			<div class="card_holder">
				<div class="card">{hours[0]}</div>
				<div class="card">{hours[1]}</div>
			</div>
			<h2>Hours</h2>
		</div>
		<div class="pair">
			<div class="card_holder">
				<div class="card">{minutes[0]}</div>
				<div class="card">{minutes[1]}</div>
			</div>
			<h2>Minutes</h2>
		</div>
		<div class="pair">
			<div class="card_holder">
				<div class="card">{seconds[0]}</div>
				<div class="card">{seconds[1]}</div>
			</div>
			<h2>Seconds</h2>
		</div>
	</div>
    <div id="Intro">
		<div>
            <h1>What is the DPSH MUN?</h1>
		<p>
			The DPS Model United Nations (MUN) is a simulation of the United Nations where students from
			grades 11 and 12 gather to discuss and debate current global issues. The aim of the MUN is to
			promote critical thinking, diplomacy, and negotiation skills among the participants.
		</p>
		<br />
		<p>
			Each committee discusses and debates different topics ranging from climate change to
			international security. The debates are structured in a formal manner, following the same
			procedures and rules as the real United Nations. A school MUN provides students with an
			opportunity to learn about international affairs and to develop their public speaking and
			research skills.
		</p>
        </div><br>
        <h1>Announcements</h1>
        <div id="announcements">
            <ul>
                {#each announcements as announcement }
                    <li><span style="font-size:larger;font-weight:500">{announcement.date}</span> - {announcement.title} </li> 
                {/each}
            </ul>
        </div>
	</div>
</div>

<style>
    #announcements{
        height: 40vh;
        overflow: scroll;
    }

    #announcements li{
        font-weight: 300;
        font-size: larger;
    }

	#😲 {
		width: 100vw;
		height: 80vh;
		background-image: url('./munbg.jpeg');
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

	#🧐 {
		font-weight: 600;
	}

	#Content {
		width: 100vw;
		height: auto;
	}

	#Content h1 {
		text-align: center;
		padding: 10%;
	}

	#Content #Intro p {
		width: 80vw;
		padding: 0 10vw 0 10vw;
		text-align: justify;
        break-inside: avoid-column;
	}

	#countdown {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
        flex-wrap: wrap;
		width: 80vw;
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
		font-weight: 800;
		aspect-ratio: 1/2;
		padding: 1rem;
		height: 3rem;
		width: auto;
		text-align: center;
        background-color: rgb(235, 235, 235);
	}
    .pair h2{
        font-weight: 400;
    }
	.card_holder {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	@media (min-width: 600px) {
		#Title {
			font-size: xxx-large;
		}
		#Content {
			display: initial;
		}

        #Intro{
            columns:2;
        }
		#Content #Intro h1 {
			text-align: center;
            padding: 2vmax;
			font-size: xx-large;
		}

		#Content #Intro p {
			width: 40vw;
			padding: 0 5vw 0 5vw;
			text-align: justify;
			font-size: large;
		}

        #countdown{
            padding: 0;
        }
	}
</style>
