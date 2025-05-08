function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLowerCase();
  } else {
    return input.toUpperCase();
  }
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const item = items.filter((item) => item.rating > 4);
  return item;
}

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.flat();
};

class Vehicle {
  private make: string;
  year: number;
  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel() {
    return `Model: ${this.model}`;
  }
}

const processValue = (value: string | number): number => {
  if (typeof value === "string") {
    return value.length;
  } else {
    return 2 * value;
  }
};

interface Product {
  name: string;
  price: number;
}

const getMostExpensiveProduct = (products: Product[]): Product | null => {
  if (products.length === 0) {
    return null;
  }

  return products.reduce((max, currentItem) =>
    currentItem.price > max.price ? currentItem : max
  );
};

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const getDayType = (day: Day): string => {
  switch (day) {
    case Day.Friday:
      return "Weekend";
    default:
      return "Weekday";
  }
};

const squareAsync = async (n: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    if (n < 0) {
      return reject();
    } else {
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    }
  });
};
