call npx create-react-app %1 --template cra-template-pwa
call SET CurrentDir="%~dp0"
call COPY %CurrentDir%\config-overrides.js .\%1
call CD %1
call del /f .gitignore
call npm install react-app-rewired @wasm-tool/wasm-pack-plugin --save-dev
call npm i -g wasm-pack --unsafe-perm=true
call CD src 
call wasm-pack new native
call CD .\native 
call del /f .gitignore
call rmdir /S .git