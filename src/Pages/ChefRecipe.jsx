import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefRecipe = () => {
    const { id } = useParams();
    const chefs = useLoaderData();
    return (
        <div>
            <h3>chef's recipe coming soon</h3>
        </div>
    );
};

export default ChefRecipe;