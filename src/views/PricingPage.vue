<template>
    <HeadBar />
    <div id="ik0y" class="gjs-cell">
        <div id="itwn">Pricing for Peppubuild</div>
    </div>
    <div class="container col-sm-10 px-4 py-5">
        <h2 class="pb-2 border-bottom">Plan Overview
        </h2>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="export-tab" data-bs-toggle="tab" data-bs-target="#export" type="button"
                    role="tab" aria-controls="export" aria-selected="true">Export (you host)</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="publish-tab" data-bs-toggle="tab" data-bs-target="#publish" type="button"
                    role="tab" aria-controls="publish" aria-selected="false">Publish (we host)</button>
            </li>
        </ul>
        <div  class="tab-content" id="myTabContent">
        <PricingBar/>
    </div>
    </div>
    <div class="container alert alert-success col-sm-8 px-4 py-5" role="alert">
        <h4 class="alert-heading">Education for all!</h4>
        <p>According to UNESCO, sub-Saharan Africa has
            the highest rates of education exclusion of all regions. At Peppubuild,
            we are committed to contribute in reducing education exclusion. Hence, our educational development version
            is free for
            use, for all Non-profit and NGO striving towards better education.
        </p>
        <hr>
        <p class="mb-0">Send us a mail @support.peppubuild.com, if you would like to partner with us or request an
            instructor.</p>
    </div>

    <div class="container table-responsive-sm">
        <h2 class="plans">Compare Plans</h2>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">General / Pricing</th>
                    <th scope="col">Community</th>
                    <th scope="col">Basic</th>
                    <th scope="col">Developer</th>
                    <th scope="col">Custom</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Asset storage (Total assets storage like images)</th>
                    <td>-</td>
                    <td>10</td>
                    <td>12</td>
                    <td>Unlimited</td>
                </tr>
                <tr>
                    <th scope="row">Additional storage</th>
                    <td>-</td>
                    <td>$1/1GB</td>
                    <td>$1/1GB</td>
                    <td>Contact Us</td>
                </tr>
                <tr>
                    <th scope="row">Projects (CMS)</th>
                    <td>1</td>
                    <td>1s</td>
                    <td>1 - 2</td>
                    <td>Unlimited</td>
                </tr>
                <tr>
                    <th scope="row">Projects (Website Builder)</th>
                    <td>1</td>
                    <td>1</td>
                    <td>1 - 2</td>
                    <td>Unlimited</td>
                </tr>
                <tr>
                    <th scope="row">Pages (CMS)</th>
                    <td>-</td>
                    <td>Unlimited</td>
                    <td>Unlimited</td>
                    <td>Unlimited</td>
                </tr>
                <tr>
                    <th scope="row">Pages (Website Builder)</th>
                    <td>-</td>
                    <td>Unlimited</td>
                    <td>Unlimited</td>
                    <td>Unlimited</td>
                </tr>
                <tr>
                    <th scope="row">Forms/Contact</th>
                    <td>-</td>
                    <td>50</td>
                    <td>100</td>
                    <td>Unlimited</td>
                </tr>
                <tr>
                    <th scope="row">Uptime SLA</th>
                    <td>99%</td>
                    <td>99%</td>
                    <td>99%</td>
                    <td>99%</td>
                </tr>
            </tbody>
        </table>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Features</th>
                    <th scope="col">Community</th>
                    <th scope="col">Basic</th>
                    <th scope="col">Developer</th>
                    <th scope="col">Custom</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Custom fonts</th>
                    <td><i class="bi bi-check2 fonttick"></i></td>
                    <td><i class="bi bi-check2 fonttick"></i></td>
                    <td><i class="bi bi-check2 fonttick"></i></td>
                    <td><i class="bi bi-check2 fonttick"></i></td>
                </tr>
                <tr>
                    <th scope="row">Code Export</th>
                    <td>-</td>
                    <td><i class="bi bi-check2 fonttick"></i></td>
                    <td><i class="bi bi-check2 fonttick"></i></td>
                    <td><i class="bi bi-check2 fonttick"></i></td>
                </tr>
                <tr>
                    <th scope="row">Custom Code</th>
                    <td>-</td>
                    <td>-</td>
                    <td><i class="bi bi-check2 fonttick"></i></td>
                    <td><i class="bi bi-check2 fonttick"></i></td>
                </tr>
                <tr>
                    <th scope="row">All CSS Properties</th>
                    <td><i class="bi bi-check2 fonttick"></i></td>
                    <td><i class="bi bi-check2 fonttick"></i></td>
                    <td><i class="bi bi-check2 fonttick"></i></td>
                    <td><i class="bi bi-check2 fonttick"></i></td>
                </tr>
                <tr>
                    <th scope="row">Build with AI</th>
                    <td>-</td>
                    <td><i class="bi bi-check2 fonttick"></i></td>
                    <td><i class="bi bi-check2 fonttick"></i></td>
                    <td><i class="bi bi-check2 fonttick"></i></td>
                </tr>
                <tr>
                    <th scope="row">Version History</th>
                    <td>-</td>
                    <td>-</td>
                    <td><i class="bi bi-check2 fonttick"></i></td>
                    <td><i class="bi bi-check2 fonttick"></i></td>
                </tr>
                <tr>
                    <th scope="row">GitHub Integration</th>
                    <td>-</td>
                    <td>-</td>
                    <td>Desktop Application Only</td>
                    <td>Desktop Application Only</td>
                </tr>
            </tbody>
            </table>
    </div>
    <div>
        <FootBar />
    </div>
</template>

<style>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css');
@import './css/style.css';
</style>

<script>
import HeadBar from '../components/HeadBar.vue';
import FootBar from '../components/FootBar.vue';
import PricingBar from '@/components/PricingBar.vue';


export default {
    name: 'PricingPage',

    components: { HeadBar, FootBar, PricingBar },
}

</script>