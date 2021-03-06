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
    let keyHash = this.hash(key);
    if (this.buckets[keyHash] === null || this.buckets[keyHash].key === key) {
      this.buckets[keyHash] = { key: key, val: value };
    } else {
      while (this.buckets[keyHash] !== null) {
        keyHash++;
      }
      this.buckets[keyHash] = { key: key, val: value };
    }
  }

  get(key) {
    const keyHash = this.hash(key);
    for (let i = keyHash; i < this.buckets.length; i++) {
      if (this.buckets[i].key === key) {
        return this.buckets[i];
      }
    }
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
hash.set("312", "234");
hash.set("231", "564");
hash.set("sheikh", "sheikh");
console.log(hash.get("123"));
hash.showInfo();
