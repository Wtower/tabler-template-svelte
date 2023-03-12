<script>
    import { base } from "$app/paths";
    import DateInput from "$lib/form/date_input.svelte";
    import ImageCheck from "$lib/form/image_check.svelte";
    import InputGroup from "$lib/form/input_group.svelte";
    import Label from "$lib/form/label.svelte";
    import Radios from "$lib/form/radios.svelte";
    import Select from "$lib/form/select.svelte";
    import Text from "$lib/form/text.svelte";
    import Textarea from "$lib/form/textarea.svelte";
    import Card from "$lib/interface/card.svelte";
    import Empty from "$lib/interface/empty.svelte";
    import Modal from "$lib/interface/modal.svelte";
    import { config } from "$stores/config";

    const lorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae delectus deleniti dolorem eveniet facere fuga iste nemo nesciunt nihil odio perspiciatis, quia quis reprehenderit sit tempora totam unde.`;
</script>

<Empty path="{base}/interface/modals" {...$config}>
    <span slot="h2">Modals</span>
    <div class="container-xl">
        <Card>
            <div class="btn-list">
                {#each Object.entries({
                    'simple': 'Simple modal',
                    'large': 'Large modal',
                    'small': 'Small modal',
                    'full-width': 'Full width modal',
                    'scrollable': 'Scrollable modal',
                    'report': 'Modal with form',
                    'success': 'Success modal',
                    'danger': 'Danger modal',
                    'team': 'Modal with simple form',
                }) as [id, title]}
                    <a href="#modal-{id}"
                        class="btn"
                        data-bs-toggle="modal"
                        data-bs-target="">
                        {title}
                    </a>
                {/each}
            </div>
        </Card>
    </div>
</Empty>

<Modal id="modal-simple">
    <span slot="title">Modal title</span>
    {lorem}
    <svelte:fragment slot="buttons">
        <button type="button" class="btn me-auto" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
    </svelte:fragment>
</Modal>

<Modal id="modal-large" size="large">
    <span slot="title">Large modal</span>
    {lorem}
    <svelte:fragment slot="buttons">
        <button type="button" class="btn me-auto" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
    </svelte:fragment>
</Modal>

<Modal id="modal-small" size="small">
    <span slot="title">Are you sure?</span>
    If you proceed, you will lose all your personal data.
    <svelte:fragment slot="buttons">
        <button type="button" class="btn btn-link link-secondary me-auto" data-bs-dismiss="modal">
            Cancel</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
            Yes, delete all my data</button>
</svelte:fragment>
</Modal>

<Modal id="modal-full-width" size="full-width">
    <span slot="title">Full width modal</span>
    {lorem}
    <svelte:fragment slot="buttons">
        <button type="button" class="btn me-auto" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
    </svelte:fragment>
</Modal>

<Modal id="modal-scrollable" scrollable>
    <span slot="title">Scrollable modal</span>
    {#each [...Array(10).keys()] as _}
        <p>{lorem}</p>
    {/each}
    <svelte:fragment slot="buttons">
        <button type="button" class="btn me-auto" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
    </svelte:fragment>
</Modal>

<Modal id="modal-report" size="large">
    <span slot="title">New report</span>
    <Text id="name" placeholder="Your report name" value="">Name</Text>
    <Label>Report name</Label>
    <div class="form-selectgroup-boxes row mb-3">
        <Radios 
            selectGroup
            name="selectgroup" 
            class="col-lg-6"
            radios ={[{v: 0, slot: 'advanced'}]}
            value={0}>
            <svelte:fragment slot="radioLabel">
                <span class="form-selectgroup-label d-flex align-items-center p-3">
                    <span class="me-3">
                        <span class="form-selectgroup-check"></span>
                    </span>
                    <span class="form-selectgroup-label-content">
                        <span class="form-selectgroup-title strong mb-1">Simple</span>
                        <span class="d-block text-muted">
                            Provide only basic data needed for the report</span>
                    </span>
                </span>
            </svelte:fragment>
        </Radios>
        <Radios 
            selectGroup
            name="selectgroup" 
            class="col-lg-6"
            radios ={[{v: 1, slot: 'advanced'}]}
            value={0}>
            <svelte:fragment slot="radioLabel">
                <span class="form-selectgroup-label d-flex align-items-center p-3">
                    <span class="me-3">
                        <span class="form-selectgroup-check"></span>
                    </span>
                    <span class="form-selectgroup-label-content">
                        <span class="form-selectgroup-title strong mb-1">Advanced</span>
                        <span class="d-block text-muted">
                            Insert charts and additional advanced analyses to be inserted 
                            in the report
                        </span>
                    </span>
                </span>
            </svelte:fragment>
        </Radios>
    </div>
    <div class="row mb-3">
        <InputGroup for="url" flat class="col-lg-8">
            Report url
            <svelte:fragment slot="controls">
                <span class="input-group-text">https://tabler.io/reports/</span>
                <Text id="url" wrapper="" padding="none" value="report-01" />
            </svelte:fragment>
        </InputGroup>
        <Select 
            id="visibility" 
            class="col-lg-4"
            options={['Private', 'Public', 'Hidden'].map(t => ({v: t.toLowerCase(), t}))} 
            value="private">
            Visibility
        </Select>
    </div>
    <div class="row">
        <Text id="client" class="col-lg-6 mb-3" value="">Client name</Text>
        <DateInput class="col-lg-6 mb-3" value={new Date()}>Reporting period</DateInput>
        <Textarea id="additional" class="col-lg-12 mb-3" rows={3} value="">
            Additional information</Textarea>
    </div>
    <svelte:fragment slot="buttons">
        <a href="#cancel" class="btn btn-link link-secondary" data-bs-dismiss="modal">Cancel</a>
        <a href="#create" class="btn btn-primary ms-auto" data-bs-dismiss="modal">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
            Create new report
        </a>
    </svelte:fragment>
</Modal>

<Modal id="modal-success" size="small" status="success" center icon>
    <h3>Payment succedeed</h3>
    <div class="text-muted">
        Your payment of $290 has been successfully submitted.
        Your invoice has been sent to support@tabler.io.
    </div>
    <svelte:fragment slot="buttons">
        <div class="w-100">
            <div class="row">
                <div class="col">
                    <a href="#dashboard" class="btn w-100" data-bs-dismiss="modal">
                        Go to dashboard</a>
                </div>
                <div class="col">
                    <a href="#invoice" class="btn btn-success w-100" data-bs-dismiss="modal">
                        View invoice</a>
                </div>
            </div>
        </div>
  </svelte:fragment>
</Modal>

<Modal id="modal-danger" size="small" status="danger" center icon>
    <h3>Are you sure?</h3>
    <div class="text-muted">
        Do you really want to remove 84 files? What you've done cannot be undone.
    </div>
    <svelte:fragment slot="buttons">
        <div class="w-100">
            <div class="row">
                <div class="col">
                    <a href="#cancel" class="btn w-100" data-bs-dismiss="modal">Cancel</a>
                </div>
                <div class="col">
                    <a href="#invoice" class="btn btn-danger w-100" data-bs-dismiss="modal">
                        Delete 84 items</a>
                </div>
            </div>
        </div>
  </svelte:fragment>
</Modal>

<Modal id="modal-team">
    <span slot="title">Add a new team</span>
    <div class="row mb-3 align-items-end">
        <div class="col-auto">
            <a href="#avatar" class="avatar avatar-upload rounded">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                <span class="avatar-upload-text">Add</span>
            </a>
        </div>
        <Text id="team-name" class="col" value="">Name</Text>
    </div>
    <ImageCheck
        name="color2"
        colorCheck
        images={[
            'dark', 'white', 'blue', 'azure', 'indigo', 'purple', 'pink', 'red', 'orange', 
            'yellow', 'lime'
        ].map((color) => ({v: color, img: color}))}
        value="white">
        Pick your team color
    </ImageCheck>
    <Textarea id="team-additional" value="">Additional information</Textarea>
    <svelte:fragment slot="buttons">
        <button type="button" class="btn me-auto" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Add Team</button>
    </svelte:fragment>
</Modal>
