<script>
// @ts-nocheck

	// @ts-ignore
	import { json } from '@sveltejs/kit';
	import { onMount } from 'svelte';

	onMount(() => {
		var e = document.querySelector('#com_sel');
		e?.addEventListener('change', () => {
			// @ts-ignore
			var text = e.value;
			// @ts-ignore
			document.getElementById('frame').contentWindow.postMessage(text, '*');
		});

		var f = document.querySelector('#tab_sel');
		f?.addEventListener('change', () => {
			// @ts-ignore
			var text = f.value;
			// @ts-ignore
			current_row = rows[f.value]
			load_com(text)
		});
		load_com("disec")
	});

	var requestOptions = {
		method: 'GET',
		redirect: 'follow'
	};

    /**
	 * @type {any[]}
	 */
    let committees = []

    /**
	 * @type {string}
	 */
    // @ts-ignore
    var data;

	/**
	 * @param {string} x
	 */
	async function load_com(x){
		// @ts-ignore
	fetch('https://dpshmun.vercel.app/api/allocations?c='+x.toLowerCase(), requestOptions)
		.then((response) => response.text())
		// @ts-ignore
		.then((result) => {data_update(JSON.parse(result))})
		.catch((error) => console.log('error', error));
	}

    // @ts-ignore
    function data_update(x){
        // @ts-ignore
        committees = x["data"]
    }
	let rows = {
		disec:{
			labels:["S.No","Country","Delegate","Class"],
			db_row:["id","Country","Allocation","Section"]
		},
		unsc:{
			labels:["S.No","Country","Delegate","Class"],
			db_row:["id","Country","Allocation","Section"]
		},
		unhrc:{
			labels:["S.No","Country","Delegate","Class"],
			db_row:["id","Country","Allocation","Section"]
		},
		nato:{
			labels:["S.No","Country","Delegate","Class"],
			db_row:["id","Country","Allocation","Section"]
		},
		imf:{
			labels:["S.No","Country","Delegate","Class"],
			db_row:["id","Country","Allocation","Section"]
		},
		lk:{
			labels:["S.No","Leader","Party","Name","Section"],
			db_row:["id","Politician","Party","Allocation","Section"]
		},
		ip:{
			labels:["S.No","Committee","Name","Section"],
			db_row:["id","Committee","Allocation","Section"]
		}
	}

	let current_row = rows['disec']

</script>

<br />
<div id="🧐">
	<h1>Allocations</h1>
	<a
		href="https://docs.google.com/spreadsheets/d/1Pl-6l-04mVm6uD-WBpsZzHh7EHtrDj1XxkguzIDywAs/edit?usp=sharing"
		>View Allocations Matrix →</a
	><br />
	<br />
	<select name="" id="com_sel">
		<option value="disec" id="disec">DISEC</option>
		<option value="unsc" id="sc">SC</option>
		<option value="unhrc">UNHRC</option>
		<option value="imf">IMF</option>
		<option value="nato">NATO</option>
	</select>
</div>
<div class="frame">
	<iframe id="frame" title="map" src="./map.html" frameborder="0" />
</div>

<div id="Matrix">
	<h1>Allocations Matrix</h1>
	<br />
	<p style="color: #D0BEA8;">
		We are excited to provide you with an essential resource known as the allocation matrix. The
		allocation matrix is a crucial tool that helps us organize and assign roles for our MUN
		conferences. It provides a comprehensive overview of which countries or delegates are allocated
		to specific committees and topics. This matrix ensures transparency and fairness in the
		assignment process, allowing participants to easily identify their roles and responsibilities.
	</p>
	<br />
	<a
		href="https://docs.google.com/spreadsheets/d/1Pl-6l-04mVm6uD-WBpsZzHh7EHtrDj1XxkguzIDywAs/edit?usp=sharing"
		style="font-size: larger;"
	>
		View Allocations Matrix →</a
	>
</div>

<div id="list">
	<h1>Allocations List</h1>
	<br />
	<select name="" id="tab_sel">
		
		<option value="disec" id="disec">DISEC</option>
		<option value="unsc" id="sc">SC</option>
		<option value="unhrc">UNHRC</option>
		<option value="imf">IMF</option>
		<option value="nato">NATO</option>
		<option value="ip">IP</option>
		<option value="lk">LK</option>
	</select><br /><br />
	<table>
		<tbody>
			<tr class="head"><th>{current_row["labels"][0]}</th><th>{current_row["labels"][1]}</th><th>{current_row["labels"][2]}</th><th>{current_row["labels"][3]}</th>{#if current_row["labels"][4]}<th>{current_row["labels"][4]}</th>{/if}</tr>
			{#each committees as i}
				<tr><td>{i[current_row.db_row[0]]}</td><td>{i[current_row.db_row[1]]}</td><td>{i[current_row.db_row[2]]}</td><td>{i[current_row.db_row[3]]}</td>{#if current_row.db_row[4]}<td>{i[current_row.db_row[4]]}</td>{/if}</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	table {
		width: 90vw;
		margin: auto;
		text-align: center;
		color: #d0bea8;
	}
	.head {
		font-size: x-large;
		font-weight: 600;
	}
	#list {
		padding: 0% 5% 5% 5%;
	}
	#Matrix {
		padding: 5%;
	}
	#Matrix p {
		text-align: justify;
		font-size: large;
	}
	h1 {
		color: #d0bea8;
		font-size: xxx-large;
	}
	#🧐 {
		margin-left: 5vw;
	}
	a {
		text-decoration: underline;
		color: #d0bea8;
	}
	#com_sel,
	#tab_sel {
		font-size: large;
		border-radius: 5px;
	}
	#frame {
		width: 100%;
		height: 100%;
	}
	.frame {
		display: flex;
		align-items: center;
		justify-content: center;
		aspect-ratio: 2/1;
		width: 75vw;
		margin: auto;
		overflow: visible;
	}
	@media (max-width: 600px) {
		iframe {
			width: 150vw !important;
		}
		.frame {
			display: block;
			overflow-x: scroll;
		}
		.frame {
			height: 50vh;
			width: 100vw;
		}
	}
</style>
