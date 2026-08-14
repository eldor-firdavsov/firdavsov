/** Shared motion tokens — keep animations consistent site-wide. */
export const EASE = [0.22, 1, 0.36, 1] as const;

export const TRANSITION = {
  soft: { duration: 0.7, ease: EASE },
  reveal: { duration: 0.85, ease: EASE },
  quick: { duration: 0.35, ease: EASE },
  hover: { duration: 0.5, ease: EASE },
} as const;

export const VIEWPORT = {
  once: true,
  margin: "-10% 0px",
  amount: 0.2,
} as const;
