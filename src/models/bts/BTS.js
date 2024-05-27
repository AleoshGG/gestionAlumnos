import { Node } from "./Node.js";

export class BTS {
  #root;

  constructor() {
    this.#root = null;
  }

  add(value) {
    if (this.#root == null) {
      this.#root = new Node(value);
      return true;
    } else {
      return this.insertNode(this.#root, value);
    }
  }

  insertNode(node, value) {
    if (value.matricula < node.value.matricula) {
      if (node.left == null) {
        node.left = new Node(value);
        return true;
      } else {
        return this.insertNode(node.left, value);
      }
    } else {
      if (node.rigth == null) {
        node.rigth = new Node(value);
        return true;
      } else {
        return this.insertNode(node.rigth, value);
      }
    }
  }

  //Añadir busqueda por matricula
  search(value) {
    return this.searchNode(this.#root, value);
  }

  searchNode(node, value) {
    if (node == null || node.value.matricula == value) {
      return node;
    } else if (value < node.value.matricula) {
      return this.searchNode(node.left, value);
    } else {
      return this.searchNode(node.rigth, value);
    }
  }

  min() {
    return this.minNode(this.#root);
  }

  minNode(node) {
    if (node == null || node.left == null) {
      return node;
    } else {
      return this.minNode(node.left);
    }
  }

  max() {
    return this.maxNode(this.#root);
  }

  maxNode(node) {
    if (node == null || node.rigth == null) {
      return node;
    } else {
      return this.maxNode(node.rigth);
    }
  }
}
