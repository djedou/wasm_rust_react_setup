# wasm_rust_react_setup  
rust for Front-end logic  
react for Front-end presentation

## clone or download this repository
```
git clone git@github.com:djedou/wasm_rust_react_setup.git
```
## switch into windows or linux
```
cd windows
```
## create react app  
```
path_to/setup.bat react_app_name
```
## update scripts in react_app_name/package.json  
```
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "build-native-dev": "wasm-pack build ./src/native --target bundler --out-dir ./build --dev",
    "build-native-release": "wasm-pack build ./src/native --target bundler --out-dir ./build --release",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  }
```
## build rust code when ever needed 
cd react_app_name
npm run build-native-dev
npm run start