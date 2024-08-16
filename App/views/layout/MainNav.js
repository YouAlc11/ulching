export class MainNav {
    constructor() {
        this.element = document.createElement('div');
        this.element.className = 'main-nav';
        this.element.innerHTML = `<!-- Sidebar Logo -->
                                    <div class="logo-box">
                                        <a href="index.html" class="logo-dark">
                                            <img src="resources/assets/images/logo-sm.png" class="logo-sm" alt="logo sm" />
                                            <img src="resources/assets/images/logo-dark.png" class="logo-lg" alt="logo dark" />
                                        </a>

                                        <a href="index.html" class="logo-light">
                                            <img src="resources/assets/images/logo-sm.png" class="logo-sm" alt="logo sm" />
                                            <img src="resources/assets/images/logo-light.png" class="logo-lg" alt="logo light" />
                                        </a>
                                    </div>

                                    <!-- Menu Toggle Button (sm-hover) -->
                                    <button type="button" class="button-sm-hover" aria-label="Show Full Sidebar">
                                        <iconify-icon icon="iconamoon:arrow-left-4-square-duotone" class="button-sm-hover-icon"></iconify-icon>
                                    </button>

                                    <div class="scrollbar" data-simplebar>
                                        <ul class="navbar-nav" id="navbar-nav">
                                            <li class="menu-title">General</li>

                                            <li class="nav-item">
                                                <a class="nav-link menu-arrow" href="#sidebarDashboards" data-bs-toggle="collapse" role="button"
                                                    aria-expanded="false" aria-controls="sidebarDashboards">
                                                    <span class="nav-icon">
                                                        <iconify-icon icon="iconamoon:home-duotone"></iconify-icon>
                                                    </span>
                                                    <span class="nav-text"> Dashboards </span>
                                                </a>
                                                <div class="collapse" id="sidebarDashboards">
                                                    <ul class="nav sub-navbar-nav">
                                                        <li class="sub-nav-item">
                                                            <a class="sub-nav-link" href="index.html">Analytics</a>
                                                        </li>
                                                        <li class="sub-nav-item">
                                                            <a class="sub-nav-link" href="dashboard-finance.html">Finance</a>
                                                        </li>
                                                        <li class="sub-nav-item">
                                                            <a class="sub-nav-link" href="dashboard-sales.html">Sales</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>`;
    }

    render() {
        return this.element;
    }
}