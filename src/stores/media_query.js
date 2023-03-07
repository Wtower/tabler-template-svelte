// https://medium.com/@ricciutipaolo/how-to-check-for-media-queries-in-svelte-with-usemediaquery-604f14190035
import { readable } from 'svelte/store';
//export a function that return a readable given a string media query as input
export const useMediaQuery = (/** @type {string} */ mediaQueryString)=>{
  //we inizialize the readable as null and get the callback with the set function
	const matches = readable(false, (set) => {
    	//we match the media query
		const m=window.matchMedia(mediaQueryString);
		//we set the value of the reader to the matches property
		set(m.matches);
		//we create the event listener that will set the new value on change
		const el=(/** @type {{ matches: boolean; }} */ e) => set(e.matches);
		//we add the new event listener
		m.addEventListener("change", el);
    		//we return the stop function that will clean the event listener
		return () => {m.removeEventListener("change", el)};
	});
	//then we return the readable
	return matches;
}
