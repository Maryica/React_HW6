import { useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../reducers/productsSlice";

function AddProduct() {
    const [nameProduct, setNameProduct] = useState('');
    const [description, setDiscription] = useState('');
    const [price, setPrice] = useState(0);
    const [available, setAvailable] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nameProduct && price) {
            dispatch(addProduct({ id: Date.now(), name: nameProduct, description, price, available }));

            setDiscription('');
            setNameProduct('');
            setPrice(0);

        }
    }

    return (
        <form className="add-product-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Наименование товара"
                value={nameProduct}
                required
                onChange={(e) => setNameProduct(e.target.value)}>
            </input>
            <textarea
                placeholder="Описание товара"
                value={description}
                onChange={(e) => setDiscription(e.target.value)}>

            </textarea>
            <input
                type="number"
                value={price}
                placeholder="Цена товара"
                required
                onChange={(e) => setPrice(e.target.value)}>
            </input>

            <label>
                <input
                    type='checkbox'
                    onChange={(e) => setAvailable(!available)}>
                </input>
                {available ? 'Доступен' : 'Не доступен'}
            </label>
            <button type="submit">Добавить</button>
        </form>
    );
}

export default AddProduct;