@echo off
setlocal
cd /d "%~dp0"
echo.
echo =======================================
echo  Dibya Joy Paul - Portfolio
 echo =======================================
echo.
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js was not found. Install Node.js 22 from https://nodejs.org/
  pause
  exit /b 1
)
if not exist "node_modules" (
  echo Installing dependencies - this may take a minute...
  call npm install
  if errorlevel 1 (
    echo Dependency installation failed.
    pause
    exit /b 1
  )
)
echo Starting site at http://127.0.0.1:5173/
echo Press Ctrl+C to stop the server.
call npm run dev
pause
