interface Student {
  id: number;
  title: string;
  course: string;
}

const s1: Student = {
  id: 1,
  title: "Aysha",
  course: "TypeScript",
};

console.log(s1.title);
