import { base } from '$app/paths';
import { readable } from "svelte/store";
import { version } from '../../package.json';

export const config = readable({
    brand: 
        `<svg xmlns="http://www.w3.org/2000/svg" class="icon-tabler icon-tabler-terminal-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M8 9l3 3l-3 3"></path>
            <path d="M13 15l3 0"></path>
            <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
        </svg>
        Tabler template with Svelte`,
        
    user: {
        username: 'gkarak',
        email: '@wtower',
    },

    profileMenu: [[
        {title: 'Logout'},
    ]],

    menu: [{
        href: `${base}/`,
        title: 'Home',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="5 12 3 12 12 3 21 12 19 12" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>',
    }, {
        title: 'Interface',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" /><line x1="12" y1="12" x2="20" y2="7.5" /><line x1="12" y1="12" x2="12" y2="21" /><line x1="12" y1="12" x2="4" y2="7.5" /><line x1="16" y1="5.25" x2="8" y2="9.75" /></svg>',
        menu: [[{ // 1st column
            href: `${base}/interface/empty`,
            title: 'Empty page',
        }, {
            href: `${base}/interface/badges`,
            title: 'Badges',
            badge: {text: 'NEW'},
        }, {
            title: 'Cards',
            badge: {color: 'green', text: 'NEW'},
            menu: [[{
                href: `${base}/interface/cards`,
                title: 'Sample cards',
            }]],
        }, {
            href: `${base}/interface/dropdowns`,
            title: 'Dropdowns',
        }, {
            href: `${base}/interface/modals`,
            title: 'Modals',
        }], [{ // 2nd column
            href: `${base}/interface/tabs`,
            title: 'Tabs',
        }, {
            href: `${base}/interface/offcanvas`,
            title: 'Offcanvas',
        }, {
            title: 'Authentication',
            menu: [[{
                header: true,
                title: 'Authentication',
            }, {
                divider: true,
            }, {
                href: `${base}/interface/sign-in`,
                title: 'Sign in',
            }, {
                href: `${base}/interface/sign-up`,
                title: 'Sign up',
            }, {
                title: 'Sub-menu item disabled',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" /><line x1="12" y1="12" x2="20" y2="7.5" /><line x1="12" y1="12" x2="12" y2="21" /><line x1="12" y1="12" x2="4" y2="7.5" /><line x1="16" y1="5.25" x2="8" y2="9.75" /></svg>',
                disabled: true,
            }]],
        }]],
    }, {
        href: `${base}/form-elements`,
        title: 'Form elements',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 11l3 3l8 -8" /><path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /></svg>',
    }],

    notifications: [{
        status: 'red',
        title: 'Example 1',
        description: 'Change deprecated html tags to text decoration classes (#29604)',
        href: '#',
        star: 'muted',
    }, {
        title: 'Example 2',
        description: 'justify-content:between ⇒ justify-content:space-between (#29734)',
        href: '#',
        star: 'yellow',
    }, {
        title: 'Example 3',
        description: 'Update change-version.js (#29736)',
        href: '#',
        star: 'muted',
    }, {
        status: 'green',
        title: 'Example 4',
        href: '#',
        description: 'Regenerate package-lock.json (#29730)',
    }],

    footerMenu: [{
        href: '#',
        title: 'Documentation',
    }, {
        href: '#',
        title: 'License',
    }, {
        href: 'https://github.com/Wtower/tabler-template-svelte',
        title: 'Source code',
        target: '_blank',
    }, {
        href: 'https://9-dev.com',
        title: 'Sponsor',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon text-pink icon-filled icon-inline" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>',
    }],

    footerNotice: [
        'Svelte version &copy; 2022-2023 <a href="https://9-dev.com" class="link-secondary">9DEV Ltd.</a>',
        `v${version}`,
    ]
});
