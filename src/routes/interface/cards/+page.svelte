<script>
    import { base } from '$app/paths';
	import Card from '$lib/interface/card.svelte';
	import Empty from "$lib/interface/empty.svelte";
    import { config } from "$stores/config";
</script>

<Empty path="{base}/interface/cards" {...$config}>
    <span slot="h2">Cards</span>
    <div class="container-xl">
        <div class="row row-cards">
            <div class="col-md-6 col-lg-3">
                <Card>
                    <span slot="title">Card title</span>
                    Simple card
                </Card>
            </div>
            <div class="col-md-6 col-lg-3">
                <Card header="light">
                    <span slot="title">Card title</span>
                    Card with header background
                </Card>
            </div>
            <div class="col-md-6 col-lg-3">
                <Card header="none">
                    <span slot="title">Card title</span>
                    Card without border
                </Card>
            </div>
            <div class="col-md-6 col-lg-3">
                <Card>
                    <span slot="title">Card title</span>
                    <span slot="subtitle">Subtitle</span>
                    Card with title and subtitle
                </Card>
            </div>
            <div class="col-md-6 col-lg-3">
                <Card href="#card" header="none">Default hover effect</Card>
            </div>
            <div class="col-md-6 col-lg-3">
                <Card href="#card" header="none" linkEffect="rotate">Rotate hover effect</Card>
            </div>
            <div class="col-md-6 col-lg-3">
                <Card href="#card" header="none" linkEffect="pop">Pop hover effect</Card>
            </div>
            <div class="col-md-6 col-lg-3"></div>
      </div>
    </div>
</Empty>
