import { Node } from "./node.js";

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
    if (value.lastName < node.value.lastName) {
      if (node.left == null) {
        node.left = new Node(value);
        return true;
      } else {
        this.insertNode(node.left, value);
      }
    } else {
      if (node.rigth == null) {
        node.rigth = new Node(value);
        return true;
      } else {
        this.insertNode(node.rigth, value);
      }
    }
  }

  //Añadir busqueda por lastname
  search(lastName, firstName) {
    return this.searchNode(this.#root, lastName, firstName);
  }

  searchNode(node, lastName, firstName) {
    if (
      node == null ||
      (node.value.lastName == lastName && node.value.firstName == firstName)
    ) {
      return node;
    } else if (lastName < node.value.lastName) {
      return this.searchNode(node.left, lastName, firstName);
    } else {
      return this.searchNode(node.rigth, lastName, firstName);
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
