// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj); // give array of keys
  console.log("After Object.keys():", keys);

  let values = Object.values(obj); // gives array of values
  console.log("After Object.values():", values);

  let entries = Object.entries(obj); // gives array of [keys,values]
  console.log("After Object.entries():", entries);

  let hasProp = obj.hasOwnProperty("key"); // key agar present then give true otherwise false
  console.log("After hasOwnProperty():", hasProp);

  let newObj = Object.assign({}, obj, { newProperty: "newValue" }); // new key and value add krta hai
  console.log("After Object.assign():", newObj);
}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);
