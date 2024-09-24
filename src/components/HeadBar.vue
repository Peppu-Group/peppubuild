<template>
    <nav class="navbar sticky-top navbar-expand-lg navbar-custom bg-custom">
            <div class="container">
                <RouterLink class="navbar-brand px-4" to="/">
                    <img src="https://www.peppubuild.com/logo.png" alt="" width="65" height="30">
                </RouterLink>
                <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page"
                                href="https://docs.peppubuild.com/">Documentation</a>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/pricing">Pricing</RouterLink>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="mailto:support@peppubuild.com" tabindex="-1" aria-disabled="true">Support</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://github.com/hannydevelop/Peppubuild" tabindex="-1"
                                aria-disabled="true">Github</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav d-flex">
                        <li class="nav-item">
                            <a class="nav-link" href="https://app.peppubuild.com/auth" tabindex="-1"
                                aria-disabled="true">Login</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Use cases
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <RouterLink class="dropdown-item" to="/custom">Custom website</RouterLink>
                                <RouterLink class="dropdown-item" to="/thirdparty">Third-party outsourcing</RouterLink>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <RouterLink class="dropdown-item" to="/hosting">Hosting</RouterLink>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
</template>

<script>
export default {
  name: 'HeadBar'
}
</script>