import React from "react";
import TextField from "@material-ui/core/TextField";

class AddWorkOrderForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            date: '',
            client_name_and_address: "",
            client_phone: "",
            car_mark_and_model: "",
            car_reg_nr: "",
            car_vin_code: "",
            car_mileage: "",
            list_of_works: '',
            replaceable_parts: '',
            faults_and_remarks: '',
            required_parties_client_representative: "",
            required_parties_work_receiver: "",
            required_parties_work_performer: "",
            consent: [
                `Käesolevaga kinnitan, et olen tutvunud töid teostava ettevõtte remonditingimustega ja
            tellinud eelpool kirjeldatud tööd.`,
                `Olen andnud nende valdusesse eelpool mainitud eseme/esemed kontrolli/remondi teostamise 
            eesmärgil`,
                `Luban vajadusel teostada proovisõitu.`
            ]
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const propertyName = target.name;
        const newValue = target.value;
        this.setState({
            [propertyName]: newValue
        })
    }

    render() {
        return (
            <div className={"add-workorder-form"}>
                <h1>{`TÖÖTELLIMUS nr. / ${this.getCurrentDate()}`}</h1>
                <form>
                    <div className={"client-and-car-details"}>
                        <h2>KLIENDI JA AUTO ANDMED</h2>
                        <div className={"client-details"}>
                            <TextField
                                label={"KLIENDI NIMI, AADRESS"}
                                variant={"outlined"}
                                name={"client_name_and_address"}
                                value={this.state.client_name_and_address}
                                onChange={this.handleChange}
                            />
                            <TextField
                                label={"TELEFON"}
                                variant={"outlined"}
                                name={"client_phone"}
                                value={this.state.client_phone}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className={"car_details--mark_model_reg_nr"}>
                            <TextField
                                label={"AUTO MARK JA MUDEL"}
                                variant={"outlined"}
                                name={"car_mark_and_model"}
                                value={this.state.car_mark_and_model}
                                onChange={this.handleChange}
                            />
                            <TextField
                                label={"REG. NR."}
                                variant={"outlined"}
                                value={this.state.car_reg_nr}
                                name={"car_reg_nr"}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className={"car_details--vin_mileage"}>
                            <TextField
                                label={"VIN KOOD"}
                                variant={"outlined"}
                                value={this.state.car_vin_code}
                                name={"car_vin_code"}
                                onChange={this.handleChange}
                            />
                            <TextField
                                label={"LÄBISÕIT"}
                                variant={"outlined"}
                                value={this.state.car_mileage}
                                name={"car_mileage"}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className={"work-description"}>
                        <h2>TÖÖDE LOETELU / VAHETATAVAD DETAILID</h2>
                        <div className={"work-description__textarea"}>
                            <TextField
                                placeholder={"TÖÖDE LOETELU / VAHETATAVAD DETAILID"}
                                variant={"outlined"}
                                value={this.state.list_of_works}
                                multiline
                                name={"list_of_works"}
                                onChange={this.handleChange}
                                fullWidth
                                rows={20}
                            />
                        </div>
                    </div>
                    <div className={"faults-and-remarks"}>
                        <h2>LEITUD VEAD / MÄRKUSED</h2>
                        <div className={"faults-and-remarks__textarea"}>
                            <TextField
                                placeholder={"LEITUD VEAD / MÄRKUSED"}
                                variant={"outlined"}
                                value={this.state.faults_and_remarks}
                                multiline
                                name={"faults_and_remarks"}
                                onChange={this.handleChange}
                                fullWidth
                                rows={20}
                            />
                        </div>
                    </div>
                    <div className={"consent"}>
                        <h2>KLIENDI NÕUSOLEK</h2>
                        <div className={"consent__paragraph"}>
                            <p>{this.state.consent}</p>
                        </div>
                    </div>
                    <div className={"required_parties"}>
                        <h2>TELLIMUSEGA SEOTUD ISIKUD</h2>
                        <div className={"required_parties__textfields"}>
                            <TextField
                                label={"KLIENDI ESINDAJA"}
                                variant={"outlined"}
                                name={"client_representative"}
                                value={this.state.client_representative}
                                onChange={this.handleChange}
                            />
                            <TextField
                                label={"TÖÖ VASTUVÕTJA"}
                                variant={"outlined"}
                                name={"work_receiver"}
                                value={this.state.work_receiver}
                                onChange={this.handleChange}
                            />
                            <TextField
                                label={"TÖÖ TEOSTAJA"}
                                variant={"outlined"}
                                name={"work_performer"}
                                value={this.state.work_performer}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                </form>

            </div>
        );
    }

    getCurrentDate() {
        const rawCurrentDate = new Date();
        return rawCurrentDate.toISOString().slice(0, 10);
    }
}

export default AddWorkOrderForm;