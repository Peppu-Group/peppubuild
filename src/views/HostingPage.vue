
<template>
    <HeadBar />
    <div id="ik0y" class="back container full-body">
        <div id="itwn">Hosting Options</div>
        <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">Open Standard</h4>
            <p>Code artifacts from Peppubuild are in HTML and CSS. Hence, you can host your project
                in any platform that supports it. Examples are Namecheap,Netlify, Vercel, etc. However, Peppubuild
                provides a make-shift solution to publish and preview your website in Namecheap with a subdomain.
            </p>
            <hr>
            <p class="mb-0">If you have
                any problem exporting or hosting your project, contact us @support.peppubuild.com.</p>
        </div>
    </div>
    <div>
        <FootBar />
    </div>
</template>

<script>
import FootBar from '../components/FootBar.vue';
import HeadBar from '../components/HeadBar.vue';

export default {
  name: 'HostingPage',

  components: { HeadBar, FootBar },
}
</script>