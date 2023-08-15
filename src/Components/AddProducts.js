import React, { useState } from "react";
import "./componentStyles/addproducts.css";
import { cloneDeep } from "lodash";
import productJSON from "../Constants/CommonConstants";
function AddProducts() {
  const initialState=[
    cloneDeep(productJSON),
  ];
  const [inputFields, setInputFields] = useState(initialState);
  const addInputField = () => {
    setInputFields([
      ...inputFields,
      cloneDeep(productJSON),
    ]);
  };

  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  };

  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/add-products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputFields),
      });
      if(response.ok){
        setInputFields([cloneDeep(productJSON)]);
      }
    } catch (error) {
      console.error("Error occurred while submitting the form:", error);
    }
  };

  return (
    <div className="container">
      <div className="center">
        <p className="heading">Add Products to the Inventory</p>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Price</th>
                {inputFields.length > 1 && <th>Action</th>}
              </tr>
            </thead>
            <tbody>
              {inputFields.map((data, index) => {
                const { name, description, quantity, price } = data;
                return (
                  <tr key={index}>
                    <td>
                      <input
                        type="text"
                        onChange={(evnt) => handleChange(index, evnt)}
                        value={name}
                        name="name"
                        className="input-field"
                        placeholder="Name"
                        required
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        onChange={(evnt) => handleChange(index, evnt)}
                        value={description}
                        name="description"
                        className="input-field"
                        placeholder="Description"
                        required
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        onChange={(evnt) => handleChange(index, evnt)}
                        value={quantity}
                        name="quantity"
                        className="input-field"
                        placeholder="Quantity"
                        required
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        step="0.01"
                        onChange={(evnt) => handleChange(index, evnt)}
                        value={price}
                        name="price"
                        className="input-field"
                        placeholder="Price"
                        required
                      />
                    </td>
                    <td>
                      {inputFields.length !== 1 && (
                        <button
                          className="remove-button"
                          onClick={() => removeInputFields(index)}
                        >
                          Remove
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="button-container">
            <button className="add-button" onClick={addInputField}>
              Add New
            </button>

            <button type="button" className="add-button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default AddProducts;
