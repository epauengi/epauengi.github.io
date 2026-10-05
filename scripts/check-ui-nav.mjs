import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";

// 1. Verify Magnetic component supports "button" and ARIA attributes
const magneticPath = path.resolve("src/components/portfolio/shared/Magnetic.tsx");
const magneticContent = fs.readFileSync(magneticPath, "utf-8");
assert(magneticContent.includes('as?: "a" | "div" | "button"'), "Magnetic must support 'button' as target");
assert(magneticContent.includes('"aria-expanded": ariaExpanded'), "Magnetic must pass aria-expanded");
assert(magneticContent.includes('"aria-controls": ariaControls'), "Magnetic must pass aria-controls");
assert(magneticContent.includes('<button type={type} {...attrs}>'), "Magnetic must render standard HTML button element");

// 2. Verify Hamburger component uses button and accessible ARIA attributes
const hamburgerPath = path.resolve("src/components/portfolio/shared/Hamburger.tsx");
const hamburgerContent = fs.readFileSync(hamburgerPath, "utf-8");
assert(hamburgerContent.includes('as="button"'), "Hamburger must render as button");
assert(hamburgerContent.includes('aria-label={content.nav.menu}'), "Hamburger must have aria-label");
assert(hamburgerContent.includes('aria-expanded={false}'), "Hamburger must declare initial aria-expanded");
assert(hamburgerContent.includes('aria-controls="fixed-nav"'), "Hamburger must declare aria-controls");

// 3. Verify NavBar component .btn-menu uses button and accessible ARIA attributes
const navBarPath = path.resolve("src/components/portfolio/shared/NavBar.tsx");
const navBarContent = fs.readFileSync(navBarPath, "utf-8");
assert(navBarContent.includes('as="button"'), "NavBar menu button must render as button");
assert(navBarContent.includes('aria-controls="fixed-nav"'), "NavBar menu button must declare aria-controls");

// 4. Verify FixedNav dialog semantics
const fixedNavPath = path.resolve("src/components/portfolio/shared/FixedNav.tsx");
const fixedNavContent = fs.readFileSync(fixedNavPath, "utf-8");
assert(fixedNavContent.includes('id="fixed-nav"'), "FixedNav must have id='fixed-nav'");
assert(fixedNavContent.includes('role="dialog"'), "FixedNav must have role='dialog'");
assert(fixedNavContent.includes('aria-modal="true"'), "FixedNav must have aria-modal='true'");
assert(fixedNavContent.includes('aria-hidden="true"'), "FixedNav must start with aria-hidden='true'");

// 5. Verify HTML semantics in WorkGrid and MouseFollow
const workGridPath = path.resolve("src/components/portfolio/home/WorkGrid.tsx");
const workGridContent = fs.readFileSync(workGridPath, "utf-8").replace(/\r\n/g, "\n");
assert(!workGridContent.includes('</ul>\n          <div className="stripe last animate" />\n        </ul>'), "WorkGrid must not nest div directly inside ul");
assert(workGridContent.includes('</ul>\n        <div className="stripe last animate" />'), "WorkGrid stripe must sit cleanly outside ul");

const mouseFollowPath = path.resolve("src/components/portfolio/home/MouseFollow.tsx");
const mouseFollowContent = fs.readFileSync(mouseFollowPath, "utf-8").replace(/\r\n/g, "\n");
assert(mouseFollowContent.includes('<ul className="float-image-wrap">'), "MouseFollow must use ul wrapper for list items");

// 6. Verify SiteEngine reduced motion and inert management
const siteEnginePath = path.resolve("src/components/portfolio/shared/SiteEngine.tsx");
const siteEngineContent = fs.readFileSync(siteEnginePath, "utf-8").replace(/\r\n/g, "\n");
assert(siteEngineContent.includes('window.matchMedia("(prefers-reduced-motion: reduce)").matches'), "SiteEngine must check prefers-reduced-motion");
assert(siteEngineContent.includes('container.setAttribute("inert", "")'), "SiteEngine must trap focus with inert on container");
assert(siteEngineContent.includes('container.removeAttribute("inert")'), "SiteEngine must release inert on close");
assert(siteEngineContent.includes('cleanups.push(initHamburger(main, getScroll));\n\n    void boot();'), "SiteEngine must initialize Hamburger synchronously before async boot");
assert(siteEngineContent.includes('console.warn("Locomotive Scroll failed to initialize; falling back to native scroll."'), "SiteEngine must handle Locomotive Scroll fallback gracefully");

console.log("UI navigation, accessibility, and semantic DOM self-check passed.");
