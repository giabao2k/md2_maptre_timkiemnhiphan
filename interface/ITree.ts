import { TreeNode } from "../src/TreeNode";

export interface Tree<E> {
    insert(data: E): TreeNode<E>; // chèn
    inorder(node: TreeNode<E>): void; // theo thứ tự
    getSize(): number; // lấy kính thước
}