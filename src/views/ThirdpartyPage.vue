<template>
    <HeadBar/>
    <div id="ik0y" class="back container">
        <div id="itwn">Admin panel for team use</div>
        <h4 class="itwn-text">Web development and servicing firms utilize Peppubuild for their consulting services.
            Our admin panel allows teams to be in sync. Also, clients' artifacts can be exported to their
            dashboard with a visual editor, after servicing.
        </h4>

        <div class="container col-xxl-12 px-4 py-5">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div class="col-10 col-sm-8 col-lg-7 himg">
                    <img src="./img/peppubuildadmin.png" alt="" class="d-block mx-lg-auto img-fluid imgb" />
                </div>
                <div class="col-lg-5">
                    <h1 class="display-5 fw-bold lh-1 mb-3">Role Based Access Control (RBAC)
                    </h1>
                    <p class="lead">Our clients utilize Peppubuild for project continuation. Handling a large portfolio
                        of clients and their web artifacts are possible with Peppubuild's team dashboard and project
                        transfer.
                    </p>
                </div>
            </div>
        </div>

        <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">Join the trend!</h4>
            <p>Send us a mail, if you're a web service consultant and would like 
                an easy tool to manage all of your clients.</p>
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
  name: 'ThirdpartyPage',

  components: { HeadBar, FootBar },
}
</script>