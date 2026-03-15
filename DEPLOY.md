# Deploy to GitHub Pages (https://royal-massage-ii-marysville.com)

## 1. Create the GitHub repository

1. Go to [github.com/new](https://github.com/new).
2. **Repository name:** `royal-massage-ii` (or any name you prefer).
3. Choose **Public**.
4. Do **not** add a README, .gitignore, or license (you already have them).
5. Click **Create repository**.

## 2. Push your code

In the project folder, run (replace `YOUR_USERNAME` with your GitHub username):

```bash
git remote add origin https://github.com/YOUR_USERNAME/royal-massage-ii.git
git branch -M main
git push -u origin main
```

If you use SSH:

```bash
git remote add origin git@github.com:YOUR_USERNAME/royal-massage-ii.git
git branch -M main
git push -u origin main
```

## 3. Turn on GitHub Pages

1. On GitHub, open your repo → **Settings** → **Pages** (left sidebar).
2. Under **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `main` / **Folder:** `/ (root)`
3. Click **Save**.

Your site will be live at `https://YOUR_USERNAME.github.io/royal-massage-ii/` in a minute or two.

## 4. Use your custom domain (royal-massage-ii-marysville.com)

### On GitHub

1. Still in **Settings** → **Pages**.
2. Under **Custom domain**, type: `royal-massage-ii-marysville.com`
3. Click **Save**.
4. Wait for DNS checks. If you see a warning, complete the DNS step below first, then come back and click **Save** again.

The repo already contains a **CNAME** file with `royal-massage-ii-marysville.com`, so GitHub Pages will serve the site on that domain once DNS is set.

### At your domain registrar

Add these records where you bought `royal-massage-ii-marysville.com` (e.g. Namecheap, GoDaddy, Cloudflare):

**Option A – A records (recommended)**  
Add 4 A records for the root domain:

| Type | Name/Host | Value        |
|------|-----------|--------------|
| A    | @         | 185.199.108.153 |
| A    | @         | 185.199.109.153 |
| A    | @         | 185.199.110.153 |
| A    | @         | 185.199.111.153 |

**Option B – CNAME**  
One record:

| Type  | Name/Host | Value              |
|-------|-----------|--------------------|
| CNAME | @ or www  | YOUR_USERNAME.github.io |

(If your registrar doesn’t allow CNAME on the root (@), use **Option A**.)

**Optional – www redirect**  
To redirect `www.royal-massage-ii-marysville.com` to `royal-massage-ii-marysville.com`:

- Add a CNAME: `www` → `YOUR_USERNAME.github.io`
- In GitHub **Settings** → **Pages** → **Custom domain**, you can add `www` and choose “Redirect to apex” or keep only the apex domain; the CNAME file currently uses the apex.

## 5. HTTPS

After DNS has propagated (often 5–60 minutes), GitHub will offer **Enforce HTTPS** under **Settings** → **Pages**. Check it so the site is only served over https://royal-massage-ii-marysville.com.

---

**Summary**

- Code is ready to push; `CNAME` is set for `royal-massage-ii-marysville.com`.
- Create repo → push → enable Pages from `main` → set custom domain on GitHub → add A or CNAME records at your registrar → enforce HTTPS when available.
