import { BaseBoxShapeUtil, T, type TLBaseShape } from '@tldraw/tldraw'

export type CanvasFrameShape = TLBaseShape<
  'canvas-frame',
  {
    name: string
    frameType: string
    w: number
    h: number
  }
>

export class CanvasFrameShapeUtil extends BaseBoxShapeUtil<CanvasFrameShape> {
  static override type = 'canvas-frame' as const
  static override props = {
    name: T.string,
    frameType: T.string,
    w: T.number,
    h: T.number,
  }

  getDefaultProps(): CanvasFrameShape['props'] {
    return {
      name: 'Untitled Frame',
      frameType: 'dashboard',
      w: 1440,
      h: 800,
    }
  }

  component(shape: CanvasFrameShape) {
    return (
      <div
        style={{
          position: 'relative',
          width: shape.props.w,
          height: shape.props.h,
          backgroundColor: '#FFFFFF',
          border: '1px solid #E8E8E5',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          overflow: 'visible',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -24,
            left: 0,
            fontSize: 12,
            color: '#9B9B9B',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            userSelect: 'none',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}
        >
          {shape.props.name}
        </div>
      </div>
    )
  }

  indicator(shape: CanvasFrameShape) {
    return <rect width={shape.props.w} height={shape.props.h} />
  }
}
