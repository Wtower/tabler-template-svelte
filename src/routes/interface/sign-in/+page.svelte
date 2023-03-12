<script>
    import Signin from "$lib/interface/signin.svelte";
    
    const user = {username: '', password: ''};
</script>

<Signin {...user} />
