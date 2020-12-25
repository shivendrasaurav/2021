<section id="loader">
    <!-- svelte-ignore a11y-media-has-caption -->
	<video class="loading_video"
		poster="https://sveltejs.github.io/assets/caminandes-llamigos.jpg"
		src="https://raw.githubusercontent.com/shivendrasaurav/2021/main/development/src/parts/PLA.mp4" format="mp4" autoplay>
			<track kind="captions"/>
    </video>
</section>


<style>
    .loading_video{
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
    }
    #loader{
        height: 100vh;
        width: 100vh;
        background: red;
    }
</style>