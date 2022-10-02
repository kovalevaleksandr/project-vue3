// import { InjectionKey } from 'vue'
// import { createStore, useStore as baseUseStore, Store } from 'vuex'
//
// interface IAlerts {
//     id: number,
//     idTodo?: number,
//     todo?: string,
//     type: string,
//     title: string,
// }
//
// export interface State {
//     alertsStack: IAlerts[]
// }
//
// export const key: InjectionKey<Store<State>> = Symbol()
//
// export const store = createStore<State>({
//     state: {
//         alertsStack: []
//     }
// })
//
// // define your own `useStore` composition function
// export function useStore () {
//     return baseUseStore(key)
// }
//
// export default createStore({
//     state: {
//         alertsStack: [],
//     },
//     getters: {
//         // styleAlert (state, type) {
//         //  const alertsStyle = state.alertsStack.find((i) => i.type === type)
//         //     return 'alert-' + alertsStyle
//         // }
//     },
//     mutations: {
//         addAlert(state, alertsProp: IAlerts) {
//             state.alertsStack.push(
//
//             //     {
//             //     id: alertsProp.id,
//             //     idTodo: alertsProp.idTodo,
//             //     todo: alertsProp.todo,
//             //     type: alertsProp.type,
//             //     title: alertsProp.title,
//             // }
//             )
//         }
//     },
//     actions: {},
//     modules: {},
// });
