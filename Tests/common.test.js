import ClearSearch from './../PageObjects/ClearSearch.po';
import Search from './../PageObjects/GlobalSearch.po';
import Clone from '../PageObjects/common/ClonePO.po';
import Combine from './../PageObjects/MaterialCombine.po';
import Remove from '../PageObjects/common/RemovePO.po';
import Split from './../PageObjects/common/Split.po';
import Move from './../PageObjects/Movebuttons.po'
//import Navigator from './../Helpers/Navigator'
import Ship from './../PageObjects/moveToShipping.po'

const clearSearch = new ClearSearch();
const search = new Search();
const clone = new Clone();
const combine = new Combine();
const remove = new Remove();
const split = new Split();
const move = new Move();
const ship = new Ship();
//const navigator = new Navigator();

export default {
    clearSearch: async ()=> {
        await clearSearch.clearSearch();
    },
    search: async (name) =>{
        await search.search(name);
    },
    combine: async (firstOrder,secondOrder) =>{
        await combine.combine(firstOrder,secondOrder);
    },
    clone: async () =>{
        await clone.cloneOrder();
    },
    split: async (name) =>{
        await split.split(name);
    },
    remove: async (type) =>{
        await remove.removeOrder(type);
    },
    move : async (kind,stage,poName) => {
        await move.movement(kind,stage,poName);
    },
    // navigator : async(stage)=>{
    //     await navigator.na
    // }
    // edit : async (name) =>{
    //     await edit.editCard(name);
    // }
    ship : async(type)=>{
        if(type==='material')await ship.moveToShip()
        else await ship.qaToShip()
    }
    
    
}