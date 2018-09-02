// 这就是reducer处理函数，参数是状态和新的action

const state_init = {
    number: 10
}
// 写死的东西===复制粘贴就完事了
export function reducer (state = state_init , payload) {
    if(mutations.hasOwnProperty(payload.type)){
        return mutations[payload.type](state , payload);
    }
   return state;
}

const mutations = {
    add (state, payload) {
        return {number: state.number+1}
    },
    minus (state, payload) {
        return {number: state.number-1}
    }
}

export const actions = {
    add (payload) {
        return {type: 'add'}
    },
    minus (payload) {
        return {type: 'minus'}
    },
    addAync (payload) {
        return dispatch => {
            setTimeout(() => dispatch({type: 'add'}), 1000)
        }
    }
}
