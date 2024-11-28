import { createSlice, current } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [{ id: 1, name: "Продукт 1", description: "Описание продукта 1", price: 1000, available: true },
        { id: 2, name: "Продукт 2", description: "Описание продукта 2", price: 100, available: false }
        ]
    },
    reducers: {
        addProduct: (state, action) => {

            state.products.push(action.payload)
        },

        deleteProduct: (state, action) => {
            return {
                ...state,
                products: [...state.products.filter(product => product.id !== action.payload)]
            }
        },
        updateProduct: (state, action) => {
            const index = state.products.findIndex(
                (product) => product.id === action.payload.id
            );
            if (index !== -1) {
                state.products[index] = { ...state.products[index], ...action.payload };
            }
        },
        toggleAvailable: (state, action) => {
            console.log(action.payload);
            const product = state.products.find((product) => product.id === action.payload);
            if (product) {
                product.available = !product.available;
            }

        }
    },
});

export const { addProduct, deleteProduct, updateProduct, toggleAvailable } = productsSlice.actions;
export default productsSlice.reducer;