import { useEffect } from "react";

// Canonical site URL — update here if the domain ever changes.
export const SITE_URL = "https://concreterosegraphics.com";

const DEFAULT_TITLE = "Concrete Rose Graphics — Design That Breaks Through the Concrete";
const DEFAULT_DESCRIPTION =
  "Concrete Rose Graphics is a creative studio blending graphic design, branding, web design, and front-end development into visually strong, functional digital experiences.";
const DEFAULT_IMAGE =
  "https://media.base44.com/images/public/user_69603cc03ae9b76f3be0c533/b5c1180f5_ConcreteRoseGraphics-Transparent.png";

// Helpers — create or update a meta/element by attribute selector.
function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function pageUrl() {
  const { pathname } = window.location;
  // Normalize trailing slash (keep "/" for home, strip for others).
  const path = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  return `${SITE_URL}${path}`;
}

// Per-page SEO: title, description, canonical, Open Graph, Twitter, robots.
export function usePageMeta({ title, description, image, robots } = {}) {
  useEffect(() => {
    const t = title || DEFAULT_TITLE;
    const d = description || DEFAULT_DESCRIPTION;
    const img = image || DEFAULT_IMAGE;
    const url = pageUrl();

    document.title = t;

    // Description
    upsertMeta("name", "description", d);

    // Robots
    const robotsValue = robots || "index, follow";
    upsertMeta("name", "robots", robotsValue);

    // Canonical
    upsertLink("canonical", url);

    // Open Graph
    upsertMeta("property", "og:title", t);
    upsertMeta("property", "og:description", d);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", img);

    // Twitter
    upsertMeta("name", "twitter:title", t);
    upsertMeta("name", "twitter:description", d);
    upsertMeta("name", "twitter:image", img);

    return () => {
      // Reset to home defaults so a stale page's meta doesn't leak.
      document.title = DEFAULT_TITLE;
      upsertMeta("name", "description", DEFAULT_DESCRIPTION);
      upsertMeta("name", "robots", "index, follow");
      upsertLink("canonical", `${SITE_URL}/`);
      upsertMeta("property", "og:title", DEFAULT_TITLE);
      upsertMeta("property", "og:description", DEFAULT_DESCRIPTION);
      upsertMeta("property", "og:url", `${SITE_URL}/`);
      upsertMeta("property", "og:image", DEFAULT_IMAGE);
      upsertMeta("name", "twitter:title", DEFAULT_TITLE);
      upsertMeta("name", "twitter:description", DEFAULT_DESCRIPTION);
      upsertMeta("name", "twitter:image", DEFAULT_IMAGE);
    };
  }, [title, description, image, robots]);
}