class HashTable {
  constructor() {
    this.size = 10000;
    this.buckets = Array(this.size).fill(null);
  }

  hash(key) {
    let hash = 0;
    for (const char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % this.size;
  }

  set(key, value) {
    const keyHash = this.hash(key);
    this.buckets[keyHash] = value;
  }

  get(key) {
    const keyHash = this.hash(key);
    return this.buckets[keyHash];
  }

  showInfo() {
    for (const key in this.buckets) {
      if (this.buckets[key] !== null) {
        console.log(key, this.buckets[key]);
      }
    }
  }
}

const hash = new HashTable();

hash.set("sajid", "sajid");
hash.set("123", "123");
hash.set("sheikh", "sheikh");
// console.log(hash.get("123"));
hash.showInfo();
