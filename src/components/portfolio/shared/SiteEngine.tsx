"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type LocomotiveScrollType from "locomotive-scroll";

gsap.registerPlugin(ScrollTrigger);

type SitePageId = "home" | "work" | "about" | "contact";
type Cleanup = () => void;
type Loco = LocomotiveScrollType & {
  scroll?: { instance?: { scroll?: { y?: number } } };
};

type Props = {
  pageId?: SitePageId;
};

export function SiteEngine({ pageId = "home" }: Props) {
  useLayoutEffect(() => {
    const mainElement = document.getElementById(pageId);
    const containerElement = mainElement?.querySelector<HTMLElement>("[data-scroll-container]");
    if (!(mainElement instanceof HTMLElement) || !(containerElement instanceof HTMLElement)) return;
    const main = mainElement;
    const container = containerElement;

    let cancelled = false;
    let scroll: Loco | null = null;
    const cleanups: Cleanup[] = [];
    const getScroll = () => scroll;

    const setViewportHeight = () => {
      document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
    };

    const setDeviceMode = () => {
      const touch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      main.classList.toggle("touch", touch);
      main.classList.toggle("no-touch", !touch);
    };

    const onResize = () => {
      setViewportHeight();
      setDeviceMode();
      scroll?.update();
      ScrollTrigger.refresh();
    };

    setViewportHeight();
    setDeviceMode();
    window.addEventListener("resize", onResize);
    cleanups.push(() => window.removeEventListener("resize", onResize));

    void boot();

    async function boot() {
      const mod = await import("locomotive-scroll");
      if (cancelled) return;

      const LocomotiveScroll = (mod as { default?: unknown }).default ?? mod;
      const Ctor = LocomotiveScroll as unknown as {
        new (options: { el: HTMLElement; smooth: boolean }): Loco;
      };

      document.querySelectorAll(".c-scrollbar").forEach((element) => element.remove());
      scroll = new Ctor({ el: container, smooth: true });
      if (cancelled) {
        scroll.destroy();
        scroll = null;
        return;
      }

      const unlisten = scroll.on("scroll", () => ScrollTrigger.update());
      cleanups.push(() => {
        if (typeof unlisten === "function") unlisten();
      });

      ScrollTrigger.scrollerProxy(container, {
        scrollTop(value) {
          if (!scroll) return 0;
          if (arguments.length) {
            scroll.scrollTo(value as number, { duration: 0, disableLerp: true });
            return value as number;
          }
          return scroll.scroll?.instance?.scroll?.y ?? 0;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: container.style.transform ? "transform" : "fixed",
      });

      const onRefresh = () => {
        try {
          scroll?.update();
        } catch {
          /* Locomotive may be tearing down during a refresh. */
        }
      };
      ScrollTrigger.addEventListener("refresh", onRefresh);
      cleanups.push(() => ScrollTrigger.removeEventListener("refresh", onRefresh));

      cleanups.push(initHamburger(main, getScroll));
      cleanups.push(initMagnetic(main));
      cleanups.push(initScrolltriggerNav(main, container));
      cleanups.push(initTricksWords(main));
      cleanups.push(initSpanLines(main, container));
      cleanups.push(initFadeIn(main, container));
      cleanups.push(initStickyCursor(main));

      if (pageId === "work") {
        const onWorkLayoutChange = (event: Event) => {
          const phase = (event as CustomEvent<{ phase?: string }>).detail?.phase;
          if (phase === "start") scroll?.stop();
          if (phase === "middle") {
            scroll?.scrollTo("top", {
              offset: 0,
              duration: 700,
              easing: [0.7, 0, 0.35, 1],
              disableLerp: true,
            });
          }
          if (phase === "finish") {
            scroll?.update();
            ScrollTrigger.refresh();
            scroll?.start();
          }
          if (phase === "update") scroll?.update();
        };
        window.addEventListener("work:layout-change", onWorkLayoutChange);
        cleanups.push(() => window.removeEventListener("work:layout-change", onWorkLayoutChange));
      }

      if (pageId === "home") {
        cleanups.push(initPlayVideoInview(main, container));
        cleanups.push(initFooterHamburgerScrub(main, container));
        cleanups.push(initFooterTransitions(main, container));
        cleanups.push(initHomeHeaderArrow(main, container));
        cleanups.push(initScrollLetters(main, container));
      } else {
        if (pageId !== "contact") {
          cleanups.push(initFooterHamburgerScrub(main, container));
          cleanups.push(initFooterTransitions(main, container));
        }
        if (pageId === "about") cleanups.push(initAboutAnimations(main, container));
      }

      ScrollTrigger.refresh();
      scroll.update();

      const loader = pageId === "home" ? initLoaderHome(main, getScroll) : initLoader(main);
      cleanups.push(() => loader.kill());
      scroll.update();
    }

    return () => {
      cancelled = true;
      main.classList.remove("nav-active", "scrolled");
      main.querySelectorAll(".btn-hamburger, .btn-menu").forEach((element) => {
        element.classList.remove("active");
      });
      document.documentElement.style.cursor = "auto";
      cleanups.splice(0).reverse().forEach((cleanup) => cleanup());
      scroll?.start();
      scroll?.destroy();
      document.querySelectorAll(".c-scrollbar").forEach((element) => element.remove());
      gsap.killTweensOf(main.querySelectorAll("*"));
      scroll = null;
    };
  }, [pageId]);

  return null;
}

function getLoader(main: HTMLElement) {
  return main.parentElement?.querySelector<HTMLElement>(".loading-container") ?? null;
}

function initLoaderHome(main: HTMLElement, getScroll: () => Loco | null) {
  const wide = window.innerWidth > 540;
  const loader = getLoader(main);
  const screen = loader?.querySelector<HTMLElement>(".loading-screen");
  const words = loader?.querySelector<HTMLElement>(".loading-words");
  const bottom = loader?.querySelector<HTMLElement>(".rounded-div-wrap.bottom");
  if (!screen || !words || !bottom) return gsap.timeline();

  const timeline = gsap.timeline();
  const onceIn = main.querySelectorAll(".once-in");
  const greetings = words.querySelectorAll(".home-active");

  timeline.set(screen, { top: "0" });
  timeline.set(onceIn, { y: wide ? "50vh" : "10vh" });
  timeline.set(words, { opacity: 0, y: -50 });
  timeline.set(words.querySelectorAll(".active"), { display: "none" });
  timeline.set(words.querySelectorAll(".home-active, .home-active-last"), {
    display: "block",
    opacity: 0,
  });
  timeline.set(words.querySelectorAll(".home-active-first"), { opacity: 1 });
  timeline.set(bottom, { height: wide ? "10vh" : "5vh" });
  timeline.set("html", { cursor: "wait" });
  timeline.call(() => getScroll()?.stop());
  timeline.to(words, {
    duration: 0.8,
    opacity: 1,
    y: -50,
    ease: "power4.out",
    delay: 0.5,
  });
  timeline.to(
    greetings,
    {
      duration: 0.01,
      opacity: 1,
      stagger: 0.15,
      ease: "none",
    },
    "-=0.4",
  );
  timeline.to(
    greetings,
    {
      duration: 0.01,
      opacity: 0,
      stagger: 0.15,
      ease: "none",
    },
    "<+=0.15",
  );
  timeline.to(words.querySelectorAll(".home-active-last"), {
    duration: 0.01,
    opacity: 1,
    delay: 0.15,
  });
  timeline.to(screen, {
    duration: 0.8,
    top: "-100%",
    ease: "power4.inOut",
    delay: 0.2,
  });
  timeline.to(bottom, { duration: 1, height: "0vh", ease: "power4.inOut" }, "-=0.8");
  timeline.to(words, { duration: 0.3, opacity: 0, ease: "linear" }, "-=0.8");
  timeline.set(screen, { top: "calc(-100%)" });
  timeline.set(bottom, { height: "0vh" });
  timeline.to(
    onceIn,
    {
      duration: 1.5,
      y: "0vh",
      stagger: 0.07,
      ease: "expo.out",
      clearProps: true,
    },
    "-=0.8",
  );
  timeline.set("html", { cursor: "auto" }, "-=1.2");
  timeline.call(() => getScroll()?.start());
  return timeline;
}

function initLoader(main: HTMLElement) {
  const wide = window.innerWidth > 540;
  const loader = getLoader(main);
  const screen = loader?.querySelector<HTMLElement>(".loading-screen");
  const words = loader?.querySelector<HTMLElement>(".loading-words");
  const bottom = loader?.querySelector<HTMLElement>(".rounded-div-wrap.bottom");
  if (!screen || !words || !bottom) return gsap.timeline();

  const timeline = gsap.timeline();
  timeline.set(screen, { top: "0" });
  timeline.set(main.querySelectorAll(".once-in"), { y: wide ? "50vh" : "10vh" });
  timeline.set(words, { opacity: 1, y: -50 });
  timeline.set(bottom, { height: wide ? "10vh" : "5vh" });
  timeline.set("html", { cursor: "wait" });
  timeline.to(screen, {
    duration: 0.8,
    top: "-100%",
    ease: "power4.inOut",
    delay: 0.5,
  });
  timeline.to(bottom, { duration: 1, height: "0vh", ease: "power4.inOut" }, "-=0.8");
  timeline.to(words, { duration: 0.3, opacity: 0, ease: "linear" }, "-=0.8");
  timeline.set(screen, { top: "calc(-100%)" });
  timeline.set(bottom, { height: "0vh" });
  timeline.to(
    main.querySelectorAll(".once-in"),
    {
      duration: 1,
      y: "0vh",
      stagger: 0.05,
      ease: "expo.out",
      clearProps: true,
    },
    "-=0.8",
  );
  timeline.set("html", { cursor: "auto" }, "-=0.8");
  return timeline;
}

function initHamburger(main: HTMLElement, getScroll: () => Loco | null): Cleanup {
  const toggles = main.querySelectorAll<HTMLElement>(".btn-hamburger, .btn-menu");
  const backdrop = main.querySelector<HTMLElement>(".fixed-nav-back");
  const close = () => {
    toggles.forEach((element) => element.classList.remove("active"));
    main.classList.remove("nav-active");
    getScroll()?.start();
  };
  const open = () => {
    toggles.forEach((element) => element.classList.add("active"));
    main.classList.add("nav-active");
    getScroll()?.stop();
  };
  const toggle = () => (main.classList.contains("nav-active") ? close() : open());
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") close();
  };

  toggles.forEach((element) => element.addEventListener("click", toggle));
  backdrop?.addEventListener("click", close);
  document.addEventListener("keydown", onKeyDown);

  return () => {
    toggles.forEach((element) => element.removeEventListener("click", toggle));
    backdrop?.removeEventListener("click", close);
    document.removeEventListener("keydown", onKeyDown);
  };
}

function initMagnetic(scope: HTMLElement): Cleanup {
  const cleanups: Cleanup[] = [];

  if (window.innerWidth > 540) {
    scope.querySelectorAll<HTMLElement>(".magnetic").forEach((magnet) => {
      const move = (event: MouseEvent) => {
        const bounds = magnet.getBoundingClientRect();
        const strength = Number(magnet.dataset.strength ?? 20);
        const strengthText = Number(magnet.dataset.strengthText ?? 10);
        const x = ((event.clientX - bounds.left) / magnet.offsetWidth - 0.5) * strength;
        const y = ((event.clientY - bounds.top) / magnet.offsetHeight - 0.5) * strength;
        gsap.to(magnet, { duration: 1.5, x, y, rotate: "0.001deg", ease: "power4.out" });

        const text = magnet.querySelector(".btn-text");
        if (text) {
          gsap.to(text, {
            duration: 1.5,
            x: ((event.clientX - bounds.left) / magnet.offsetWidth - 0.5) * strengthText,
            y: ((event.clientY - bounds.top) / magnet.offsetHeight - 0.5) * strengthText,
            rotate: "0.001deg",
            ease: "power4.out",
          });
        }
      };
      const leave = () => {
        gsap.to(magnet, { duration: 1.5, x: 0, y: 0, ease: "elastic.out" });
        const text = magnet.querySelector(".btn-text");
        if (text) gsap.to(text, { duration: 1.5, x: 0, y: 0, ease: "elastic.out" });
      };
      magnet.addEventListener("mousemove", move);
      magnet.addEventListener("mouseleave", leave);
      cleanups.push(() => {
        magnet.removeEventListener("mousemove", move);
        magnet.removeEventListener("mouseleave", leave);
      });
    });
  }

  scope.querySelectorAll<HTMLElement>(".btn-click.magnetic").forEach((button) => {
    const enter = () => {
      const fill = button.querySelector(".btn-fill");
      if (fill) {
        gsap.to(fill, {
          duration: 0.6,
          startAt: { y: "76%" },
          y: "0%",
          ease: "power2.inOut",
        });
      }
      const change = button.querySelector(".btn-text-inner.change");
      if (change) {
        gsap.to(change, {
          duration: 0.3,
          startAt: { color: "#1C1D20" },
          color: "#FFFFFF",
          ease: "power3.in",
        });
      }
    };
    const leave = () => {
      const fill = button.querySelector(".btn-fill");
      if (fill) gsap.to(fill, { duration: 0.6, y: "-76%", ease: "power2.inOut" });
      const change = button.querySelector(".btn-text-inner.change");
      if (change) gsap.to(change, { duration: 0.3, color: "#1C1D20", ease: "power3.out", delay: 0.3 });
    };
    button.addEventListener("mouseenter", enter);
    button.addEventListener("mouseleave", leave);
    cleanups.push(() => {
      button.removeEventListener("mouseenter", enter);
      button.removeEventListener("mouseleave", leave);
    });
  });

  return () => cleanups.forEach((cleanup) => cleanup());
}

function initStickyCursor(scope: HTMLElement): Cleanup {
  const image = scope.querySelector<HTMLElement>(".mouse-pos-list-image");
  const button = scope.querySelector<HTMLElement>(".mouse-pos-list-btn");
  const label = scope.querySelector<HTMLElement>(".mouse-pos-list-span");
  if (!image || !button || !label) return () => {};

  let imageX = 0;
  let imageY = 0;
  let buttonX = 0;
  let buttonY = 0;
  let labelX = 0;
  let labelY = 0;
  let mouseX = 0;
  let mouseY = 0;

  const ticker = gsap.to({}, {
    duration: 0.0083333333,
    repeat: -1,
    onRepeat() {
      imageX += (mouseX - imageX) / 12;
      imageY += (mouseY - imageY) / 12;
      buttonX += (mouseX - buttonX) / 7;
      buttonY += (mouseY - buttonY) / 7;
      labelX += (mouseX - labelX) / 6;
      labelY += (mouseY - labelY) / 6;
      gsap.set(image, { left: imageX, top: imageY });
      gsap.set(button, { left: buttonX, top: buttonY });
      gsap.set(label, { left: labelX, top: labelY });
    },
  });

  const onMouseMove = (event: MouseEvent) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  };
  const onMouseDown = () => {
    button.classList.add("pressed");
    label.classList.add("pressed");
  };
  const onMouseUp = () => {
    button.classList.remove("pressed");
    label.classList.remove("pressed");
  };
  document.addEventListener("mousemove", onMouseMove);
  scope.addEventListener("mousedown", onMouseDown);
  scope.addEventListener("mouseup", onMouseUp);

  const cleanups: Cleanup[] = [];
  scope.querySelectorAll<HTMLElement>(".mouse-pos-list-image-wrap a").forEach((anchor) => {
    const enter = () => {
      image.classList.add("active");
      button.classList.add("active");
      label.classList.add("active");
    };
    const leave = () => {
      image.classList.remove("active");
      button.classList.remove("active");
      label.classList.remove("active");
    };
    anchor.addEventListener("mouseenter", enter);
    anchor.addEventListener("mouseleave", leave);
    cleanups.push(() => {
      anchor.removeEventListener("mouseenter", enter);
      anchor.removeEventListener("mouseleave", leave);
    });
  });

  scope.querySelectorAll<HTMLElement>(".mouse-pos-list-image-wrap li").forEach((item) => {
    const enter = () => {
      const items = Array.from(scope.querySelectorAll(".mouse-pos-list-image-wrap li.visible"));
      const count = scope.querySelectorAll(".mouse-pos-list-image li.visible").length;
      const index = items.indexOf(item);
      const imageWrap = scope.querySelector(".float-image-wrap");
      if (imageWrap && count) {
        gsap.to(imageWrap, {
          y: `${(index * 100) / (count * -1)}%`,
          duration: 0.6,
          ease: "power2.inOut",
        });
      }
    };
    item.addEventListener("mouseenter", enter);
    cleanups.push(() => item.removeEventListener("mouseenter", enter));
  });

  scope.querySelectorAll<HTMLElement>(".single-tile-wrap a, .mouse-pos-list-archive a, .next-case-btn").forEach((anchor) => {
    const enter = () => {
      button.classList.add("active-big");
      label.classList.add("active-big");
    };
    const leave = () => {
      button.classList.remove("active-big");
      label.classList.remove("active-big");
    };
    anchor.addEventListener("mouseenter", enter);
    anchor.addEventListener("mouseleave", leave);
    cleanups.push(() => {
      anchor.removeEventListener("mouseenter", enter);
      anchor.removeEventListener("mouseleave", leave);
    });
  });

  return () => {
    ticker.kill();
    gsap.killTweensOf([image, button, label, image.querySelector(".float-image-wrap")]);
    document.removeEventListener("mousemove", onMouseMove);
    scope.removeEventListener("mousedown", onMouseDown);
    scope.removeEventListener("mouseup", onMouseUp);
    cleanups.forEach((cleanup) => cleanup());
  };
}

function initTricksWords(scope: HTMLElement): Cleanup {
  scope.querySelectorAll<HTMLElement>(".span-lines").forEach((element) => {
    if (element.querySelector(".span-line")) return;
    element.innerHTML = element.innerHTML.replace(
      /(^|<\/?[^>]+>|\s+)([^\s<]+)/g,
      '$1<span class="span-line"><span class="span-line-inner">$2</span></span>',
    );
  });
  return () => {};
}

function initSpanLines(scope: HTMLElement, scroller: HTMLElement): Cleanup {
  const tweens = Array.from(scope.querySelectorAll<HTMLElement>(".span-lines.animate")).map((trigger) =>
    gsap.from(trigger.querySelectorAll(".span-line-inner"), {
      y: "100%",
      stagger: 0.01,
      ease: "power3.out",
      duration: 1,
      scrollTrigger: {
        trigger,
        scroller,
        toggleActions: "play none none reset",
        start: "0% 100%",
        end: "100% 0%",
      },
    }),
  );
  return () => tweens.forEach((tween) => tween.kill());
}

function initFadeIn(scope: HTMLElement, scroller: HTMLElement): Cleanup {
  const tweens = Array.from(scope.querySelectorAll<HTMLElement>(".fade-in.animate")).map((element) =>
    gsap.from(element, {
      y: "2em",
      opacity: 0,
      ease: "expo.out",
      duration: 1.75,
      scrollTrigger: {
        trigger: element,
        scroller,
        toggleActions: "play none none reset",
        start: "0% 110%",
        end: "100% 0%",
      },
    }),
  );
  return () => tweens.forEach((tween) => tween.kill());
}

function initScrolltriggerNav(main: HTMLElement, scroller: HTMLElement): Cleanup {
  const trigger = ScrollTrigger.create({
    scroller,
    start: "top -30%",
    onUpdate: () => main.classList.add("scrolled"),
    onLeaveBack: () => main.classList.remove("scrolled"),
  });
  return () => trigger.kill();
}

function initPlayVideoInview(scope: HTMLElement, scroller: HTMLElement): Cleanup {
  const triggers = Array.from(scope.querySelectorAll<HTMLElement>(".playpauze")).flatMap((element) => {
    const video = element.querySelector<HTMLVideoElement>("video");
    if (!video) return [];
    return [
      ScrollTrigger.create({
        scroller,
        trigger: video,
        start: "0% 120%",
        end: "100% -20%",
        onEnter: () => void video.play(),
        onEnterBack: () => void video.play(),
        onLeave: () => video.pause(),
        onLeaveBack: () => video.pause(),
      }),
    ];
  });
  return () => triggers.forEach((trigger) => trigger.kill());
}

function initFooterHamburgerScrub(scope: HTMLElement, scroller: HTMLElement): Cleanup {
  const footer = scope.querySelector(".footer-wrap");
  const hamburger = scope.querySelector(".btn-hamburger .btn-click");
  if (!footer || !hamburger) return () => {};
  const tween = gsap.from(hamburger, {
    boxShadow: "0px 0px 0px 0px rgb(0, 0, 0)",
    ease: "none",
    scrollTrigger: {
      scroller,
      trigger: footer,
      start: "50% 100%",
      end: "100% 120%",
      scrub: 0,
    },
  });
  return () => tween.kill();
}

function initHomeHeaderArrow(scope: HTMLElement, scroller: HTMLElement): Cleanup {
  const header = scope.querySelector<HTMLElement>(".home-header");
  const arrow = header?.querySelector<HTMLElement>(".arrow");
  if (!header || !arrow) return () => {};

  const media = gsap.matchMedia();
  media.add("(min-width: 721px)", () => {
    const tween = gsap.to(arrow, {
      rotate: 90,
      ease: "none",
      scrollTrigger: {
        scroller,
        trigger: header,
        start: "100% 100%",
        end: "100% 0%",
        scrub: 0,
      },
    });
    return () => tween.kill();
  });
  return () => media.revert();
}

function initFooterTransitions(scope: HTMLElement, scroller: HTMLElement): Cleanup {
  const footer = scope.querySelector<HTMLElement>(".footer-footer-wrap");
  const curve = scope.querySelector<HTMLElement>(".footer-rounded-div .rounded-div-wrap");
  const arrow = scope.querySelector<HTMLElement>("footer .arrow");
  if (!footer || !curve) return () => {};

  const media = gsap.matchMedia();
  media.add("(min-width: 721px)", () => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        scroller,
        trigger: footer,
        start: "0% 100%",
        end: "100% 100%",
        scrub: 0,
      },
    });
    timeline.to(curve, { height: 0, ease: "none" }, 0);
    if (arrow) timeline.from(arrow, { rotate: 15, ease: "none" }, 0);
    return () => timeline.kill();
  });
  media.add("(max-width: 720px)", () => {
    const tween = gsap.to(curve, {
      height: 0,
      ease: "none",
      scrollTrigger: {
        scroller,
        trigger: footer,
        start: "0% 100%",
        end: "100% 100%",
        scrub: 0,
      },
    });
    return () => tween.kill();
  });
  return () => media.revert();
}

function initAboutAnimations(scope: HTMLElement, scroller: HTMLElement): Cleanup {
  const cleanups: Cleanup[] = [];
  const badge = scope.querySelector<HTMLElement>(".certificate-badge");
  const badgeRing = badge?.querySelector<SVGElement>("svg:nth-child(1)");
  if (badge && badgeRing) {
    const tween = gsap.to(badgeRing, {
      rotate: -90,
      ease: "none",
      scrollTrigger: {
        scroller,
        trigger: badge,
        start: "0% 100%",
        end: "100% 0%",
        scrub: 0,
      },
    });
    cleanups.push(() => tween.kill());
  }

  const media = gsap.matchMedia();
  media.add("(min-width: 721px)", () => {
    const localCleanups: Cleanup[] = [];
    const image = scope.querySelector<HTMLElement>(".about-image .single-about-image");
    const arrow = scope.querySelector<HTMLElement>(".about-image .arrow");
    if (image && arrow) {
      const tween = gsap.to(arrow, {
        rotate: 60,
        ease: "none",
        scrollTrigger: {
          scroller,
          trigger: image,
          start: "15% 100%",
          end: "100% 0%",
          scrub: 0,
        },
      });
      localCleanups.push(() => tween.kill());
    }

    const services = scope.querySelector<HTMLElement>(".about-services");
    const transitionTargets = Array.from(
      scope.querySelectorAll<HTMLElement>(".about-header, .line-globe, .about-image, .about-services"),
    );
    if (services && transitionTargets.length) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          scroller,
          trigger: services,
          start: "-25% 100%",
          end: "100% 100%",
          scrub: 0,
        },
      });
      timeline.set(transitionTargets, { backgroundColor: "#FFFFFF" });
      timeline.to(transitionTargets, { backgroundColor: "#E9EAEB", ease: "none" });
      localCleanups.push(() => timeline.kill());
    }

    const globe = scope.querySelector<HTMLElement>(".digital-ball .globe");
    if (globe) {
      const tween = gsap.to(globe, {
        rotate: 90,
        ease: "none",
        scrollTrigger: {
          scroller,
          trigger: scope,
          start: "100% 100%",
          end: "100% 0%",
          scrub: 0,
        },
      });
      localCleanups.push(() => tween.kill());
    }

    return () => localCleanups.forEach((cleanup) => cleanup());
  });
  cleanups.push(() => media.revert());

  return () => cleanups.forEach((cleanup) => cleanup());
}

function initScrollLetters(scope: HTMLElement, scroller: HTMLElement): Cleanup {
  const parent = scope.querySelector<HTMLElement>(".big-name .name-h1");
  if (!parent) return () => {};
  parent.querySelectorAll(".name-wrap[data-roll-clone]").forEach((element) => element.remove());

  const primaryTargets = Array.from(scope.querySelectorAll<HTMLElement>(".big-name .name-wrap"));
  const reverseTargets = Array.from(scope.querySelectorAll<HTMLElement>(".rollingText02"));
  if (!primaryTargets.length && !reverseTargets.length) return () => {};

  let direction = 1;
  const rolls = [
    primaryTargets.length ? roll(primaryTargets, 18) : null,
    reverseTargets.length ? roll(reverseTargets, 10, true) : null,
  ].filter((value): value is ReturnType<typeof roll> => value !== null);
  const trigger = ScrollTrigger.create({
    scroller,
    trigger: scroller,
    onUpdate(self) {
      if (self.direction !== direction) {
        direction *= -1;
        gsap.to(rolls.map(({ timeline }) => timeline), {
          timeScale: direction,
          overwrite: true,
        });
      }
    },
  });

  return () => {
    trigger.kill();
    rolls.forEach(({ cleanup }) => cleanup());
  };
}

function roll(elements: HTMLElement[], duration: number, reverse = false) {
  const timeline = gsap.timeline({
    repeat: -1,
    onReverseComplete() {
      this.totalTime(this.rawTime() + this.duration() * 10);
    },
  });
  const clones = elements.map((element) => {
    const clone = element.cloneNode(true) as HTMLElement;
    clone.dataset.rollClone = "";
    element.parentNode?.appendChild(clone);
    return clone;
  });
  const positionClones = () => {
    elements.forEach((element, index) => {
      gsap.set(clones[index], {
        position: "absolute",
        overwrite: false,
        top: element.offsetTop,
        left: element.offsetLeft + (reverse ? -element.offsetWidth : element.offsetWidth),
      });
    });
  };
  positionClones();
  elements.forEach((element, index) => {
    timeline.to(
      [element, clones[index]],
      { xPercent: reverse ? 100 : -100, duration, ease: "none" },
      0,
    );
  });
  const onResize = () => {
    const time = timeline.totalTime();
    timeline.totalTime(0);
    positionClones();
    timeline.totalTime(time);
  };
  window.addEventListener("resize", onResize);

  return {
    timeline,
    cleanup: () => {
      window.removeEventListener("resize", onResize);
      timeline.kill();
      clones.forEach((clone) => clone.remove());
    },
  };
}
