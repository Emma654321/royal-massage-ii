# Royal Massage II — Website

A one-page site for **Royal Massage II**, 523 E St, Marysville, CA 95901.

## View the site

Open `index.html` in a browser, or run a local server:

```bash
cd royal-massage-ii
python3 -m http.server 8000
```

Then visit **http://localhost:8000**.

## Customize

1. **Phone number** — In `index.html`, search for `(530) 555-1234` and replace with your real business number (in both the `href="tel:..."` and the visible text).

2. **Hours** — In the “Visit Us” section, replace “Please call for current hours and appointments.” with your actual hours, or add a simple list (e.g. “Mon–Fri 9am–6pm”).

3. **Google Map** — For a proper embedded map:
   - Go to [Google Maps](https://maps.google.com), search for **523 E St, Marysville, CA 95901**.
   - Click **Share** → **Embed a map**.
   - Copy the iframe code and replace the existing `<iframe>...</iframe>` in the “Visit Us” section.

4. **Services / pricing** — Edit the service cards and add pricing or a “Call for pricing” line as needed.

## Files

- `index.html` — Page structure and content
- `styles.css` — Layout and styling

No build step or dependencies; plain HTML and CSS.
