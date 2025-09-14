Redux is State-Management library for JS Apps
Redux is built for larger and more Complex Applications
Redux Toolkit automatically genrates action creators (fnx that create action objects)
Redux Toolkit lets you write simpler immutable update logic using  "mutating" syntax

TERMINAL:
-> npm create vite@latest
-> cd _givenName
-> npm install (to install all Depdencies)
-> npm run dev
(in Chrome, search : Redux -> get started -> scroll down -> install Redux Toolkit)
-> npm install @reduxjs/toolkit
-> npm install react-redux
-> npm install @reduxjs/toolkit react-redux (OR direct this)
(After installing these two, you can verify it from, package.json -> 2 depedencies will visible of Redux!)

Project Set-Up (Mainly devided into 3 Parts)
-> Store
-> Actions
-> Reducer(s)

{ Basice ReduxSet-Up}

Method 1:
//calling configureStore() function and storing in const variable named 'store' AND passing empty reducer object

import { cofigureStore } from '@reduxjs/toolkit';
export const store = configureStore({ 
  reducer: {},  
})

-> Actions Tells, what are possible actions we will be performing 

Method 2: 
//directly exporting the configureStore()

import { configureStore } from '@reduxjs/toolkit';
export default confgureStore({
    reducer: {}
})

