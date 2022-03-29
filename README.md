# Custom Data Strucure in Javascript

## Linked List

A linked list is a sequence of data structures, which are connected together via links.

| Property    | Description                                         | Type                        |
| ----------- | --------------------------------------------------- | --------------------------- |
| head        | Return first element of the linked list             | object                      |
| tail        | Return last element of the linked list              | object                      |
| append      | Adds an element at the end of the list.             | function(value)             |
| prepend     | Adds an element at the start of the list.           | function(value)             |
| insertAfter | Adds new element after a specific existing element. | function(value, afterValue) |
| find        | Searches an element using the given key             | function(value)             |
| delete      | Deletes an element using the given key              | function(value)             |
| toArray     | Return the complete list                            | object[ ]                   |
