import { useEffect, useRef } from "react";

type Options = {
    threshold?: number;
    rootMargin?: string;
};

export function useReveal<T extends HTMLElement>(options?: Options) {
    const ref = useRef<T | null>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("is-visible");
                    obs.unobserve(el); // مرة وحدة باش ميبقاش يعاود
                }
            },
            {
                threshold: options?.threshold ?? 0.15,
                rootMargin: options?.rootMargin ?? "0px 0px -10% 0px",
            }
        );

        obs.observe(el);
        return () => obs.disconnect();
    }, [options?.threshold, options?.rootMargin]);

    return ref;
}
