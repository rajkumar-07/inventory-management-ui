import { cloneDeep } from "lodash";
import { useState } from "react";
function GetProducts(){

    const tempArray=[
        {
          id:1,
          name: "Product 1",
          description: "Description for Product 1",
          quantity: 5,
          price: 10.99,
          
        },
        {
          id:2,
          name: "Product 2",
          description: "Description for Product 2",
          quantity: 8,
          price: 19.99,
          
        },
        {
          id:3,
          name: "Product 3",
          description: "Description for Product 3",
          quantity: 12,
          price: 7.49,
          
        },
        {
          id:4,
          name: "Product 4",
          description: "Description for Product 4",
          quantity: 2,
          price: 24.95,
          
        },
        {
          id:5,
          name: "Product 5",
          description: "Description for Product 5",
          quantity: 20,
          price: 5.99,
        },
        {
          id:6,
          name: "Product 6",
          description: "Description for Product 6",
          quantity: 15,
          price: 14.50,
          
        },
        {
          id:7,
          name: "Product 7",
          description: "Description for Product 7",
          quantity: 10,
          price: 9.75,
          
        },
        {
          id:8,
          name: "Product 8",
          description: "Description for Product 8",
          quantity: 3,
          price: 29.99,
        },
        {
          id:9,
          name: "Product 9",
          description: "Description for Product 9",
          quantity: 18,
          price: 8.25,
          
        },
        {
          id:10,
          name: "Product 10",
          description: "Description for Product 10",
          quantity: 6,
          price: 12.00,
         
        }];
        
  const [products, setProducts] = useState(cloneDeep(tempArray));

  function handleEdit(){

  }

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
              <td>
                <input
                  value={data.name}
                  readonly
                />
              </td>
              <td>
                <input
                  value={data.description}
                  readonly
                />
              </td>
              <td>
                <input
                  value={data.quantity}
                  readonly
                />
              </td>
              <td>
                <input
                  value={data.price}
                  readonly
                />
              </td>
              <td>
                <button onClick={handleEdit(data)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default GetProducts;