declare const InputGroup_base: SvelteComponentConstructor<import("../../../../elucia/node_modules/svelte/internal").SvelteComponentTyped<{
    class?: string | null | undefined;
    required?: boolean | undefined;
    wrapper?: string | null | undefined;
    for?: string | null | undefined;
    flat?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
    description: {};
    static: {};
    controls: {};
}>, Svelte2TsxComponentConstructorParameters<{
    class?: string | null | undefined;
    required?: boolean | undefined;
    wrapper?: string | null | undefined;
    for?: string | null | undefined;
    flat?: boolean | undefined;
}>>;
/** @typedef {typeof __propDef.props}  InputGroupProps */
/** @typedef {typeof __propDef.events}  InputGroupEvents */
/** @typedef {typeof __propDef.slots}  InputGroupSlots */
/**
 * Input group Tabler component.
 *
 * Slots:
 * - default: The field label.
 * - description: Extra right-aligned label description.
 * - static: Display a static text/value.
 * - controls: Display additonal grouped controls.
 */
export default class InputGroup extends InputGroup_base {
}
export type InputGroupProps = typeof __propDef.props;
export type InputGroupEvents = typeof __propDef.events;
export type InputGroupSlots = typeof __propDef.slots;
declare const __propDef: {
    props: {
        class?: string | null | undefined;
        required?: boolean | undefined;
        wrapper?: string | null | undefined;
        for?: string | null | undefined;
        flat?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        description: {};
        static: {};
        controls: {};
    };
};
export {};
