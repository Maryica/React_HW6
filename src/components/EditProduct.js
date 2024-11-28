import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from '../reducers/productsSlice'


function EditProduct({ id, onClose }) {
    const products = useSelector(state => state.products);
    const product = products.products.find(product => product.id === id);

    const [nameProduct, setNameProduct] = useState(product.name);
    const [description, setDiscription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const [available, setAvailable] = useState(product.available);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProduct({ id, name: nameProduct, description, price, available }));
        onClose();

    }

    return (
        <form className="edit-product-form" onSubmit={handleSubmit} >
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
            <div>
                <button type="submit">Редактировать</button>
                <button onClick={onClose}>Отмена</button>
            </div>


        </form>
    );
}

export default EditProduct;