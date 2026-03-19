# Fix: "Domain's DNS record could not be retrieved" (InvalidDNSError)

GitHub shows this when it looks up your domain and **doesn’t see the right DNS records**. If your domain is new, it may show this until you add the correct DNS records for `royalmassageii.com`.

---

## Step 1: Use only the apex domain on GitHub (recommended first)

To avoid the **“alternate name improperly configured”** error:

1. Go to your repo → **Settings** → **Pages**.
2. Under **Custom domain**, if you see both `royalmassageii.com` and `www.royalmassageii.com`, **remove the custom domain** (click **Remove**).
3. Type **only**: `royalmassageii.com` (no `www`).
4. Click **Save**.

You can add `www` later once the apex works.

---

## Step 2: Add A records at your DNS provider

Where you manage DNS for **royalmassageii.com** (e.g. Namecheap, GoDaddy, Google Domains, Cloudflare, etc.):

### Add these 4 A records

| Type | Name / Host | Value / Points to | TTL |
|------|-------------|-------------------|-----|
| A | `@` (or leave blank, or “root”) | `185.199.108.153` | 3600 or Auto |
| A | `@` | `185.199.109.153` | 3600 or Auto |
| A | `@` | `185.199.110.153` | 3600 or Auto |
| A | `@` | `185.199.111.153` | 3600 or Auto |

So you are adding **four separate A records**; each has the same “name” (`@` or root) but a **different** IP.

### Registrar-specific hints

- **Namecheap:** Host = `@`, Type = A, Value = each IP (add 4 records).
- **GoDaddy:** Type = A, Name = `@`, Value = each IP.
- **Google Domains:** Type A, Host name `@`, IP = each of the four.
- **Cloudflare:** Add the 4 A records; set proxy to **DNS only** (grey cloud) until the site works. Then you can turn the proxy back on if you want.
- **Other:** “Name” might be `@`, blank, or “apex”/“root” — it must mean “the root domain” (royalmassageii.com).

### Remove conflicting records

- Delete any **existing A or CNAME** for `@`/root that points somewhere else (e.g. parking page, old host).
- If your provider added a default “website” or “redirect” record for the root, remove it.

---

## Step 3: Wait and re-check

- DNS can take **5–60 minutes** (sometimes up to 24 hours).
- Then run this on your machine (or use [dnschecker.org](https://dnschecker.org) for `royalmassageii.com` A record):

```bash
dig royalmassageii.com +noall +answer -t A
```

You should see **four A records** with the four IPs above.

---

## Step 4: Tell GitHub again

1. In **Settings** → **Pages**, under **Custom domain**, click **Save** again (or re-enter `royalmassageii.com` and Save).
2. After DNS is correct, the warning should clear and **Enforce HTTPS** will become available (may take a bit).

---

## Optional: Add www later

After the apex works:

1. At your DNS provider: add a **CNAME** record:  
   **Name:** `www` → **Value:** `YOUR_GITHUB_USERNAME.github.io`  
   (use your real GitHub username; no repo name in the value.)
2. In GitHub Pages you can then add `www.royalmassageii.com` as well; GitHub will redirect between apex and www.

---

## If you use Cloudflare

- Use **DNS only** (grey cloud) for the A records until GitHub validates and the site loads.
- Then you can enable the orange cloud (proxy) if you want; HTTPS will still work once GitHub has issued the certificate.
