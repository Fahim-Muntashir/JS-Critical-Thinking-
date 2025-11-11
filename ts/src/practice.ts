// const user1: {
//   id: number;
//   name: string;
//   age?: number;
// } = {
//   id: 1,
//   name: "John Doe",
// };

// genericWInterface

interface Developer<T> {
  name: string;
  salarary: number;
  device: {
    brand: string;
    model: string;
    relasedYear: string;
  };
  smartWatch: T;
}

const poorDeveloper: Developer<{
  heartRate: string;
  stopwatch: boolean;
}> = {
  name: "mr poor",
  salarary: 200,
  device: {
    brand: "lenovo",
    model: "lenovo",
    relasedYear: "2020",
  },
  smartWatch: {
    heartRate: "80 bpm",
    stopwatch: true,
  },
};

const richDeveloper: Developer<{
  heartRate: string;
  calling: boolean;
  calculator: boolean;
  ai: boolean;
}> = {
  name: "mr poor",
  salarary: 200,
  device: {
    brand: "hp",
    model: "hp lenovo",
    relasedYear: "2025",
  },
  smartWatch: {
    heartRate: "80 bpm",
    calling: true,
    calculator: true,
    ai: true,
  },
};
