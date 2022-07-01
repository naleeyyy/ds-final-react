import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Route, Routes, Navigate } from 'react-router-dom';
import { Menu, Contact, Pages, BlogPage, Main, Edit, Login, Add } from './components/exports'
import { AuthProvider } from './context/AuthContext';

const Torus = (props) => {
  
  const ref = useRef()

  useFrame(() => {
    ref.current.rotation.x += 0.005
    ref.current.rotation.y += 0.005
  })

  return (
    <mesh
      {...props}
      ref={ref}
    >
      <torusKnotGeometry args={[10, 3, 100, 16]}/>
      <meshStandardMaterial colorWrite wireframe/>
    </mesh>
  )
}

function App() {
  
  return (
    <>
        <Canvas camera={{ position: [0, 0, 25] }} shadows={true} id='renderer' >
          <ambientLight intensity={0.15}/>
          <Torus />
        </Canvas>
        <AuthProvider>
        <Menu />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/blogPage/:id' element={<BlogPage />}/>
            <Route path='/contact' element={<Contact />} />
            <Route path='/pages' element={<Pages />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='/login' element={<Login />} />
            <Route path='/add' element={<Add />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AuthProvider>
    </>
  );
}

export default App;
