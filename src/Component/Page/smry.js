const Summary = ({ cartItems, handleCancel, handleConfirm }) => {
    let subtotal = 0;
    let tax = 0;
    let total = 0;
  
    if (cartItems && cartItems.length > 0) {
      subtotal = cartItems.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      );
      tax = Math.round(subtotal * 0.1);
      total = subtotal + tax;
    }
  
    return (
      <div className="summary">
        <h2>Order Summary</h2>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Order QTY</th>
              <th>Unit</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems &&
              cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity} kg</td>
                  <td>{item.unit}</td>
                  <td>Rs {item.price}</td>
                  <td>Rs {item.quantity * item.price}</td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4">Subtotal</td>
              <td>Rs {subtotal}</td>
            </tr>
            <tr>
              <td colSpan="4">Tax</td>
              <td>Rs {tax}</td>
            </tr>
            <tr>
              <td colSpan="4">Total</td>
              <td>Rs {total}</td>
            </tr>
          </tfoot>
        </table>
        <div className="buttons">
          <button onClick={handleCancel}>Cancel Order</button>
          <button onClick={handleConfirm}>Confirm Order</button>
        </div>
      </div>
    );
  };
export default Summary  