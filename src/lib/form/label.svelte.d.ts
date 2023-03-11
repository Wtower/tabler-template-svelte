declare const Label_base: SvelteComponentConstructor<import("../../../../elucia/node_modules/svelte/internal").SvelteComponentTyped<{
    show?: boolean | undefined;
    id?: string | null | undefined;
    required?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
    description: {};
}>, Svelte2TsxComponentConstructorParameters<{
    show?: boolean | undefined;
    id?: string | null | undefined;
    required?: boolean | undefined;
}>>;
/** @typedef {typeof __propDef.props}  LabelProps */
/** @typedef {typeof __propDef.events}  LabelEvents */
/** @typedef {typeof __propDef.slots}  LabelSlots */
/**
 * Label component.
 *
 * Slots:
 * - default: The field label.
 * - description: Extra right-aligned label description.
 */
export default class Label extends Label_base {
}
export type LabelProps = typeof __propDef.props;
export type LabelEvents = typeof __propDef.events;
export type LabelSlots = typeof __propDef.slots;
declare const __propDef: {
    props: {
        show?: boolean | undefined;
        id?: string | null | undefined;
        required?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        description: {};
    };
};
export {};
