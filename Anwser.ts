const getName = async (userId: string): Promise<string> => {  

    return (user_list.find(user => user.userId === userId)!.name)
}
  
const getAge = async (userId: string): Promise<number> => {
    return (user_list.find(user => user.userId === userId)!.age)
}

const getAddress = async (userId: string): Promise<string> => {
    return (user_list.find(user => user.userId === userId)!.address)
}

// 1. Optimize this code
const getUserInfo = async (userId: string): Promise<User> => {

  const [name, age, address] = await Promise.all([getName(userId), getAge(userId), getAddress(userId)]);
  const user = {
      name,
      age,
      address,
  }
  return user
}

// 2. Declare TypeScript interface for User
interface User {
  userId?: string;
  name: string;
  age: number;
  address: string;
};

const user_list : User[] = [{
    userId: "1", 
    name: "Derek", 
    age: 22, 
    address: "3-2-3"},
    {
    userId: "2", 
    name: "Jack", 
    age: 20, 
    address: "KL"}
    ];

getUserInfo("2").then(function(result) {
    console.log(result);
}
)