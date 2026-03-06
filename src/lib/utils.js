/**
 * Utility for merging class names (compatible with MagicUI/shadcn)
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
