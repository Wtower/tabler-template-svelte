import { writable } from "svelte/store";

/**
 * Svelte Media Query Store
 * https://pqina.nl/blog/svelte-media-query-store/
 * https://stackoverflow.com/questions/56393880/how-do-i-detect-dark-mode-using-javascript
 * @param {string} mediaQueryString
 * @returns {import("svelte/store").Writable<boolean?>}
 */
export const mediaQuery = (mediaQueryString) => {
    /** @type {import("svelte/store").Writable<boolean?>} */
    const {subscribe, set, update} = writable(null, () => {
        const mql = window.matchMedia(mediaQueryString);
        set(mql.matches);
        const onchange = () => set(mql.matches);
        mql.addEventListener('change', onchange);
        return () => {mql.removeEventListener('change', onchange)}
    });
    return {subscribe, set, update};
}
