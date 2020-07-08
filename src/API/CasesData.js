import {firebaseConfig as database} from '../Config/firebaseConfig';

export const updateCasesData = (infected, cured, deceased, onTreatment, inQuarantine, update_date) => {
    database.ref('/cases_data').update({
        infected,
        cured,
        deceased,
        onTreatment,
        inQuarantine,
        update_date
    });
}