import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { useState, createContext } from 'react'
import List from './routes/List'



import { Home } from './routes/Home'

export const AppContext = createContext(null)


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home value  />,
  },
  {
    path: 'list',
    element: <List />,
  },
])

function App() {
  const [state, setState] = useState(null)


  // 1.	მოცემული გვაქვს ლუწი ოდენობის რიცხვთა მასივი, მასივში არსებულ ელემენტთა წყვილებს გავუცვალოთ ინდექსები და
  //   	მიღებული მასივი დავაბრუნოთ სტირნგის სახით.

  //   	მაგ: [1,2,3,4,2,3] - > [2,1,4,3,3,2] -> "214332"



 
//davaleba -1 
  function change(arr) {
    for (let i = 0; i < arr.length; i += 2) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    return arr.join('');
}
const array = [1, 2, 3, 4, 2, 3];
const result = change(array);
console.log(result); 




//davaleba -2 
function max(arr) {
  let minSoFar = arr[0];
  let maxDiff = 0;

  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > minSoFar) {
          maxDiff = Math.max(maxDiff, arr[i] - minSoFar);
      } else {
          minSoFar = arr[i];
      }
  }
  return maxDiff;
}


console.log(max([8,2,5,6,1,4])); 
console.log(max([12,10,8,5,4])); 
console.log(max([9,35,5,17,1,3])); 




//bonus davaleba - 3 

function Rotation(s1, s2) {

  if (s1.length !== s2.length) {
      return false;
  }



  
  let circularS1 = s1 + s1;


  if (circularS1.includes(s2)) {
      return true;
  } else {
      return false;
  }
}


let s1 = "abc";
let s2 = "cab";
console.log(Rotation(s1, s2)); 


  return (
    <AppContext.Provider value={{ state, setState }}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  )
}

export default App
