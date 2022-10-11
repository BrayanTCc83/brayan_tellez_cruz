
type Edge<K,V> = {node:GraphNode<K,V>,cost:number};

export const NodesErrors = {
    NotFound : "Find Node doesn't exists, added it first then try again",
    NotRoot: "The tree is void, hasn't a root to begin",
    KeyDuplicate: "You can't use the same key twice",
    NodeApenned: "The node is yet include"
}

export default abstract class Node<K,V> {
    private key : K;
    private value : V|null;

    public constructor(key: K, value:V|null) {
        this.key = key;
        this.value = value;
    }

    public getKey(){
        return this.key;
    }

    public getValue():V | null{
        return this.value;
    }

    public abstract getConectedNodes() : number;
}

export class BinaryNode<T, C> extends Node<T,C> {
    private left: null | BinaryNode<T,C>;
    private right: null | BinaryNode<T,C>;
    
    public constructor(key: T, value:C){
        super(key,value);
        this.left = this.right = null;
    }

    public setLeftNode(node: BinaryNode<T,C>):void {
        this.left = node;
    }
    
    public setRightNode(node: BinaryNode<T,C>):void {
        this.right = node;
    }

    public getLeftNode():BinaryNode<T,C>|null{
        return this.left;
    }

    public getRightNode():BinaryNode<T,C>|null{
        return this.right;
    }

    public getConectedNodes() : number {
        return this.left && this.right ? 2 : this.left || this.right ? 1 : 0;
    }
}

export class GraphNode<K,V> extends Node<K,V> {
    private edges : Array<Edge<K,V>> = []

    public addEdge( node : GraphNode<K,V>, cost : number ) : void {
        const edge = {node,cost};
        if(!this.edges.includes(edge))
            this.edges.push(edge);
        else
            console.error(NodesErrors.NodeApenned);
    }

    public getEdges() : Array<Edge<K,V>> {
        return this.edges;
    }

    public getConectedNodes() : number {
        return this.edges.length;
    }
}