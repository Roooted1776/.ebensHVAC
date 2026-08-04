# EBens demo — design & build notes

See root [README.md](../README.md) for creative direction, sitemap, tokens, and assumptions.

## File map

```
web/
  src/
    app/
      layout.tsx          # fonts, chrome, metadata
      page.tsx            # homepage composition
      book/page.tsx       # booking conversion page
      globals.css         # design tokens + surfaces
    components/
      ui/                 # Button, Reveal, SectionHeading
      sections/           # page sections + BookingForm
    lib/
      site.ts             # business content + copy
      cn.ts
```
