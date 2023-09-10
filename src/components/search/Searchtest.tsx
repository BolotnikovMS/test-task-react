// import './search.css'

// import { Button, Icon } from '..'
// import { IPost, IUser } from '../../interfaces'
// import React, { ChangeEvent, useEffect, useMemo, useState } from 'react'

// import { Link } from 'react-router-dom'

// type KeysObj = 'name' | 'title' | 'body' | 'username'

// interface PropsSearch {
//   arrayToSearch: IUser[] | IPost[] | undefined
//   keyObjSearch: KeysObj
//   keyObjName: KeysObj
//   linkPath?: string
// }

// export const Search = ({ arrayToSearch, keyObjSearch, keyObjName, linkPath }: PropsSearch) => {
//   const [desiredValue, setDesiredValue] = useState<string>('')
  
//   const handleChanges = ({target}: ChangeEvent<HTMLInputElement>) => {
//     setDesiredValue(target.value)
//   }
  
//   const handleClickReset = () => {
//     setDesiredValue('')
//   }

//   const getSearchResult = () => {
//     if (!desiredValue) return

//     return arrayToSearch?.filter(item => item[keyObjSearch].toLocaleLowerCase().includes(desiredValue.toLocaleLowerCase()))
//   }

//   const searchResult = useMemo(getSearchResult, [desiredValue, arrayToSearch, keyObjSearch])

//   return (
//     <div className='search'>
//       <div className='search__group'>
//         <input
//           type='text'
//           value={desiredValue}
//           className='search__input'
//           placeholder='Search...'
//           onChange={handleChanges}
//         />
//         <Button classBtn='search__btn' onClick={handleClickReset}>
//           <Icon nameIcon='close.svg' classIcon='icon_wh-21' />
//         </Button>
//       </div>
//       <ul className="search__list">
//         {
//           desiredValue ? (
//             searchResult?.length ? (
//               searchResult.map(result => 
//                 <li key={result.id} className='search__list-item'>
//                   <Link to={linkPath ? `${linkPath}${result.id}` : `${result.id}`}>{result[keyObjName].substring(30, -10) + '...'}</Link>
//                 </li>)
//             ) : (
//               <li className="search__list-item">No result...</li>
//             )
//           ) : null
//         }
//       </ul>
//     </div>
//   )
// }
