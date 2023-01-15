export interface Employee {
    id: number
    firstName: string,
    lastName: string,
    address?: string,
    dateOfBirth: Date,
    workingSince: Date,
    posEntries: PosEntry[],
    salary: number,
    past: boolean
}

export interface Position {
    positionId: number,
    title: string
}

export interface PosEntry extends Position{
    posEntryId: number,
    employeeId: number,
    beginDate: Date,
    endDate?: Date | null
}