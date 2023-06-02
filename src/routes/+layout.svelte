<script>
	import { onMount } from "svelte";

    export const prerender = true;
    let sidebar = false
    function Sidebar(){
        sidebar = !sidebar
    }

    let page = "Home"

    function refresh(){}

    onMount(() => {
        // @ts-ignore
        function refresh()  {
            document.querySelector("#Index")?.classList.remove("active")
            document.querySelector("#" + page)?.classList.remove("active")
            page = window.location.toString().split("/")[window.location.toString().split("/").length-1]
            document.querySelector("#" + page)?.classList.add("active")
        }
        setInterval(() => {
            refresh()
        }, 100);
    })
</script>


<nav>
	<img id="logo" src="./MUN_Banner.png" alt="MUN Logo" />
	<!-- svelte-ignore a11y-click-events-have-key-events -->
    <img id="hamburger_menu" src="./Hamburger_Menu.png" alt="Menu" on:click={Sidebar}/>
    <div id="Nav_Buttons">
        <ul style="list-style: none;">
            <li><a href='./Index' id="Index" class="active">Home</a></li>
            <li><a href='./Allocations' id="Allocations" >Allocations</a></li>
            <li><a href='./Resources' id="Resources" >Resources</a></li>
            <li><a href='./Secretariat' id="Secretariat" >Secretariat</a></li>
            <li><a href='./Committees' id="Committees" >Committees </a></li>
            <li><a href='./Contact' id="Contact" >Contact Us</a></li>
        </ul>
    </div>
</nav>
<div id="sidebar" class:active={sidebar}>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <img src="./Close_Button.png" alt="Close Button" srcset="" id="Close_Button" on:click={Sidebar}><br><br>
    <ul style="list-style: none;">
        <li><a href='./Index'>Home</a></li>
        <li><a href='./Allocations'>Allocations</a></li>
        <li><a href='./Resources'>Resources</a></li>
        <li><a href='./Secretariat'>Secretariat</a></li>
        <li><a href='./Committees'>Committees </a></li>
        <li><a href='./Contact'>Contact Us</a></li>
    </ul>
</div>
<div id="margin"></div>

<slot />

<style>
    #margin{
        width:100vw;
        height: 8vh;
    }

	nav {
        z-index: 10;
		width: 100vw;
		height: 8vh;
        position: fixed;
        background-color: white;
        overflow: hidden;
        filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
    }

    #sidebar{
        position: fixed;
        /* transform: translateX(30vw); */
        width: 50vw;
        top: 0;
        right: 0;
        height: 100vh;
        background-color: white;
        z-index: 10;
    }

    #sidebar ul li{
        margin-top: 5%;
    }

    #sidebar ul li a {
        font-size: larger;
        color: gray;
        text-decoration: none;
    }

    #Close_Button{
        float: right;
        height: 5vmin;
        width: auto;
        padding: 5vmin;
    }

    #sidebar.active{
        transform: 0;
        transition: 0.5s;
    }

    
    #sidebar:not(#sidebar.active){
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

    #Nav_Buttons{
        display: none;
        float: right;
        height: 10vh;
        align-items: center;
    }

    #Nav_Buttons li {
        display: inline;
        padding-right: 4.5vh;
    }

    #Nav_Buttons li a.active{
        color: black !important;
    }

    #Nav_Buttons li a {
        color: grey;
        text-decoration: none;
    }

    #Nav_Buttons li:hover a {
        transition: 0.25s;
        color: black;
    }
    #Nav_Buttons li:not(:hover) a {
        transition: 0.25s;
        color: grey;
    }

	@media (min-width: 900px) {
        #margin{
            width:100vw;
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
        #Nav_Buttons{
            display: flex;
        }
	}
</style>
