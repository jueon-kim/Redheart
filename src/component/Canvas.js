import React, { useRef, useState } from 'react';
import { Canvas as ThreeCanvas, useFrame } from '@react-three/fiber';
import { Image, ScrollControls, useScroll, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { easing } from 'maath';

function Rig(props) {
  const ref = useRef();
  const scroll = useScroll();
  const [hasRotated, setHasRotated] = useState(false);

  useFrame((state, delta) => {
    if (!hasRotated) {
      ref.current.rotation.y = Math.PI * 2;
      setHasRotated(true);
    } else {
      const centerOffset = 0.5;
      const adjustedOffset = scroll.offset - centerOffset;
      ref.current.rotation.y = -adjustedOffset * (Math.PI * 2);
    }

    state.events.update();
    easing.damp3(state.camera.position, [-state.pointer.x * 5, state.pointer.y + 0.5, 9], 0.2, delta);
    state.camera.lookAt(0, 0, 0);
  });

  return <group ref={ref} {...props} />;
}

function Carousel({ radius = 1.4, count = 7, device }) {
  const adjustedRadius = device === 'mobile' ? 0.5 : device === 'tablet' ? 0.5 : 1.4;
  const imageScale = device === 'mobile' ? [0.9, 0.9, 1] : device === 'tablet' ? [1, 1.1, 1] : [2, 1.3, 1];
  const cardWidth = device === 'mobile' ? 0.5 : device === 'tablet' ? 0.45 : 0.6;
  const cardHeight = device === 'mobile' ? 0.5 : device === 'tablet' ? 0.5 : 0.8;

  return Array.from({ length: count }, (_, i) => (
    <Card
      key={i}
      url={`/img/img${Math.floor(i % 10) + 1}_.JPG`}
      position={[
        Math.sin((i / count) * Math.PI * 2) * adjustedRadius,
        0,
        Math.cos((i / count) * Math.PI * 2) * adjustedRadius,
      ]}
      rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
      scale={imageScale}
      width={cardWidth}
      height={cardHeight}
    />
  ));
}

function Card({ url, scale, width, height, ...props }) {
  const ref = useRef();

  useFrame((state, delta) => {
    easing.damp3(ref.current.scale, scale, 0.1, delta);
  });

  return (
    <Image
      ref={ref}
      url={url}
      transparent
      side={THREE.DoubleSide}
      {...props}
      scale={scale}
      style={{ borderRadius: '50px' }}
    >
      <planeGeometry args={[width, height]} />
    </Image>
  );
}

function Banner({ device, ...props }) {
  const ref = useRef();
  const texture = useTexture('/img/Banner.JPEG');
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  const scroll = useScroll();

  const bannerRadius = device === 'mobile' ? 0.5 : device === 'tablet' ? 0.8 : 1.75;
  const bannerHeight = device === 'mobile' ? 0.06 : device === 'tablet' ? 0.1 : 0.14;

  useFrame((state, delta) => {
    ref.current.material.map.offset.x += delta / 1;
  });

  return (
    <mesh ref={ref} {...props}>
      <cylinderGeometry args={[bannerRadius, bannerRadius, bannerHeight, 120, 10, true]} />
      <meshBasicMaterial map={texture} side={THREE.DoubleSide} toneMapped={false} />
    </mesh>
  );
}

const CanvasComponent = ({ device }) => (
  <div className="canvas-wrapper">
    <ThreeCanvas camera={{ position: [0, 0, 300], fov: 15 }}>
      <fog attach="fog" args={['#a79', 8.5, 13]} />
      <ScrollControls pages={5}>
        <Rig rotation={[0, 0, 0.05]}>
          <Carousel device={device} />
        </Rig>
        <Banner device={device} position={[0, -0.3, -0.2]} />
      </ScrollControls>
    </ThreeCanvas>
  </div>
);

export default CanvasComponent;
