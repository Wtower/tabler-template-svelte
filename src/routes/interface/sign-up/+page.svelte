<script>
    import Signup from "$lib/interface/signup.svelte";

    const user = {username: '', email: '', password: ''};
</script>

<Signup {...user} />
