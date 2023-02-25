<script>
    /**
     * Specify bg color for badge.
     * @type {''|'blue'|'azure'|'indigo'|'purple'|'pink'|'red'|
     *         'orange'|'yellow'|'lime'|'green'|'teal'|'cyan'|
     *         'blue-lt'|'azure-lt'|'indigo-lt'|'purple-lt'|'pink-lt'|'red-lt'|
     *         'orange-lt'|'yellow-lt'|'lime-lt'|'green-lt'|'teal-lt'|'cyan-lt'}
     */
    export let bg_color = '';

    /**
     * Specify text color with same outline and white bg.
     * @type {''|'blue'|'azure'|'indigo'|'purple'|'pink'|'red'|
     *         'orange'|'yellow'|'lime'|'green'|'teal'|'cyan'}
     */
    export let text_color = '';

    /**
     * Specify left margin class.
     * @type {'1'|'2'|'3'|'4'|'5'|'auto'|''}
     */
    export let margin_left_class = '';

    /**
     * If true then badge hovers on top right corner.
     * @type {boolean}
     */
    export let notification = false;

    /**
     * If true then shape turns to circle.
     * @type {boolean}
     */
    export let pill = false;

    /**
     * If true then badge blinks.
     * @type {boolean}
     */
    export let blink = false;

    /**
     * If badge is small.
     * @type {boolean}
     */
    export let small = false;

    /**
     * If text is uppercase.
     * @type {boolean}
     */
    export let text_uppercase = false;
</script>

<!-- 
@component
Badge component.
-->
<span class="badge {bg_color? 'bg-' + bg_color: ''} {text_color? 'text-' + text_color: ''} {margin_left_class? 'ms-' + margin_left_class: ''}"
    class:badge-outline={text_color}
    class:badge-notification={notification}
    class:badge-pill={pill}
    class:badge-blink={blink}
    class:badge-sm={small}
    class:text-uppercase={text_uppercase}>
    <slot />
</span>
