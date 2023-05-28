<script>
    export const prerender = true;
    let sidebar = false
    function Sidebar(){
        sidebar = !sidebar
    }
</script>


<nav>
	<img id="logo" src="./MUN_Banner.png" alt="MUN Logo" />
	<!-- svelte-ignore a11y-click-events-have-key-events -->
    <img id="hamburger_menu" src="./Hamburger_Menu.png" alt="Menu" on:click={Sidebar}/>
    <div id="Nav_Buttons">
        <ul style="list-style: none;">
            <li><a href='./Home' class="active">Home</a></li>
            <li><a href='./Allocations'>Allocations</a></li>
            <li><a href='./Resources'>Resources</a></li>
            <li><a href='./Secretariat'>Secretariat</a></li>
            <li><a href='./Commitiies'>Commitiies</a></li>
            <li><a href='./Contact'>Contact Us</a></li>
        </ul>
    </div>
    <div id="sidebar" class:active={sidebar}>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <img src="./Close_Button.png" alt="Close Button" srcset="" id="Close_Button" on:click={Sidebar}><br><br>
        <ul style="list-style: none;">
            <li><a href='./Home' class="active">Home</a></li>
            <li><a href='./Allocations'>Allocations</a></li>
            <li><a href='./Resources'>Resources</a></li>
            <li><a href='./Secretariat'>Secretariat</a></li>
            <li><a href='./Commitiies'>Commitiies</a></li>
            <li><a href='./Contact'>Contact Us</a></li>
        </ul>
    </div>
</nav>
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
    }

    #sidebar{
        position: fixed;
        /* transform: translateX(30vw); */
        width: 50vw;
        top: 0;
        right: 0;
        height: 100vh;
        background-color: white;
    }

    #sidebar ul li{
        margin-top: 5%;
    }

    #sidebar ul li a {
        font-size: larger;
        color: gray;
        text-decoration: none;
    }

    #sidebar ul li a.active{
        color: black;
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

	@media (min-width: 800px) {
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
