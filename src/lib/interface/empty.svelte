<script>
    import { link } from 'svelte-routing';
    import Dropdown from './dropdown.svelte';

    export let path;
    export let brand;
    export let user;
    export let notifications;
    export let menu;
    export let footer_menu;
    export let footer_notice;
</script>

<header class="navbar navbar-expand-md navbar-light d-print-none">
    <div class="container-xl">
        <button 
            class="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbar-menu">
            <span class="navbar-toggler-icon"></span>
        </button>
        <h1 class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
            <a href="/" class="no-text-decoration" use:link>
                <!-- <img src={logo} height="32" alt="Tabler" class="navbar-brand-image"> -->
                <slot name="h1">{@html brand}</slot>
            </a>
        </h1>
        <div class="navbar-nav flex-row order-md-last">
            <div class="nav-item d-none d-md-flex me-3">
                <div class="btn-list">
                    <!-- <a href="https://github.com/tabler/tabler"
                        class="btn" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                        Source code
                    </a>
                    <a href="https://github.com/sponsors/codecalm"
                        class="btn" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon text-pink" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
                        Sponsor
                    </a> -->
                </div>
            </div>
            <div class="d-none d-md-flex">
                <a href="?theme=dark" 
                    class="nav-link px-0 hide-theme-dark" 
                    title="Enable dark mode" 
                    data-bs-toggle="tooltip" 
                    data-bs-placement="bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" /></svg>
                </a>
                <a href="?theme=light"
                    class="nav-link px-0 hide-theme-light"
                    title="Enable light mode"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="4" /><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" /></svg>
                </a>
                
                <div class="nav-item dropdown d-none d-md-flex me-3">
                    <a href="#notifications"
                        class="nav-link px-0"
                        data-bs-toggle="dropdown"
                        tabindex="-1"
                        aria-label="Show notifications">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" /><path d="M9 17v1a3 3 0 0 0 6 0v-1" /></svg>
                        {#if notifications.length}<span class="badge bg-red"></span>{/if}
                    </a>
                    <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">
                                    <slot name="notification-header">Last updates</slot>
                                </h3>
                            </div>
                            <div class="list-group list-group-flush list-group-hoverable">
                                {#each notifications as notification}
                                    <div class="list-group-item">
                                        <div class="row align-items-center">
                                            <div class="col-auto">
                                                <span class="status-dot d-block {notification.status? 'bg-' + notification.status: ''}"
                                                    class:status-dot-animated={notification.status}>
                                                </span>
                                            </div>
                                            <div class="col text-truncate">
                                                <a href={notification.href}
                                                    class="text-body d-block no-text-decoration">
                                                    {notification.title}
                                                    {#if notification.description}
                                                        <div class="d-block text-muted text-truncate mt-n1">
                                                            {notification.description}
                                                        </div>
                                                    {/if}
                                                </a>
                                            </div>
                                            {#if notification.star}
                                                <div class="col-auto">
                                                    <a href={notification.href}
                                                        class="list-group-item-actions">
                                                        <svg xmlns="http://www.w3.org/2000/svg" 
                                                            class="icon text-{notification.star}" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
                                                    </a>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                {/each}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="nav-item dropdown">
                <a href="#user"
                    class="nav-link d-flex lh-1 text-reset p-0"
                    data-bs-toggle="dropdown"
                    aria-label="Open user menu">
                    <span class="avatar avatar-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                            </svg>
                    </span>
                    <div class="d-none d-xl-block ps-2">
                        <div>{ user.username }</div>
                        <div class="mt-1 small text-muted">{ user.email }</div>
                    </div>
                </a>
                <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <!-- <a href="#" class="dropdown-item">Profile</a> -->
                    <!-- <div class="dropdown-divider"></div> -->
                    <a href="#logout" class="dropdown-item">Logout</a>
                </div>
            </div>
        </div>
    </div>
</header>
<header class="navbar-expand-md">
    <div class="collapse navbar-collapse" id="navbar-menu">
        <div class="navbar navbar-light">
            <div class="container-xl">
                <ul class="navbar-nav">
                    {#each menu as menu_item}
                        {#if menu_item.menu}
                            <!-- Check if second level page is active (not working for third) -->
                            <!-- https://stackoverflow.com/questions/19590865/from-an-array-of-objects-extract-value-of-a-property-as-array/46694321#46694321 -->
                            <!-- https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays -->
                            <!-- {menu_item.menu.flat().map(a => a.href)} -->
                            <li class="nav-item dropdown" 
                                class:active={menu_item.menu.flat().map(a => a.href).includes(path)}>
                                <a class="nav-link dropdown-toggle" 
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside"
                                    role="button"
                                    href="#navbar-base">
                                    {#if menu_item.icon}
                                        <span class="nav-link-icon d-md-none d-lg-inline-block">
                                            {@html menu_item.icon}
                                        </span>
                                    {/if}
                                    {#if menu_item.title}
                                        <span class="nav-link-title">{menu_item.title}</span>
                                    {/if}
                                </a>
                                <Dropdown {menu_item} {path} />
                            </li>
                        {:else}
                            <li class="nav-item" 
                                class:active={path === menu_item.href}>
                                <a class="nav-link" 
                                    href={menu_item.href ?? '#navbar-base'}
                                    use:link>
                                    {#if menu_item.icon}
                                        <span class="nav-link-icon d-md-none d-lg-inline-block">
                                            {@html menu_item.icon}
                                        </span>
                                    {/if}
                                    {#if menu_item.title}
                                        <span class="nav-link-title">{menu_item.title}</span>
                                    {/if}
                                </a>
                            </li>
                        {/if}
                    {/each}
                </ul>
                
                <!-- <div class="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last">
                    <form action="." method="get">
                        <div class="input-icon">
                            <span class="input-icon-addon">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="10" cy="10" r="7" /><line x1="21" y1="21" x2="15" y2="15" /></svg>
                            </span>
                            <input type="text" value="" class="form-control" placeholder="Search…" aria-label="Search in website">
                        </div>
                    </form>
                </div> -->
            </div>
        </div>
    </div>
</header>
<div class="page-wrapper">
    <!-- Page header -->
    <div class="page-header d-print-none">
        <div class="container-xl">
            <div class="row g-2 align-items-center">
                <div class="col">
                    <h2 class="page-title">
                        <slot name="h2" />
                    </h2>
                </div>
            </div>
        </div>
    </div>
    <div class="page-body">
        <div class="container-xl">
            <!-- Content here -->
            <slot name="main" />
        </div>
    </div>
    <footer class="footer footer-transparent d-print-none">
        <div class="container-xl">
            <div class="row text-center align-items-center flex-row-reverse">
                {#if footer_menu}
                    <div class="col-lg-auto ms-lg-auto">
                        <ul class="list-inline list-inline-dots mb-0">
                            {#each footer_menu as menu_item}
                                <li class="list-inline-item">
                                    <a href={menu_item.href ?? '#'}
                                        class="link-secondary"
                                        target={menu_item.target}
                                        rel={(menu_item.target === '_blank')? 'noreferrer': null}>
                                        {#if menu_item.icon}{@html menu_item.icon}{/if}
                                        {menu_item.title}
                                    </a>
                                </li>
                            {/each}
                        </ul>
                    </div>
                {/if}
                {#if footer_notice}
                    <div class="col-12 col-lg-auto mt-3 mt-lg-0">
                        <ul class="list-inline list-inline-dots mb-0">
                            {#each footer_notice as notice}
                                <li class="list-inline-item">{@html notice}</li>
                            {/each}
                        </ul>
                    </div>
                {/if}
            </div>
        </div>
    </footer>
</div>

<style>
    a.no-text-decoration:hover {
        text-decoration: none;
    }
</style>