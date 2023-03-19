<script>
    import { base } from "$app/paths";
    import Card from "$lib/interface/card.svelte";
    import Dropdown from "$lib/interface/dropdown.svelte";
    import Empty from "$lib/interface/empty.svelte";
    import { config } from "$stores/config";
</script>

<Empty path="{base}/interface/cards/actions" {...$config}>
    <span slot="h2">Card actions</span>
    <div class="container-xl">
        <div class="row row-cards">

            <div class="col-md-6">
                <Card noPadding>
                    <span slot="title">Sample card</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-100" preserveAspectRatio="none" width="400" height="200" viewBox="0 0 400 200" fill="transparent" stroke="var(--tblr-border-color, #b8cef1)">
                        <line x1="0" y1="0" x2="400" y2="200"></line>
                        <line x1="0" y1="200" x2="400" y2="0"></line>
                      </svg>
                  </Card>
            </div>

            <div class="col-md-6">
                <Card noPadding>
                    <span slot="title">Card with action</span>
                    <div slot="actions">
                        <a href="#action" class="btn btn-primary">
                            <!-- Download SVG icon from http://tabler-icons.io/i/plus -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                            Add new
                        </a>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-100" preserveAspectRatio="none" width="400" height="200" viewBox="0 0 400 200" fill="transparent" stroke="var(--tblr-border-color, #b8cef1)">
                        <line x1="0" y1="0" x2="400" y2="200"></line>
                        <line x1="0" y1="200" x2="400" y2="0"></line>
                      </svg>
                  </Card>
            </div>

            <div class="col-md-6">
                <Card noPadding>
                    <span slot="title">Card title</span>
                    <div slot="actions">
                        <a href="#action" class="btn">
                            <!-- Download SVG icon from http://tabler-icons.io/i/phone -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
                            Phone
                        </a>
                        <a href="#action" class="btn">
                            <!-- Download SVG icon from http://tabler-icons.io/i/mail -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M3 7l9 6l9 -6" /></svg>
                            Email
                        </a>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-100" preserveAspectRatio="none" width="400" height="200" viewBox="0 0 400 200" fill="transparent" stroke="var(--tblr-border-color, #b8cef1)">
                        <line x1="0" y1="0" x2="400" y2="200"></line>
                        <line x1="0" y1="200" x2="400" y2="0"></line>
                      </svg>
                  </Card>
            </div>

            <div class="col-md-6">
                <Card noPadding>
                    <div slot="title">
                        <div class="row align-items-center">
                            <div class="col-auto">
                                <span class="avatar" 
                                    style="background-image: url(https://robohash.org/PawełKuna.png)">
                                </span>
                            </div>
                            <div class="col">
                                <div class="card-title">Paweł Kuna</div>
                                <div class="card-subtitle">UI Designer</div>
                            </div>
                        </div>
                    </div>
                    <div slot="actions">
                        <a href="#action" class="btn">
                            <!-- Download SVG icon from http://tabler-icons.io/i/phone -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
                            Phone
                        </a>
                        <a href="#action" class="btn">
                            <!-- Download SVG icon from http://tabler-icons.io/i/mail -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M3 7l9 6l9 -6" /></svg>
                            Email
                        </a>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-100" preserveAspectRatio="none" width="400" height="200" viewBox="0 0 400 200" fill="transparent" stroke="var(--tblr-border-color, #b8cef1)">
                        <line x1="0" y1="0" x2="400" y2="200"></line>
                        <line x1="0" y1="200" x2="400" y2="0"></line>
                      </svg>
                  </Card>
            </div>

            <div class="col-md-6">
                <Card noPadding>
                    <span slot="title">With description</span>
                    <div slot="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-100" preserveAspectRatio="none" width="400" height="200" viewBox="0 0 400 200" fill="transparent" stroke="var(--tblr-border-color, #b8cef1)">
                        <line x1="0" y1="0" x2="400" y2="200"></line>
                        <line x1="0" y1="200" x2="400" y2="0"></line>
                      </svg>
                  </Card>
            </div>

            <div class="col-md-6">
                <Card noPadding>
                    <span slot="title">With description and action</span>
                    <div slot="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                    <div slot="actions">
                        <a href="#action" class="btn btn-primary">
                            Create new job
                        </a>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-100" preserveAspectRatio="none" width="400" height="200" viewBox="0 0 400 200" fill="transparent" stroke="var(--tblr-border-color, #b8cef1)">
                        <line x1="0" y1="0" x2="400" y2="200"></line>
                        <line x1="0" y1="200" x2="400" y2="0"></line>
                      </svg>
                  </Card>
            </div>

            <div class="col-md-6">
                <Card noPadding>
                    <div slot="title">
                        <div class="row align-items-center">
                            <div class="col-auto">
                                <span class="avatar" 
                                    style="background-image: url(https://robohash.org/DunnSlane.png)">
                                </span>
                            </div>
                            <div class="col">
                                <div class="card-title">Dunn Slane</div>
                                <div class="card-subtitle">Research Nurse</div>
                            </div>
                        </div>
                    </div>
                    <div slot="actions">
                        <div class="dropdown">
                            <a href="#actions" 
                                class="btn-action dropdown-toggle" 
                                data-bs-toggle="dropdown" 
                                aria-haspopup="true" 
                                aria-expanded="false">
                                <!-- Download SVG icon from http://tabler-icons.io/i/dots-vertical -->
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                            </a>
                            <Dropdown end menuItem={{menu: [[
                                {title: 'Edit user'},
                                {title: 'Change permissions'},
                                {title: 'Delete user'},
                            ]]}} />
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-100" preserveAspectRatio="none" width="400" height="200" viewBox="0 0 400 200" fill="transparent" stroke="var(--tblr-border-color, #b8cef1)">
                        <line x1="0" y1="0" x2="400" y2="200"></line>
                        <line x1="0" y1="200" x2="400" y2="0"></line>
                      </svg>
                  </Card>
            </div>

            <div class="col-md-6">
                <Card noPadding>
                    <span slot="title">Card actions</span>
                    <div slot="actions">
                        <a href="#action" class="btn-action" ><!-- Download SVG icon from http://tabler-icons.io/i/refresh -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" /><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" /></svg>
                        </a>
                        <a href="#action" class="btn-action" ><!-- Download SVG icon from http://tabler-icons.io/i/chevron-up -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 15l6 -6l6 6" /></svg>
                        </a>
                        <a href="#action" class="btn-action" ><!-- Download SVG icon from http://tabler-icons.io/i/dots-vertical -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                        </a>
                        <a href="#action" class="btn-action" ><!-- Download SVG icon from http://tabler-icons.io/i/x -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                        </a>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-100" preserveAspectRatio="none" width="400" height="200" viewBox="0 0 400 200" fill="transparent" stroke="var(--tblr-border-color, #b8cef1)">
                        <line x1="0" y1="0" x2="400" y2="200"></line>
                        <line x1="0" y1="200" x2="400" y2="0"></line>
                      </svg>
                  </Card>
            </div>

        </div>
    </div>
</Empty>
