import './App.css';
import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Main from './components/Main';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import BlogPage from './components/BlogPage';
import About from './components/About';
import Contact from './components/Contact';
import Admin from './components/Admin'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Pages from './components/Pages';

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
        <Menu />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/blogPage/:id' element={<BlogPage />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/pages' element={<Pages />} />
        </Routes>
    </>
  );
}

export default App;
