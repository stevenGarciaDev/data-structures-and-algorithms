class Trie {
  constructor() {
    this.root = new Node(null);
  }

  calculateIndex(char) {
    return char.charCodeAt() - 'a'.charCodeAt();
  }

  insert(word) {
    // start from the root
    // see if it has a child for the first char
    // of ch,
    let current = this.root;

    for (let i in word) {
      let char = word[i];

      // calculate the index that the
      // char should be found at
      //const index = this.calculateIndex(char);

      if (!(char in current.children)) {
        // need to insert it
        const newNode = new Node(char);
        current.children[char] = newNode;
      }
      current = current.children[char];
    }

    // so after need to mark the current node
    // as isEndOfWord to true
    current.isEndOfWord = true;
  }

  contains(word) {
    if (word === null) {
      return false;
    }

    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (char in current.children) {

        // check if node is end of word
        const node = current.children[char];
        if (i === word.length - 1 && node.isEndOfWord) {
          return true;
        } else {
          current = current.children[char];
        }

      } else {
        return false;
      }
    }

  }

  postOrderTraversal() {
    this.performPostOrderTraversal(this.root);
  }

  performPostOrderTraversal(root) {
    for (let key in root.children) {
      this.performPostOrderTraversal(root.children[key]);
    }

    if (root.value != null)
      console.log(root.value);
  }

  remove(word) {
    // traverse through trie to ensure that word is in trie
    // check if isEndOfWord = true?
    // check if it has children
      // if children, then mark isEndOfWord = false?
    // else can remove from above node

    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (char in current.children) {

        const nextNode = current.children[char];
        if (i === word.length - 1 && nextNode.isEndOfWord) {

          // case when it has children
          if (nextNode.hasChildren()) {
            nextNode.isEndOfWord = false;
          } else {
            // physically remove it
            current.children[char] = null;
          }
          return;

        }
        current = nextNode;
      } else {
        console.log(`The word ${word} is not in trie`);
        // throw an exception
      }
    }
  }

  autoCompletion(word) {
    if (word === null)
      return;

    // traverse and find node whose value
    // matches the argument
    let current = this.root;
    for (let n = 0; n < word.length; n++) {
      const char = word[n];
      if (char in current.children) {
        current = current.children[char];
      } else {
        console.log("no matching words");
        return;
      }
    }
    
    let wordList = [];
    this.showAutoCompletion(current, word, wordList);
    console.log(wordList);
  }

  showAutoCompletion(root, word, list) {
    let current = root;
    if (root.isEndOfWord) {
      list.push(word);
    }

    for (let key in root.children) {
      const node = root.children[key];
      this.showAutoCompletion(node, word + node.value, list);
    }
  }



}

class Node {
  constructor(char) {
    this.value = char;
    this.isEndOfWord = false;

    // need to initialize array with a value, such that .length() is accessible
    //this.children = [undefined];
    // char => Node
    this.children = {};
  }

  hasChildren() {
    return Object.keys(this.children).length != 0;
  }
}


/* ---------
Test code: View in Debugger
---------- */

const trie = new Trie();
trie.insert("car");
trie.insert("card");
trie.insert("careful");
trie.insert("cargo");
trie.insert("egg");
// let result = trie.contains("cat");
// console.log("Result is", result);
// result = trie.contains("dog");
// console.log("Result is", result);
// trie.postOrderTraversal();
trie.autoCompletion("ca");
trie.autoCompletion("e");
trie.autoCompletion(null);
trie.autoCompletion("");
