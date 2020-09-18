# How to create typescript config file?

```
tsc --init
```

> To watch all changes in the ./src folder and automatically build and produce respective js files:

```
tsc -w
```

> To execute builded js files after each change we can use what we used in nodejs projects. First we need to install 2 npm packs:

```
npm init -y
npm install nodemon concurrently
```
