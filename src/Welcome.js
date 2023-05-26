import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Text } from '@react-three/drei'
import { Float } from '@react-three/drei'

export default function Welcome(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/static/Fox.glb");
  const { actions } = useAnimations(animations, group);
  const resize = 20

  return (
    <group>
      <mesh position-y={0} rotation-x={- Math.PI * 0.5} scale={resize}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
      <mesh position-y={resize * 0.25} position-z={-resize * 0.5} scale={[resize, resize * 0.5, resize]}>
        <planeGeometry />
        <meshStandardMaterial color="blue" />
      </mesh>
      <mesh position-y={resize * 0.25} position-z={resize * 0.5} scale={[resize, resize * 0.5, resize]} rotation-x={-Math.PI}>
        <planeGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh position-y={resize * 0.25} position-x={-resize * 0.5} scale={[resize, resize * 0.5, resize]} rotation-y={Math.PI * 0.5}>
        <planeGeometry />
        <meshStandardMaterial color="purple" />
      </mesh>

      <mesh position-y={resize * 0.25} position-x={resize * 0.5} position-z={resize * 0.25} scale={[resize * 0.5, resize * 0.5, resize]} rotation-y={-Math.PI * 0.5}>
        <planeGeometry />
        <meshStandardMaterial color="green" />
      </mesh>

      <mesh position-y={resize * 0.25} position-x={resize * 0.5} position-z={-resize * 0.25} scale={[resize * 0.5, resize * 0.5, resize]} rotation-y={-Math.PI * 0.5}>
        <planeGeometry />
        <meshStandardMaterial color="gray" />
      </mesh>
      <Float speed={0}>
        <Text
          font="./bangers-v20-latin-regular.woff"
          fontSize={0.5}
          color="Black"
          position-y={3.2}
          maxWidth={5}
          textAlign="center"
        >
          
          <mesh position={[0, 0, -0.01]}>
            <planeGeometry args={[8, 2]}/>
            <meshBasicMaterial color="white" transparent opacity={0.8} />
          </mesh>
          Bienvenido a la civilizacion china
        </Text>
      </Float>
    </group>
  );
}

useGLTF.preload("/static/Fox.glb");
