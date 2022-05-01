const profile = {
  name: "Alex",
  age: 20,
  coords: { lat: 0, lan: 15 },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age, name }: { age: number; name: string } = profile;
const {
  coords: { lat, lan },
}: { coords: { lat: number; lan: number } } = profile;
