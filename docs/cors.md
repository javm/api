# cross-origin resource sharing

*Generated: Fri Sep 19 2014 14:38:01 GMT+0100 (BST)*
## Request
```javascript
{
  "protocol": "http:",
  "host": "localhost",
  "method": "GET",
  "port": 3100,
  "path": "/"
}
```

## Response
```javascript
Status: 200
{
  "x-powered-by": "mapzen",
  "charset": "utf8",
  "cache-control": "public,max-age=60",
  "server": "Pelias/0.0.0",
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET",
  "access-control-allow-headers": "X-Requested-With,content-type",
  "access-control-allow-credentials": "true",
  "content-type": "application/json; charset=utf-8",
  "content-length": "50",
  "etag": "W/\"32-85536434\"",
  "date": "Fri, 19 Sep 2014 13:38:01 GMT",
  "connection": "close"
}
```
```javascript
{
  "name": "pelias-api",
  "version": {
    "number": "0.0.0"
  }
}
```

## Tests

### ✓ access control headers correctly set
```javascript
response.should.have.header 'Access-Control-Allow-Origin','*'
response.should.have.header 'Access-Control-Allow-Methods','GET'
response.should.have.header 'Access-Control-Allow-Headers','X-Requested-With,content-type'
response.should.have.header 'Access-Control-Allow-Credentials','true'
```

