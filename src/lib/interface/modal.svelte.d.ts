declare const Modal_base: SvelteComponentConstructor<import("../../../../elucia/node_modules/svelte/internal").SvelteComponentTyped<{
    id: string;
    size?: "" | "small" | "large" | "full-width" | undefined;
    icon?: boolean | undefined;
    scrollable?: boolean | undefined;
    center?: boolean | undefined;
    status?: "" | "success" | "primary" | "primary-lt" | "warning" | "danger" | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    title: {};
    default: {};
    buttons: {};
}>, Svelte2TsxComponentConstructorParameters<{
    id: string;
    size?: "" | "small" | "large" | "full-width" | undefined;
    icon?: boolean | undefined;
    scrollable?: boolean | undefined;
    center?: boolean | undefined;
    status?: "" | "success" | "primary" | "primary-lt" | "warning" | "danger" | undefined;
}>>;
/** @typedef {typeof __propDef.props}  ModalProps */
/** @typedef {typeof __propDef.events}  ModalEvents */
/** @typedef {typeof __propDef.slots}  ModalSlots */
/**
 * Modal component.
 *
 * Slots:
 * - default: modal body
 * - title: modal title
 * - buttons
 */
export default class Modal extends Modal_base {
}
export type ModalProps = typeof __propDef.props;
export type ModalEvents = typeof __propDef.events;
export type ModalSlots = typeof __propDef.slots;
declare const __propDef: {
    props: {
        id: string;
        size?: "" | "small" | "large" | "full-width" | undefined;
        icon?: boolean | undefined;
        scrollable?: boolean | undefined;
        center?: boolean | undefined;
        status?: "" | "success" | "primary" | "primary-lt" | "warning" | "danger" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        title: {};
        default: {};
        buttons: {};
    };
};
export {};
