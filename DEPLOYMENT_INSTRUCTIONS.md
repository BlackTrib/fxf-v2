# Instrucțiuni Deployment FXF Web Hosting

## Build-ul este gata pentru producție! 🚀

### Fișier Archive
- **Nume**: `fxf-hosting-production.tar.gz`
- **Mărime**: ~12MB
- **Conținut**: Build optimizat Next.js + Assets statice

---

## Pași pentru Upload în public_html

### 1. Upload Archive
```bash
# Prin FTP/SFTP:
scp fxf-hosting-production.tar.gz user@server:/home/username/public_html/

# Sau prin cPanel File Manager:
# - Upload fxf-hosting-production.tar.gz în public_html
```

### 2. Decompresare pe Server
```bash
cd /home/username/public_html
tar -xzf fxf-hosting-production.tar.gz
rm fxf-hosting-production.tar.gz
```

### 3. Instalare Dependențe (dacă nu sunt deja)
```bash
# Dacă ai pnpm
pnpm install --frozen-lockfile

# SAU dacă ai npm
npm install --frozen-lockfile

# SAU dacă ai npm și vrei să convertești
npm install
```

### 4. Pornire Server
```bash
# Cu Node.js/npm
npm start

# SAU cu pnpm
pnpm start

# SAU cu PM2 (recomandare pentru productie)
pm2 start "pnpm start" --name fxf-hosting
```

### 5. Configurare Reverse Proxy (cPanel/Apache)
```apache
# Adăugă în .htaccess din public_html:
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTP:Upgrade} websocket [NC]
  RewriteCond %{HTTP:Connection} upgrade [NC]
  RewriteRule ^/?(.*) "ws://127.0.0.1:3000/$1" [P,L]
  
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.*)$ http://127.0.0.1:3000/$1 [P,L]
</IfModule>
```

---

## Informații Build

**Versiune Next.js**: 16.2.0  
**TypeScript**: Activat  
**CSS-in-JS**: Tailwind CSS v4  
**Build Output**: `.next/` directory

### Rute Pre-generate (Static)
- ✓ 20 pagini generate static în build-time
- ✓ Sitemap.xml auto-generat
- ✓ Robots.txt configurat
- ✓ SEO optimizat (meta tags, H1, keywords)

### Optimizări
- Imagini: Optimizate automat cu Next.js Image
- CSS: Purged și minified cu Tailwind
- JavaScript: Code-split și tree-shaked automat
- Font: System fonts (fără CDN slowdown)

---

## Verificare Post-Deploy

1. **Testează paginile principale**:
   - https://tumdomen.ro
   - https://tumdomen.ro/gazduire/web
   - https://tumdomen.ro/servere/vps
   - https://tumdomen.ro/despre
   - https://tumdomen.ro/contact

2. **Verifica Google Search Console**:
   - Submit sitemap.xml
   - Check index status
   - Monitor crawl errors

3. **Verifica performance**:
   - Google PageSpeed Insights
   - GTmetrix
   - WebPageTest

---

## Probleme Posibile

### Portul 3000 este în uz
```bash
# Schimbă portul în package.json start script:
"start": "next start -p 3001"
```

### Node.js nu este instalat
- Contact-ează hosting-ul pentru Node.js support
- Sau ia contactă cu suport cPanel

### Memory/Resources insuficiente
- Contactează hosting-ul pentru upgrade plan
- Sau folosește Vercel/Netlify hosting gratuit

---

## Contact Support
- Email: support@fxfweb.ro
- Link: https://fxfweb.ro/contact

Succes cu deployment! 🎉
