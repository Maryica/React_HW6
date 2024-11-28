import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { deleteProduct, toggleAvailable } from "../reducers/productsSlice";
import EditProduct from "./EditProduct";

function ProductCatalog() {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const [onEdit, setOnEdit] = useState(false);
    const [editedProductId, setEditedProductId] = useState(0);

    const handleEditClick = (id) => {
        setEditedProductId(id);
        setOnEdit(true);
    }

    const handleCloseEdit = () => {
        setOnEdit(false);
    }

    return (
        <div>
            <h2>Каталог продуктов</h2>
            {onEdit && (
                <div style={{ display: onEdit ? 'block' : 'none' }}>
                    <EditProduct id={editedProductId} onClose={handleCloseEdit} />
                </div>
            )}

            <ul>

                {products.products.map(product => (
                    <li key={product.id}><div className="product-item">
                        <h3>{product.name}</h3>
                        <p>Описание: {product.description}</p>
                        <p>Цена: {product.price} руб.</p>
                        <p>{product.available ? 'Товар доступен' : 'Товар закончился'}</p>
                    </div>
                        <div className="product-item-btn">
                            <button onClick={() => dispatch(toggleAvailable(product.id))}>Изменить доступность</button>
                            <button onClick={() => handleEditClick(product.id)}>Редактировать</button>
                            <button onClick={() => dispatch(deleteProduct(product.id))}>Удалить</button></div>
                    </li>

                )

                )}
            </ul>
        </div>
    );
}

export default ProductCatalog;