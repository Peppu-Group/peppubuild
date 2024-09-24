<template>
    <HeadBar/>
    <div id="ik0y" class="back container">
        <div id="itwn">Custom websites for custom use</div>
        <h4 class="itwn-text">This section features our partners at EventLord, an event planning & management firm and how 
            they utilize Peppubuild to create custom websites for their clients.
        </h4>

        
        <div class="col d-flex justify-content-center">
            <div class="card" style="width: 12rem;">
                <img src="./img/eventlord.jpeg" class="card-img-top" alt="...">
                <div class="card-body">
                </div>
            </div>
        </div>

        <div class="container col-xxl-12 px-4 py-5">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div class="col-10 col-sm-8 col-lg-7 himg">
                    <img src="./img/eventlord.png" alt="" class="d-block mx-lg-auto img-fluid imgb" />
                </div>
                <div class="col-lg-5">
                    <h1 class="display-5 fw-bold lh-1 mb-3">Beautiful Wedding Websites
                    </h1>
                    <p class="lead">The undisputed Lord of Events utilizes Peppubuild to create beautiful websites
                        for clients, to celebrate their special day with ease. This website assists in publication, 
                        scheduling, invite management, and gift registery. Clients are equipped with a visual dashboard 
                        and team access to update their site.
                    </p>
                </div>
            </div>
        </div>

        <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">Join the trend!</h4>
            <p>Send us a mail, if you're an event planner and would like to create websites for your clients.</p>
            <hr>
            <p class="mb-0">@support.peppubuild.com</p>
          </div>   
    </div>
    <div>
    <FootBar/>
</div>
</template>

<script>
import FootBar from '../components/FootBar.vue';
import HeadBar from '../components/HeadBar.vue';

export default {
  name: 'CustomPage',

  components: { HeadBar, FootBar },
}
</script>