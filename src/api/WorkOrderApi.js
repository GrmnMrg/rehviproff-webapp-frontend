class WorkOrderApi {

    static async addNewWorkOrder(workOrderData) {
        console.log("Add new workorder with data: ")
        console.log(workOrderData);
        let payload = JSON.stringify({
            workOrderDate: workOrderData.date,
            clientDetails: {
                name_and_address: workOrderData.client_name_and_address,
                phone: workOrderData.phone
            },
            car_details: {
                mark_and_model: workOrderData.car_mark_and_model,
                reg_nr: workOrderData.car_reg_nr,
                vin_code: workOrderData.car_vin_code,
                mileage: workOrderData.car_mileage
            },
            list_of_work: workOrderData.list_of_works,
            replaceable_parts: workOrderData.replaceable_parts,
            faults_and_remarks: workOrderData.faults_and_remarks,
            required_parts: {
                client_representative: workOrderData.required_parties_client_representative,
                work_receiver: workOrderData.required_parties_work_receiver,
                work_performer: workOrderData.required_parties_work_performer
            }
        })

        try {
            let response = await fetch('/workorder', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: payload
            });

            console.log("API responded: ");
            console.log(response);

        } catch (e) {
            console.error(e);
        }
    }
}

export default WorkOrderApi;