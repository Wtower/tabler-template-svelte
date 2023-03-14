<script>
    /**
     * Specify bg color for badge.
     * @type {''|'primary'|'primary-lt'|'success'|'warning'|'danger'|
     *         'blue'|'azure'|'indigo'|'purple'|'pink'|'red'|
     *         'orange'|'yellow'|'lime'|'green'|'teal'|'cyan'|
     *         'blue-lt'|'azure-lt'|'indigo-lt'|'purple-lt'|'pink-lt'|'red-lt'|
     *         'orange-lt'|'yellow-lt'|'lime-lt'|'green-lt'|'teal-lt'|'cyan-lt'}
     */
    export let bgColor = '';

    /**
     * Specify text color with same outline and white bg.
     * @type {''|'blue'|'azure'|'indigo'|'purple'|'pink'|'red'|
     *         'orange'|'yellow'|'lime'|'green'|'teal'|'cyan'}
     */
    export let textColor = '';

    /**
     * Specify left margin class.
     * @type {'1'|'2'|'3'|'4'|'5'|'auto'|''}
     */
    export let marginLeftClass = '';

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
    export let textUppercase = false;
</script>

<!-- 
@component
Badge component.
-->
<span class="badge {bgColor? 'bg-' + bgColor: ''} {textColor? 'text-' + textColor: ''} {marginLeftClass? 'ms-' + marginLeftClass: ''}"
    class:badge-outline={textColor}
    class:badge-notification={notification}
    class:badge-pill={pill}
    class:badge-blink={blink}
    class:badge-sm={small}
    class:text-uppercase={textUppercase}>
    <slot />
</span>
