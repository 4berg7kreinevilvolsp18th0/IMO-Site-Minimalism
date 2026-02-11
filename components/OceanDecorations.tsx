/* Декоративные элементы — Минимализм: почти ничего, тонкие линии */

/**
 * AngularDivider → тонкая горизонтальная линия
 */
export function AngularDivider({ className = '', flip = false }: { className?: string; flip?: boolean }) {
  return (
    <div className={`w-full ${flip ? 'rotate-180' : ''} ${className}`}>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

/**
 * NeonGrid → ничего (чистое пространство)
 */
export function NeonGrid() {
  return null;
}

/**
 * GlitchLine → ничего
 */
export function GlitchLine({ className: _className = '' }: { className?: string }) {
  return null;
}

/**
 * DotMatrix → ничего
 */
export function DotMatrix({ className: _className = '' }: { className?: string }) {
  return null;
}

/**
 * HexagonDecor → ничего
 */
export function HexagonDecor({ className: _className = '' }: { className?: string }) {
  return null;
}

/**
 * ScanlineOverlay → ничего
 */
export function ScanlineOverlay() {
  return null;
}

/* Обратная совместимость */
export const WaveDivider = AngularDivider;
export const WaveDividerSoft = AngularDivider;
export const FloatingBubbles = NeonGrid;
export function FloatingFish({ className = '' }: { className?: string }) {
  return <GlitchLine className={className} />;
}
export function SeaweedDecor({ className: _className = '' }: { className?: string }) {
  return null;
}
export const WavePattern = DotMatrix;
export const Compass = HexagonDecor;
