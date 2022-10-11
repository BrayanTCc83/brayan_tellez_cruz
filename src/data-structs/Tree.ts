export type MatrixTNode<K,T> = Array<Array<TreeNode<K,T>|null>>
export type ArrayTNode<K,T> = Array<TreeNode<K,T>|null>

export default class Tree<K,T>{
    private treeGrade : number = 0;
    private treeDeep : number = 0;
    private root : TreeNode<K,T> | null = null;
    private nodeLevels : Array<TreeNode<K,T>[]> = new Array<TreeNode<K,T>[]> ();
    private haveChange : boolean = false;

    public setRoot(id: K, data : T){
        if( !this.root ){
            this.treeGrade = 1;
            this.treeDeep = 1;
            this.root = new TreeNode<K,T>(null, id, data, this.treeDeep);
            this.nodeLevels.push([this.root]);
        }
    }

    public getGrade() : number {
        return this.treeGrade;
    }

    public getDeep() : number {
        return this.treeDeep;
    }

    private reestructLevel(currentLevel: number, parent: TreeNode<K,T>, child: TreeNode<K,T>) : void{
        let lastCoincidence = -1;
        const parentChildrenCount = parent.getChildrenCount();
        if(parentChildrenCount > 0){
            const lastChild = this.nodeLevels[currentLevel-1].filter(node => node.getParent() == parent)[parentChildrenCount-1];
            lastCoincidence = this.nodeLevels[currentLevel-1].lastIndexOf( lastChild );
        }
        this.nodeLevels[currentLevel-1].splice(lastCoincidence+1,0,child)
            
        if( parentChildrenCount+1 > this.getGrade() )
            this.treeGrade = parentChildrenCount+1;
    }

    public appendNode(parentId: K, childrenId: K, data : T){
        const parent = this.searchNode(parentId);
        if(parent){
            const currentLevel = parent.getLevel()+1;
            
            if( currentLevel > this.getDeep() ){
                this.treeDeep = currentLevel;
                this.nodeLevels.push([])
            }

            const newChild = new TreeNode<K,T>(parent, childrenId, data, currentLevel);
            this.nodeLevels[currentLevel-1].push(newChild);
            parent.appendChild(newChild);

            this.haveChange = true;
        }
    }

    public removeNode(id: K){
        const nodeToRemove = this.searchNode(id);
        console.log(nodeToRemove);
        if(nodeToRemove){
            for( const child of nodeToRemove.getChildren() ){
                console.log(child);
            }
            this.haveChange = true;
        }
    }

    public searchNode(id: K) : TreeNode<K,T> | undefined{
        return this.nodeLevels.flat().find( node => node.getId() == id );
    }

    public getLevels() : Array<TreeNode<K,T>[]> { 
        return this.nodeLevels;
    }
}

export class TreeNode<K,T> implements Observer, Observable {
    private observers: List<TreeNode<K,T>> = new List();
    private children = new Array<TreeNode<K,T>>();
    private id: K;
    private data: T;
    private level: number;
    private factor: number;

    constructor(parent: TreeNode<K,T> | null, id:K, data : T, level: number){
        this.id = id;
        this.data = data;
        this.level = level;
        this.factor = 0;
        if(parent !== null)
            this.addObserver(parent);
    }

    public getId() : K{
        return this.id;
    }

    public appendChild(node : TreeNode<K,T>){
        this.children.push( node );
    }

    public removeChild(id : K){
        this.children = this.children.filter( child => child.id != id );
    }

    public getChildren() : Array<TreeNode<K,T>>{
        return this.children;
    }

    public getParent() : TreeNode<K,T> | null{
        return this.observers.getAt(0);
    }

    public getChildrenCount() : number{
        return this.children.length;
    }

    public getLevel() : number{
        return this.level;
    }

    public getValue() : T{
        return this.data;
    }

    public getFactor(): number {
        return this.factor;
    }

    // For Observer 
    public update(o: Observable){
        const sumChildrenFactors = this.children.reduce( (previus, current, index) => previus+current.factor, 0);
        const forChildrens = this.children.length/2
        this.factor = forChildrens+sumChildrenFactors
    }
    
    // For Observable 
    public addObserver(o: Observer) : boolean {
        const result = this.observers.add(o as TreeNode<K,T>);
        this.notify();
        return result;
    }
    public removeObserver(o: Observer) : boolean {
        const result = this.observers.remove(o as TreeNode<K,T>);
        this.notify();
        return result;
    }
    public notify() : void{
        for(let i = 0; i < this.observers.size(); i++){
            this.observers.getAt(i)?.update(this);
        }
    }
}

class List<T>{
    private list: Array<T> = new Array();
    public add(o: T): boolean {
        let val:number = this.list.push(o);
        return val > 0;
    }

    public remove(o: T): boolean {
        const lastLenght = this.list.length;
        const index = this.list.indexOf(o);
        this.list = this.list.splice(index, 1);
        return lastLenght != this.list.length;
    }

    public getAt(index: number): T | null {
        return this.list.length > index ? this.list[index] : null;
    }

    public size(): number{
        return this.list.length;
    }
}

abstract class Observer {
    public abstract update(o: Observable) : void;
}
abstract class Observable {
    public abstract addObserver(o: Observer) : boolean;
    public abstract removeObserver(o: Observer) : boolean;
    public abstract notify() : void;
}