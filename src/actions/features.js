import uuid from 'uuid';

export const addFeature = (
    {
        name = '',
        description = '',
        price = 0,
    } = {}
) => ({
    type: 'ADD_FEATURE',
    feature: {
        id: uuid(),
        name,
        description,
        price,
    }
});


export const removeFeature = ({ id } = {}) => ({
    type: 'REMOVE_FEATURE',
    id
});

export const editFeature = (id, updates) => ({
    type: 'EDIT_FEATURE',
    id,
    updates
});