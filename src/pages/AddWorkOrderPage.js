import React from 'react';
import TextField from "@material-ui/core/TextField";

const AddWorkOrderPage = () => (
    <>
        <div className={"add-workorder"}>
            <div className={"add-workorder-heading"}>
                <h1>Lisa uus töötellimus</h1>
            </div>
            <div className={"add-workorder-content"}>
                <h1>{`TÖÖTELLIMUS nr. / ${getCurrentDate()}`}</h1>
                <form>
                    <TextField
                        label={"KLIENDI NIMI, AADRESS"}
                        variant={"outlined"}
                    />
                    <TextField
                        label={"TELEFON"}
                        variant={"outlined"}
                    />
                </form>

            </div>
        </div>
    </>
);

function getCurrentDate() {
    const rawCurrentDate = new Date();
    return rawCurrentDate.toISOString().slice(0, 10);
}

export default AddWorkOrderPage;