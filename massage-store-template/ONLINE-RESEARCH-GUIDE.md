# How to Find Info and Pictures Online for Any Massage Store

Use this guide to fill in **config.js** for any massage business. Everything below was used for **Royal Massage II** (523 E St, Marysville, CA) and works the same way for other stores.

---

## 1. Where to Find Business Information

Search the web for: **`"[Business Name]" [Street] [City] [State]`**

Example: `Royal Massage II 523 E St Marysville CA`

### Best sources (what to copy)

| What you need     | Where to find it |
|-------------------|------------------|
| **Phone**         | Yahoo Local, BestProsInTown, Google Maps, MapQuest, Yelp |
| **Hours**         | Same sites — often listed as "Mon–Sun 9AM–9:30PM" or per day |
| **Address**       | Any listing; use street, city, state, zip for `address` in config |
| **Description**   | Yahoo Local and Google often have a 1–2 sentence blurb — copy into `description` |
| **Services**      | Listing pages, e.g. "Deep Tissue, Swedish, Hot Stone" — turn each into `{ name, description }` in config |
| **Amenities**     | BestProsInTown "Tips" (e.g. "accepts credit cards, free wi-fi, bike parking") → `amenities` array |
| **Cross streets** | Yahoo Local "Cross Streets" → `crossStreets` |

### Direct links to try (replace with the store’s city/name)

- **Yahoo Local:** `https://local.yahoo.com/` → search business name + city  
- **BestProsInTown:** `https://www.bestprosintown.com/` → search by city, then business  
- **Google Maps:** `https://www.google.com/maps` → search full address  
- **MapQuest:** `https://www.mapquest.com/` → search business name + city  
- **Yelp:** `https://www.yelp.com/` → search business name + city  

Copy **phone**, **hours**, **description**, and **services** from whichever listing is most complete.

---

## 2. Where to Find Pictures

### Option A: Photos from listing sites (real photos of the store)

- **BestProsInTown**  
  - Open the business page → look for "Photos" or "View All Photos".  
  - You often can’t hotlink their images, so in config use:  
    - `photosGalleryUrl` = link to their photo gallery  
    - `photosGalleryLabel` = e.g. `"View 16 photos on BestProsInTown"`  
  - The template will show a “View photos on BestProsInTown” link.

- **Google Maps**  
  - Search the business → open the listing → scroll to “Photos”.  
  - To get an embeddable map (with pin): click **Share** → **Embed a map** → copy the `<iframe>` `src` and replace the template’s map iframe `src` if you want the official embed.

- **Yelp**  
  - Business page → “Photos” tab. Use their gallery link in a similar way (e.g. add a `yelpPhotosUrl` and link to it from your page).

### Option B: Free stock photos (for hero and gallery)

Use these so the site has strong imagery even when the store has few photos online.

- **Unsplash** (free, no attribution required): https://unsplash.com  
  - Search: **massage spa**, **massage room**, **spa relaxation**, **wellness massage**  
  - Click a photo → right‑click → “Copy image address” or use their “Download” and then host the image yourself.  
  - For direct use, use the “Share” / embed link. Unsplash URLs look like:  
    `https://images.unsplash.com/photo-XXXXX?w=800&q=80`

- **Pexels** (free): https://www.pexels.com  
  - Same idea: search **spa**, **massage**, **relaxation**  
  - Copy image URL or download and host.

Put the URLs into config:

- **Hero image:** `heroImageUrl` = one strong spa/massage image (e.g. from Unsplash).  
- **Gallery:** `galleryImages` = array of 3–6 image URLs (mix of room, hands, relaxation).

---

## 3. Reviews and Social Proof

- **BestProsInTown** often shows “Reviews (7)” or similar — use that number for `reviewCount` and the review page URL for `reviewSiteUrl`; set `reviewSiteName` to `"BestProsInTown"`.  
- **Yelp:** If the store has a Yelp page, add the business URL to `links.yelp` and optionally show “X reviews on Yelp” in a similar way.  
- **Google:** Add `links.googleMaps` to the store’s Google Maps link so “Get Directions” and “Open in Google Maps” use the real listing.

---

## 4. Filling config.js for a New Store

1. **Duplicate the template folder** and rename it (e.g. `healing-touch-massage`).
2. **Open `config.js`** and replace every value using the table below.

| Config field          | Where it came from (example) |
|------------------------|-----------------------------|
| `name`                | Exact business name from listings |
| `tagline`             | Your own or from description |
| `address`             | street, city, state, zip from any listing |
| `phone`               | From Yahoo / BestProsInTown / Google |
| `crossStreets`        | Yahoo “Cross Streets” or similar |
| `hours`               | List each day or one string from listing |
| `description`         | Yahoo or Google short blurb |
| `services`            | From listing; add short descriptions if missing |
| `amenities`           | BestProsInTown “Tips” or listing bullets |
| `links.bestProsInTown`| URL of their BestProsInTown page |
| `links.googleMaps`    | Google Maps search URL for the address |
| `reviewCount`         | Number shown on BestProsInTown or Yelp |
| `reviewSiteUrl`       | Link to the reviews page |
| `reviewSiteName`      | e.g. `"BestProsInTown"` or `"Yelp"` |
| `photosGalleryUrl`    | BestProsInTown (or other) photo gallery link |
| `photosGalleryLabel`  | e.g. `"View 16 photos on BestProsInTown"` |
| `heroImageUrl`        | One Unsplash/Pexels (or your) image URL |
| `galleryImages`       | Array of 3–6 image URLs |

3. **Save** and open `index.html` in a browser (or use a local server). The page will show the new store’s info, hours, services, photos section, map, and contact.

---

## 5. Example: What We Used for Royal Massage II

- **Phone:** (530) 645-7221 — from Yahoo Local / BestProsInTown  
- **Hours:** Mon–Sun 9:00 AM – 9:30 PM — from same  
- **Description:** Yahoo Local blurb (“Experience the ultimate relaxation…”)  
- **Services:** Deep Tissue, Swedish, Hot Stone (and we added Sports & Recovery) — from listings  
- **Amenities:** BestProsInTown tips → accepts credit cards, free Wi‑Fi, bike parking  
- **Cross streets:** “Between 6th St and 5th St” — Yahoo Local  
- **Reviews:** 7 reviews on BestProsInTown — from their page  
- **Photos:** 16 photos on BestProsInTown — linked via `photosGalleryUrl`  
- **Hero/gallery images:** Unsplash spa/massage photos (free to use)  

All of this is already in the template’s **config.js** so you can use it as a reference for other massage stores.
