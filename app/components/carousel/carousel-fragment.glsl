varying vec2 vUv;
uniform sampler2D currentImage;
uniform sampler2D nextImage;
uniform float dispFactor;
uniform float direction;
uniform bool reduceMotion;

void main() {
  vec2 uv = vUv;
  
  // Smooth slide and fade transition
  float slideAmount = 0.15;
  
  // Current image slides out
  vec2 currentUv = vec2(
    uv.x + direction * dispFactor * slideAmount,
    uv.y
  );
  
  // Next image slides in
  vec2 nextUv = vec2(
    uv.x - direction * (1.0 - dispFactor) * slideAmount,
    uv.y
  );
  
  vec4 _currentImage = texture2D(currentImage, currentUv);
  vec4 _nextImage = texture2D(nextImage, nextUv);
  
  // Smooth eased crossfade
  float easedFactor = dispFactor * dispFactor * (3.0 - 2.0 * dispFactor);
  vec4 finalTexture = mix(_currentImage, _nextImage, easedFactor);
  
  gl_FragColor = finalTexture;
}
