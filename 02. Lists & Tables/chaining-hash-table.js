class HashTable {
  constructor() {
    this.size = 15;
    this.buckets = Array(this.size)
      .fill(null)
      .map(() => []);
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
    const bucketArray = this.buckets[keyHash];
    const storedElement = bucketArray.find((element) => {
      return element.key === key;
    });
    if (storedElement) {
      storedElement.val = value;
    } else {
      bucketArray.push({ key: key, val: value });
    }
  }

  get(key) {
    const keyHash = this.hash(key);
    const bucketArray = this.buckets[keyHash];
    const storedElement = bucketArray.find((element) => {
      return (element.key = key);
    });
    return storedElement;
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
hash.set("321", "321");
hash.set("231", "231");
hash.set("sheikh", "sheikh");
console.log(hash.get("123"));
console.log(hash.get("321"));
console.log(hash.get("231"));
hash.showInfo();
