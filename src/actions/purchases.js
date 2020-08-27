import uuid from 'uuid';

export const addPurchase = (
    {
        name = '',
        size = '',
        price = 0,
        date,
    } = {}
) => ({
    type: 'ADD_PURCHASE',
    purchase: {
        id: uuid(),
        name,
        size,
        price,
        date
    }
});



export const removePurchase = ({ id } = {}) => ({
    type: 'REMOVE_PURCHASE',
    id
});

export const editPurchase = (id, updates) => ({
    type: 'EDIT_PURCHASE',
    id,
    updates
});