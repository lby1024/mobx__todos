import {observable, action, computed} from 'mobx'

class Store {
    @observable list = [
        {title: '吃饭', done: false},
        {title: '睡觉', done: false},
        {title: '拉屎', done: false},
    ]
    @computed get length () {
        return this.list.length
    }
    @action.bound del(iindex) {
        let list = this.list.filter((item, index)=>index!==iindex)
        this.list = list
    }
    @action.bound add (title) {
        let item = {title, done: false}
        this.list.unshift(item)
    }
    // 完成--->未完成 or 未完成--->完成
    @action.bound change(index) {
        this.list[index].done = !this.list[index].done
    }
}

const store = new Store()

// setInterval(()=>store.minus(), 1000)

export default store