@echo off

rem Navigate to your Git repository directory
cd /d C:\brettaio\webpack

rem Git commands
git add .
git commit -m "This Commit Is Proudly Brought To You By bretta.io || %date% %time%"
git push -u origin main

rem Exit the script
exit /b 0
