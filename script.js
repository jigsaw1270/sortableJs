

// var sortableList = document.getElementById('sortable-list');

// var sortable2 = new Sortable(sortableList, {
//     animation: 150,
//     ghostClass: 'sortable-ghost',
//     dragClass: 'sortable-drag',
// });


// var el = document.getElementById('sortable-list');
// var sortable = Sortable.create(el);


import Sortable from './node_modules/sortablejs/modular/sortable.complete.esm.js';

const nestedSortables = document.querySelectorAll('.nested-sortable');

for (let i = 0; i < nestedSortables.length; i++) {
    new Sortable(nestedSortables[i], {
        group: 'nested',  
        ghostClass: 'blue-background-class',
        animation: 200,
        fallbackOnBody: true,
        swapThreshold: 0.65
    });
}
