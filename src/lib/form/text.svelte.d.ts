declare const Text_base: SvelteComponentConstructor<import("../../../../elucia/node_modules/svelte/internal").SvelteComponentTyped<{
    id: string;
    value: string;
    class?: string | null | undefined;
    required?: boolean | undefined;
    wrapper?: string | null | undefined;
    isTouched?: boolean | undefined;
    isValid?: boolean | null | undefined;
    disabled?: boolean | undefined;
    placeholder?: string | undefined;
    border?: "rounded" | "none" | null | undefined;
    floatingLabel?: boolean | undefined;
    validationLite?: boolean | undefined;
    autocomplete?: "off" | "on" | null | undefined;
    readonly?: boolean | undefined;
    maxlength?: number | null | undefined;
    padding?: "" | "none" | "text-end" | "none text-end" | undefined;
    list?: string | null | undefined;
    type?: "text" | "email" | undefined;
    validationRegex?: RegExp | null | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
    description: {};
    iconBefore: {};
    iconAfter: {};
    hint: {};
    feedback: {};
}>, Svelte2TsxComponentConstructorParameters<{
    id: string;
    value: string;
    class?: string | null | undefined;
    required?: boolean | undefined;
    wrapper?: string | null | undefined;
    isTouched?: boolean | undefined;
    isValid?: boolean | null | undefined;
    disabled?: boolean | undefined;
    placeholder?: string | undefined;
    border?: "rounded" | "none" | null | undefined;
    floatingLabel?: boolean | undefined;
    validationLite?: boolean | undefined;
    autocomplete?: "off" | "on" | null | undefined;
    readonly?: boolean | undefined;
    maxlength?: number | null | undefined;
    padding?: "" | "none" | "text-end" | "none text-end" | undefined;
    list?: string | null | undefined;
    type?: "text" | "email" | undefined;
    validationRegex?: RegExp | null | undefined;
}>>;
/** @typedef {typeof __propDef.props}  TextProps */
/** @typedef {typeof __propDef.events}  TextEvents */
/** @typedef {typeof __propDef.slots}  TextSlots */
/**
 * Input text/email field component with regex validation.
 *
 * If iconBefore or icon_after slot is provided, and no label is defined, output an icon.
 * Otherwise a label and icon at the same time breaks the layout.
 *
 * Slots:
 * - default: The field label.
 * - description: Extra right-aligned label description.
 * - iconBefore: Present an icon before the input box.
 * - iconAfter: Present an icon after the input box.
 * - hint: An extra description below the field.
 * - feedback: Text to display if validation error.
 */
export default class Text extends Text_base {
}
export type TextProps = typeof __propDef.props;
export type TextEvents = typeof __propDef.events;
export type TextSlots = typeof __propDef.slots;
declare const __propDef: {
    props: {
        id: string;
        value: string;
        class?: string | null | undefined;
        required?: boolean | undefined;
        wrapper?: string | null | undefined;
        isTouched?: boolean | undefined;
        isValid?: boolean | null | undefined;
        disabled?: boolean | undefined;
        placeholder?: string | undefined;
        border?: "rounded" | "none" | null | undefined;
        floatingLabel?: boolean | undefined;
        validationLite?: boolean | undefined;
        autocomplete?: "off" | "on" | null | undefined;
        readonly?: boolean | undefined;
        maxlength?: number | null | undefined;
        padding?: "" | "none" | "text-end" | "none text-end" | undefined;
        list?: string | null | undefined;
        type?: "text" | "email" | undefined;
        validationRegex?: RegExp | null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        description: {};
        iconBefore: {};
        iconAfter: {};
        hint: {};
        feedback: {};
    };
};
export {};
