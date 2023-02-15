# Pfeifer Music Read Me

## Deployment
---

#### Local
1. Install serve
```bash
    npm install --save-dev serve
```

2. Ensure homepage on package.json is not set

3. Run build command
```bash
    npm build
```

4. Serve (run on port 3000)
```bash
    serve -s build
```

#### Github pages
1. Make sure the following is in package.json
```json
    "homepage": "https://lunadeigs.github.io/pfeifer-music",
```

2. 
```bash
    npm run deploy -- -m "Deployment Notes Here"
```

#### Production
1. Make sure the following is in package.json
```json
    "homepage": "https://pfeifermusic.com",
```