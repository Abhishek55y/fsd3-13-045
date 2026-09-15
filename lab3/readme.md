<b>npm run dev </b>
-start-> it will excute the app on depolyment
-dev -> it will start server in development phase (only for developer)
-  res: it will rwturn contents(json/html/plain)to user/client
-req: it will retrive the information fro client to the server 
-server send also statusCodes to the client ,that indicates the err
## Status Codes 
-200->ok
-201->Created 
-400->Bad Request 
-401->unoutheriged 
403->forbidden
404->not found
500->Internal

## Content Type
-text/plain
-text/html
-application/json
-text/css
 the content type and status code can be send back to client by two ways
 1. res.writeHead
 2. res.setHeader
 3. res.statusCode

 ##  response as html content
 1. res.end   
 end("any html contest/key")
 2. html file
 . read by createRead stream
 .pipe with
 2. html content 
 send any html tags/content by using
 res.end('<any html tag>')
 ## JSON (java script object notation)
 - server returns data only not html contents because html content will be return by frontent developer .
 - The data is in JSON format 
 - JSON always stores data in keyValue pair inclosed by {} array can be store by [] 
  -one pair of {} will represent on object and its properties will be seprated by 
  ## JSON
  ```
  {
    id: 1,
    name:'Mobile',
    price:25000,
    rating:4.5
    review:200
  }
  ```
