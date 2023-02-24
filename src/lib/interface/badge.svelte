<script>
    const colors = [ 
        // '-lt allowed for bg_color'
        'blue', 'azure', 'indigo', 'purple', 'pink', 'red',
        'orange', 'yellow', 'lime', 'green', 'teal', 'cyan',
    ]
    const margin_left_classes = ['1', '2', '3', '4', '5', 'auto'];

    export let bg_color = ''; // Specify bg color for badge.
    export let text_color = ''; // Specify text color with same outline and white bg.
    export let margin_left_class = ''; // Specify left margin class.
    export let notification = false; // If true then badge hovers on top right corner.
    export let pill = false; // If true then shape turns to circle.
    export let blink = false; // If true then badge blinks.
    export let small = false; // If badge is small.
    export let text_uppercase = false; // If text is uppercase.

    if (bg_color && !colors.includes(bg_color) && !colors.includes(bg_color.replace('-lt', ''))) {
        console.log('Badge: bg_color not defined: ', bg_color);
        console.log('Defined colors (-lt allowed): ', colors);
    }
    if (text_color && !colors.includes(text_color)) {
        console.log('Badge: text_color not defined: ', text_color);
        console.log('Defined colors: ', colors);
    }
    if (margin_left_class && !margin_left_classes.includes(margin_left_class)) {
        console.log('Badge: margin_left_class not defined: ', margin_left_class);
        console.log('Defined classes: ', margin_left_classes);
    }
</script>

<span class="badge {bg_color? 'bg-' + bg_color: ''} {text_color? 'text-' + text_color: ''} {margin_left_class? 'ms-' + margin_left_class: ''}"
    class:badge-outline={text_color}
    class:badge-notification={notification}
    class:badge-pill={pill}
    class:badge-blink={blink}
    class:badge-sm={small}
    class:text-uppercase={text_uppercase}>
    <slot />
</span>
