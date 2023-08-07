import { useState } from "react";

function AddProducts() {
  const [inputFields, setInputFields] = useState([
    {
      name: "",
      description: "",
      quantity: 0,
      price: 0.0,
      admin:true
    },
  ]);

  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        name: "",
        description: "",
        quantity: 0,
        price: 0.0,
        admin:true
      },
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
    } catch (error) {
      console.error("Error occurred while submitting the form:", error);
    }
  };

  return (
    <div className="">
      <center>
      <p>Add Products to the Inventory</p>
      <div className="">
        <div className="">
          <table className="">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
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
                        className=""
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
                        className=""
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
                        className=""
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
                        className=""
                        placeholder="Price"
                        required
                      />
                    </td>
                    <td>
                      {inputFields.length !== 1 ? (
                        <button
                          className=""
                          onClick={() => removeInputFields(index)}
                        >
                          Remove
                        </button>
                      ) : (
                        ""
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="">
            <div className="">
              <button
                className=""
                onClick={addInputField}
              >
                Add New
              </button>

              <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                  Submit
                </button>
              
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </center>
    </div>
  );
}

export default AddProducts;
