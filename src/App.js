// import React from 'react';
// import ArchieveComp from './ToDo/ArchieveComp';
// import PendingComp from './ToDo/PendingComp';
// import DeleteComponents from './ToDo/DeleteComponents';


// function App() {
//   return (
//     <div className="App">
//       <ArchieveComp />
//       <PendingComp />
//       <DeleteComponents />
//     </div>
//   );
// }

// export default App;

// import logo from './logo.svg';
// import './App.css';
// import Counter from './components/Counter';
// // import Timecounter from './components/TimeCounter';
import TaskChange from './ToDo/Comp';
import EmployeeManager from './EmployeeManager/EmployeeManger';

// const userData = [
//   {
//     id: 1,
//     title: 'to do app',
//     desc: 'wip',
//     status: false,
//     active: true
//   },
//   {
//     id: 2,
//     title: 'portfolio',
//     desc: 'done',
//     status: true,
//     active: true
//   },
//   {
//     id: 3,
//     title: 'contact manager',
//     desc: 'done',
//     status: true,
//     active: true
//   },
//   {
//     id: 4,
//     title: 'calculator',
//     desc: 'done',
//     status: true,
//     active: true
//   },
// ]

function App() {
  return (
    <>
    {/* <Timecounter value="10"></Timecounter> */}
    <div className="App">
      {/* <TaskChange data={userData}></TaskChange> */}
      <EmployeeManager></EmployeeManager>
    </div>
    </>
  );
}

export default App;


// function App() {
//   return (
//   <>
 
//   {/* <Counter value="10"></Counter> */}
//   </>
//   );
// }

// export default App;

