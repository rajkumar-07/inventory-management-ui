import { cloneDeep } from "lodash";
import { useState, useEffect } from "react";
import { get } from "../../Actions/APIFunctions";
function GetProducts() {
  const tempArray = [
    {
      id: 1,
      name: "Product 1",
      description: "Description for Product 1",
      quantity: 5,
      price: 10.99,
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description for Product 2",
      quantity: 8,
      price: 19.99,
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description for Product 3",
      quantity: 12,
      price: 7.49,
    },
    {
      id: 4,
      name: "Product 4",
      description: "Description for Product 4",
      quantity: 2,
      price: 24.95,
    },
    {
      id: 5,
      name: "Product 5",
      description: "Description for Product 5",
      quantity: 20,
      price: 5.99,
    },
    {
      id: 6,
      name: "Product 6",
      description: "Description for Product 6",
      quantity: 15,
      price: 14.5,
    },
    {
      id: 7,
      name: "Product 7",
      description: "Description for Product 7",
      quantity: 10,
      price: 9.75,
    },
    {
      id: 8,
      name: "Product 8",
      description: "Description for Product 8",
      quantity: 3,
      price: 29.99,
    },
    {
      id: 9,
      name: "Product 9",
      description: "Description for Product 9",
      quantity: 18,
      price: 8.25,
    },
    {
      id: 10,
      name: "Product 10",
      description: "Description for Product 10",
      quantity: 6,
      price: 12.0,
    },
  ];

  const [products, setProducts] = useState(cloneDeep(tempArray));
  const [productCount, setProductCount] = useState(0);
  async function productList() {
    const response = await get("http://localhost:8080/get-product-count");
    const data = await response.text(); // Use response.text() to get the plain value
    setProductCount(parseInt(data)); // Conv
  }
  useEffect(() => {
    productList();
  },[]);
  useEffect(() => {
    console.log(productCount); // Log the value whenever productCount changes
  }, [productCount]); // Add productCount as a dependency

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.description}</td>
              <td>{data.quantity}</td>
              <td>{data.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetProducts;
