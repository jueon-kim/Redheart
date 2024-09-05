import * as THREE from 'three'
import { extend } from '@react-three/fiber'

// BentPlaneGeometry 클래스: 커브된 평면 지오메트리를 생성하는 클래스
// Paul West @prisoner849에 의해 만들어진 방법론을 기반으로 함
class BentPlaneGeometry extends THREE.PlaneGeometry {
  constructor(radius, ...args) {
    super(...args)
    
    // 평면의 절반 너비를 계산
    let p = this.parameters
    let hw = p.width * 0.5

    // 평면의 세 점을 정의하여 커브 계산에 사용
    let a = new THREE.Vector2(-hw, 0)
    let b = new THREE.Vector2(0, radius)
    let c = new THREE.Vector2(hw, 0)

    // 두 벡터의 차를 계산하여 커브의 반지름과 중심을 구함
    let ab = new THREE.Vector2().subVectors(a, b)
    let bc = new THREE.Vector2().subVectors(b, c)
    let ac = new THREE.Vector2().subVectors(a, c)

    // 삼각형의 외접원의 반지름을 계산
    let r = (ab.length() * bc.length() * ac.length()) / (2 * Math.abs(ab.cross(ac)))

    // 커브의 중심점을 계산
    let center = new THREE.Vector2(0, radius - r)

    // 기본 벡터를 중심으로 회전시켜 커브를 형성
    let baseV = new THREE.Vector2().subVectors(a, center)
    let baseAngle = baseV.angle() - Math.PI * 0.5
    let arc = baseAngle * 2

    // 평면의 위치와 UV 속성을 가져옴
    let uv = this.attributes.uv
    let pos = this.attributes.position
    let mainV = new THREE.Vector2()

    // 각 UV 좌표에 대해 평면의 위치를 커브에 맞게 조정
    for (let i = 0; i < uv.count; i++) {
      let uvRatio = 1 - uv.getX(i)
      let y = pos.getY(i)
      mainV.copy(c).rotateAround(center, arc * uvRatio)
      pos.setXYZ(i, mainV.x, y, -mainV.y)
    }
    pos.needsUpdate = true
  }
}

// MeshSineMaterial 클래스: 물결치는 효과를 내는 커스텀 메쉬 재질
class MeshSineMaterial extends THREE.MeshBasicMaterial {
  constructor(parameters = {}) {
    super(parameters)
    this.setValues(parameters)
    this.time = { value: 0 } // 시간 유니폼 설정
  }

  // 셰이더 컴파일 전에 커스텀 셰이더 코드를 삽입
  onBeforeCompile(shader) {
    shader.uniforms.time = this.time

    // 셰이더의 vertexShader 부분에 시간 유니폼 추가
    shader.vertexShader = `
      uniform float time;
      ${shader.vertexShader}
    `
    
    // vertexShader의 기본 vertex 변환 코드를 커스텀 코드로 대체
    shader.vertexShader = shader.vertexShader.replace(
      '#include <begin_vertex>',
      `vec3 transformed = vec3(position.x, position.y + sin(time + uv.x * PI * 4.0) / 4.0, position.z);`
    )
  }
}

// THREE.js와 react-three-fiber에 커스텀 클래스를 확장시킴
extend({ MeshSineMaterial, BentPlaneGeometry })
