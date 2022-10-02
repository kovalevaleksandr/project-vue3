export interface TodoItems {
    readonly id: number;
    title: string;
    completed: boolean;
    readonly date: string;
}

export interface IAlerts {
    readonly id: number;
    readonly idTodo: number;
    type: string;
    title: string;
    todo: string
}

