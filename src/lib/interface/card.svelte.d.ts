declare const Card_base: SvelteComponentConstructor<import("../../../../elucia/node_modules/svelte/internal").SvelteComponentTyped<{
    header?: "none" | "normal" | "light" | undefined;
    borderless?: boolean | undefined;
    href?: string | null | undefined;
    linkEffect?: "" | "rotate" | "pop" | undefined;
    effect?: "" | "rotate-right" | "rotate-left" | "active" | "inactive" | undefined;
    iconType?: "stamp" | "ribbon" | "ribbon-top" | undefined;
    iconBgColor?: string | undefined;
    bg?: "" | "primary" | "primary-lt" | undefined;
    noPadding?: boolean | undefined;
    statusPosition?: "" | "top" | "bottom" | "start" | undefined;
    statusColor?: "success" | "primary" | "primary-lt" | "warning" | "danger" | "red" | "green" | "blue" | undefined;
    progressValue?: number | null | undefined;
    progressColor?: string | null | undefined;
    stacked?: boolean | undefined;
    columns?: "" | "left" | "right" | undefined;
    img?: {
        src: string;
        alt?: string | undefined;
        placement?: "top" | "bottom" | undefined;
    } | null | undefined;
    footerLight?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    header: {};
    title: {};
    subtitle: {};
    icon: {};
    column: {};
    default: {};
    footer: {};
}>, Svelte2TsxComponentConstructorParameters<{
    header?: "none" | "normal" | "light" | undefined;
    borderless?: boolean | undefined;
    href?: string | null | undefined;
    linkEffect?: "" | "rotate" | "pop" | undefined;
    effect?: "" | "rotate-right" | "rotate-left" | "active" | "inactive" | undefined;
    iconType?: "stamp" | "ribbon" | "ribbon-top" | undefined;
    iconBgColor?: string | undefined;
    bg?: "" | "primary" | "primary-lt" | undefined;
    noPadding?: boolean | undefined;
    statusPosition?: "" | "top" | "bottom" | "start" | undefined;
    statusColor?: "success" | "primary" | "primary-lt" | "warning" | "danger" | "red" | "green" | "blue" | undefined;
    progressValue?: number | null | undefined;
    progressColor?: string | null | undefined;
    stacked?: boolean | undefined;
    columns?: "" | "left" | "right" | undefined;
    img?: {
        src: string;
        alt?: string | undefined;
        placement?: "top" | "bottom" | undefined;
    } | null | undefined;
    footerLight?: boolean | undefined;
}>>;
/** @typedef {typeof __propDef.props}  CardProps */
/** @typedef {typeof __propDef.events}  CardEvents */
/** @typedef {typeof __propDef.slots}  CardSlots */
/**
 * Card interface component.
 * TODO: card with columns; demo
 *
 * Slots:
 * - header
 * - title
 * - subtitle
 * - icon: specify an icon as bg. Recommended with header = none. Can also include text.
 * - column: if columns is specified.
 * - default: body
 */
export default class Card extends Card_base {
}
export type CardProps = typeof __propDef.props;
export type CardEvents = typeof __propDef.events;
export type CardSlots = typeof __propDef.slots;
declare const __propDef: {
    props: {
        header?: "none" | "normal" | "light" | undefined;
        borderless?: boolean | undefined;
        href?: string | null | undefined;
        linkEffect?: "" | "rotate" | "pop" | undefined;
        effect?: "" | "rotate-right" | "rotate-left" | "active" | "inactive" | undefined;
        iconType?: "stamp" | "ribbon" | "ribbon-top" | undefined;
        iconBgColor?: string | undefined;
        bg?: "" | "primary" | "primary-lt" | undefined;
        noPadding?: boolean | undefined;
        statusPosition?: "" | "top" | "bottom" | "start" | undefined;
        statusColor?: "success" | "primary" | "primary-lt" | "warning" | "danger" | "red" | "green" | "blue" | undefined;
        progressValue?: number | null | undefined;
        progressColor?: string | null | undefined;
        stacked?: boolean | undefined;
        columns?: "" | "left" | "right" | undefined;
        img?: {
            src: string;
            alt?: string | undefined;
            placement?: "top" | "bottom" | undefined;
        } | null | undefined;
        footerLight?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        header: {};
        title: {};
        subtitle: {};
        icon: {};
        column: {};
        default: {};
        footer: {};
    };
};
export {};
