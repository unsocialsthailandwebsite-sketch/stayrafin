#!/bin/bash

blog_file="src/data/blog-data.ts"
urls=$(grep -oE "https://[a-zA-Z0-9./?=&_-]+" "$blog_file" | sort -u)

echo "Auditing URLs using curl..."
failed=0

for url in $urls; do
    # Skip any trailing characters like quotes, commas, semicolons
    url=$(echo "$url" | sed -E 's/[",;>].*//')

    # Check if url contains unsplash, sanity or muscache
    if [[ "$url" == *"unsplash.com"* || "$url" == *"sanity.io"* || "$url" == *"muscache.com"* ]]; then
        echo -n "Checking: $url... "
        status=$(curl -o /dev/null -s -w "%{http_code}" -m 5 "$url")
        if [ "$status" -eq 200 ] || [ "$status" -eq 301 ] || [ "$status" -eq 302 ]; then
            echo "✅ $status"
        else
            echo "❌ $status"
            failed=$((failed + 1))
        fi
    fi
done

if [ "$failed" -gt 0 ]; then
    echo "Audit failed! $failed URLs returned non-200 status."
    exit 1
else
    echo "Audit passed! All URLs returned 200 OK."
    exit 0
fi
