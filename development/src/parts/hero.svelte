<script>
    function change_cmd_text_1(){
        document.getElementById("command").innerHTML = "SAMURAI &gt; portfolio of Shivendra Saurav";
    }

    function change_cmd_text_2(){
        document.getElementById("command").innerHTML = "SAMURAI &gt; ls Projekts -all";
    }

    function change_cmd_text_3(){
        document.getElementById("command").innerHTML = "SAMURAI &gt; run yt TheCodeDrop";
    }

    function change_cmd_text_4(){
        document.getElementById("command").innerHTML = "SAMURAI &gt; fetch skill_tree";
    }

    function default_text(){
        document.getElementById("command").innerHTML = "SAMURAI &gt; ";
    }

</script>

<section id="hero">

    <div class="project_topic_wrapper" on:mouseover={change_cmd_text_2} on:mouseleave={default_text}>
        <div class="project_topic">
            Projekts
        </div>
    </div>

    <div class="res_topic_wrapper" on:mouseover={change_cmd_text_4} on:mouseleave={default_text}>
        <div class="res_topic">
            Skills
        </div>
    </div>

    <div class="name_wrapper" on:mouseover={change_cmd_text_1} on:mouseleave={default_text}>
        <div class="name">
            Shivendra Saurav
        </div>
    </div>

    <a target="blank" class="herolink" href="https://www.youtube.com/channel/UCnEIkvnbpbQyetPk_K9QNQg?confirm_subscribe=1">
        <div class="yt_topic_wrapper" on:mouseover={change_cmd_text_3} on:mouseleave={default_text}>
            <div class="yt_topic">
                YouTube
            </div>
        </div>
    </a>

    <div class="social_wrapper">

        <a href="https://www.youtube.com/channel/UCnEIkvnbpbQyetPk_K9QNQg?confirm_subscribe=1"><img src="./static/social/youtube.png" alt="yt" /></a>
        <a href="https://www.linkedin.com/in/shivendra-saurav-80a8ba191/"><img src="./static/social/linkedin.png" alt="li" /></a>
        <a href="https://github.com/shivendrasaurav"><img src="./static/social/github.png" alt="gh" /></a>
        <a href="https://twitter.com/ShivendraSaurav"><img src="./static/social/twitter.png" alt="tw" /></a>
        <a href="https://www.instagram.com/shivendrasaurav/"><img src="./static/social/instagram.png" alt="ig" /></a>


    </div>
</section>

<!--https://github.com/EmilTholin/svelte-routing-->