declare const Password_base: SvelteComponentConstructor<import("../../../../elucia/node_modules/svelte/internal").SvelteComponentTyped<{
    id: string;
    value: string;
    class?: string | null | undefined;
    required?: boolean | undefined;
    wrapper?: string | null | undefined;
    isTouched?: boolean | undefined;
    isValid?: boolean | null | undefined;
    placeholder?: string | undefined;
    border?: "rounded" | "none" | null | undefined;
    floatingLabel?: boolean | undefined;
    validationLite?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
    description: {
        slot: string;
    };
    appended: {};
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
    placeholder?: string | undefined;
    border?: "rounded" | "none" | null | undefined;
    floatingLabel?: boolean | undefined;
    validationLite?: boolean | undefined;
}>>;
/** @typedef {typeof __propDef.props}  PasswordProps */
/** @typedef {typeof __propDef.events}  PasswordEvents */
/** @typedef {typeof __propDef.slots}  PasswordSlots */
/**
 * Password form component.
 *
 * Slots:
 * - default: The field label.
 * - description: Extra right-aligned label description.
 * - appended: The icon or text to get appended to the right side for showing the password.
 * - hint: An extra description below the field.
 * - feedback: Text to display if validation error.
 */
export default class Password extends Password_base {
}
export type PasswordProps = typeof __propDef.props;
export type PasswordEvents = typeof __propDef.events;
export type PasswordSlots = typeof __propDef.slots;
declare const __propDef: {
    props: {
        id: string;
        value: string;
        class?: string | null | undefined;
        required?: boolean | undefined;
        wrapper?: string | null | undefined;
        isTouched?: boolean | undefined;
        isValid?: boolean | null | undefined;
        placeholder?: string | undefined;
        border?: "rounded" | "none" | null | undefined;
        floatingLabel?: boolean | undefined;
        validationLite?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        description: {
            slot: string;
        };
        appended: {};
        hint: {};
        feedback: {};
    };
};
export {};
