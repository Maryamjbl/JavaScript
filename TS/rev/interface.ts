interface User {
  name: string;
  email: string;
  age: number;
  bio?: string;
}

let user1: User = {
  name: "Maryam Jabali",
  email: "maryamjbl@gmail.com",
  age: 16,
  bio: "I am a student and I love programming.",
};

let user3: User = {
  name: "Ali",
  email: "ali@gmail.com",
  age: 20,
};

console.log(user1.email);  
console.log(user3.name);    
console.log(user3.bio);
