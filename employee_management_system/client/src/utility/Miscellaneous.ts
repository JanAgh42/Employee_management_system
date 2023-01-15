import { Employee, Position } from "./TypesCollection";
import { success, error } from "./Constants";

export const dateModifier = (date: string | Date | null | undefined): string => {
    if(typeof date !== 'string') return '';

    const dateComponents = date.slice(0, 10).split('-');

    if(dateComponents.length <= 1) return '';
    return `${dateComponents[2]}.${dateComponents[1]}.${dateComponents[0]}`;
}

export const compareDates = (date1: Date, date2: Date): boolean | null => {
    const currentDate = new Date(date2).setHours(0, 0, 0, 0);
    const testDate = new Date(date1).setHours(0, 0, 0, 0);

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
        commit('TOGGLE_CONFIRM_DIALOG', response.status == 200 ? success : error);
    }
    return await response.json();
}