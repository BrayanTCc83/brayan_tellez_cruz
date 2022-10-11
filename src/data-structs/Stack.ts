export default class Stack<T>{
    private data = new Array<T>();

    public push( newData: T ){
        this.data.push(newData);
    }

    public pop(): T | undefined {
        return this.data.pop();
    }
}