const initWorkGalleries = () => {
  const galleries = document.querySelectorAll("[data-work-gallery]");

  galleries.forEach((gallery) => {
    const image = gallery.querySelector("[data-gallery-image]");
    const title = gallery.querySelector("[data-gallery-title]");
    const caption = gallery.querySelector("[data-gallery-caption]");
    const triggers = Array.from(
      gallery.querySelectorAll("[data-gallery-trigger]"),
    );
    const scroller = gallery.querySelector("[data-horizontal-scroll]");

    if (!(image instanceof HTMLImageElement) || triggers.length === 0) {
      return;
    }

    let targetScrollLeft = 0;
    let scrollFrame = 0;

    const clampScrollLeft = (value: number) => {
      if (!(scroller instanceof HTMLElement)) {
        return 0;
      }

      const maxLeft = Math.max(scroller.scrollWidth - scroller.clientWidth, 0);
      return Math.min(Math.max(value, 0), maxLeft);
    };

    const animateHorizontalScroll = () => {
      if (!(scroller instanceof HTMLElement)) {
        scrollFrame = 0;
        return;
      }

      const distance = targetScrollLeft - scroller.scrollLeft;

      if (Math.abs(distance) < 0.45) {
        scroller.scrollLeft = targetScrollLeft;
        scrollFrame = 0;
        return;
      }

      scroller.scrollLeft += distance * 0.32;
      scrollFrame = requestAnimationFrame(animateHorizontalScroll);
    };

    const smoothScrollTo = (left: number) => {
      if (!(scroller instanceof HTMLElement)) {
        return;
      }

      targetScrollLeft = clampScrollLeft(left);

      if (!scrollFrame) {
        scrollFrame = requestAnimationFrame(animateHorizontalScroll);
      }
    };

    const scrollThumbIntoView = (
      trigger: Element,
      behavior: ScrollBehavior = "smooth",
    ) => {
      if (!(scroller instanceof HTMLElement) || !(trigger instanceof HTMLElement)) {
        return;
      }

      if (scrollFrame) {
        cancelAnimationFrame(scrollFrame);
        scrollFrame = 0;
      }

      const scrollerRect = scroller.getBoundingClientRect();
      const triggerRect = trigger.getBoundingClientRect();
      const maxLeft = Math.max(scroller.scrollWidth - scroller.clientWidth, 0);
      const targetLeft = Math.min(
        Math.max(scroller.scrollLeft + triggerRect.left - scrollerRect.left - 12, 0),
        maxLeft,
      );

      targetScrollLeft = targetLeft;

      if (behavior === "auto") {
        scroller.scrollLeft = targetLeft;
        return;
      }

      scroller.scrollTo({ left: targetLeft, behavior });
    };

    if (scroller instanceof HTMLElement) {
      targetScrollLeft = scroller.scrollLeft;

      scroller.addEventListener("scroll", () => {
        if (!scrollFrame) {
          targetScrollLeft = scroller.scrollLeft;
        }
      });

      window.addEventListener(
        "wheel",
        (event) => {
          const hoveredScroller =
            event.composedPath().reduce<Element | null>((match, target) => {
              if (match || !(target instanceof Element)) {
                return match;
              }

              return target.closest("[data-horizontal-scroll]");
            }, null);

          if (hoveredScroller !== scroller || !(hoveredScroller instanceof HTMLElement)) {
            return;
          }

          const maxLeft = Math.max(scroller.scrollWidth - scroller.clientWidth, 0);

          if (maxLeft <= 0) {
            return;
          }

          const deltaScale =
            event.deltaMode === WheelEvent.DOM_DELTA_LINE
              ? 16
              : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
                ? scroller.clientWidth
                : 1;
          const dominantDelta =
            Math.abs(event.deltaX) > Math.abs(event.deltaY)
              ? event.deltaX
              : event.deltaY;
          const scrollDelta = dominantDelta * deltaScale;

          if (scrollDelta === 0) {
            return;
          }

          event.preventDefault();
          event.stopPropagation();

          if (!scrollFrame) {
            targetScrollLeft = scroller.scrollLeft;
          }

          smoothScrollTo(targetScrollLeft + scrollDelta * 1.75);
        },
        { passive: false, capture: true },
      );
    }

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const nextSrc = trigger.getAttribute("data-image-src");
        const nextWidth = trigger.getAttribute("data-image-width");
        const nextHeight = trigger.getAttribute("data-image-height");
        const nextAlt = trigger.getAttribute("data-image-alt") ?? "";
        const nextTitle = trigger.getAttribute("data-image-title") ?? "";
        const nextCaption = trigger.getAttribute("data-image-caption") ?? "";

        if (!nextSrc) {
          return;
        }

        if (image.getAttribute("src") === nextSrc) {
          scrollThumbIntoView(trigger);
          return;
        }

        image.src = nextSrc;
        image.alt = nextAlt;

        if (nextWidth) {
          image.width = Number(nextWidth);
        }

        if (nextHeight) {
          image.height = Number(nextHeight);
        }

        if (title) {
          title.textContent = nextTitle;
        }

        if (caption) {
          caption.textContent = nextCaption;
        }

        triggers.forEach((item) => {
          const isCurrent = item === trigger;
          item.classList.toggle("is-active", isCurrent);
          item.setAttribute("aria-pressed", String(isCurrent));
        });

        scrollThumbIntoView(trigger);
      });
    });

    const activeTrigger = triggers.find((trigger) =>
      trigger.classList.contains("is-active"),
    );

    if (activeTrigger) {
      requestAnimationFrame(() => scrollThumbIntoView(activeTrigger, "auto"));
    }
  });
};

initWorkGalleries();
