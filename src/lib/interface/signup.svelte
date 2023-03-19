<script>
    import Text from '../form/text.svelte';
    import Password from '../form/password.svelte';
    import Checkboxes from '../form/checkboxes.svelte';

    /**
     * Html to display as brand on header.
	 * @type {string}
	 */
    export let brand = '';

    /**
     * Username
	 * @type {string}
	 */
    export let username;

    /**
     * Email
	 * @type {string}
	 */
    export let email;

    /**
     * Password
     * @type {string}
     */
    export let password;
</script>

<!-- 
@component
Signup interface component.

Slots
- h1
- description
-->
<div class="container container-tight py-4">
        <div class="text-center mb-4">
            <a href="." class="navbar-brand navbar-brand-autodark">
                <slot name="h1">{@html brand}</slot>
            </a>
        </div>
        <form class="card card-md" action="./" method="get" autocomplete="off" novalidate>
            <div class="card-body">
                <h2 class="card-title text-center mb-4">Create new account</h2>
                <Text id="username" placeholder="Enter name" bind:value={username}>Name</Text>
                <Text id="email" type="email" placeholder="Enter email" bind:value={email}>
                    Email address
                </Text>
                <Password id="password"
                    placeholder="Password" 
                    bind:value={password}>
                    Password
                    <svelte:fragment slot="description">
                        <a href="#forgot-password">Forgot your password?</a>
                    </svelte:fragment>
                </Password>
                <Checkboxes name="terms" 
                    checkboxes={[{
                        v: false,
                        t: '',
                        html: `Agree with <a href="#terms-of-service" tabindex="-1">terms and policy</a>`
                    }]} 
                    value={[]} />
                <div class="form-footer">
                    <button type="submit" class="btn btn-primary w-100">Create new account</button>
                </div>
            </div>
        </form>
        <div class="text-center text-muted mt-3">
            Already have account? <a href="#sign-in" tabindex="-1">Sign in</a>
        </div>
    </div>
