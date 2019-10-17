import {DragItem} from './singleObj';
import { debug } from 'util';
export let DragItemList:DragItem[]=[
    {id:1,name:"a"},
    {id:2,name:"b"},
    {id:3,name:"c"},
    {id:4,name:"d"},
    {id:5,name:"e"},
    {id:6,name:"f"},
    {id:7,name:"g"}    
]
export let DropItemList:DragItem[]=[]
export function putDragItemList(list){
    debugger
DragItemList=list
}