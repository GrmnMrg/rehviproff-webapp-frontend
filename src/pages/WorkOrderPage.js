import React from 'react';
import workorderContent from "./workorder-content";
import Pdf from 'react-to-pdf';
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";
import {TableRow} from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";

const ref = React.createRef();

const useStyles = makeStyles({
    table: {
        width: '40%'
    }
});

const WorkOrderPage = ({match}) => {
    const classes = useStyles();
    const id = match.params.id;
    const workorder = workorderContent.find(workorder => workorder.id === parseInt(id));

    if (workorder === undefined) {
        return (
            <>
                <h1>{`Töötellimus nr. ${id} ei leitud.`}</h1>
            </>
        )
    }

    return (
        <>
            <div className="workorder">
                <Pdf targetRef={ref} filename="workorder_print.pdf">
                    {({toPdf}) => <button onClick={toPdf}>Generate Pdf</button>}
                </Pdf>

                <div ref={ref} className={"workorder-content"}>
                    <div className="workorder-header">
                        <h1>{`TÖÖTELLIMUS nr. ${workorder.id} / ${workorder.date}`}</h1>

                        <div className="workorder-header-content">
                            <div className="workorder-header-content__client-details">
                                <h2>KLIENDI ANDMED</h2>
                                <form>
                                    <TextField
                                        label={"KLIENDI NIMI, AADRESS"}
                                        variant={"outlined"}
                                        margin={"dense"}
                                        value={`${workorder.client_details.name}, ${workorder.client_details.address}`}
                                    />
                                    <TextField
                                        label={"TELEFON"}
                                        variant={"outlined"}
                                        margin={"dense"}
                                        value={workorder.client_details.phone}

                                    />
                                </form>
                                {/*
                                <TableContainer className={classes.table} component={Paper}>
                                    <Table>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell colSpan={2}>{`${workorder.client_details.name}, ${workorder.client_details.address}`}</TableCell>
                                                <TableCell colSpan={1}>{workorder.client_details.phone}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell colSpan={2}>{`${workorder.car_details.mark} ${workorder.car_details.model}`}</TableCell>
                                                <TableCell colSpan={1}>{workorder.car_details.reg_nr}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell colSpan={2}>{workorder.car_details.vin_code}</TableCell>
                                                <TableCell colSpan={1}>{`${workorder.car_details.mileage} km`}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                */}
                            </div>
                        </div>
                    </div>
                    {/*
                    <div className="workorder-list-of-works">
                        <h2>TÖÖDE LOETELU</h2>
                        {workorder.list_of_works.map((paragraph, key) => (
                            <p key={key}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                    <div className="workorder-replaceable-parts">
                        <h2>VAHETATAVAD DETAILID</h2>
                        {workorder.replaceable_parts.map((paragraph, key) => (
                            <p key={key}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                    <div className="workorder-faults-and-remarks">
                        <h2>LEITUD VEAD / MÄRKUSED</h2>
                        {workorder.faults_and_remarks.map((paragraph, key) => (
                            <p key={key}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                    <div className="workorder-consent">
                        <h2>TINGIMUSTEGA NÕUSTUMINE</h2>
                        {workorder.consent.map((paragraph, key) => (
                            <p key={key}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                    <div className="workorder-footer">
                        <TableContainer className={classes.table} component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>KLIENDI ESINDAJA</TableCell>
                                        <TableCell>TÖÖ VASTUVÕTJA</TableCell>
                                        <TableCell>TÖÖ TEOSTAJA</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>{workorder.client_representative}</TableCell>
                                        <TableCell>{workorder.work_receiver}</TableCell>
                                        <TableCell>{workorder.work_performer}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    */}
                </div>
            </div>
        </>
    )
};

export default WorkOrderPage;