<script>
    import { base } from '$app/paths';
	import Badge from '$lib/interface/badge.svelte';
	import Empty from "$lib/interface/empty.svelte";
    import { config } from "$stores/config";

    /**
     * @type {Array.<''|'blue'|'azure'|'indigo'|'purple'|'pink'|'red'|
     *         'orange'|'yellow'|'lime'|'green'|'teal'|'cyan'>}
     */
     const colors = [
        'blue', 'azure', 'indigo', 'purple', 'pink', 'red', 
        'orange', 'yellow', 'lime', 'green', 'teal', 'cyan'
    ];

    /**
     * @type {Array.<''|'blue-lt'|'azure-lt'|'indigo-lt'|'purple-lt'|'pink-lt'|'red-lt'|
     *         'orange-lt'|'yellow-lt'|'lime-lt'|'green-lt'|'teal-lt'|'cyan-lt'>}
     */
     const colorsLt = [
        'blue-lt', 'azure-lt', 'indigo-lt', 'purple-lt', 'pink-lt', 'red-lt', 
        'orange-lt', 'yellow-lt', 'lime-lt', 'green-lt', 'teal-lt', 'cyan-lt'
    ];

    /**
     * https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
     * @param {string} string
     */
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
</script>

<Empty path="{base}/interface/badges" {...$config}>
    <span slot="h2">Badges</span>
    <main slot="main">
        <div class="container-xl">
            <div class="row row-cards">
              <div class="col-4">
                <div class="card">
                  <div class="card-body">
                    {#each [...Array(6).keys()] as i}
                        <svelte:element this={`h${i}`}>
                            Example heading <Badge>New</Badge>
                        </svelte:element>
                    {/each}
                  </div>
                </div>
              </div>
              <div class="col-8">
                <div class="row row-cards">
                  <div class="col-12">
                    <div class="card">
                      <div class="card-body">
                        <div class="badges-list">
                            {#each colors as color}
                                <Badge bgColor={color}>{capitalizeFirstLetter(color)}</Badge>                            
                            {/each}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="card">
                      <div class="card-body">
                        <div class="badges-list">
                            {#each colorsLt as color, i}
                                <Badge bgColor={color}>{capitalizeFirstLetter(colors[i])}</Badge>                            
                            {/each}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="card">
                      <div class="card-body">
                        <div class="badges-list">
                            {#each colors as color}
                                <Badge textColor={color}>{capitalizeFirstLetter(color)}</Badge>                            
                            {/each}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-3">
                <div class="dropdown-menu dropdown-menu-demo dropdown-menu-arrow">
                  <a class="dropdown-item" href="#action">
                    Action
                    <Badge bgColor="primary" marginLeftClass="auto">12</Badge>
                  </a>
                  <a class="dropdown-item" href="#action">
                    Another action
                    <Badge bgColor="green" marginLeftClass="auto" />
                  </a>
                </div>
              </div>
              <div class="col-sm-6 col-lg-9">
                <div class="row row-cards">
                  <div class="col-12">
                    <div class="card">
                      <div class="card-body">
                        <div class="btn-list">
                            {#each colors as color, i}
                                <button class="btn">
                                    {capitalizeFirstLetter(color)} badge
                                    <Badge bgColor={color}>{i + 1}</Badge>
                                </button>
                            {/each}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="card">
                      <div class="card-body">
                        <div class="btn-list">
                            {#each colors as color, i}
                                <button class="btn position-relative">
                                    {capitalizeFirstLetter(color)} badge
                                    <Badge bgColor={color} notification pill>{i + 1}</Badge>
                                </button>
                            {/each}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="card">
                      <div class="card-body">
                        <div class="btn-list">
                            {#each colors as color, i}
                                <button class="btn position-relative">
                                    {capitalizeFirstLetter(color)} badge
                                    <Badge bgColor={color} notification blink />
                                </button>
                            {/each}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </main>
</Empty>
