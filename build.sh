#!/bin/bash
@echo off
git add src/
node build.js
sleep 5
git add build/
git commit -m "source update"
git push main main
git checkout site
git checkout main build/
git checkout main index.html
git checkout main sheet/
git commit -m "build"
git push main site
git checkout main