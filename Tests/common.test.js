import ClearSearch from './../PageObjects/ClearSearch.po';
import Search from './../PageObjects/GlobalSearch.po';
import Clone from './../PageObjects/ClonePO.po';
import Combine from './../PageObjects/MaterialCombine.po';
import Remove from './../PageObjects/RemovePO.po';
import Split from './../PageObjects/Split.po'

const clearSearch = new ClearSearch();
const search = new Search();
const clone = new Clone();
const combine = new Combine();
const remove = new Remove();
const split = new Split();

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
        await clone.clone();
    },
    split: async (name) =>{
        await split.split(name);
    },
    remove: async () =>{
        await remove.remove();
    },
    
}