

export interface Iuser {
    id: string,
    firstName: string,
    lastName: string,
    email: string
}
export const IuserList: Iuser[] = [{
    id: new Date().toJSON.toString(),
    firstName: "jinal",
    lastName: "patel",
    email: "jinal@gmail.com"
}]

export enum pageData {
    list, add, edit
}




