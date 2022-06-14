import Tree from "./src/components/tree.vue";

Tree.install = function(Vue) {
    Vue.component(Tree.name, Tree);
};

export default Tree;