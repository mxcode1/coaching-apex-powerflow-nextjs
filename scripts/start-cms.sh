#!/bin/bash

# PowerFlow CMS Startup Script
# Automatically checks for content and starts Sanity Studio

echo "🎯 PowerFlow CMS - Starting Studio..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Are you in the project root?"
    exit 1
fi

# Check if Next.js is running (required for API routes)
if ! curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 | grep -q "200\|404"; then
    echo "⚠️  Next.js server not detected on port 3000"
    echo "💡 Run 'npm run dev' first to start the Next.js server"
    echo "🔄 Starting Sanity Studio anyway..."
else
    echo "✅ Next.js server detected - API routes available"
fi

# Run content check if Node.js script exists
if [ -f "scripts/startup-import.js" ]; then
    echo "🔍 Running content check..."
    node scripts/startup-import.js
else
    echo "💡 Content check script not found - manual import available via 'npm run import-content'"
fi

echo "🚀 Starting Sanity Studio on port 3333..."
echo "🎨 Dark mode enabled by default"
echo "📝 Auto-import will run when Studio loads"

# Start Sanity Studio
npx sanity dev --port 3333