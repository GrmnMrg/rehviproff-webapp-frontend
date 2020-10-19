import React from 'react';
import workorderContent from "./workorder-content";

const WorkOrderPage = ({match}) => {
    const id = match.params.id;
    const workorder = workorderContent.find(workorder => workorder.id === parseInt(id));

    if (workorder === undefined) {
        return (
            <>
                <h1>{`Töökäsk nr. ${id} ei leitud.`}</h1>
            </>
        )
    }

    return (
        <>
            <h1>{workorder.title}</h1>
            {workorder.content.map((paragrahv, key) => (
                <p key={key}>
                    {paragrahv}
                </p>
            ))}
        </>
    )
};

export default WorkOrderPage;