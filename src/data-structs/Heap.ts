export default class Heap<T>{
    private data = new Array<T>();

    public push( newData: T ){
        this.data.push(newData);
    }

    public pull(): T | undefined {
        return this.data.shift();
    }
}