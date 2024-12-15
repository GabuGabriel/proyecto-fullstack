import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Asumiendo que tienes un contexto para el carrito

const DetailTotal = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleConfirmPurchase = () => {
    alert("Compra confirmada. ¡Gracias por tu pedido!");
    clearCart(); // Limpiar el carrito después de confirmar la compra
    navigate("/"); // Redirigir al inicio o a otra página
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Detalle de la Compra</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">No hay productos en el carrito.</p>
      ) : (
        <div>
          <div className="row">
            {cartItems.map((item) => (
              <div key={item.id} className="col-md-4 mb-4">
                <div className="card h-100">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">
                      <strong>Precio:</strong> ${item.price.toLocaleString("es-CL")}
                    </p>
                    <p className="card-text">
                      <strong>Cantidad:</strong> {item.quantity}
                    </p>
                    <p className="card-text">
                      <strong>Subtotal:</strong> ${(
                        item.price * item.quantity
                      ).toLocaleString("es-CL")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-between align-items-center mt-4">
            <h4>
              <strong>Total:</strong> ${totalPrice.toLocaleString("es-CL")}
            </h4>
            <div>
              <button
                className="btn btn-success me-2"
                onClick={handleConfirmPurchase}
              >
                Confirmar Compra
              </button>
              <button
                className="btn btn-danger"
                onClick={clearCart}
              >
                Vaciar Carrito
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailTotal;
