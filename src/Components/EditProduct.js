import { cloneDeep } from "lodash";
import { useState } from "react";
function EditProduct(){

    const tempArray=[
        {
          name: "Product 1",
          description: "Description for Product 1",
          quantity: 5,
          price: 10.99,
          
        },
        {
          name: "Product 2",
          description: "Description for Product 2",
          quantity: 8,
          price: 19.99,
          
        },
        {
          name: "Product 3",
          description: "Description for Product 3",
          quantity: 12,
          price: 7.49,
          
        },
        {
          name: "Product 4",
          description: "Description for Product 4",
          quantity: 2,
          price: 24.95,
          
        },
        {
          name: "Product 5",
          description: "Description for Product 5",
          quantity: 20,
          price: 5.99,
          
        },
        {
          name: "Product 6",
          description: "Description for Product 6",
          quantity: 15,
          price: 14.50,
          
        },
        {
          name: "Product 7",
          description: "Description for Product 7",
          quantity: 10,
          price: 9.75,
          
        },
        {
          name: "Product 8",
          description: "Description for Product 8",
          quantity: 3,
          price: 29.99,
          
        },
        {
          name: "Product 9",
          description: "Description for Product 9",
          quantity: 18,
          price: 8.25,
          
        },
        {
          name: "Product 10",
          description: "Description for Product 10",
          quantity: 6,
          price: 12.00,
         
        }];
        
  const [products, setProducts] = useState(cloneDeep(tempArray));

  const handleDataChange = (index, property, newValue) => {
    const updatedProducts = [...products];
    updatedProducts[index][property] = newValue;
    setProducts(updatedProducts);
  };
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
                  type="text"
                  value={data.name}
                  onChange={(e) => handleDataChange(index, "name", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.description}
                  onChange={(e) =>
                    handleDataChange(index, "description", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={data.quantity}
                  onChange={(e) =>
                    handleDataChange(index, "quantity", parseInt(e.target.value))
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  step="0.01"
                  value={data.price}
                  onChange={(e) =>
                    handleDataChange(index, "price", parseFloat(e.target.value))
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
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
                  type="text"
                  value={data.name}
                  onChange={(e) => handleDataChange(index, "name", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.description}
                  onChange={(e) =>
                    handleDataChange(index, "description", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={data.quantity}
                  onChange={(e) =>
                    handleDataChange(index, "quantity", parseInt(e.target.value))
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  step="0.01"
                  value={data.price}
                  onChange={(e) =>
                    handleDataChange(index, "price", parseFloat(e.target.value))
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default EditProduct;