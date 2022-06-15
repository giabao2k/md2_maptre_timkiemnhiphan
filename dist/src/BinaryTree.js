"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = void 0;
const TreeNode_1 = require("./TreeNode");
class BinaryTree {
    constructor() {
        this.root = null;
        this.totalNode = 0;
    }
    getSize() {
        return this.totalNode;
    }
    inorder(node) {
        if (node) {
            console.log(node.data);
            if (node.left) {
                this.inorder(node.left);
            }
            if (node.right) {
                this.inorder(node.right);
            }
        }
    }
    insert(data) {
        if (!this.root) {
            this.root = new TreeNode_1.TreeNode(data);
            this.totalNode++;
            return this.root;
        }
        else {
            let node = new TreeNode_1.TreeNode(data);
            let currentNode = this.root;
            while (currentNode) {
                // so sánh giá trị currentNode với data
                if (data < currentNode.data) { // đi xét bên trái tree
                    /* nếu currentNode không có phần tử bên trái thì gán bên trái của
                        currentNode bằng node cần thêm
                     */
                    if (!currentNode.left) {
                        currentNode.left = node;
                        break;
                    }
                    // gán lại currentNode cho node bên trái
                    currentNode = currentNode.left;
                }
                else if (data > currentNode.data) {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        break;
                    }
                    // gán lại currentNode cho node bên phải
                    currentNode = currentNode.right;
                }
            }
            this.totalNode++;
            return currentNode;
        }
    }
}
exports.BinaryTree = BinaryTree;
