import { products } from "./data.js";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send(`
        <h1>Home Page</h1>
        <a href='/api/products'>Browser products</a>
        

       `);
});
app.get("/api/products",(req,res)=>{
    const item=products.map(
        ({reviews,description,...rest})=>rest,
    );

    res.status(200).json({count:products.length,data:item})
});
//  Query string / request query must be before req parameter or dynamic url
app.get("/api/products/query",(req,res)=>{
    const{search,limit,mp,mr}=req.query;
    console.log("search",search);
    console.log("limit",limit);
    let sortedProducts= [...products] // copy all products
    if(mp){
        sortedProducts=sortedProducts.filter((item)=>item.price<=Number(mp))
    }
    if (mr) {
      sortedProducts = sortedProducts.filter(
        (item) => item.price <= Number(mr),
      );
    }
     if(search){
        sortedProducts=sortedProducts.filter((item)=>item.name.toLowerCase().startsWith(search.toLowerCase()),);
     }
     if(limit){
        sortedProducts=sortedProducts.slice(0,Number(limit))
     }
     if(sortedProducts.length<1){
        res
        .status(200)
        .json({"data":[],msg:'No product matched your search criteria'})
     }
     else{
        res
        .status(200)
        .json({count: sortedProducts.length,data:sortedProducts});
     }
    res.send("Product search page")
});
app.get("/api/products/:id",(req,res)=>{
    const {id}=req.params;
    const p=products.find((item)=>item.id===Number(id));
    if(p)
        res.status(200).json({status:true,data:p})
    else
        res.status(404).json({status:false,msg:`product not found with id:${id}`});
    // res.send(`will show product id: ${id}`);
});
  app.get("api/products/:id/reviews",(req,res)=>{
    res.send("return all review of particular product id")
  });
  app.get("api/products/:id/reviews/:revid",(req,res)=>{
    const {id,revid}=req.params;
    const product=products.find((item)=>item.id===Number(id))
    if(!product){
        res.send(`Product not found with id${id}`);
        return;
    }
    review=product.reviews.map((item)=>item.id===Number(revid));
    if(!review){
        res.send(`invalid review id : $ {revid} for product id & {id}`);
        return;
    }
    return res.status(200).send(review);
  })


//  Query string / request query must be before req parameter or dynamic url
app.use((req, res) => {
  res.status(404).send("route not found");
});

app.listen(3333, () => console.log("prg4 is running"));
