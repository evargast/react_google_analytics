#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

echo 'https://evargast.github.io/' > CNAME

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:react-ga/react-ga.git master:gh-pages

cd -