import React from 'react'
import { Canvas } from "@react-three/fiber"
import "./style.css"
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import MacContainer from "./MacContainer"

const App = () => {
  return (
    <div className='w-full h-screen'>
        <div className="flex flex-col items-center text-white absolute top-32 left-1/2 -translate-x-1/2">
          <h3 className='masked text-7xl tracking-tighter font-[700]'>macbook pro.</h3>
          <h5>Oh so pro!</h5>
          <h6 className='text-center w-2/3'>Lorem ipsum dolor sit, quos iusto aspernatur itaque laborum ad consequuntur officia non delectus totam, reiciendis velit.</h6>
        </div>
        <Canvas camera={{ fov: 20, position: [0, -10, 170] }}>
          {/* <OrbitControls /> */}
          <Environment files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"]} />
          <ScrollControls pages={3}>
            <MacContainer />
          </ScrollControls>
        </Canvas>
      </div>
  )
}

export default App