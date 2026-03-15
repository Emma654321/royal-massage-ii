# Massage Store Website Template

One template, any massage business. Edit **config.js** with the store’s info and the site updates automatically. All data can be found online (see **ONLINE-RESEARCH-GUIDE.md**).

## Quick start

1. **For a new store:** Copy the whole `massage-store-template` folder and rename it (e.g. `sunshine-massage`).
2. **Edit `config.js`** with that store’s name, address, phone, hours, services, description, amenities, and links. Use the research guide to find everything from Yahoo Local, BestProsInTown, Google, etc.
3. **Add pictures:** Set `heroImageUrl` and/or `galleryImages` (Unsplash/Pexels URLs) or link to the store’s photo gallery with `photosGalleryUrl` and `photosGalleryLabel`.
4. Open **index.html** in a browser (or run `python3 -m http.server 8000` and visit http://localhost:8000).

## Files

| File | Purpose |
|------|--------|
| **config.js** | All store data — the only file you need to edit for a new store |
| **index.html** | Page structure; reads config and renders content |
| **styles.css** | Layout and styling (same for every store) |
| **ONLINE-RESEARCH-GUIDE.md** | Where to find business info and photos online for any massage store |

## Example

The default **config.js** is filled for **Royal Massage II** (523 E St, Marysville, CA) using real data from Yahoo Local, BestProsInTown, and Unsplash. Use it as a reference when filling config for other stores.
