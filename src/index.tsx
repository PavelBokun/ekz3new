// import { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom/client';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
// import axios from 'axios';

// // Types
// type PostDomainType = PostType & {
//   isDisabled: boolean
// }

// type PostType = {
//   body: string
//   id: string
//   title: string
//   userId: string
// }

// // Api
// const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.ru/api/'})

// const postsAPI = {
//   getPosts() {
//     return instance.get<PostType[]>('posts')
//   },
//   deletePost(id: string) {
//     return instance.delete<{ message: string }>(`posts/${id}?delay=3`)
//   }
// }

// // Reducer
// const initState = {
//   isLoading: false,
//   posts: [] as PostDomainType[]
// }

// type InitStateType = typeof initState

// const postsReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//   switch (action.type) {
//     case 'POSTS/GET-POSTS':
//       return {
//         ...state, posts: action.posts.map(t => {
//           return {...t, isDisabled: false}
//         })
//       }

//     case 'POSTS/DELETE-POST':
//       return {...state, posts: state.posts.filter(t => t.id !== action.id)}

//     case 'POSTS/IS-LOADING':
//       return {...state, isLoading: action.isLoading}

//     case 'POSTS/IS-DISABLED':
//       return {
//         ...state, posts: state.posts.map((t) => {
//           if (t.id === action.id) {
//             return {...t, isDisabled: action.isDisabled}
//           } else {
//             return t
//           }
//         })
//       }

//     default:
//       return state
//   }
// }

// const getPostsAC = (posts: PostType[]) => ({type: 'POSTS/GET-POSTS', posts} as const)
// const deletePostAC = (id: string) => ({type: 'POSTS/DELETE-POST', id} as const)
// const setLoadingAC = (isLoading: boolean) => ({type: 'POSTS/IS-LOADING', isLoading} as const)
// const setIsDisabled = (isDisabled: boolean, id: string) => ({type: 'POSTS/IS-DISABLED', isDisabled, id} as const)
// type ActionsType =
//   | ReturnType<typeof getPostsAC>
//   | ReturnType<typeof deletePostAC>
//   | ReturnType<typeof setLoadingAC>
//   | ReturnType<typeof setIsDisabled>

// // Thunk
// const getPostsTC = (): AppThunk => (dispatch) => {
//   postsAPI.getPosts()
//     .then((res) => {
//       dispatch(getPostsAC(res.data))
//     })
// }

// const deletePostTC = (id: string): AppThunk => (dispatch) => {

//   dispatch(setLoadingAC(true))
//   postsAPI.deletePost(id)
//     .then((res) => {
//       dispatch(deletePostAC(id))
//       dispatch(setLoadingAC(false))
     
//     })
// }

// // Store
// const rootReducer = combineReducers({
//   posts: postsReducer,
// })

// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
 
// // Loader
// export const Loader = () => {
//   return (
//     <h1>Loading ...</h1>
//   )
// }

// // App
// const App = () => {
//   const dispatch = useAppDispatch()
//   const posts = useAppSelector(state => state.posts.posts)
//   const isLoading = useAppSelector(state => state.posts.isLoading)
//   // const [isButtonDisabled, setIsButtonDisabled] = useState(false);
//   useEffect(() => {
//         dispatch(getPostsTC())
//   }, [])

//   const deletePostHandler = (id: string) => {
//     //  dispatch(setIsDisabled(false, id)) // не верно
//         dispatch(deletePostTC(id))
        
          
//   };

//   return (
//     <div>
//       <div style={{position: 'absolute', top: '0px'}}>
//         {isLoading && <Loader/>}
//       </div>
//       <div style={{marginTop: '100px'}}>
//         <h1>📜 Список постов</h1>
//         {posts.map(p => {
//           return (
//             <div key={p.id}>
//               <b>title</b>: {p.title}
//               <button style={{marginLeft: '15px'}}
//                       onClick={() => deletePostHandler(p.id)} disabled={isLoading===true} // answer
//               >
//                 удалить пост
//               </button>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<Provider store={store}> <App/></Provider>)

      // 2

//       import React from 'react'
// import ReactDOM from 'react-dom/client';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import axios from 'axios';
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';

// // Types
// type PhotoType = {
//   albumId: string
//   id: string
//   title: string
//   url: string
// }

// // Api
// const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.ru/api/'})

// const photosAPI = {
//   getPhotos() {
//     return instance.get<PhotoType[]>('photos?delay=2')
//   },
// }

// // Reducer
// const initState = {
//   isLoading: false,
//   photos: [] as PhotoType[]
// }

// type InitStateType = typeof initState

// const photoReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//   switch (action.type) {
//     case 'PHOTO/GET-PHOTOS':
//       return {...state, photos: action.photos}
//     case 'PHOTO/IS-LOADING':
//       return {...state, isLoading: action.isLoading}
//     default:
//       return state
//   }
// }

// const getPhotosAC = (photos: PhotoType[]) => ({type: 'PHOTO/GET-PHOTOS', photos} as const)
// const setLoadingAC = (isLoading: boolean) => ({type: 'PHOTO/IS-LOADING', isLoading} as const)
// type ActionsType = ReturnType<typeof getPhotosAC> | ReturnType<typeof setLoadingAC>

// const getPhotosTC = (): AppThunk => (dispatch) => {
//   dispatch(setLoadingAC(true))
//   photosAPI.getPhotos()
//     .then((res) => {
//       dispatch(getPhotosAC(res.data))    
//       dispatch(setLoadingAC(false))    // ответ
//     })

// }

// // Store
// const rootReducer = combineReducers({
//   photo: photoReducer
// })
// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// // Loader
// export const Loader = () => {
//   return (
//     <h1>Loading ...</h1>
//   )
// }

// // App
// const App = () => {
//   const dispatch = useAppDispatch()
//   const photos = useAppSelector(state => state.photo.photos)
//   const isLoading = useAppSelector(state => state.photo.isLoading)

//   const getPhotosHandler = () => {
//     dispatch(getPhotosTC())

//   };

//   return (
//     <>
//       <h1>📸 Фото</h1>
//       <button onClick={getPhotosHandler}>Подгрузить фотографии</button>
//       {isLoading && <Loader/>}
//       <div style={{display: 'flex', gap: '20px', margin: '20px'}}>{
//         photos.map(p => {
//           return <div key={p.id}>
//             <b>title</b>: {p.title}
//             <div><img src={p.url} alt=""/></div>
//           </div>
//         })
//       }</div>
//     </>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<Provider store={store}> <App/></Provider>)


// 3

// import React from 'react'
// import ReactDOM from 'react-dom/client';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import axios, { AxiosError } from 'axios';
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';

// // Types
// type PhotoType = {
//   albumId: string
//   id: string
//   title: string
//   url: string
// }

// // Api
// const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.ru/api/'})

// const photosAPI = {
//   getPhotos() {
//     return instance.get<PhotoType[]>('pictures?delay=3')
//   },
// }

// // Reducer
// const initState = {
//   isLoading: false,
//   error: null as string | null,
//   photos: [] as PhotoType[]
// }

// type InitStateType = typeof initState

// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//   switch (action.type) {
//     case 'PHOTO/GET-PHOTOS':
//       return {...state, photos: action.photos}
//     case 'PHOTO/IS-LOADING':
//       return {...state, isLoading: action.isLoading}
//     case 'PHOTO/SET-ERROR':
//       return {...state, error: action.error}
//     default:
//       return state
//   }
// }

// const getPhotosAC = (photos: PhotoType[]) => ({type: 'PHOTO/GET-PHOTOS', photos} as const)
// const setLoadingAC = (isLoading: boolean) => ({type: 'PHOTO/IS-LOADING', isLoading} as const)
// const setError = (error: string | null) => ({type: 'PHOTO/SET-ERROR', error} as const)
// type ActionsType =
//   | ReturnType<typeof getPhotosAC>
//   | ReturnType<typeof setLoadingAC>
//   | ReturnType<typeof setError>

// const getPhotosTC = (): AppThunk => (dispatch) => {
//   dispatch(setLoadingAC(true))
//   photosAPI.getPhotos()
//     .then((res) => {
//             dispatch(getPhotosAC(res.data))
//       //  if(){
//       //   dispatch(setLoadingAC(false))
//       //  }else{
//       //   dispatch(setLoadingAC(false))
//       //  }
//     })
//     .catch((e: AxiosError) => {
//       dispatch(setError(e.message))
      
//       // dispatch(setLoadingAC(false)) // не правильно 
//     })
//     .finally(()=>{
//       dispatch(setLoadingAC(false))
//     })
// }

// // Store
// const rootReducer = combineReducers({
//   app: appReducer
// })

// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// // Loader
// export const Loader = () => {
//   return (
//     <h1>Loading ...</h1>
//   )
// }

// // App
// const App = () => {
//   const dispatch = useAppDispatch()

//   const photos = useAppSelector(state => state.app.photos)
//   const isLoading = useAppSelector(state => state.app.isLoading)
//   const error = useAppSelector(state => state.app.error)

//   const getPhotosHandler = () => {
//     dispatch(getPhotosTC())
//   };

//   return (
//     <>
//       <h1>📸 Фото</h1>
//       <h2 style={{color: 'red'}}>{!!error && error}</h2>
//       {isLoading && <Loader/>}
//       <button onClick={getPhotosHandler}>Подгрузить фотографии</button>
//       <div style={{display: 'flex', gap: '20px', margin: '20px'}}>
//         {
//           photos.map(p => {
//             return <div key={p.id}>
//               <b>title</b>: {p.title}
//               <div><img src={p.url} alt=""/></div>
//             </div>
//           })
//         }
//       </div>
//     </>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<Provider store={store}> <App/></Provider>)


//  4

import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client';
import { applyMiddleware, combineReducers, legacy_createStore as createStore, Dispatch } from 'redux'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import axios, { AxiosError } from 'axios'
import { isDataView } from 'util/types';

// TYPES
type TodoType = {
  id: string;
  title: string;
  order: number;
  createdAt: string;
  updatedAt: string;
  completed: boolean;
}

type UserType = {
  id: string;
  name: string;
  age: number;
}

type UsersResponseType = {
  items: UserType[]
  totalCount: number
}

// API
const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.ru/api/'})

const api = {
  getTodos() {
    return instance.get<TodoType[]>('todos')
  },
  getUsers() {
    return instance.get<UsersResponseType>('users')
  },
}

// Reducer
const initState = {
  isLoading: false,
  error: null as string | null,
  todos: [] as TodoType[],
  users: [] as UserType[],
}

type InitStateType = typeof initState

const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
  switch (action.type) {
    case 'APP/GET-TODOS':
      return {...state, todos: action.todos}
    case 'APP/GET-USERS':
      return {...state, users: action.users}
    case 'APP/IS-LOADING':
      return {...state, isLoading: action.isLoading}
    case 'APP/SET-ERROR':
      return {...state, error: action.error}
    default:
      return state
  }
}

const getUsersAC = (users: UserType[]) => ({type: 'APP/GET-USERS', users} as const)
const getTodosAC = (todos: TodoType[]) => ({type: 'APP/GET-TODOS', todos} as const)
const setLoadingAC = (isLoading: boolean) => ({type: 'APP/IS-LOADING', isLoading} as const)
const setError = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)

type ActionsType =
  | ReturnType<typeof getUsersAC>
  | ReturnType<typeof getTodosAC>
  | ReturnType<typeof setLoadingAC>
  | ReturnType<typeof setError>

// Utils functions
function baseSuccessHandler<T>(dispatch: Dispatch, actionCreator: Function, data: T) {
  dispatch(actionCreator(data))
  dispatch(setLoadingAC(false))
}

// Thunk
const getTodosTC = (): AppThunk => (dispatch) => {
  dispatch(setLoadingAC(true))
  api.getTodos()
    .then((res) => {
      
    baseSuccessHandler(dispatch,getTodosAC,res.data) // ответ
    })
    .catch((e: AxiosError) => {
      dispatch(setError(e.message))
      dispatch(setLoadingAC(false))
     
    })
}

const getUsersTC = (): AppThunk => (dispatch) => {
  dispatch(setLoadingAC(true))
  api.getUsers()
    .then((res) => {
     
      baseSuccessHandler(dispatch,getUsersAC,res.data.items) // ответ
    })
    .catch((e: AxiosError) => {
      dispatch(setError(e.message))
      dispatch(setLoadingAC(false))
    })
    
}

// Store
const rootReducer = combineReducers({
  app: appReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))
type RootState = ReturnType<typeof store.getState>
type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
const useAppDispatch = () => useDispatch<AppDispatch>()
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// COMPONENTS
// Loader
export const Loader = () => {
  return (
    <h1>Loading ...</h1>
  )
}

const App = () => {
  return (
    <>
      <h1 style={{color:"green"}}>✅Todos & 🙂Users</h1>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' , color:"blue"}}>
        <Todos/>
        <Users/>
      </div>
    </>
  )
}

const Todos = () => {
  const dispatch = useAppDispatch()
  const todos = useAppSelector(state => state.app.todos)
  const error = useAppSelector(state => state.app.error)
  const isLoading = useAppSelector(state => state.app.isLoading)

  useEffect(() => {
    dispatch(getTodosTC())
  }, [])

  return (
    <div>
      <h2>✅ Список тудулистов</h2>
      {!!error && <h2 style={{color: 'red'}}>{error}</h2>}
      {isLoading && <Loader/>}
      {
        todos.map((t) => {
          return (
            <div style={t.completed ? {color: 'grey'} : {}} key={t.id}>
              <input type="checkbox" checked={t.completed}/>
              <b>Описание</b>: {t.title}
            </div>
          )
        })
      }
    </div>
  )
}

const Users = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector(state => state.app.users)
  const error = useAppSelector(state => state.app.error)
  const isLoading = useAppSelector(state => state.app.isLoading)

  useEffect(() => {
    dispatch(getUsersTC())
  }, [])

  return (
    <div>
      <h2>🙂 Список юзеров</h2>
      {!!error && <h2 style={{color: 'red'}}>{error}</h2>}
      {isLoading && <Loader/>}
      <div>
        {
          users.map(u => {
            return (
              <div key={u.id}>
                <b>name</b>:{u.name} - <b>age</b>:{u.age}
              </div>
            )
          })
        }</div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Provider store={store}> <App/></Provider>)


// 5

// import React, { useEffect } from 'react'
// import ReactDOM from 'react-dom/client';
// import { applyMiddleware, combineReducers, Dispatch, legacy_createStore as createStore } from 'redux'
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import axios, { AxiosError } from 'axios'

// // TYPES
// type TodoType = {
//   id: string;
//   title: string;
//   order: number;
//   createdAt: string;
//   updatedAt: string;
//   completed: boolean;
// }

// type UserType = {
//   id: string;
//   name: string;
//   age: number;
// }

// type UsersResponseType = {
//   items: UserType[]
//   totalCount: number
// }

// // API
// const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.ru/api/'})

// const api = {
//   getTodos() {
//     return instance.get<TodoType[]>('todo')
//   },
//   getUsers() {
//     return instance.get<UsersResponseType>('user')
//   },
// }

// // Reducer
// const initState = {
//   isLoading: false,
//   error: null as string | null,
//   todos: [] as TodoType[],
//   users: [] as UserType[],
// }

// type InitStateType = typeof initState

// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//   switch (action.type) {
//     case 'APP/GET-TODOS':
//       return {...state, todos: action.todos}
//     case 'APP/GET-USERS':
//       return {...state, users: action.users}
//     case 'APP/IS-LOADING':
//       return {...state, isLoading: action.isLoading}
//     case 'APP/SET-ERROR':
//       return {...state, error: action.error}
//     default:
//       return state
//   }
// }

// const getUsersAC = (users: UserType[]) => ({type: 'APP/GET-USERS', users} as const)
// const getTodosAC = (todos: TodoType[]) => ({type: 'APP/GET-TODOS', todos} as const)
// const setLoadingAC = (isLoading: boolean) => ({type: 'APP/IS-LOADING', isLoading} as const)
// const setError = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)

// type ActionsType =
//   | ReturnType<typeof getUsersAC>
//   | ReturnType<typeof getTodosAC>
//   | ReturnType<typeof setLoadingAC>
//   | ReturnType<typeof setError>

// // Utils functions
// function baseErrorHandler(dispatch: Dispatch, message: string) {
//   dispatch(setError(message))
//   dispatch(setLoadingAC(false))
// }

// // Thunk
// const getTodosTC = (): AppThunk => (dispatch) => {
//   dispatch(setLoadingAC(true))
//   api.getTodos()
//     .then((res) => {
//       dispatch(getTodosAC(res.data))
//       dispatch(setLoadingAC(false))
      
//     })
//     .catch((e: AxiosError) => {
//       // dispatch(setError(e.message))  // ответ
//       baseErrorHandler(dispatch, e.message)  // ответ
//      console.log(  e.message)
//     })
// }

// const getUsersTC = (): AppThunk => (dispatch) => {
//   dispatch(setLoadingAC(true))
//   api.getUsers()
//     .then((res) => {
//       dispatch(getUsersAC(res.data.items))
//       dispatch(setLoadingAC(false))
//     })
//     .catch((e: AxiosError) => {
//       dispatch(setError(e.message))  // ответ
//     })
// }

// // Store
// const rootReducer = combineReducers({
//   app: appReducer,
// })

// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// // COMPONENTS
// // Loader
// export const Loader = () => {
//   return (
//     <h1>Loading ...</h1>
//   )
// }

// const App = () => {
//   return (
//     <>
//       <h1>✅Todos & 🙂Users</h1>
//       <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
//         <Todos/>
//         <Users/>
//       </div>
//     </>
//   )
// }

// const Todos = () => {
//   const dispatch = useAppDispatch()
//   const todos = useAppSelector(state => state.app.todos)
//   const error = useAppSelector(state => state.app.error)
//   const isLoading = useAppSelector(state => state.app.isLoading)

//   useEffect(() => {
//     dispatch(getTodosTC())
//   }, [])

//   return (
//     <div>
//       <h2>✅ Список тудулистов</h2>
//       {!!error && <h2 style={{color: 'red'}}>{error}</h2>}
//       {isLoading && <Loader/>}
//       {
//         todos.map((t) => {
//           return (
//             <div style={t.completed ? {color: 'grey'} : {}} key={t.id}>
//               <input type="checkbox" checked={t.completed}/>
//               <b>Описание</b>: {t.title}
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }

// const Users = () => {
//   const dispatch = useAppDispatch()
//   const users = useAppSelector(state => state.app.users)
//   const error = useAppSelector(state => state.app.error)
//   const isLoading = useAppSelector(state => state.app.isLoading)

//   useEffect(() => {
//     dispatch(getUsersTC())
//   }, [])

//   return (
//     <div>
//       <h2>🙂 Список юзеров</h2>
//       {!!error && <h2 style={{color: 'red'}}>{error}</h2>}
//       {isLoading && <Loader/>}
//       <div>
//         {
//           users.map(u => {
//             return (
//               <div key={u.id}>
//                 <b>name</b>:{u.name} - <b>age</b>:{u.age}
//               </div>
//             )
//           })
//         }</div>
//     </div>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<Provider store={store}> <App/></Provider>)

// 📜 Описание:
// Перед вами список тудулистов и пользователей, которые находятся в постоянной загрузке.
// Откройте network и вы увидите что запросы падают с ошибками,
// но в коде этот никак не обрабатывается.
// Для обработки ошибок написана утилитная функция baseErrorHandler.
// Ваша задача воспользоваться этой функцией и вывести ошибки на экран.
// Что нужно написать вместо XXX, чтобы ошибки обработались и пользователь их увидел ?
// ❗ Код фиксить не нужно.


//  import React, { useEffect } from 'react'
// import ReactDOM from 'react-dom/client';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
// import axios, { AxiosError } from 'axios';

// // Types
// type PostType = {
//   id: string
//   body: string
//   title: string
//   userId: string
// }

// // Api
// const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.ru/api/ '})

// const postsAPI = {
//   getPosts() {
//     return instance.get<PostType[]>('posts')
//   },
// }

// // Reducer
// const initState = {
//   error: null as string | null,
//   posts: [] as PostType[]
// }

// type InitStateType = typeof initState

// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//   switch (action.type) {
//     case 'POSTS/GET-POSTS':
//       return {...state, posts: action.posts}

//     case 'POSTS/SET-ERROR':
//       return {...state, error: action.error}

//     default:
//       return state
//   }
// }

// const getPostsAC = (posts: PostType[]) => ({type: 'POSTS/GET-POSTS', posts} as const)
// const setErrorAC = (error: string | null) => ({type: 'POSTS/SET-ERROR', error} as const)
// type ActionsType = ReturnType<typeof getPostsAC> | ReturnType<typeof setErrorAC>

// // Thunk
// const getPostsTC = (): AppThunk => (dispatch) => {
//   postsAPI.getPosts()
//     .then((res) => {
//       dispatch(getPostsAC(res.data))
//     })
//     .catch((e: AxiosError) => {
//       dispatch(setErrorAC(e.message)) // ответ
//     })
// }

// // Store
// const rootReducer = combineReducers({
//   app: appReducer,
// })

// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// // Components
// export const App = () => {

//   const dispatch = useAppDispatch()

//   const posts = useAppSelector(state => state.app.posts)
//   const error = useAppSelector(state => state.app.error)

//   useEffect(() => {
//     dispatch(getPostsTC())
//   }, [])

//   return (
//     <>
//       <h1>📜 Список постов</h1>
//       {
//         posts.length
//           ?
//           posts.map(c => {
//             return <div key={c.id}><b>Описание</b>: {c.body} </div>
//           })
//           :
//           <h3>❌ Посты не подгрузились. Произошла какая-то ошибка. Выведите сообщение об ошибке на экран</h3>
//       }
//       <h2 style={{color: 'red'}}>{!!error && error}</h2>
//     </>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<Provider store={store}> <App/></Provider>)

// 📜 Описание:
// ❌ Посты не подгрузились. Произошла какая-то ошибка.
// Чинить приложение не нужно (если только для себя, в ответе это не учитывается).
// Задача: вывести сообщение об ошибке на экран.
// В качестве ответа указать строку коду, которая позволит это осуществить


// 7

//   import React, { useState } from 'react'
// import ReactDOM from 'react-dom/client';
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// import axios, { AxiosError } from 'axios';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';


// // Types
// type NullableType<T> = null | T

// type LoginFieldsType = {
//   email: string
//   password: string
// }

// // API
// const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.ru/api/'})

// const api = {
//   login(data: LoginFieldsType) {
//     return instance.post('auth/login', data)
//   },
// }

// // Reducer
// const initState = {
//   isLoading: false,
//   error: null as NullableType<string>,
//   isLoggedIn: false,
// }

// type InitStateType = typeof initState

// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//   switch (action.type) {
//     case 'APP/SET-IS-LOGGED-IN':
//       return {...state, isLoggedIn: action.isLoggedIn}
//     case 'APP/IS-LOADING':
//       return {...state, isLoading: action.isLoading}
//     case 'APP/SET-ERROR':
//       return {...state, error: action.error}
//     default:
//       return state
//   }
// }

// // Actions
// const setIsLoggedIn = (isLoggedIn: boolean) => ({type: 'APP/SET-IS-LOGGED-IN', isLoggedIn} as const)
// const setLoadingAC = (isLoading: boolean) => ({type: 'APP/IS-LOADING', isLoading} as const)
// const setError = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
// type ActionsType = | ReturnType<typeof setIsLoggedIn> | ReturnType<typeof setLoadingAC> | ReturnType<typeof setError>

// // Thunk
// const loginTC = (values: LoginFieldsType): AppThunk => (dispatch) => {
//   dispatch(setLoadingAC(true))
//   api.login(values)
//     .then((res) => {
//       console.log(res.data.errors)
//       dispatch(setIsLoggedIn(true))
//       alert('Вы залогинились успешно')
//     })
//     .catch((e:string) => {
      

//       dispatch(setError(e)) // не правильно
//     })
//     .finally(() => {
//       dispatch(setLoadingAC(false))
//     })
// }

// // Store
// const rootReducer = combineReducers({
//   app: appReducer,
// })

// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// // Loader
// export const Loader = () => {
//   return <h1>Loading ...</h1>
// }

// // App
// export const App = () => {

//   const dispatch = useAppDispatch()

//   const [form, setForm] = useState<LoginFieldsType>({email: '', password: ''})

//   const error = useAppSelector(state => state.app.error)
//   const isLoading = useAppSelector(state => state.app.isLoading)

//   const changeFormValuesHandler = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
//     if (field === 'email') {
//       setForm({...form, email: e.currentTarget.value})
//     }
//     if (field === 'password') {
//       setForm({...form, password: e.currentTarget.value})
//     }
//   };

//   const submitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault()
//     dispatch(loginTC(form))
//   };

//   return (
//     <div>
//       {!!error && <h2 style={{color: 'red'}}>{error}</h2>}
//       {isLoading && <Loader/>}
//       <form>
//         <div>
//           <input placeholder={'Введите email'}
//                  value={form.email}
//                  onChange={(e) => changeFormValuesHandler(e, 'email')}
//           />
//         </div>
//         <div>
//           <input type={'password'}
//                  placeholder={'Введите пароль'}
//                  value={form.password}
//                  onChange={(e) => changeFormValuesHandler(e, 'password')}
//           />
//         </div>
//         <button type="submit" onClick={submitForm}>Залогиниться</button>
//       </form>
//     </div>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<Provider store={store}> <App/></Provider>)

// 📜 Описание:
// Перед вами форма логинизации. Введите любые логин и пароль и попробуйте залогиниться.
// У вас это навряд ли получится 😈, т.к. вы не знаете email и пароль.
// Откройте Network и проанализируйте запрос.
// Задача: вывести сообщение об ошибке, которую возвращает сервера говорящую о том что email или password некорректны.

// В качестве ответа указать строку коду, которая позволит это осуществить.
// 🖥 Пример ответа: dispatch('Error message')
// ❗ Типизировать ошибку не надо, т.к. там есть много нюансов, о которых вы узнаете позже

// 8

// import React, { useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import {
//   applyMiddleware,
//   combineReducers,
//   legacy_createStore as createStore,
// } from "redux";
// import {
//   Provider,
//   TypedUseSelectorHook,
//   useDispatch,
//   useSelector,
// } from "react-redux";
// import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
// import axios, { AxiosError } from "axios";

// // Types
// type CommentType = {
//   postId: string;
//   id: string;
//   name: string;
//   email: string;
//   body: string;
// };

// // Api
// const instance = axios.create({
//   baseURL: "https://exams-frontend.kimitsu.it-incubator.ru/api/",
// });

// const commentsAPI = {
//   getComments() {
//     return instance.get<CommentType[]>("comments");  //  было "comment"
//   },
// };

// // Reducer
// const initState = {
//   comments: [] as CommentType[],
// };

// type InitStateType = typeof initState;

// const appReducer = (state: InitStateType = initState, action: ActionsType) => {
//   switch (action.type) {
//     case "COMMENTS/GET-COMMENTS":
//       return { ...state, comments: action.comments };

//     default:
//       return state;
//   }
// };

// const getCommentsAC = (comments: CommentType[]) =>
//   ({ type: "COMMENTS/GET-COMMENTS", comments } as const);
// type ActionsType = ReturnType<typeof getCommentsAC>;

// // Thunk
// const getCommentsTC = (): AppThunk => (dispatch) => {
//   commentsAPI
//     .getComments()
//     .then((res) => {
//       dispatch(getCommentsAC(res.data));
//     })
//     .catch((e: AxiosError) => {
//       alert(`Сообщение об ошибке: ${e.message}`);
//     });
// };

// // Store
// const rootReducer = combineReducers({
//   app: appReducer,
// });

// const store = createStore(rootReducer, applyMiddleware(thunk));
// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
// type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   ActionsType
// >;
// const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// // Components
// export const App = () => {
//   const comments = useAppSelector((state) => state.app.comments);
//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     dispatch(getCommentsTC());
//   }, []);

//   return (
//     <>
//       <h1>📝 Список комментариев</h1>
//       {comments.length ? (
//         comments.map((c) => {
//           return (
//             <div key={c.id}>
//               <b>Comment</b>: {c.body}{" "}
//             </div>
//           );
//         })
//       ) : (
//         <h3>
//           ❌ Комментарии не подгрузились. Произошла какая-то ошибка. Найди и
//           исправь ее
//         </h3>
//       )}
//     </>
//   );
// };

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render(
//   <Provider store={store}>
//     {" "}
//     <App />
//   </Provider>
// );

// // 📜 Описание:
// // ❌ Комментарии не подгрузились. Произошла какая-то ошибка.
// // В данном задании вам нужно найти ошибку и починить приложение.
// // Если сделаете все верно, то увидите комментарии.
// // В качестве ответа указать исправленную строку коду
