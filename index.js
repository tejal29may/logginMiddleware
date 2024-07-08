const express=require("express");

const app=express();
app.use(express.json());

let products = {
    'Gold': "MMTC PAP 999.9 fine Gold (10gm)",
    'Silver': "MMTC PAP 999.9 fine Gold (250gm)",
    "TermInsurance": "LIC Term Insurance",
    "EmergencyFund": "₹50 Lakhs"
  }


app.post("/getusers",(req,res)=>{
    const dummydata={
        success:true,
        message:"user dispalyed"
    };
    res.json(dummydata)
})

app.get("/users",(req,res)=>{
    res.json(products)
})


app.listen(8080,()=>{
    console.log("Your express ap is running on port 8080 successfully");
})


