import { Employee, Position } from "./TypesCollection";

export const dateModifier = (date: string | Date | null | undefined): string => {

    if(typeof date === 'string') {
        console.log(date);
        const dateComponents = date.slice(0, 10).split('-');

        if(dateComponents.length > 1){
            return `${dateComponents[2]}.${dateComponents[1]}.${dateComponents[0]}`;
        }
    }
    return '';
}

export const compareDates = (date: Date): boolean | null => {
    const currentDate = new Date().setHours(0, 0, 0, 0);
    const testDate = new Date(date).setHours(0, 0, 0, 0);

    return (testDate > currentDate ? true : (testDate < currentDate ? false : null));
}

export const callAPI = async (URL: string, method: string, commit?: Function, body?: Employee | Position): Promise<any> => {
    const response = await fetch(URL, {
        method,
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });
    if(commit !== undefined){
        commit('TOGGLE_CONFIRM_DIALOG', response.status == 200 ? 'Action completed successfully.' : 'ERROR: Action not completed.');
    }
    return await response.json();
}