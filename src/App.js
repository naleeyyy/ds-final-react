import './App.css';
import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Main from './components/Main';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import BlogPage from './components/BlogPage';
import About from './components/About';
import Contact from './components/Contact';

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
          <Route path='blogPage' element={<BlogPage title='Title' text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'/>}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />} />
        </Routes>
    </>
  );
}

export default App;
