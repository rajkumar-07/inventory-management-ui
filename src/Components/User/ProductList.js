import { useEffect } from "react";
import ProductCard from "./ProductCard";

function ProductList(){
    const getProductAPI = async () => {
        try {
          const response = await fetch("http://localhost:8080/get-products?pageNo=1&limit=10", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          });
    
          if (response.ok) {
            const data = await response.json();
            console.log(data); // Display the response data
          } else {
            console.log("Response not okay:", response.status, response.statusText);
          }
        } catch (error) {
          console.log("Error:", error);
        }
      }
    useEffect(()=>{
        getProductAPI();
    })
    return(
        <div>
            <ProductCard/>
        </div>
    );
}

export default ProductList;