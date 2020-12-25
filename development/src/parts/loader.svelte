<script>
    function hide_loading (){
        setInterval(function(){
            document.getElementById("loader").style.display="none";
        }, 17010);
    }
</script>

<svelte:window on:load={hide_loading}/>

<section id="loader">
    <!-- svelte-ignore a11y-media-has-caption -->
	<video class="loading_video"
		poster="https://raw.githubusercontent.com/shivendrasaurav/2021/main/development/src/parts/PLA.mp4"
		src="./static/PLA.mp4" type="video/mp4" format="mp4" autoplay>
    </video>
</section>


<style>
    .loading_video{
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        display: block;
        margin: auto;
    }
    #loader{
        position: fixed;
        height: 100vh;
        width: 100%;
        z-index: 10;
        background: #fcec0c;
    }
</style>