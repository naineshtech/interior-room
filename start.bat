@echo off
echo Starting Premium Architecture & Decor Website...
echo.
echo Server will be available at: http://localhost:3000
echo Press Ctrl+C to stop the server
echo.
cd /d "%~dp0"
node_modules\.bin\vite
