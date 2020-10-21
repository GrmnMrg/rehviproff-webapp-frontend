import React from 'react';
import AddWorkOrderForm from "../components/AddWorkOrderForm";

const AddWorkOrderPage = () => (
    <>
        <div className={"add-workorder"}>
            <div className={"add-workorder-heading"}>
                <h1>Lisa uus töötellimus</h1>
            </div>
            <AddWorkOrderForm/>
        </div>
    </>
);

export default AddWorkOrderPage;