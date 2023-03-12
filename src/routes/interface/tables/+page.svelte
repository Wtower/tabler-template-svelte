<script>
    import { base } from "$app/paths";
    import Progress from "$lib/form/progress.svelte";
    import Text from "$lib/form/text.svelte";
    import Card from "$lib/interface/card.svelte";
    import Empty from "$lib/interface/empty.svelte";
    import Table from "$lib/interface/table.svelte";
    import { config } from "$stores/config";

    /**
     * https://dummyjson.com/docs/users
     * @returns {Promise<Object>} 
     */
    async function getUsers() {
        const res = 
            await fetch('https://dummyjson.com/users?select=firstName,email,lastName,company');
        const data = await res.json();
        return data.users;
    }
    let promiseUsers = getUsers();
    /** @type {string} */
    let visibleUser;

    /**
     * https://dummyjson.com/docs/products
     * @returns {Promise<Object>} 
     */
     async function getProducts() {
        const res = await fetch('https://dummyjson.com/products?limit=8&select=title,stock');
        const data = await res.json();
        return data.products.sort(
            /** 
             * Sort by stock.
             * https://stackoverflow.com/questions/979256/sorting-an-array-of-objects-by-property-values
             * @param {{stock: string}} a
             * @param {{stock: string}} b
             */
            (a, b) => parseInt(b.stock) - parseInt(a.stock)
        );
    }
    let promiseProducts = getProducts();
</script>

<Empty path="{base}/interface/tables" {...$config}>
    <span slot="h2">Tables</span>
    <div class="container-xl">
        <div class="row row-cards">
            <div class="col-lg-8">
                <Card noPadding>
                    {#await promiseUsers}
                        <Progress />
                    {:then data}
                        <Table 
                            vcenter
                            noMargin
                            fields={{
                                name: {
                                    strong: true,
                                    calculate: {
                                        fields: ['lastName', 'firstName'], 
                                        /** @param {{lastName: string, firstName: string}} name */
                                        function: ({lastName, firstName}) => 
                                            `${lastName}, ${firstName}`
                                }},
                                title: {
                                    calculate: {
                                        fields: ['company'],
                                        /** @param {{company: {title: string}}} company */
                                        function: ({company}) => company.title,
                                    }
                                },
                                email: {type: 'email'},
                                department: {
                                    calculate: {
                                        fields: ['company'],
                                        /** @param {{company: {department: string}}} company */
                                        function: ({company}) => company.department,
                                    }
                                },
                                edit: {label: '', slot: true},
                            }}
                            {data}
                            bind:visible={visibleUser}
                            let:row>
                            <span slot="row">
                                <a href={null} 
                                    class="edit" 
                                    on:click={() => 
                                        visibleUser = visibleUser === row.id? '': row.id
                                    }>
                                    edit</a></span>
                            <div class="row mb-3">
                                <!-- Here should update the record and refresh the promise -->
                                <Text id="{row.id}.lastName" 
                                    class="col-lg-6 mb-3"
                                    disabled 
                                    value={row.lastName}>
                                    Last name
                                </Text>
                                <Text id="{row.id}.firstName" 
                                    disabled 
                                    class="col-lg-6 mb-3"
                                    value={row.firstName}>
                                    First name
                                </Text>
                                <Text id="{row.id}.company.title" 
                                    disabled 
                                    class="col-lg-6 mb-3"
                                    value={row.company.title}>
                                    Company title
                                </Text>
                                <Text id="{row.id}.company.department" 
                                    disabled 
                                    class="col-lg-6 mb-3"
                                    value={row.company.department}>
                                    Company department
                                </Text>
                            </div>
                            <button type="button" 
                                class="btn btn-primary me-auto mb-3" 
                                on:click={() => visibleUser = ''}>
                                Close
                            </button>
                        </Table>
                    {:catch _}
                        Error loading data.
                    {/await}
                </Card>
            </div>

            <div class="col-lg-4">
                <Card noPadding>
                    <span slot="title">Top Products</span>
                    {#await promiseProducts}
                        <Progress />
                    {:then data} 
                        <Table
                            small
                            borderless
                            fields={{
                                title: {},
                                stock: {align: 'right'},
                            }} 
                            {data} />
                    {/await}
                </Card>
            </div>

        </div>
    </div>
</Empty>

<style>
    .edit {
        cursor: pointer;
    }
</style>
