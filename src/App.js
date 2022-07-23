// import {Component} from 'react'
// import UserProfile from './components/UserProfile'

// import './App.css'

// const initialUserDetailsList = [
//   {
//     uniqueNo: 1,
//     imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
//     name: 'Esther Howard',
//     role: 'Software Developer',
//   },
//   {
//     uniqueNo: 2,
//     imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
//     name: 'Floyd Miles',
//     role: 'Software Developer',
//   },
//   {
//     uniqueNo: 3,
//     imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
//     name: 'Jacob Jones',
//     role: 'Software Developer',
//   },
//   {
//     uniqueNo: 4,
//     imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
//     name: 'Devon Lane',
//     role: 'Software Developer',
//   },
// ]

// class App extends Component {
//   state = {
//     searchInput: '',
//     userDetailsList: initialUserDetailsList,
//   }

//   onChangeSearchInput = event => {
//     this.setState({
//       searchInput: event.target.value,
//     })
//   }

//   deleteUser = uniqueNo => {
//     console.log(`Deleted ${uniqueNo} Clickecd `)
//   }

//   render() {
//     const {searchInput, userDetailsList} = this.state
//     const searchResults = userDetailsList.filter(eachUser =>
//       eachUser.name.includes(searchInput),
//     )

//     return (
//       <div className="app-container">
//         <h1 className="title">Users List</h1>
//         <input
//           onChange={this.onChangeSearchInput}
//           type="search"
//           value={searchInput}
//         />
//         <ul className="list-container">
//           {searchResults.map(eachUser => (
//             <UserProfile
//               userDetails={eachUser}
//               key={eachUser.uniqueNo}
//               deleteUser={this.deleteUser}
//             />
//           ))}
//         </ul>
//       </div>
//     )
//   }
// }

// export default App

// Functional Component

import {useState} from 'react'
import UserProfileFunction from './components/UserProfileFunction'

import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

const App = () => {
  const [userDetailsList, setUserDetailsList] = useState(initialUserDetailsList)
  const [searchInput, setSearchInput] = useState('')

  const onChangeSearchInput = event => {
    setSearchInput(event.target.value)
  }

  const searchResults = userDetailsList.filter(eachUser =>
    eachUser.name.includes(searchInput),
  )

  const deleteUser = uniqueNo => {
    // In class Components we use like thia
    //  const {usersDetailsList} = this.state
    // const filteredUsersData = usersDetailsList.filter(
    //   each => each.uniqueNo !== uniqueNo
    // )
    // this.setState({
    //   usersDetailsList: filteredUsersData
    // })

    //  const {usersDetailsList} = this.state is going to be replaced in the
    // functional y because we are  not going to take the value of the state
    // In functional we are going to take in  this way as the useState() returns an array
    //  Take the first value that is the initial value and assign that value to a variable
    // Here no need to give as userDetailsList[0] as the state is an array of objects it is going to return q st object

    const userDetailsListF = userDetailsList
    const filteredUsersData = userDetailsListF.filter(
      each => each.uniqueNo !== uniqueNo,
    )

    setUserDetailsList(filteredUsersData)
  }

  return (
    <div className="app-container">
      {/* <pre>{JSON.stringify(searchInput)}</pre> */}
      <h1 className="title">Users List</h1>
      <input type="search" value={searchInput} onChange={onChangeSearchInput} />
      <ul className="list-container">
        {searchResults.map(eachUser => (
          <UserProfileFunction
            deleteUser={deleteUser}
            userDetails={eachUser}
            key={eachUser.uniqueNo}
          />
        ))}
      </ul>
    </div>
  )
}

export default App
