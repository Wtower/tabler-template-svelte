declare const Offcanvas_base: SvelteComponentConstructor<import("../../../../elucia/node_modules/svelte/internal").SvelteComponentTyped<{
    label: string;
    closable?: boolean | undefined;
    show?: boolean | undefined;
    placement?: "start" | "end" | "top" | "bottom" | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
    buttons: {};
}>, Svelte2TsxComponentConstructorParameters<{
    label: string;
    closable?: boolean | undefined;
    show?: boolean | undefined;
    placement?: "start" | "end" | "top" | "bottom" | undefined;
}>>;
/** @typedef {typeof __propDef.props}  OffcanvasProps */
/** @typedef {typeof __propDef.events}  OffcanvasEvents */
/** @typedef {typeof __propDef.slots}  OffcanvasSlots */
/**
 * Offcanvas component.
 *
 * Slots
 * - default
 * - buttons
 */
export default class Offcanvas extends Offcanvas_base {
}
export type OffcanvasProps = typeof __propDef.props;
export type OffcanvasEvents = typeof __propDef.events;
export type OffcanvasSlots = typeof __propDef.slots;
declare const __propDef: {
    props: {
        label: string;
        closable?: boolean | undefined;
        show?: boolean | undefined;
        placement?: "start" | "end" | "top" | "bottom" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        buttons: {};
    };
};
export {};
