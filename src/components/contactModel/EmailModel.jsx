
import { useGLTF } from '@react-three/drei'

export function EmailModel(props) {
  const { nodes, materials } = useGLTF('models/mail_icon.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials['Material.002']} />
      </group>
    </group>
  )
}

useGLTF.preload('models/mail_icon.glb')
