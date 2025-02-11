// 4. Create a generic class called `Container` that stores a value of any type.
// Add methods to `getValue` and `setValue`.
// Initialize it with "Initial Value", update it to "Updated Value", and log the new value.

class Container {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue = (): T => this.value;

  setValue = (value): void => {
    this.value = value;
  };
}

const stringContainer = new Container("Initial Value");
stringContainer.setValue("Updated Value");
console.log(stringContainer.getValue()); // Expected output: "Updated Value"
