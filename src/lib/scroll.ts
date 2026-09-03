export function scrollToId(id: string) {
  const element = document.getElementById(id);
  if (!element) return;

  const headerOffset = 88;
  const top = element.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({ top, behavior: "smooth" });
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
