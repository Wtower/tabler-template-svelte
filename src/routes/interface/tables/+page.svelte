<script>
    import { base } from "$app/paths";
    import Progress from "$lib/form/progress.svelte";
    import Text from "$lib/form/text.svelte";
    import Badge from "$lib/interface/badge.svelte";
    import Card from "$lib/interface/card.svelte";
    import Dropdown from "$lib/interface/dropdown.svelte";
    import Empty from "$lib/interface/empty.svelte";
    import Table from "$lib/interface/table.svelte";
    import { config } from "$stores/config";

    /**
	 * https://dummyjson.com/docs/users
	 * @param {number} limit
	 * @param {number} skip
	 * @returns {Promise<Object>}
	 */
    async function getUsers(limit, skip) {
        const res = await fetch(
            `https://dummyjson.com/users?limit=${Number(limit)}&skip=${Number(skip)}&select=firstName,email,lastName,image,company`
        );
        const data = await res.json();
        return data.users;
    }
    let promiseUsers = [
        getUsers(8, 0), 
        getUsers(5, 8),
        getUsers(5, 13),
        getUsers(5, 18),
    ];
    /** @type {string?} */
    let visibleUser;

    /**
     * Field definition.
     * @type {{ 
     *  [fieldId: string]: {
     *      label?: string,
     *      align?: 'left'|'center'|'right',
     *      strong?: boolean,
     *      type?: 'text'|'email'|'calculate'|'slot'|'progress',
     *      calculate?: {fields: Array.<string>, function: function},
     *      slot?: boolean,
     *      progress?: {fieldLabel: string, fieldValue: string, maxValue?: number},
     * }}}
     */
     const fieldUsers = {
        name: {
            strong: true,
            calculate: {
                fields: ['lastName', 'firstName'], 
                /** @param {{lastName: string, firstName: string}} name */
                function: ({lastName, firstName}) => `${lastName}, ${firstName}`
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
    };

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

    // Carts
    let limit = 8;
    let skip = 0;
    /**
	 * https://dummyjson.com/docs/carts
	 * @param {number} limit
	 * @param {number} skip
	 * @returns {Promise<{carts: Array.<Object>, total: number, skip: number, limit: number}>}
	 */
    async function getCarts(limit, skip) {
        const res = await fetch(
            `https://dummyjson.com/carts?limit=${Number(limit)}&skip=${Number(skip)}`
        );
        const data = await res.json();
        return data;
    }
    $: promiseCarts = getCarts(limit, skip);
    /** @type {string?} */
    let visibleCart;
    /** @type {Array.<string>} */
    let selectedCart;
</script>

<Empty path="{base}/interface/tables" {...$config}>
    <span slot="h2">Tables</span>
    <div class="container-xl">
        <div class="row row-cards">

            <!-- Table: Users [0] -->
            <div class="col-lg-8">
                <Card noPadding>
                    {#await promiseUsers[0]}
                        <Progress class="m-4" />
                    {:then data}
                        <Table 
                            vcenter
                            noMargin
                            fields={fieldUsers}
                            {data}
                            bind:visible={visibleUser}
                            let:row>
                            <span slot="row">
                                <a href={null} 
                                    class="edit" 
                                    on:click={() => 
                                        visibleUser = visibleUser === row.id? null: row.id
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
                            <button class="btn btn-primary me-auto mb-3" 
                                on:click={() => visibleUser = null}>
                                Close
                            </button>
                        </Table>
                    {:catch _}
                        Error loading data.
                    {/await}
                </Card>
            </div>

            <!-- Table: Products -->
            <div class="col-lg-4">
                <Card noPadding>
                    <span slot="title">Top Products</span>
                    {#await promiseProducts}
                        <Progress class="m-4" />
                    {:then data} 
                        <Table
                            small
                            borderless
                            fields={{
                                product: {
                                    strong: true,
                                    progress: {
                                        fieldLabel: 'title', 
                                        fieldValue: 'stock', 
                                        maxValue: 200
                                    }
                                },
                                stock: {align: 'right', strong: true},
                            }} 
                            {data} />
                    {/await}
                    <div class="mb-3"></div>
                </Card>
            </div>

            <!-- Table: Users [1] -->
            <div class="col-12">
                <Card noPadding>
                    {#await promiseUsers[1]}
                        <Progress class="m-4" />
                    {:then data}
                        <Table 
                            vcenter
                            noMargin
                            striped
                            fields={fieldUsers}
                            {data}>
                            <span slot="row">(edit disabled)</span>
                        </Table>
                    {:catch _}
                        Error loading data.
                    {/await}
                </Card>
            </div>

            <!-- Table: Users [2] -->
            <div class="col-12">
                <Card noPadding>
                    {#await promiseUsers[2]}
                        <Progress class="m-4" />
                    {:then data}
                        <Table 
                            vcenter
                            noMargin
                            fields={{
                                name: {slot: true},
                                title: {slot: true},
                                company: {slot: true},
                                edit: {slot: true, label: ''},
                            }}
                            {data}>
                            <span slot="row" let:row let:fieldId let:field>
                                {#if fieldId === 'name'}
                                    <div class="d-flex py-1 align-items-center">
                                        <span class="avatar me-2" 
                                            style:background-image={`url(${row.image})`}>
                                        </span>
                                        <div class="flex-fill">
                                            <div class="font-weight-medium">
                                                {row.lastName}, {row.firstName}
                                            </div>
                                            <div class="text-muted">
                                                <a href="mailto:{row.email}" class="text-reset">
                                                    {row.email}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                {:else if fieldId === 'title'}
                                    <div>{row.company.title}</div>
                                    <div class="text-muted">{row.company.department}</div>
                                {:else if fieldId === 'company'}
                                    {row.company.name}
                                {:else}
                                    (edit disabled)
                                {/if}
                            </span>
                        </Table>
                    {:catch _}
                        Error loading data.
                    {/await}
                </Card>
            </div>

            <!-- Table: Users [3] -->
            <div class="col-12">
                <Card noPadding>
                    {#await promiseUsers[3]}
                        <Progress class="m-4" />
                    {:then data}
                        <Table 
                            vcenter
                            noMargin
                            fields={{
                                name: {slot: true},
                                title: {slot: true},
                                company: {slot: true},
                                edit: {slot: true, label: ''},
                            }}
                            {data}>
                            <span slot="row" let:row let:fieldId>
                                {#if fieldId === 'name'}
                                    <div class="d-flex py-1 align-items-center">
                                        <span class="avatar me-2" 
                                            style:background-image={`url(${row.image})`}>
                                        </span>
                                        <div class="flex-fill">
                                            <div class="font-weight-medium">
                                                {row.lastName}, {row.firstName}
                                            </div>
                                            <div class="text-muted">
                                                <a href="mailto:{row.email}" class="text-reset">
                                                    {row.email}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                {:else if fieldId === 'title'}
                                    <div>{row.company.title}</div>
                                    <div class="text-muted">{row.company.department}</div>
                                {:else if fieldId === 'company'}
                                    {row.company.name}
                                {:else}
                                    <div class="btn-list flex-nowrap">
                                        <button class="btn disabled">Edit</button>
                                        <button 
                                            class="btn dropdown-toggle align-text-top" 
                                            data-bs-toggle="dropdown">
                                            Actions
                                        </button>
                                        <Dropdown menuItem={{menu: [[
                                            {title: 'Action'}, 
                                            {title: 'Another action'},
                                        ]]}} />
                                    </div>
                                {/if}
                            </span>
                        </Table>
                    {:catch _}
                        Error loading data.
                    {/await}
                </Card>
            </div>

            <!-- Table: Carts -->
            <div class="col-12">
                <Card noPadding>
                    <span slot="header">Carts</span>
                    <!-- TODO: limit, sort -->
                    {#await promiseCarts}
                        <Progress class="m-4" />
                    {:then data}
                        <Table 
                            vcenter
                            noMargin
                            search=""
                            addNewRecord
                            bind:visible={visibleCart}
                            bind:selected={selectedCart}
                            bind:limit
                            bind:skip
                            total={data.total}
                            fields={{
                                selectUsers: {type: 'select'},
                                id: {label: 'ID'},
                                products: {
                                    calculate: {
                                        fields: ['products'],
                                        /** @param {{products: Array.<{title: string}>}} products */
                                        function: ({products}) => 
                                            products.map((p) => p.title).join(', '),
                                    }
                                },
                                totalProducts: {label: 'Total products', align: 'right'},
                                totalQuantity: {label: 'Total quantity', align: 'right'},
                                userId: {label: 'User ID', align: 'right'},
                                total: {
                                    align: 'right',
                                    nowrap: true,
                                    calculate: {
                                        fields: ['total'],
                                        /**
                                         * https://stackoverflow.com/a/75718667/940098
                                         * https://stackoverflow.com/questions/31581011/how-to-use-tolocalestring-and-tofixed2-in-javascript 
                                         * @param {{total: number}} total 
                                         */
                                        function: ({total}) => `${total.toLocaleString(undefined, {
                                            minimumFractionDigits: 2,
                                        })} €`,
                                    }
                                },
                                priority: {slot: true, nowrap: true},
                                actions: {slot: true, label: ''},
                            }}
                            data={data.carts}
                            bulk={{'Delete': () => alert(`Attempted to delete ${selectedCart}`)}}
                            let:row>
                            <span slot="row" let:row let:fieldId>
                                {#if fieldId === 'priority'}
                                    {#if row.total > 2000}
                                        <Badge bgColor="danger" marginLeftClass="1" /> High
                                    {:else if row.total > 1000}
                                        <Badge bgColor="success" marginLeftClass="1" /> Normal
                                    {:else}
                                        <Badge bgColor="primary-lt" marginLeftClass="1" /> Low
                                    {/if}
                                {:else}
                                    <div class="dropdown">
                                        <button 
                                            class="btn dropdown-toggle align-text-top" 
                                            data-bs-boundary="viewport"
                                            data-bs-toggle="dropdown">
                                            Actions
                                        </button>
                                        <Dropdown menuItem={{menu: [[
                                            {title: 'Edit', function: () => 
                                                visibleCart = visibleCart === row.id? null: row.id}, 
                                        ]]}} />
                                    </div>
                                {/if}
                            </span>
                            <div class="row mb-3">
                                <!-- Here should add the record and refresh the promise -->
                                <Text id="{row.id}.id" 
                                    class="col-lg-6 mb-3"
                                    disabled 
                                    value="">
                                    ID
                                </Text>
                                <div class="col-lg-6 mt-4 text-end">
                                    <button class="btn btn-primary"
                                        on:click={() => visibleCart = null}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </Table>
                    {:catch _}
                        Error loading data.
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
