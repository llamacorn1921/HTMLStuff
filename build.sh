#!/bin/bash
@echo off
git add src/
node build.js
git add build/
git commit -m "source update"
git push main main
git checkout site
git checkout main build/ index.html sheet/
git commit -m "build"
git push main site
git checkout main