/**
 * Menu principale. I titoli riprendono quelli del template di riferimento
 * e verranno definiti in seguito.
 */
export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Room Booking", href: "/room-booking" },
  { label: "Gallery", href: "/gallery" },
  {
    label: "Blog",
    href: "/blog",
    children: [{ label: "Blog Standard", href: "/blog/blog-standard" }],
  },
  { label: "Contact", href: "/contact" },
];

/** Elenco piatto di tutte le pagine (usato nel footer). */
export const allPages: NavItem[] = mainNav.flatMap((item) => [
  { label: item.label, href: item.href },
  ...(item.children ?? []),
]);
