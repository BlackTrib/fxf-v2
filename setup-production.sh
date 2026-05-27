#!/bin/bash

echo "🚀 FXF Web Hosting - Production Setup"
echo "======================================"
echo ""

# Verifică dacă suntem în directorul corect
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json nu găsit"
    echo "Execută scriptul din directorul proiectului"
    exit 1
fi

echo "✓ Directorul corect detectat"
echo ""

# Verific dacă node_modules există
if [ ! -d "node_modules" ]; then
    echo "📦 Instalez dependențe..."
    
    if command -v pnpm &> /dev/null; then
        echo "Folosesc pnpm..."
        pnpm install --frozen-lockfile
    elif command -v npm &> /dev/null; then
        echo "Folosesc npm..."
        npm install --frozen-lockfile
    else
        echo "❌ Node.js nu este instalat"
        exit 1
    fi
    
    echo "✓ Dependențe instalate"
else
    echo "✓ Dependențe deja instalate"
fi

echo ""
echo "🔨 Build de producție..."
npm run build || pnpm build

if [ $? -eq 0 ]; then
    echo "✓ Build reușit!"
    echo ""
    echo "📊 Informații build:"
    du -sh .next
    du -sh node_modules
    echo ""
    echo "🎉 Gata pentru producție!"
    echo ""
    echo "Pași următori:"
    echo "1. Comprimă cu: tar -czf fxf-hosting.tar.gz .next public package.json node_modules"
    echo "2. Upload în public_html"
    echo "3. Rulează: npm start (sau pnpm start)"
    echo ""
else
    echo "❌ Build-ul a eșuat"
    exit 1
fi
