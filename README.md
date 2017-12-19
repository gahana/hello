# Overview
A simple Edge proxy that says hello


# Deploy Proxy

```sh
cd hello
$ mvn install -Pedge -Dusername=$EDGE_USERNAME -Dpassword=$EDGE_PASSWORD -Dorg=$EDGE_ORG -Denv=$EDGE_ENV
```

# Test

```bash
$ cd test
$ npm install
$ ./node_modules/.bin/cucumberjs
```
