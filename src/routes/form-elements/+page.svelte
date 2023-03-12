<script>
    import { base } from '$app/paths';
	import Empty from "$lib/interface/empty.svelte";
    import Dropdown from "$lib/interface/dropdown.svelte";
    import PopOver from "$lib/interface/pop_over.svelte";
    import Buttons from "$lib/form/buttons.svelte";
    import Checkboxes from "$lib/form/checkboxes.svelte";
    import DateInput from "$lib/form/date_input.svelte"
    import DateSelect from "$lib/form/date_select.svelte";
    import ImageCheck from "$lib/form/image_check.svelte";
    import InputGroup from "$lib/form/input_group.svelte";
    import Password from "$lib/form/password.svelte";
    import Progress from "$lib/form/progress.svelte";
    import Radios from "$lib/form/radios.svelte";
    import Range from "$lib/form/range.svelte";
    import Select from "$lib/form/select.svelte";
    import Text from "$lib/form/text.svelte";
    import Textarea from "$lib/form/textarea.svelte";
    import { config } from "$stores/config";

    /** @type Array.<boolean> */
    let terms = [];
    /** @type {Object.<string, boolean?>} */
    let isValid = {terms: null};
</script>

<Empty path="{base}/form-elements" {...$config}>
    <span slot="h2">
        <h2>Form elements</h2>
    </span>
    <main slot="main">

        <div class="container-xl">
            <div class="row row-cards">
                <div class="col-12">
                    <form action="https://httpbin.org/post" method="post" class="card">
                        <div class="card-header">
                            <h4 class="card-title">Form elements</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-xl-4">
                                    <div class="row">
                                        <div class="col-md-6 col-xl-12">
                                            <InputGroup>
                                                Static
                                                <span slot="static">Input value</span>
                                            </InputGroup>
                                            <Text id="text" 
                                                placeholder="Input placeholder" 
                                                value="">
                                                Text
                                            </Text>
                                            <Password id="password"
                                                placeholder="Input placeholder" 
                                                value="">
                                                Password
                                            </Password>
                                            <Text id="disabled" 
                                                placeholder="Disabled..." 
                                                disabled
                                                value="Well, she turned me into a newt.">
                                                Disabled
                                            </Text>
                                            <Text id="readonly" 
                                                placeholder="Readonly..." 
                                                readonly
                                                value="Well, how'd you become king, then?">
                                                Readonly
                                            </Text>
                                            <Text id="required" 
                                                placeholder="Required..." 
                                                required
                                                value="">
                                                Required
                                            </Text>
                                            <Textarea id="textarea" 
                                                rows={6}
                                                placeholder="Content..."
                                                maxlengthCounter={100}
                                                value="Oh! Come and see the violence inherent in the system! Help, help, I'm being repressed! We shall say 'Ni' again to you, if you do not appease us. I'm not a witch. I'm not a witch. Camelot!">
                                                Textarea
                                            </Textarea>
                                            <Select id="select"
                                                options={[
                                                    {v: 1, t: 'One'}, 
                                                    {v: 2, t: 'Two'}, 
                                                    {v: 3, t: 'Three'}
                                                ]}
                                                value={1}>
                                                Select
                                            </Select>
                                            <Select id="select-multiple"
                                                options={[
                                                    {v: 1, t: 'One'}, 
                                                    {v: 2, t: 'Two'}, 
                                                    {v: 3, t: 'Three'}
                                                ]}
                                                multiple
                                                value={[]}>
                                                Select multiple
                                            </Select>
                                            <InputGroup for="input-group" class="mb-2">
                                                Input Group
                                                <svelte:fragment slot="controls">
                                                    <Text id="input-group"
                                                        wrapper=""
                                                        placeholder="Search for..."
                                                        value="" />
                                                    <button class="btn" type="button">Go!</button>
                                                </svelte:fragment>
                                            </InputGroup>
                                            <InputGroup for="input-group-2">
                                                <svelte:fragment slot="controls">
                                                    <button 
                                                        type="button" 
                                                        class="btn dropdown-toggle" 
                                                        data-bs-toggle="dropdown" 
                                                        aria-haspopup="true" 
                                                        aria-expanded="false">
                                                        Action
                                                    </button>
                                                    <Dropdown menuItem={{
                                                        menu: [[{
                                                            title: 'Action',
                                                        }, {
                                                            title: 'Another action',
                                                        }]]}} />
                                                    <Text id="input-group-2" wrapper="" value="" />
                                                </svelte:fragment>
                                            </InputGroup>
                                            <InputGroup for="input-group-3">
                                                Input group buttons
                                                <svelte:fragment slot="controls">
                                                    <Text id="input-group-3" 
                                                        wrapper=""
                                                        value= "" />
                                                    <button type="button" class="btn">
                                                        Action
                                                    </button>
                                                    <button 
                                                        data-bs-toggle="dropdown" 
                                                        type="button" 
                                                        class="btn dropdown-toggle dropdown-toggle-split">
                                                    </button>
                                                    <Dropdown menuItem={{
                                                        menu: [[{
                                                            title: 'Action',
                                                        }, {
                                                            title: 'Another action',
                                                        }]]}} />
                                                </svelte:fragment>
                                            </InputGroup>
                                            <InputGroup for="icon-input">
                                                Icon input
                                                <svelte:fragment slot="controls">
                                                    <!-- The above input group is required because the icon group text box does not accept label. -->
                                                    <Text id="icon-input"
                                                        wrapper=""
                                                        placeholder="Search..."
                                                        value="">
                                                        <span slot="iconAfter">
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                                                        </span>
                                                    </Text>
                                                </svelte:fragment>
                                            </InputGroup>
                                            <Text id="icon-input-2"
                                                placeholder="Username"
                                                value="">
                                                <span slot="iconBefore">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                                                </span>
                                            </Text>
                                            <InputGroup for="loader-input">
                                                Loader input
                                                <svelte:fragment slot="controls">
                                                    <Text id="loader-input"
                                                        wrapper=""
                                                        placeholder="Loading..."
                                                        value="">
                                                        <span slot="iconAfter">
                                                            <span class="input-icon-addon">
                                                                <div class="spinner-border spinner-border-sm text-muted" 
                                                                    role="status">
                                                                </div>
                                                            </span>
                                                        </span>
                                                    </Text>
                                                </svelte:fragment>
                                            </InputGroup>
                                            <Text id="loader-input-2"
                                                placeholder="Loading..."
                                                value="">
                                                <span slot="iconBefore">
                                                    <span class="input-icon-addon">
                                                        <div class="spinner-border spinner-border-sm text-muted" 
                                                            role="status">
                                                        </div>
                                                    </span>
                                                </span>
                                            </Text>
                                            <InputGroup for="separated-inputs">
                                                Separated inputs
                                                <svelte:fragment slot="static">
                                                    <div class="row g-2">
                                                        <div class="col">
                                                            <Text id="separated-inputs"
                                                                wrapper=""
                                                                placeholder="Search for..."
                                                                value="" />
                                                        </div>
                                                        <div class="col-auto">
                                                            <a href="#button" 
                                                                class="btn btn-icon" 
                                                                aria-label="Button">
                                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </svelte:fragment>
                                            </InputGroup>
                                            <InputGroup for="input-with-help-icon">
                                                Input with help icon
                                                <svelte:fragment slot="static">
                                                    <div class="row g-2">
                                                        <div class="col">
                                                            <Text id="separated-inputs"
                                                                wrapper=""
                                                                placeholder="Search for..."
                                                                value="" />
                                                        </div>
                                                        <div class="col-auto align-self-center">
                                                            <PopOver 
                                                                style="width: 200px; right: 0;">?
                                                                <span slot="closeText">x</span>
                                                                <div slot="content">
                                                                    <p>ZIP Code must be US or CDN 
                                                                        format. You can use an 
                                                                        extended ZIP+4 code to 
                                                                        determine address more 
                                                                        accurately.</p>
                                                                    <p class='mb-0'>
                                                                        <a href='#zip'>USP ZIP codes 
                                                                            lookup tools
                                                                        </a>
                                                                    </p>                                                                        .
                                                                </div>
                                                            </PopOver>
                                                        </div>
                                                    </div>
                                                </svelte:fragment>
                                            </InputGroup>
                                        </div>
                                        <div class="col-md-6 col-xl-12">
                                            <Text id="form-control-rounded"
                                                class="mb-2"
                                                placeholder="Text..."
                                                border="rounded"
                                                value="">
                                                Form control rounded
                                            </Text>
                                            <Text id="icon-input-rounded"
                                                border="rounded"
                                                placeholder="Search..."
                                                value="">
                                                <span slot="iconAfter">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                                                </span>
                                            </Text>
                                            <Text id="form-control-flush"
                                                placeholder="Text..."
                                                border="none"
                                                value="">
                                                Form control flush
                                            </Text>
                                            <InputGroup 
                                                class="mb-2" 
                                                for="input-group-after-flush">
                                                Input Group
                                                <svelte:fragment slot="controls">
                                                    <span class="input-group-text">@</span>
                                                    <Text id="input-group-after-flush"
                                                        wrapper=""
                                                        placeholder="username"
                                                        autocomplete="off"
                                                        value="" />
                                                </svelte:fragment>
                                            </InputGroup>
                                            <InputGroup class="mb-2">
                                                <svelte:fragment slot="controls">
                                                    <Text id="input-group-after-flush-2"
                                                        wrapper=""
                                                        placeholder="subdomain"
                                                        autocomplete="off"
                                                        value="" />
                                                    <span class="input-group-text">.tabler.io</span>
                                                </svelte:fragment>
                                            </InputGroup>
                                            <InputGroup>
                                                <svelte:fragment slot="controls">
                                                    <span class="input-group-text">https://</span>
                                                    <Text id="input-group-after-flush-3"
                                                        wrapper=""
                                                        placeholder="subdomain"
                                                        autocomplete="off"
                                                        value="" />
                                                    <span class="input-group-text">.tabler.io</span>
                                                </svelte:fragment>
                                            </InputGroup>
                                            <InputGroup class="mb-2" for="input-with-checkbox">
                                                Input with checkbox or radios
                                                <svelte:fragment slot="controls">
                                                    <span class="input-group-text">
                                                        <input class="form-check-input m-0"
                                                            type="checkbox"
                                                            checked />
                                                    </span>
                                                    <Text id="input-with-checkbox"
                                                        wrapper=""
                                                        autocomplete="off"
                                                        value="" />
                                                </svelte:fragment>
                                            </InputGroup>
                                            <InputGroup>
                                                <svelte:fragment slot="controls">
                                                    <Text id="input-with-radio"
                                                        wrapper=""
                                                        autocomplete="off"
                                                        value="" />
                                                    <span class="input-group-text">
                                                        <input class="form-check-input m-0"
                                                            type="radio"
                                                            checked />
                                                    </span>
                                                </svelte:fragment>
                                            </InputGroup>
                                            <InputGroup for="input-with-prepended" flat>
                                                Input with prepended text
                                                <svelte:fragment slot="controls">
                                                    <span class="input-group-text">
                                                        https://tabler.io/users/
                                                    </span>
                                                    <Text id="input-with-prepended"
                                                        wrapper=""
                                                        padding="none"
                                                        autocomplete="off"
                                                        value="yourfancyusername" />
                                                </svelte:fragment>
                                            </InputGroup>
                                            <InputGroup for="input-with-appended" flat>
                                                Input with appended text
                                                <svelte:fragment slot="controls">
                                                    <Text id="input-with-appended"
                                                        wrapper=""
                                                        padding="none text-end"
                                                        autocomplete="off"
                                                        value="yourfancedomain" />
                                                    <span class="input-group-text">.tabler.io</span>
                                                    </svelte:fragment>
                                            </InputGroup>
                                            <Password id="input-with-appended-link" value="">
                                                Input with appended link
                                                <span slot="appended">Show password</span>
                                            </Password>
                                            <InputGroup for="input-with-appended-kbd" flat>
                                                Input with appended kbd
                                                <svelte:fragment slot="controls">
                                                    <Text id="input-with-appended-kbd"
                                                        wrapper=""
                                                        autocomplete="off"
                                                        value="" />
                                                    <span class="input-group-text">
                                                        <kbd>ctrl + K</kbd>
                                                    </span>
                                                </svelte:fragment>
                                            </InputGroup>
                                            <InputGroup for="input-with-appended-icons" flat>
                                                Input with appended icon links
                                                <svelte:fragment slot="controls">
                                                    <Text id="input-with-appended-icons"
                                                        wrapper=""
                                                        autocomplete="off"
                                                        value="" />
                                                    <span class="input-group-text">
                                                        <a href="#nolink" 
                                                            class="link-secondary" 
                                                            title="Clear search" 
                                                            data-bs-toggle="tooltip">
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                                                        </a>
                                                        <a href="#nolink" 
                                                            class="link-secondary ms-2" 
                                                            title="Search settings" 
                                                            data-bs-toggle="tooltip">
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M6 4l0 4" /><path d="M6 12l0 8" /><path d="M12 16m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M12 4l0 10" /><path d="M12 18l0 2" /><path d="M18 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M18 4l0 1" /><path d="M18 9l0 11" /></svg>
                                                        </a>
                                                        <a href="#nolink" 
                                                            class="link-secondary ms-2 disabled" 
                                                            title="Add notification" 
                                                            data-bs-toggle="tooltip">
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" /><path d="M9 17v1a3 3 0 0 0 6 0v-1" /></svg>
                                                        </a>
                                                    </span>
                                                </svelte:fragment>
                                            </InputGroup>
                                            <InputGroup>Floating inputs</InputGroup>
                                            <Text id="floating-input-1"
                                                type="email"
                                                autocomplete="off"
                                                floatingLabel
                                                value="name@example.com">
                                                Email address
                                            </Text>
                                            <Password id="floating-password-1"
                                                floatingLabel
                                                value="">
                                                Password
                                                <span slot="appended">Show password</span>
                                            </Password>
                                            <Select id="floating-select"
                                                floatingLabel
                                                options={[
                                                    {v: 1, t: 'One'}, 
                                                    {v: 2, t: 'Two'}, 
                                                    {v: 3, t: 'Three'}
                                                ]}
                                                placeholder="Open this select menu"
                                                value="">
                                                Select
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4">
                                    <div class="row">
                                        <div class="col-md-6 col-xl-12">
                                            <ImageCheck 
                                                name="form-imagecheck"
                                                images={
                                                    [...Array(6).fill('https://via.placeholder.com/107x71').map((image, i) => ({
                                                        v: i, 
                                                        img: image
                                                    }))]
                                                }
                                                value={[1, 3]}>
                                                Image Check
                                            </ImageCheck>
                                            <ImageCheck 
                                                name="form-imagecheck-radio"
                                                type="radio"
                                                images={
                                                    [...Array(6).fill('https://via.placeholder.com/107x71').map((image, i) => ({
                                                        v: i, 
                                                        img: image
                                                    }))]
                                                }
                                                value={3}>
                                                Image Check Radio
                                            </ImageCheck>
                                            <ImageCheck
                                                name="color2"
                                                colorCheck
                                                images={
                                                    ['dark', 'white', 'blue', 'azure', 'indigo', 
                                                        'purple', 'pink', 'red', 'orange', 'yellow',
                                                            'lime'
                                                    ].map((color) => ({
                                                        v: color, 
                                                        img: color,
                                                    }))
                                                }
                                                value="white">
                                                Color Input
                                            </ImageCheck>
                                            <ImageCheck
                                                name="color-rounded2"
                                                colorCheck="rounded"
                                                images={
                                                    ['dark', 'white', 'blue', 'azure', 'indigo', 
                                                        'purple', 'pink', 'red', 'orange', 'yellow',
                                                            'lime'
                                                    ].map((color) => ({
                                                        v: color, 
                                                        img: color,
                                                    }))
                                                }
                                                value="blue">
                                                Color Input
                                            </ImageCheck>
                                            <div class="mb-3">
                                                <label for="color-picker" class="form-label">
                                                    Color picker
                                                </label>
                                                <input id="color-picker" 
                                                    type="color" 
                                                    class="form-control form-control-color"
                                                    value="#206bc4" 
                                                    title="Choose your color">
                                            </div>
                                            <Text id="valid-state" 
                                                class="mb-2" 
                                                placeholder="Valid State.." 
                                                validationRegex={/^Valid State$/}
                                                value="Valid State">
                                                Validation States
                                            </Text>
                                            <Text id="invalid-state" 
                                                placeholder="Invalid State.." 
                                                validationRegex={/^Valid State$/}
                                                value="Invalid State">
                                                <span slot="feedback">Invalid feedback</span>
                                            </Text>
                                            <Text id="valid-state-lite" 
                                                class="mb-2" 
                                                placeholder="Valid State.." 
                                                validationRegex={/^Valid State$/}
                                                validationLite
                                                value="Valid State">
                                                Validation States (lite)
                                            </Text>
                                            <Text id="invalid-state" 
                                                placeholder="Invalid State.." 
                                                validationRegex={/^Valid State$/}
                                                validationLite
                                                value="Invalid State" />
                                            <InputGroup class="mb-0">
                                                Form fieldset
                                                <svelte:fragment slot="static">
                                                    <fieldset class="form-fieldset">
                                                        <Text id="fieldset-full-name"
                                                            required
                                                            autocomplete="off"
                                                            value="">
                                                            Full name
                                                        </Text>
                                                        <Text id="fieldset-company"
                                                            required
                                                            autocomplete="off"
                                                            value="">
                                                            Company
                                                        </Text>
                                                        <Text id="fieldset-email"
                                                            required
                                                            autocomplete="off"
                                                            value="">
                                                            Email
                                                        </Text>
                                                        <Text id="fieldset-phone"
                                                            autocomplete="off"
                                                            value="">
                                                            Phone number
                                                        </Text>
                                                        <Checkboxes
                                                            name="fieldset-terms"
                                                            required
                                                            checkboxes={[{
                                                                v: true, 
                                                                t: '',
                                                                html: 'I agree to the <a href="#terms">Terms & Conditions</a>',
                                                            }]}
                                                            bind:isValid={isValid.terms}
                                                            bind:value={terms}>
                                                            <span slot="feedback">
                                                                Field is required.
                                                            </span>
                                                        </Checkboxes>
                                                    </fieldset>
                                                </svelte:fragment>
                                            </InputGroup>
                                        </div>
                                        <div class="col-md-6 col-xl-12">
                                            <Checkboxes name="simple-selectgroup"
                                                selectGroup
                                                checkboxes={[
                                                    'HTML', 'CSS', 'PHP', 'JavaScript'
                                                    ].map((i) => ({v: i, t: i}))}
                                                value={['HTML']}>
                                                Simple selectgroup
                                            </Checkboxes>
                                            <Checkboxes name="icon-selectgroup"
                                                selectGroup
                                                checkboxes={[
                                                    {v: 0, t: '', html: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" /></svg>'},
                                                    {v: 1, t: '', html: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" /></svg>'},
                                                    {v: 2, t: '', html: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7" /><path d="M11 13v2m0 3v2m4 -5v2m0 3v2" /></svg>'},
                                                    {v: 3, t: '', html: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878" /></svg>'},
                                                    {v: 4, t: 'Other'},
                                                ]}
                                                value={[0]}>
                                                Icon input
                                            </Checkboxes>
                                            <Radios name="icon-text-selectgroup"
                                                selectGroup
                                                radios={[
                                                    {v: 0, t: 'Home', html: '<svg xmlns="http://www.w3.org/2000/svg" class="icon me-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>'},
                                                    {v: 1, t: 'User', html: '<svg xmlns="http://www.w3.org/2000/svg" class="icon me-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>'},
                                                    {v: 2, t: 'Circle', html: '<svg xmlns="http://www.w3.org/2000/svg" class="icon me-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg>'},
                                                    {v: 3, t: 'Square', html: '<svg xmlns="http://www.w3.org/2000/svg" class="icon me-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /></svg>'},
                                                ]}
                                                value={0}>
                                                Selectgroup with icons and text
                                            </Radios>
                                            <Checkboxes name="pill-selectgroup"
                                                selectGroup="pills"
                                                checkboxes={[
                                                    'HTML', 'CSS', 'PHP', 'JavaScript'
                                                ].map((i) => ({v: i, t: i}))}
                                                value={['HTML']}>
                                                Different style
                                            </Checkboxes>
                                            <Radios name="form-payment-selectgroup"
                                                selectGroup="boxes"
                                                radios={[
                                                    {v: 0, t: '', html: `
                                                        <div class="me-3">
                                                            <span class="form-selectgroup-check">
                                                                </span>
                                                        </div>
                                                        <div>
                                                            <span class="payment payment-provider-visa payment-xs me-2">
                                                                </span>
                                                            ending in <strong>7998</strong>
                                                        </div>
                                                    `},
                                                    {v: 1, t: '', html: `
                                                        <div class="me-3">
                                                            <span class="form-selectgroup-check">
                                                                </span>
                                                        </div>
                                                        <div>
                                                            <span class="payment payment-provider-mastercard payment-xs me-2">
                                                                </span>
                                                            ending in <strong>2807</strong>
                                                        </div>
                                                    `},
                                                    {v: 2, t: '', html: `
                                                        <div class="me-3">
                                                            <span class="form-selectgroup-check">
                                                                </span>
                                                        </div>
                                                        <div>
                                                            <span class="payment payment-provider-paypal payment-xs me-2">
                                                                </span>
                                                            new
                                                        </div>
                                                    `},
                                                ]}
                                                value={1}>
                                                Selectgroup with icons and text
                                            </Radios>
                                            <Checkboxes name="form-payment-selectgroup"
                                                selectGroup="boxes"
                                                checkboxes={[
                                                    {v: 0, t: '', html: `
                                                        <div class="me-3">
                                                            <span class="form-selectgroup-check">
                                                            </span>
                                                        </div>
                                                        <div class="form-selectgroup-label-content d-flex align-items-center">
                                                            <span class="avatar me-3" style="background-image: url(./static/avatars/000m.jpg)">
                                                                </span>
                                                            <div>
                                                                <div class="font-weight-medium">
                                                                    Paweł Kuna</div>
                                                                <div class="text-muted">
                                                                    UI Designer</div>
                                                            </div>
                                                        </div>
                                                    `},
                                                    {v: 1, t: '', html: `
                                                        <div class="me-3">
                                                            <span class="form-selectgroup-check">
                                                                </span>
                                                        </div>
                                                        <div class="form-selectgroup-label-content d-flex align-items-center">
                                                            <span class="avatar me-3">JL</span>
                                                            <div>
                                                                <div class="font-weight-medium">
                                                                    Jeffie Lewzey</div>
                                                                <div class="text-muted">
                                                                    Chemical Engineer</div>
                                                            </div>
                                                        </div>
                                                    `},
                                                    {v: 2, t: '', html: `
                                                        <div class="me-3">
                                                            <span class="form-selectgroup-check">
                                                                </span>
                                                        </div>
                                                        <div class="form-selectgroup-label-content d-flex align-items-center">
                                                            <span class="avatar me-3" style="background-image: url(./static/avatars/002m.jpg)">
                                                                </span>
                                                            <div>
                                                                <div class="font-weight-medium">
                                                                    Mallory Hulme</div>
                                                                <div class="text-muted">
                                                                    Geologist IV</div>
                                                            </div>
                                                        </div>
                                                    `},
                                                    {v: 3, t: '', html: `
                                                        <div class="me-3">
                                                            <span class="form-selectgroup-check">
                                                                </span>
                                                        </div>
                                                        <div class="form-selectgroup-label-content d-flex align-items-center">
                                                            <span class="avatar me-3" style="background-image: url(./static/avatars/003m.jpg)">
                                                                </span>
                                                            <div>
                                                                <div class="font-weight-medium">
                                                                    Dunn Slane</div>
                                                                <div class="text-muted">
                                                                    Research Nurse</div>
                                                            </div>
                                                        </div>
                                                    `},
                                                    {v: 4, t: '', html: `
                                                        <div class="me-3">
                                                            <span class="form-selectgroup-check">
                                                                </span>
                                                        </div>
                                                        <div class="form-selectgroup-label-content d-flex align-items-center">
                                                            <span class="avatar me-3" style="background-image: url(./static/avatars/000f.jpg)">
                                                                </span>
                                                            <div>
                                                                <div class="font-weight-medium">
                                                                    Emmy Levet</div>
                                                                <div class="text-muted">
                                                                    VP Product Management</div>
                                                            </div>
                                                        </div>
                                                    `},
                                                ]}
                                                value={[1]}>
                                                Project Manager
                                            </Checkboxes>
                                            <Buttons name="btn-radio-basic-2"
                                                buttons={[
                                                    {v: 1, t: '1 min'},
                                                    {v: 5, t: '5 min'},
                                                    {v: 10, t: '10 min'},
                                                    {v: 30, t: '30 min'},
                                                ]}
                                                value={1}>
                                                Buttons group
                                            </Buttons>
                                            <Buttons name="btn-radio-dropdown-2"
                                                buttons={[
                                                    {v: 0, t: 'Option 1'},
                                                    {v: 1, t: 'Option 2'},
                                                ]}
                                                value={0}>
                                                Buttons group with dropdown
                                                <div slot="append">
                                                    <input type="radio" 
                                                        class="btn-check" 
                                                        name="btn-radio-dropdown-2" 
                                                        autocomplete="off">
                                                    <span class="btn dropdown-toggle" 
                                                        data-bs-toggle="dropdown" 
                                                        aria-haspopup="true" 
                                                        aria-expanded="false">
                                                        Other
                                                    </span>
                                                    <div class="dropdown-menu">
                                                        <label class="dropdown-item">
                                                            <input class="form-check-input m-0 me-2" 
                                                                type="radio">
                                                                Option 1
                                                        </label>
                                                        <label class="dropdown-item">
                                                            <input class="form-check-input m-0 me-2"
                                                                type="radio">
                                                                Option 2
                                                        </label>
                                                        <label class="dropdown-item">
                                                            <input class="form-check-input m-0 me-2"
                                                                type="radio">
                                                                Option 3
                                                        </label>
                                                    </div>
                                                </div>
                                            </Buttons>
                                            <div class="row">
                                                <div class="col">
                                                    <Buttons name="btn-radio-vertical-1"
                                                        vertical
                                                        buttons={[...Array(5).keys()].map((i) => 
                                                            ({v: i, t: `Button ${i + 1}`}))}
                                                        value={0}>
                                                        Vertical buttons group
                                                    </Buttons>
                                                </div>
                                                <div class="col">
                                                    <Buttons name="btn-radio-vertical-dropdown-1"
                                                        vertical
                                                        buttons={[...Array(4).keys()].map((i) => 
                                                            ({v: i, t: `Button ${i + 1}`}))}
                                                        value={0}>
                                                        Vertical with dropdown
                                                        <svelte:fragment slot="append">
                                                            <input type="radio"
                                                                class="btn-check"
                                                                name="btn-radio-vertical-dropdown-2"
                                                                autocomplete="off">
                                                            <span class="btn dropdown-toggle"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false">
                                                                Other
                                                            </span>
                                                            <div class="dropdown-menu">
                                                                <label class="dropdown-item">
                                                                    <input class="form-check-input m-0 me-2"
                                                                        type="radio">
                                                                        Option 1
                                                                </label>
                                                                <label class="dropdown-item">
                                                                    <input class="form-check-input m-0 me-2"
                                                                        type="radio">
                                                                        Option 2
                                                                </label>
                                                                <label class="dropdown-item">
                                                                    <input class="form-check-input m-0 me-2"
                                                                        type="radio">
                                                                        Option 3
                                                                </label>
                                                            </div>
                                                        </svelte:fragment>
                                                    </Buttons>
                                                </div>
                                            </div>
                                            <Buttons name="btn-radio-toolbar-2"
                                                buttons={[
                                                    {v: 0, t: '', on: () => {alert('ok')}, html: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 5h6a3.5 3.5 0 0 1 0 7h-6z" /><path d="M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7" /></svg>'},
                                                    {v: 1, t: '', on: () => {alert('ok')}, html: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 5l6 0" /><path d="M7 19l6 0" /><path d="M14 5l-4 14" /></svg>'},
                                                    {v: 2, t: '', on: () => {alert('ok')}, html: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 5v5a5 5 0 0 0 10 0v-5" /><path d="M5 19h14" /></svg>'},
                                                    {v: 3, t: '', on: () => {alert('ok')}, html: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /><path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" /></svg>'},
                                                    {v: 4, t: '', on: () => {alert('ok')}, html: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M8.6 8.6l10.4 10.4" /><path d="M8.6 15.4l10.4 -10.4" /></svg>'},
                                                    {v: 5, t: '', on: () => {alert('ok')}, html: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M12 11l0 6" /><path d="M9 14l6 0" /></svg>'},
                                                    {v: 6, t: '', on: () => {alert('ok')}, html: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M9 14l6 0" /></svg>'},
                                                ]}
                                                value="">
                                                Toolbar
                                            </Buttons>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4">
                                    <div class="row">
                                        <div class="col-md-6 col-xl-12">
                                            <Radios 
                                                name="radios-2"
                                                radios={[
                                                    {v: 1, t: 'Option 1'}, 
                                                    {v: 2, t: 'Option 2'}, 
                                                    {v: 3, t: 'Option 3'},
                                                    {v: 4, t: 'Option 4', disabled: true},
                                                ]}
                                                value={1}>
                                                Radios
                                            </Radios>
                                            <Radios 
                                                name="radios-inline-2"
                                                inline
                                                radios={[
                                                    {v: 1, t: 'Option 1'}, 
                                                    {v: 2, t: 'Option 2'}, 
                                                    {v: 3, t: 'Option 3', disabled: true},
                                                ]}
                                                value={1}>
                                                Radios
                                            </Radios>
                                            <Checkboxes
                                                name="checkboxes"
                                                checkboxes={[
                                                    {v: 1, t: 'Checkbox input'}, 
                                                    {v: 2, t: 'Disabled checkbox', disabled: true},
                                                    {v: 3, t: 'Checked checkbox'}
                                                ]}
                                                value={[3]}>
                                                Checkboxes
                                            </Checkboxes>
                                            <Checkboxes
                                                name="inline-checkboxes"
                                                inline
                                                checkboxes={[
                                                    {v: 1, t: 'Option 1'}, 
                                                    {v: 2, t: 'Option 2', disabled: true},
                                                    {v: 3, t: 'Option 3'}
                                                ]}
                                                value={[3]}>
                                                Inline Checkboxes
                                            </Checkboxes>
                                            <Checkboxes
                                                name="checkboxes-description"
                                                checkboxes={[
                                                    {v: 1, t: 'Default checkbox', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}, 
                                                    {v: 2, t: 'Longer checkbox item that wraps on to two separate lines', description: 'Ab alias aut, consequuntur cumque esse eveniet incidunt laborum minus molestiae.'},
                                                    {v: 3, t: 'Default checkbox without description'}
                                                ]}
                                                value={[]}>
                                                Checkboxes with description
                                            </Checkboxes>
                                            <Checkboxes
                                                name="checkboxes-switch"
                                                toggleSwitch
                                                checkboxes={[
                                                    {v: 1, t: 'Option 1'}, 
                                                    {v: 2, t: 'Option 2'},
                                                    {v: 3, t: 'Option 3'}
                                                ]}
                                                value={[1]}>
                                                Toggle switches
                                            </Checkboxes>
                                            <Checkboxes
                                                name="checkboxes-switch-single"
                                                toggleSwitch
                                                checkboxes={[
                                                    {v: true, t: 'I agree with terms and conditions'}, 
                                                ]}
                                                value={[]}>
                                                Single switch
                                            </Checkboxes>
                                            <Checkboxes
                                                name="notifications"
                                                toggleSwitch
                                                rightAlign
                                                checkboxes={[
                                                    {v: 1, t: 'Push Notifications'},
                                                    {v: 2, t: 'SMS Notifications'},
                                                    {v: 3, t: 'Email Notifications'}
                                                ]}
                                                value={[1, 3]}>
                                                Notification
                                            </Checkboxes>
                                            <div class="mb-3">
                                                <div class="form-label">Custom File Input</div>
                                                <input type="file" class="form-control" />
                                            </div>
                                            <DateSelect id="date-birth">Date of birth</DateSelect>
                                            <Text id="text_mask" 
                                                placeholder="00/00/0000"
                                                validationRegex={/^\d{2}\/\d{2}\/\d{4}$/}
                                                autocomplete="off"
                                                value="">
                                                Text mask
                                            </Text>
                                            <Text id="telephone_mask" 
                                                placeholder="(00) 0000-0000"
                                                validationRegex={/^\(\d{2}\)\s\d{4}-\d{4}$/}
                                                autocomplete="off"
                                                value="">
                                                Telephone mask
                                            </Text>
                                            <Textarea id="autosize_textarea"
                                                autoResize
                                                placeholder="Type something..."
                                                value="">
                                                Autosize textarea
                                            </Textarea>
                                        </div>
                                        <div class="col-md-6 col-xl-12">
                                            <Text id="datalist-example" 
                                                placeholder="Type to search..."
                                                list="datalistOptions"
                                                value="">
                                                Datalist example
                                                <!-- https://restcountries.com/#api-endpoints-v3-name -->
                                                <datalist id="datalistOptions">
                                                    <option value="Aruba"/>
                                                    <option value="Afghanistan"/>
                                                    <option value="Angola"/>
                                                    <option value="Anguilla"/>
                                                    <option value="Albania"/>
                                                    <option value="Andorra"/>
                                                    <option value="United Arab Emirates"/>
                                                    <option value="Argentina"/>
                                                    <option value="Armenia"/>
                                                    <option value="American Samoa"/>
                                                </datalist>
                                            </Text>
                                            <Range id="range-1" 
                                                class="mb-2"
                                                describe
                                                max={100} 
                                                step={10} 
                                                value={40}>
                                                Range input
                                                <span slot="description">Value: </span>
                                            </Range>
                                            <Range id="range-1-noUI" 
                                                class="mb-2"
                                                slider
                                                max={100} 
                                                step={10} 
                                                value={40} />
                                            <Range id="range-2" 
                                                class="mb-2"
                                                slider
                                                settings={{
                                                    start: 20,
                                                    connect: [true, false],
                                                    step: 10,
                                                    range: {min: 0, max: 100},
                                                }}
                                                value={20} />
                                            <Range id="range-3" 
                                                class="mb-2"
                                                slider
                                                settings={{
                                                    start: [60, 90],
                                                    connect: [false, true, false],
                                                    step: 10,
                                                    range: {min: 0, max: 100},
                                                }}
                                                value={60} />
                                            <Range id="range-4" 
                                                class="mb-3"
                                                color="green"
                                                slider
                                                settings={{
                                                    start: 40,
                                                    connect: [true, false],
                                                    step: 10,
                                                    range: {min: 0, max: 100},
                                                }}
                                                value={40} />
                                            <DateInput class="mb-2" value={new Date()}>
                                                Datepicker
                                            </DateInput>
                                            <DateInput class="mb-2" icon value={new Date()} />
                                            <DateInput icon="left" value={new Date()} />
                                            <DateInput inline value={new Date()}>
                                                Inline datepicker
                                            </DateInput>
                                            <Progress class="mb-2" value={0.38}>Progress</Progress>
                                            <Progress color="green" />
                                            <div class="mb-3">
                                                <span class="form-label">Form buttons</span>
                                                <div class="row">
                                                    <div class="col">
                                                        <a href="#form-buttons" class="btn w-100">
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon text-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                                                            Login with Github
                                                        </a>
                                                    </div>
                                                    <div class="col">
                                                        <a href="#form-buttons" class="btn w-100">
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon text-twitter" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" /></svg>
                                                            Login with Twitter
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <Select id="tags-input"
                                                tom
                                                options={[
                                                    'HTML', 'JavaScript', 'CSS', 'jQuery', 
                                                    'Bootstrap', 'Ruby', 'Python'
                                                ].map((i) => ({v: i, t: i}))}
                                                value="">
                                                Tags input
                                            </Select>
                                            <!-- Options as array -->
                                            <Select id="select-optgroups-2"
                                                tom
                                                class="mb-2"
                                                options={[{
                                                    v: 'HTML', 
                                                    t: 'HTML', 
                                                    group: 'Tags'
                                                }, {
                                                    v: 'Chuck Tesla',
                                                    t: 'Chuck Tesla',
                                                    group: 'People'
                                                }]}
                                                value="">
                                                Advanced select with optgroup
                                            </Select>
                                            <!-- Options as object of arrays -->
                                            <Select id="select-optgroups-3"
                                                tom
                                                options={{
                                                    'Tags': [
                                                        'HTML', 'JavaScript', 'CSS', 'jQuery', 
                                                        'Bootstrap', 'Ruby', 'Python'
                                                    ].map((i) => ({v: i, t: i})),
                                                    'People': [
                                                        'Chuck Tesla', 'Elon Musk', 
                                                        'Pawel Kuna', 'Nikola Tesla', 
                                                    ].map((i) => ({v: i, t: i})),
                                                }}
                                                value="" />
                                            <Select id="select-repo" 
                                                placeholder="Pick a repository..."
                                                tom 
                                                settings={{
                                                    valueField: 'url',
                                                    labelField: 'name',
                                                    searchField: 'name',
                                                    /**
                                                     * Fetch remote data.
                                                     * @param {string|number|boolean} query
                                                     * @param {(arg0?: any) => void} callback
                                                     * @returns {void}
                                                     */
                                                    load: function(query, callback) {
                                                        var url = 'https://api.github.com/search/repositories?q=' + encodeURIComponent(query);
                                                        fetch(url)
                                                            .then(response => response.json())
                                                            .then(json => {
                                                                callback(json.items);
                                                            }).catch(()=>{
                                                                callback();
                                                            });
                                                    },
                                                    render: {
                                                        /**
                                                         * Custom rendering functions for options 
                                                         * and items.
                                                         * @param {{owner: { avatar_url: any; login: any; }; name: any; description: any; }} item
                                                         * @param {(arg0: any) => any} escape
                                                         * @returns {string}
                                                         */
                                                        option: function(item, escape) {
                                                            return `<div class="py-2 d-flex">
                                                                        <div class="icon me-3">
                                                                            <img class="img-fluid" src="${item.owner.avatar_url}" />
                                                                        </div>
                                                                        <div>
                                                                            <div class="mb-1">
                                                                                <span class="h4">
                                                                                    ${ escape(item.name) }
                                                                                </span>
                                                                                <span class="text-muted">by ${ escape(item.owner.login) }</span>
                                                                            </div>
                                                                            <div class="description">${ escape(item.description) }</div>
                                                                        </div>
                                                                    </div>`;
                                                        },
                                                        /**
                                                         * @param {{owner: { avatar_url: any; login: any; }; name: any; description: any; }} item
                                                         * @param {(arg0: any) => any} escape
                                                         * @returns {string}
                                                         */
                                                            item: function(item, escape) {
                                                            return `<div class="py-2 d-flex">
                                                                        <div class="icon me-3">
                                                                            <img class="img-fluid" src="${item.owner.avatar_url}" />
                                                                        </div>
                                                                        <div>
                                                                            <div class="mb-1">
                                                                                <span class="h4">
                                                                                    ${ escape(item.name) }
                                                                                </span>
                                                                                <span class="text-muted">by ${ escape(item.owner.login) }</span>
                                                                            </div>
                                                                            <div class="description">${ escape(item.description) }</div>
                                                                        </div>
                                                                    </div>`;
                                                        }
                                                    },
                                                }}
                                                multiple
                                                value="">
                                                Ajax loading
                                            </Select>
                                            <Select id="select-load-once" 
                                                placeholder="Software: WordPress, Apache..."
                                                tom 
                                                settings={{
                                                    valueField: 'label',
                                                    labelField: 'label',
                                                    searchField: ['label','type'],
                                                    /**
                                                     * Fetch remote data.
                                                     * @param {any} _
                                                     * @param {(arg0?: any) => void} callback
                                                     * @returns {void}
                                                     */
                                                    load: function(_, callback) {
                                                        /** @type {any} */
                                                        var self = this;
                                                        if( self.loading > 1 ){
                                                            callback();
                                                            return;
                                                        }
                                                        var url = 'https://whatcms.org/API/List';
                                                        fetch(url)
                                                            .then(response => response.json())
                                                            .then(json => {
                                                                callback(json.result.list);
                                                                self.settings.load = null;
                                                            }).catch(()=>{
                                                                callback();
                                                            });
                                                    },
                                                    render: {
                                                        /**
                                                         * Custom rendering functions for options 
                                                         * and items.
                                                         * @param {{label: any; type: any[]; }} item
                                                         * @param {(arg0: any) => any} escape
                                                         * @returns {string}
                                                         */
                                                        option: function(item, escape) {
                                                            return `<div class="py-2 d-flex">
                                                                        <div class="mb-1">
                                                                            <span class="h5">
                                                                                ${ escape(item.label) }
                                                                            </span>
                                                                        </div>
                                                                        <div class="ms-auto">${ escape(item.type.join(', ')) }</div>
                                                                    </div>`;
                                                        }
                                                    },
                                                }}
                                                multiple
                                                value="">
                                                Load once
                                            </Select>
                                            <Select id="select-people" 
                                                placeholder="Select people"
                                                tom 
                                                settings={{
                                                    copyClassesToDropdown: false,
                                                    dropdownClass: 'dropdown-menu ts-dropdown',
                                                    optionClass:'dropdown-item',
                                                    controlInput: '<input>',
                                                    render:{
                                                        /**
                                                         * @param {{ customProperties: string; text: any; }} data
                                                         * @param {(arg0: any) => string} escape
                                                         * @returns {string}
                                                         */
                                                        item: function(data, escape) {
                                                            if( data.customProperties ){
                                                                return '<div><span class="dropdown-item-indicator">' + data.customProperties + '</span>' + escape(data.text) + '</div>';
                                                            }
                                                            return '<div>' + escape(data.text) + '</div>';
                                                        },
                                                        /**
                                                         * @param {{ customProperties: string; text: any; }} data
                                                         * @param {(arg0: any) => string} escape
                                                         * @returns {string}
                                                         */
                                                        option: function(data, escape){
                                                            if( data.customProperties ){
                                                                return '<div><span class="dropdown-item-indicator">' + data.customProperties + '</span>' + escape(data.text) + '</div>';
                                                            }
                                                            return '<div>' + escape(data.text) + '</div>';
                                                        },
                                                    },
                                                }}
                                                options={[
                                                    'Paweł Kuna', 'Mallory Hulme', 'Jeffie Lewzey'
                                                ].map((t, v) => ({
                                                    v: v, 
                                                    t: t, 
                                                    data: '<span class="avatar avatar-xs" style="background-image: url(https://via.placeholder.com/107x71)"></span>'
                                                }))}
                                                value="">
                                                Select with avatars
                                            </Select>
                                            <Select id="select-countries" 
                                                placeholder="Select countries"
                                                tom 
                                                settings={{
                                                    copyClassesToDropdown: false,
                                                    dropdownClass: 'dropdown-menu ts-dropdown',
                                                    optionClass:'dropdown-item',
                                                    controlInput: '<input>',
                                                    render:{
                                                        /**
                                                         * @param {{customProperties: string; text: any; }} data
                                                         * @param {(arg0: any) => string} escape
                                                         * @returns {string}
                                                         */
                                                        item: function(data, escape) {
                                                            if( data.customProperties ){
                                                                return '<div><span class="dropdown-item-indicator">' + data.customProperties + '</span>' + escape(data.text) + '</div>';
                                                            }
                                                            return '<div>' + escape(data.text) + '</div>';
                                                        },
                                                        /**
                                                         * @param {{customProperties: string; text: any; }} data
                                                         * @param {(arg0: any) => string} escape
                                                         * @returns {string}
                                                         */
                                                        option: function(data, escape){
                                                            if( data.customProperties ){
                                                                return '<div><span class="dropdown-item-indicator">' + data.customProperties + '</span>' + escape(data.text) + '</div>';
                                                            }
                                                            return '<div>' + escape(data.text) + '</div>';
                                                        },
                                                    },
                                                }}
                                                options={[
                                                    {v: 'pl', t: 'Poland', data: '<span class="flag flag-xs flag-country-pl"></span>'},
                                                    {v: 'de', t: 'Germany', data: '<span class="flag flag-xs flag-country-de"></span>'},
                                                    {v: 'cz', t: 'Czech', data: '<span class="flag flag-xs flag-country-cz"></span>'},
                                                    {v: 'br', t: 'Brazil', data: '<span class="flag flag-xs flag-country-br"></span>'},
                                                ]}
                                                value="">
                                                Select with flags
                                            </Select>
                                            <Select id="select-labels" 
                                                placeholder="Select labels"
                                                tom 
                                                settings={{
                                                    copyClassesToDropdown: false,
                                                    dropdownClass: 'dropdown-menu ts-dropdown',
                                                    optionClass:'dropdown-item',
                                                    controlInput: '<input>',
                                                    render:{
                                                        /**
                                                         * @param {{customProperties: string; text: any; }} data
                                                         * @param {(arg0: any) => string} escape
                                                         * @returns {string}
                                                         */
                                                        item: function(data, escape) {
                                                            if( data.customProperties ){
                                                                return '<div><span class="dropdown-item-indicator">' + data.customProperties + '</span>' + escape(data.text) + '</div>';
                                                            }
                                                            return '<div>' + escape(data.text) + '</div>';
                                                        },
                                                        /**
                                                         * @param {{customProperties: string; text: any; }} data
                                                         * @param {(arg0: any) => string} escape
                                                         * @returns {string}
                                                         */
                                                        option: function(data, escape){
                                                            if( data.customProperties ){
                                                                return '<div><span class="dropdown-item-indicator">' + data.customProperties + '</span>' + escape(data.text) + '</div>';
                                                            }
                                                            return '<div>' + escape(data.text) + '</div>';
                                                        },
                                                    },
                                                }}
                                                options={[
                                                    {v: 'Copy', t: 'Copy', data: '<span class="badge bg-primary-lt">cmd + C</span>'},
                                                    {v: 'Paste', t: 'Paste', data: '<span class="badge bg-primary-lt">cmd + V</span>'},
                                                    {v: 'Cut', t: 'Cut', data: '<span class="badge bg-primary-lt">cmd + X</span>'},
                                                ]}
                                                value="">
                                                Select with labels
                                            </Select>
                                            <Select id="select-countries-valid-2"
                                                placeholder="Select countries"
                                                tom
                                                required
                                                settings={{
                                                    copyClassesToDropdown: false,
                                                    dropdownClass: 'dropdown-menu ts-dropdown',
                                                    optionClass:'dropdown-item',
                                                    controlInput: '<input>',
                                                    render:{
                                                        /**
                                                         * @param {{customProperties: string; text: any; }} data
                                                         * @param {(arg0: any) => string} escape
                                                         * @returns {string}
                                                         */
                                                        item: function(data, escape) {
                                                            if( data.customProperties ){
                                                                return '<div><span class="dropdown-item-indicator">' + data.customProperties + '</span>' + escape(data.text) + '</div>';
                                                            }
                                                            return '<div>' + escape(data.text) + '</div>';
                                                        },
                                                        /**
                                                         * @param {{customProperties: string; text: any; }} data
                                                         * @param {(arg0: any) => string} escape
                                                         * @returns {string}
                                                         */
                                                        option: function(data, escape){
                                                            if( data.customProperties ){
                                                                return '<div><span class="dropdown-item-indicator">' + data.customProperties + '</span>' + escape(data.text) + '</div>';
                                                            }
                                                            return '<div>' + escape(data.text) + '</div>';
                                                        },
                                                    },
                                                }}
                                                options={[
                                                    {v: 'pl', t: 'Poland'},
                                                    {v: 'de', t: 'Germany'},
                                                    {v: 'cz', t: 'Czech Republic'},
                                                    {v: 'br', t: 'Brazil'},
                                                ]}
                                                value="">
                                                Advanced select with validation state
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer text-end">
                            <div class="d-flex">
                                <a href="#cancel" class="btn btn-link">Cancel</a>
                                <button type="submit" class="btn btn-primary ms-auto">
                                    Send data
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">Project ID</h3>
                            <p class="card-subtitle">Used when interacting with the API.</p>
                            <Text id="project-id"
                                placeholder="Search..."
                                readonly
                                value="prj_5ae74426fe935327a8fa178b07d84ad9">
                                <span slot="iconAfter">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 3v4a1 1 0 0 0 1 1h4" /><path d="M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z" /><path d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" /></svg>
                                </span>
                            </Text>
                        </div>
                        <div class="card-footer">
                            <div class="row align-items-center">
                                <div class="col">
                                    Learn more about <a href="#project-id">Project ID</a>
                                </div>
                                <div class="col-auto">
                                    <a href="#project-id" class="btn btn-primary">
                                        Save
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">Node.js Version</h3>
                            <p class="card-subtitle">
                                The version of Node.js that is used in the Build Step and for 
                                Serverless Functions.
                                A new Deployment is required for your changes to take effect.
                            </p>
                            <Select id="node-version"
                                options={['14.x', '12.x'].map((v) => ({v: v, t: v}))}
                                value="14.x" />
                        </div>
                        <div class="card-footer">
                            Learn more about <a href="#node">Node.js Version</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <form class="card">
                        <div class="card-header">
                            <h3 class="card-title">Basic form</h3>
                        </div>
                        <div class="card-body">
                            <Text id="basic-form-email"
                                type="email"
                                placeholder="Enter email"
                                required
                                value="">
                                Email address
                                <span slot="hint">
                                    We'll never share your email with anyone else.
                                </span>
                            </Text>
                            <Password
                                id="basic-form-password"
                                placeholder="Password"
                                required
                                value="">
                                Password
                                <span slot="hint">
                                    Your password must be 8-20 characters long, 
                                    contain letters and numbers, and must not contain
                                    spaces, special characters, or emoji.
                                </span>
                            </Password>
                            <Select id="basic-form-select"
                                options={[
                                    {v: 1, t: 'Option 1'},
                                    {v: 11, t: 'Option 1', group: 'Optgroup 1'},
                                    {v: 12, t: 'Option 2', group: 'Optgroup 1'},
                                    {v: 21, t: 'Option 1', group: 'Optgroup 2'},
                                    {v: 22, t: 'Option 2', group: 'Optgroup 2'},
                                    {v: 31, t: 'Option 1', group: 'Optgroup 3'},
                                    {v: 32, t: 'Option 2', group: 'Optgroup 3'},
                                    {v: 4, t: 'Option 4'},
                                    {v: 5, t: 'Option 5'},
                                ]}
                                value={1}>
                                Select
                            </Select>
                            <Checkboxes name="basic-form-checkboxes"
                                checkboxes={[...Array(3).keys()].map((i) => 
                                    ({v: i, t: `Option ${i + 1}`, disabled: i == 2}))
                                }
                                value={[0]}>
                                Checkboxes
                            </Checkboxes>
                        </div>
                        <div class="card-footer text-end">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div class="col-md-6">
                    <form class="card">
                        <div class="card-header">
                            <h3 class="card-title">Horizontal form</h3>
                        </div>
                        <div class="card-body">
                            <div class="mb-3 row">
                                <span class="col-3 col-form-label required">Email address</span>
                                <Text id="horizontal-email"
                                    class="col"
                                    type="email"
                                    placeholder="Enter email"
                                    required
                                    value="">
                                    <span slot="hint">
                                        We'll never share your email with anyone else.
                                    </span>
                                </Text>
                            </div>
                            <div class="mb-3 row">
                                <span class="col-3 col-form-label required">Password</span>
                                <Password id="horizontal-password"
                                    class="col"
                                    placeholder="Password"
                                    value="">
                                    <span slot="hint">
                                        Your password must be 8-20 characters long, 
                                        contain letters and numbers, and must not contain
                                        spaces, special characters, or emoji.
                                    </span>
                                </Password>
                            </div>
                            <div class="mb-3 row">
                                <span class="col-3 col-form-label">Select</span>
                                <Select id="basic-form-select"
                                    class="col"
                                    options={[
                                        {v: 1, t: 'Option 1'},
                                        {v: 11, t: 'Option 1', group: 'Optgroup 1'},
                                        {v: 12, t: 'Option 2', group: 'Optgroup 1'},
                                        {v: 21, t: 'Option 1', group: 'Optgroup 2'},
                                        {v: 22, t: 'Option 2', group: 'Optgroup 2'},
                                        {v: 31, t: 'Option 1', group: 'Optgroup 3'},
                                        {v: 32, t: 'Option 2', group: 'Optgroup 3'},
                                        {v: 4, t: 'Option 4'},
                                        {v: 5, t: 'Option 5'},
                                    ]}
                                    value={1} />
                            </div>
                            <div class="row">
                                <span class="col-3 col-form-label pt-0">Checkboxes</span>
                                <Checkboxes name="basic-form-checkboxes"
                                    class="col"
                                    checkboxes={[...Array(3).keys()].map((i) => 
                                        ({v: i, t: `Option ${i + 1}`, disabled: i == 2}))
                                    }
                                    value={[0]} />
                            </div>
                        </div>
                        <div class="card-footer text-end">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div class="col-lg-4">
                    <div class="row row-cards">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Input mask</h3>
                                </div>
                                <div class="card-body">
                                    <Text id="masks-date"
                                        placeholder="00/00/0000"
                                        validationRegex={/^[0-3][0-9]\/[0-1][1-9]\/[1-2][0-9]{3}$/}
                                        autocomplete="off"
                                        value="">
                                        Date
                                    </Text>
                                    <Text id="masks-hour"
                                        placeholder="00:00:00"
                                        validationRegex={/^[0-2][0-9](:[0-5][1-9]){2}$/}
                                        autocomplete="off"
                                        value="">
                                        Hour
                                    </Text>
                                    <Text id="masks-date-hour"
                                        placeholder="00/00/0000 00:00:00"
                                        validationRegex={/^[0-3][0-9]\/[0-1][1-9]\/[1-2][0-9]{3} [0-2][0-9](:[0-5][1-9]){2}$/}
                                        autocomplete="off"
                                        value="">
                                        Date &amp; Hour
                                    </Text>
                                    <Text id="masks-zip"
                                        placeholder="00000-000"
                                        validationRegex={/^[0-9]{5}-[0-9]{3}$/}
                                        autocomplete="off"
                                        value="">
                                        ZIP Code
                                    </Text>
                                    <Text id="masks-money"
                                        placeholder="000.000.000.000.000,00"
                                        validationRegex={/^([0-9]{3}\.){4}[0-9]{3},[0-9]{2}$/}
                                        autocomplete="off"
                                        value="">
                                        Money
                                    </Text>
                                    <Text id="masks-telephone"
                                        placeholder="0000-0000"
                                        validationRegex={/^[0-9]{4}-[0-9]{4}$/}
                                        autocomplete="off"
                                        value="">
                                        Telephone
                                    </Text>
                                    <Text id="masks-telephone-code-area"
                                        placeholder="(00) 0000-0000"
                                        validationRegex={/^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$/}
                                        autocomplete="off"
                                        value="">
                                        Telephone with Code Area
                                    </Text>
                                    <Text id="masks-ip"
                                        placeholder="099.099.099.099"
                                        validationRegex={/^([0-2][0-9]{2}.){3}[0-2][0-9]{2}$/}
                                        autocomplete="off"
                                        value="">
                                        IP Address
                                    </Text>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <form class="card">
                                <div class="card-header">
                                    <h3 class="card-title">My Profile</h3>
                                </div>
                                <div class="card-body">
                                    <div class="mb-3">
                                        <div class="row">
                                            <div class="col-auto">
                                                <span class="avatar avatar-md" 
                                                    style="background-image: url(https://via.placeholder.com/107x71)">
                                                </span>
                                            </div>
                                            <div class="col">
                                                <Text id="my-profile-email"
                                                    type="email"
                                                    placeholder="your-email@domain.com"
                                                    value="">
                                                    Email Address
                                                </Text>
                                            </div>
                                        </div>
                                    </div>
                                    <Textarea id="my-profile-bio"
                                        rows={5}
                                        value="Big belly rude boy, million dollar hustler. Unemployed.">
                                        Bio
                                    </Textarea>
                                    <Text id="my-profile-email-2"
                                        type="email"
                                        placeholder="your-email@domain.com"
                                        value="">
                                        Email Address
                                    </Text>
                                    <Password id="my-profile-password"
                                        value="password">
                                        Password
                                    </Password>
                                </div>
                                <div class="card-footer text-end">
                                    <a href="#save" class="btn btn-primary">
                                        Save
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="row row-cards">
                        <div class="col-12">
                            <form class="card">
                                <div class="card-body">
                                    <h3 class="card-title">Edit Profile</h3>
                                    <div class="row row-cards">
                                        <div class="col-md-5">
                                            <Text id="profile-company"
                                                disabled
                                                placeholder="Company"
                                                value="Creative Code Inc.">
                                                Company
                                            </Text>
                                        </div>
                                        <div class="col-sm-6 col-md-3">
                                            <Text id="profile-username"
                                                placeholder="Username"
                                                value="michael23">
                                                Username
                                            </Text>
                                        </div>
                                        <div class="col-sm-6 col-md-4">
                                            <Text id="profile-email"
                                                type="email"
                                                placeholder="Email"
                                                value="">
                                                Email address
                                            </Text>
                                        </div>
                                        <div class="col-sm-6 col-md-6">
                                            <Text id="profile-first-name"
                                                placeholder="First Name"
                                                value="Chet">
                                                First Name
                                            </Text>
                                        </div>
                                        <div class="col-sm-6 col-md-6">
                                            <Text id="profile-last-name"
                                                placeholder="Last Name"
                                                value="Faker">
                                                Last Name
                                            </Text>
                                        </div>
                                        <div class="col-md-12">
                                            <Text id="profile-address"
                                                placeholder="Home Address"
                                                value="Melbourne, Australia">
                                                Address
                                            </Text>
                                        </div>
                                        <div class="col-sm-6 col-md-4">
                                            <Text id="profile-city"
                                                placeholder="City"
                                                value="Melbourne">
                                                City
                                            </Text>
                                        </div>
                                        <div class="col-sm-6 col-md-3">
                                            <Text id="profile-postal"
                                                placeholder="ZIP Code"
                                                value="">
                                                Postal Code
                                            </Text>
                                        </div>
                                        <div class="col-md-5">
                                            <Select id="profile-country"
                                                options={[{v: 'de', t: 'Germany'}]}
                                                value="de">
                                                Country
                                            </Select>
                                        </div>
                                        <div class="col-md-12">
                                            <Textarea id="profile-about"
                                                rows={5}
                                                placeholder="Here can be your description"
                                                value={
                                                    `Oh so, your weak rhyme\n` +
                                                    `You doubt I'll bother, reading into it\n` +
                                                    `I'll probably won't, left to my own devices\n` +
                                                    `But that's the difference in our opinions.`
                                                }>
                                                About Me
                                            </Textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer text-end">
                                    <button type="submit" class="btn btn-primary">
                                        Update Profile
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">HTTP Request</h3>
                                </div>
                                <div class="card-body">
                                    <div class="row row-cards">
                                        <Select id="http-method"
                                            class="mb-3 col-sm-4 col-md-2"
                                            required
                                            options={[
                                                'GET', 'POST', 'PUT', 'HEAD', 'DELETE', 'PATCH'
                                            ].map((v) => ({v: v, t: v}))}
                                            value="GET">
                                            Method
                                        </Select>
                                        <Text id="http-url"
                                            class="mb-3 col-sm-8 col-md-10"
                                            required
                                            value="https://content.googleapis.com/discovery/v1/apis/surveys/v2/rest">
                                            URL
                                        </Text>
                                    </div>
                                    <div class="form-label">Assertions</div>
                                    <div class="table-responsive">
                                        <table class="table mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Source</th>
                                                    <th>Property</th>
                                                    <th>Comparison</th>
                                                    <th>Target</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {#each [...Array(4).keys()] as i}
                                                    <tr>
                                                        <td>
                                                            <Select id={`http-col1-${i}`}
                                                                options={[
                                                                    {v: 'STATUS_CODE', t: 'Status code'},
                                                                    {v: 'JSON_BODY', t: 'JSON body'},
                                                                    {v: 'HEADERS', t: 'Header'},
                                                                    {v: 'TEXT_BODY', t: 'Text body'},
                                                                    {v: 'RESPONSE_TIME', t: 'Response time'},
                                                                ]}
                                                                value="STATUS_CODE" />
                                                        </td>
                                                        <td>
                                                            <Text id={`http-col2-${i}`} 
                                                                value={[
                                                                    '', 'parameters.alt.type', 
                                                                    '', 'content-type'
                                                                ][i]} />
                                                        </td>
                                                        <td>
                                                            <Select id={`http-col3-${i}`}
                                                                options={[
                                                                    {v: 'EQUALS', t: 'Equals'},
                                                                    {v: 'NOT_EQUALS', t: 'Not equals'},
                                                                    {v: 'HAS_KEY', t: 'Has key'},
                                                                    {v: 'NOT_HAS_KEY', t: 'Not has key'},
                                                                    {v: 'HAS_VALUE', t: 'Has value'},
                                                                    {v: 'NOT_HAS_VALUE', t: 'Not has value'},
                                                                    {v: 'IS_EMPTY', t: 'Is empty'},
                                                                    {v: 'NOT_EMPTY', t: 'Not empty'},
                                                                    {v: 'GREATER_THAN', t: 'Greater than'},
                                                                    {v: 'LESS_THAN', t: 'Less than'},
                                                                ]}
                                                                value="EQUALS" />
                                                        </td>
                                                        <td>
                                                            <Text id={`http-col4-${i}`} 
                                                                value={[
                                                                    '200', 'string', '500',
                                                                    'application/json; charset=UTF-8'
                                                                ][i]} />
                                                        </td>
                                                    </tr>
                                                {/each}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="card-footer text-end">
                                    <button type="submit" class="btn btn-primary">
                                        Make request
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </main>
</Empty>
