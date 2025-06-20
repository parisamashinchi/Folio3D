import { useGLTF } from '@react-three/drei'

export function LateNightOffice(props) {
  const { nodes, materials } = useGLTF('models/late_night_office.glb')
  return (
    <group {...props} dispose={null} rotation={[0, Math.PI -0.5, 0]}
>
      <group scale={0.01}>
        <mesh geometry={nodes.Room_ROOM_Mat_0.geometry} material={materials.ROOM_Mat} position={[-19.137, 168.453, -33.842]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Window_WINDOW_Mat_0.geometry} material={materials.WINDOW_Mat} position={[-19.521, 166.582, -28.049]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Boxes_BOXES_Mat_0.geometry} material={materials.BOXES_Mat} position={[9.951, 142.012, 2.406]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      </group>
    </group>
  )
}

useGLTF.preload('models/late_night_office.glb')
