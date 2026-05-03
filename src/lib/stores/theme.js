import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const STORAGE_KEY = 'portfolio-theme';
const VALID = ['default', 'editorial', 'enterprise'];

const initial = browser
  ? (VALID.includes(localStorage.getItem(STORAGE_KEY)) ? localStorage.getItem(STORAGE_KEY) : 'default')
  : 'default';

export const activeTheme = writable(initial);

if (browser) {
  activeTheme.subscribe((v) => {
    localStorage.setItem(STORAGE_KEY, v);
  });
}
