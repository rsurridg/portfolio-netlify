"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import styles from "../../styles/Gallery.module.css";

/** Local images shipped with the site (under /public/gallery). No looping. */
const LOCAL_IMAGES = [
  { src: "/public/images/traditional/aleccharcoal.jpg", caption: "Desert light" },
  { src: "/gallery/02.jpg", caption: "Old barn" },
  { src: "/gallery/03.jpg", caption: "Trail markers" },
  { src: "/gallery/04.jpg", caption: "Evening ride" },
  { src: "/gallery/05.jpg", caption: "Studio still" },
  { src: "/gallery/06.jpg", caption: "Coastal wind" },
  { src: "/gallery/07.jpg", caption: "Cypress bend" },
  { src: "/gallery/08.jpg", caption: "Workshop bench" },
  { src: "/gallery/09.jpg", caption: "Quiet road" },
  { src: "/gallery/10.jpg", caption: "Morning fence" },
  // …add more and the scroller will naturally stop at the end.
];

const PAGE_SIZE = 16; // tweak as you like

export default function GalleryPage() {
  const [items, setItems] = useState(() => LOCAL_IMAGES.slice(0, PAGE_SIZE));
  const [cursor, setCursor] = useState(PAGE_SIZE);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(LOCAL_IMAGES.length > PAGE_SIZE);

  const sentinelRef = useRef(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadingRef = useRef(false); // guard against double-trigger

  const loadMore = useCallback(async () => {
    if (loadingRef.current || !hasMore) return;
    loadingRef.current = true;
    setIsLoading(true);

    // simulate async; remove if you want instant appends
    await new Promise((r) => setTimeout(r, 150));

    const nextCursor = Math.min(cursor + PAGE_SIZE, LOCAL_IMAGES.length);
    const slice = LOCAL_IMAGES.slice(cursor, nextCursor);

    setItems((prev) => [...prev, ...slice]);
    setCursor(nextCursor);

    if (nextCursor >= LOCAL_IMAGES.length) {
      setHasMore(false);
      // optional: stop observing to avoid extra work
      if (observerRef.current && sentinelRef.current) {
        observerRef.current.unobserve(sentinelRef.current);
      }
    }

    setIsLoading(false);
    loadingRef.current = false;
  }, [cursor, hasMore]);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node || !hasMore) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoading) loadMore();
      },
      { root: null, rootMargin: "600px 0px", threshold: 0 }
    );
    observerRef.current = io;
    io.observe(node);
    return () => io.disconnect();
  }, [loadMore, isLoading, hasMore]);

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Infinite Scroll Gallery</h1>

      <section className={styles.masonry} aria-label="Image gallery">
        {items.map((item, i) => (
          <figure className={styles.tile} key={`${item.src}-${i}`}>
            <img
              src={item.src}
              alt={item.caption}
              className={styles.img}
              loading="lazy"
              decoding="async"
            />
            <figcaption className={styles.caption}>
              <span className={styles.captionText}>{item.caption}</span>
            </figcaption>
          </figure>
        ))}
      </section>

      <div ref={sentinelRef} className={styles.sentinel} aria-hidden="true" />

      <div className={styles.statusRow}>
        {isLoading && hasMore && <span className={styles.status}>Loading…</span>}
        {!hasMore && <span className={styles.status}>End of gallery</span>}
      </div>
    </main>
  );
}
