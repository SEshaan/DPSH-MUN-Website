<script>
    // @ts-nocheck
	import { onMount } from 'svelte';

	export const prerender = true;
	let sidebar = false;
	function Sidebar() {
		sidebar = !sidebar;
	}

	let page = 'Home';

	function refresh() {}

	onMount(() => {
		document.getElementById('com').oninput = () => {
			window.location = './' + document.getElementById('com').value;
		};
		function refresh() {
			document.querySelector('#Home')?.classList.remove('active');
			if (!page) {
				page = window.location
					.toString()
					.split('/')
					[window.location.toString().split('/').length - 1].split('?')[0];
				if (!page) {
					document.querySelector('#Home')?.classList.add('active');
				}
				return;
			}
			document.querySelector('#' + page)?.classList.remove('active');
			page = window.location
				.toString()
				.split('/')
				[window.location.toString().split('/').length - 1].split('?')[0];
			if (!page) {
				document.querySelector('#Home')?.classList.add('active');
				return;
			}
			document.querySelector('#' + page)?.classList.add('active');
		}
		setInterval(() => {
			refresh();
		}, 100);
	});

	let commities = ['DISEC', 'NATO', 'UNSC', 'UNHRC', 'LS', 'IMF', 'IP'];
</script>

<nav>
	<a id="Title" href="../"
		><img id="logo" src="./logo_banner.png" alt="MUN Logo" />
		<!-- <div
			style="text-align: center; display:flex;justify-content:center;align-items:center;flex-direction:column;height:100%"
		>
			<span style="font-weight: 600;">DPSH MUN</span><span
				style="text-align: center;font-size:large;font-weight:100">2023</span
			>
		</div>-->
	</a>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<img id="hamburger_menu" src="./Hamburger_Menu.png" alt="Menu" on:click={Sidebar} />
	<div id="Nav_Buttons">
		<ul style="list-style: none;">
			<li><a href="./" id="Home" class="active">Home</a></li>
			<li><a href="./Allocations" id="Allocations">Allocations</a></li>
			<li><a href="./Resources" id="Resources">Resources</a></li>
			<li><a href="./Secretariat" id="Secretariat">Secretariat</a></li>
			<!-- <li><a href='./#com' id="Committees" style="">Committees</a></li> -->
			<li>
				<a href="javascript:void(0)" id="Committees">
					<select name="" id="com"
						><option value="" disabled selected>Committees</option>{#each commities as com}
							<option value={com}>{com}</option>{/each}</select
					></a
				>
			</li>
			<li><a href="./Contact" id="Contact">Contact Us</a></li>
		</ul>
	</div>
</nav>
<div id="sidebar" class:active={sidebar}>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<img
		src="./Close_Button.png"
		alt="Close Button"
		srcset=""
		id="Close_Button"
		on:click={Sidebar}
	/><br /><br />
	<ul style="list-style: none; text-decoration:none">
		<li><a href="./" class="mob_link">Home</a></li>
		<li><a href="./Allocations" class="mob_link">Allocations</a></li>
		<li><a href="./Resources" class="mob_link">Resources</a></li>
		<li><a href="./Secretariat" class="mob_link">Secretariat</a></li>
		<li>
			<div style="color:#D0BEA8">
				Committees <br />
				<ul>
					{#each commities as com} <li><a href="./{com}" class="mob_link">{com}</a></li> {/each}
				</ul>
			</div>
		</li>
		<li><a href="./Contact" class="mob_link">Contact Us</a></li>
	</ul>
</div>
<div id="margin" />

<slot />

<br><br>

<style>
	#com {
		border: none;
		background-color: transparent;
		color: #ac9d8a;
		font-size: medium;
	}
	#margin {
		width: 100vw;
		height: 8vh;
	}
	#Title {
		display: inline-flex;
		align-items: center;
		font-size: x-large;
		color: #ac9d8a;
		text-decoration: none;
	}
	nav {
		z-index: 10;
		width: 100vw;
		height: 8vh;
		position: fixed;
		background-color: #3f4f5f;
		overflow: hidden;
		filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
	}

	#sidebar {
		position: fixed;
		/* transform: translateX(30vw); */
		width: 50vw;
		top: 0;
		right: 0;
		height: 100vh;
		background-color: #3f4f5f;
		z-index: 10;
	}

	#sidebar ul li {
		margin-top: 5%;
	}

	#sidebar ul{
		width: 100%;
	}

	#sidebar ul li a {
		font-size: larger;
		color: gray;
		text-decoration: none !important;
	}

	.mob_link {
		color: #d0bea8 !important;
		text-decoration: none !important;
	}

	#Close_Button {
		float: right;
		height: 5vmin;
		width: auto;
		padding: 5vmin;
	}

	#sidebar.active {
		transform: 0;
		transition: 0.5s;
	}

	#sidebar:not(#sidebar.active) {
		transform: translateX(50vw);
		transition: 0.5s;
	}

	#logo {
		height: 6vh;
		padding: 1vh;
	}

	#hamburger_menu {
		float: right;
		height: 2vh;
		padding: 3vh;
	}

	#Nav_Buttons {
		display: none;
		float: right;
		height: 10vh;
		align-items: center;
	}

	#Nav_Buttons li {
		display: inline;
		padding-right: 4.5vh;
	}

	#Nav_Buttons li a.active {
		color: #d0bea8 !important;
	}

	#Nav_Buttons li a {
		text-decoration: none;
	}

	#Nav_Buttons li:hover a {
		transition: 0.25s;
		color: #d0bea8;
	}
	#Nav_Buttons li:not(:hover) a {
		transition: 0.25s;
		color: #ac9d8a;
	}

	@media (min-width: 900px) {
		#sidebar{
			display: none;
		}
		#margin {
			width: 100vw;
			height: 10vh;
		}
		nav {
			height: 10vh;
		}
		#logo {
			height: 8vh;
			padding: 1vh;
		}
		#hamburger_menu {
			display: none;
		}
		#Nav_Buttons {
			display: flex;
		}
	}
</style>
