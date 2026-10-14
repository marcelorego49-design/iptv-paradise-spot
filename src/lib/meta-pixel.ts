// Meta Pixel (Facebook) — loaded once on the client.
export const META_PIXEL_ID = "1419384443735371";

type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  push: unknown;
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

// Regions where ad tracking requires prior consent (EEA, UK, Switzerland).
// No consent banner exists, so the Pixel stays off for visitors there.
const CONSENT_REGIONS = new Set([
  "AT","BE","BG","HR","CY","CZ","DK","EE","FI","FR","DE","GR","HU","IE","IT","LV",
  "LT","LU","MT","NL","PL","PT","RO","SK","SI","ES","SE","IS","LI","NO","GB","CH",
]);

let started = false;
let enabled = false;

async function regionAllowsTracking(): Promise<boolean> {
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 2000);
    const res = await fetch("/cdn-cgi/trace", { signal: ctrl.signal });
    clearTimeout(t);
    if (!res.ok) return true; // not behind Cloudflare (e.g. preview): default allowed
    const loc = /loc=([A-Z0-9]{2})/.exec(await res.text())?.[1];
    if (!loc || loc === "XX" || loc === "T1") return false;
    return !CONSENT_REGIONS.has(loc);
  } catch {
    return true;
  }
}

function injectPixel() {
  if (window.fbq) return;
  const n = function (...args: unknown[]) {
    if (n.callMethod) n.callMethod(...args);
    else n.queue.push(args);
  } as Fbq;
  n.push = n;
  n.loaded = true;
  n.version = "2.0";
  n.queue = [];
  window.fbq = n;
  if (!window._fbq) window._fbq = n;
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(s);
  window.fbq("init", META_PIXEL_ID);
}

/** Initializes the Pixel once and fires the first PageView. */
export async function initMetaPixel() {
  if (started || typeof window === "undefined") return;
  started = true;
  if (!(await regionAllowsTracking())) return;
  injectPixel();
  enabled = true;
  window.fbq?.("track", "PageView");
}

export function trackPageView() {
  if (enabled) window.fbq?.("track", "PageView");
}

export function trackContact() {
  if (enabled) window.fbq?.("track", "Contact");
}

export function isWhatsAppUrl(href: string) {
  return /(^|\/\/)(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com|chat\.whatsapp\.com)|^whatsapp:/i.test(href);
}
