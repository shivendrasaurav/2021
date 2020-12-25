<script>
    function change_cmd_text_1(){
        document.getElementById("command").innerHTML = "SAMURAI &gt; Portfolio of Shivendra Saurav";
    }

    function change_cmd_text_2(){
        document.getElementById("command").innerHTML = "SAMURAI &gt; ls Projekts -all";
    }

    function change_cmd_text_3(){
        document.getElementById("command").innerHTML = "run TheCodeDrop";
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

    <div class="res_topic_wrapper" on:mouseover={change_cmd_text_2} on:mouseleave={default_text}>
        <div class="res_topic">
            Resume
        </div>
    </div>

    <div class="name_wrapper" on:mouseover={change_cmd_text_1} on:mouseleave={default_text}>
        <div class="name">
            Shivendra Saurav
        </div>
    </div>

    <div class="yt_topic_wrapper" on:mouseover={change_cmd_text_3} on:mouseleave={default_text}>
        <div class="yt_topic">
            YouTube
        </div>
    </div>

</section>
