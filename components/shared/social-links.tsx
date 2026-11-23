import { CodeXml } from "lucide-react";

const socialProfiles = [
  {
    label: "GitHub",
    href: "https://github.com/socialabdulmantawil-abz",
    Icon: CodeXml,
  },
] as const;

export function SocialLinks() {
  return (
    <nav aria-label="Social profiles" className="flex flex-wrap gap-3">
      {socialProfiles.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md px-2 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"
        >
          <Icon aria-hidden="true" className="size-4" />
          {label}
        </a>
      ))}
    </nav>
  );
}
