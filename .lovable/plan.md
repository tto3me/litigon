# Four-language Litigon website

## Goal
Add English, Arabic, French, and Simplified Chinese to the full public Litigon website, with a clear language control in the top navigation.

## What will change
- Add a compact language selector to desktop and mobile navigation using native language names: English, العربية, Français, 中文.
- Remember the visitor’s selection between pages and future visits.
- Translate public navigation, buttons, page headings, descriptions, service/project copy, partner section, contact form, FAQs, newsroom interface, and legal-page interface.
- Translate Litigon’s existing starter news posts where localized versions are available; preserve newly authored post content in its original language until a localized version is supplied.
- Update page titles and descriptions for the selected language.
- Switch the document to right-to-left layout for Arabic while keeping English, French, and Chinese left-to-right.
- Keep URLs, admin/dashboard tools, authentication flows, brand names, partner names, and project photography unchanged.

## Technical details
- Create a lightweight React language provider and typed translation dictionaries, without adding a third-party translation service.
- Store the locale in browser storage and synchronize the document `lang` and `dir` attributes.
- Use translation keys in shared sections and public pages so language changes update immediately without a reload.
- Keep forms and validation functional in every language, including translated labels, feedback, and accessibility text.
- Use CSS logical alignment and directional icon handling where Arabic requires it.

## Verification
- Test switching all four languages on desktop and mobile.
- Check Home, About, Services, Projects, Partners, Blog, article, Contact, and legal pages.
- Confirm Arabic direction, menu behavior, form validation, remembered selection, and no layout overflow.
- Confirm the app builds without errors.
