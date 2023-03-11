declare const Checkboxes_base: SvelteComponentConstructor<import("../../../../elucia/node_modules/svelte/internal").SvelteComponentTyped<{
    name: string;
    value: Object[];
    checkboxes: {
        v: any;
        t: any;
        disabled?: boolean | undefined;
        html?: string | undefined;
        description?: string | undefined;
    }[];
    class?: string | null | undefined;
    required?: boolean | undefined;
    wrapper?: string | null | undefined;
    inline?: boolean | undefined;
    toggleSwitch?: boolean | undefined;
    rightAlign?: boolean | undefined;
    selectGroup?: boolean | "pills" | "boxes" | null | undefined;
    isTouched?: boolean | undefined;
    isValid?: boolean | null | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
    description: {};
    feedback: {};
}>, Svelte2TsxComponentConstructorParameters<{
    name: string;
    value: Object[];
    checkboxes: {
        v: any;
        t: any;
        disabled?: boolean | undefined;
        html?: string | undefined;
        description?: string | undefined;
    }[];
    class?: string | null | undefined;
    required?: boolean | undefined;
    wrapper?: string | null | undefined;
    inline?: boolean | undefined;
    toggleSwitch?: boolean | undefined;
    rightAlign?: boolean | undefined;
    selectGroup?: boolean | "pills" | "boxes" | null | undefined;
    isTouched?: boolean | undefined;
    isValid?: boolean | null | undefined;
}>>;
/** @typedef {typeof __propDef.props}  CheckboxesProps */
/** @typedef {typeof __propDef.events}  CheckboxesEvents */
/** @typedef {typeof __propDef.slots}  CheckboxesSlots */
/**
 * Checkboxes form component.
 *
 * Slots:
 * - default: The field label.
 * - description: Extra right-aligned label description.
 * - feedback: Text to display if validation error.
 */
export default class Checkboxes extends Checkboxes_base {
}
export type CheckboxesProps = typeof __propDef.props;
export type CheckboxesEvents = typeof __propDef.events;
export type CheckboxesSlots = typeof __propDef.slots;
declare const __propDef: {
    props: {
        name: string;
        value: Array<Object>;
        checkboxes: Array<{
            v: any;
            t: any;
            disabled?: boolean;
            html?: string;
            description?: string;
        }>;
        class?: string | null | undefined;
        required?: boolean | undefined;
        wrapper?: string | null | undefined;
        inline?: boolean | undefined;
        toggleSwitch?: boolean | undefined;
        rightAlign?: boolean | undefined;
        selectGroup?: boolean | "pills" | "boxes" | null | undefined;
        isTouched?: boolean | undefined;
        isValid?: boolean | null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        description: {};
        feedback: {};
    };
};
export {};
