declare const Progress_base: SvelteComponentConstructor<import("../../../../elucia/node_modules/svelte/internal").SvelteComponentTyped<{
    value: number;
    class?: string | null | undefined;
    wrapper?: string | null | undefined;
    progressClass?: string | undefined;
    color?: string | null | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
    description: {};
}>, Svelte2TsxComponentConstructorParameters<{
    value: number;
    class?: string | null | undefined;
    wrapper?: string | null | undefined;
    progressClass?: string | undefined;
    color?: string | null | undefined;
}>>;
/** @typedef {typeof __propDef.props}  ProgressProps */
/** @typedef {typeof __propDef.events}  ProgressEvents */
/** @typedef {typeof __propDef.slots}  ProgressSlots */
/**
 * Progress bar component.
 *
 * Slots:
 * - default: The field label.
 * - description: Extra right-aligned label description.
 */
export default class Progress extends Progress_base {
}
export type ProgressProps = typeof __propDef.props;
export type ProgressEvents = typeof __propDef.events;
export type ProgressSlots = typeof __propDef.slots;
declare const __propDef: {
    props: {
        value: number;
        class?: string | null | undefined;
        wrapper?: string | null | undefined;
        progressClass?: string | undefined;
        color?: string | null | undefined;
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
