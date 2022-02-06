export type Task = {
    title: string,
    description: string,
    creationDate: string,
    type: TaskType,
    project?: string,//

}
export type TaskType = "ideea" | "task" | "progress" | "done"

export type TaskFromDB = { id: string } & Task

export const getFormatedDate = (date: string) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const dateObj = new Date(date);
    const month = monthNames[dateObj.getMonth()];
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const hour = dateObj.getHours()
    const minutes = dateObj.getMinutes()
    const h = hour + ":" + minutes
    const d = day + ' ' + month + ',' + year;
    return [h, d]
}