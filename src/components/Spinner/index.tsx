import React from "react"
import type { SpinnerProps } from "./types"
import {
  Container,
  SpinnerLabel,
  Overlay,
  SvgWrapper,
  TrackCircle,
  SpinnerCircle,
  DotsWrapper,
  Dot,
  BarTrack,
  BarFill,
  getSize,
} from "./styled"

function CircularSpinner({
  size = "md",
  color = "primary",
  thickness,
  value,
}: Pick<SpinnerProps, "size" | "color" | "thickness" | "value">) {
  const dim = getSize(size).circle
  const stroke = thickness ?? (size === "sm" ? 3 : size === "lg" ? 4.5 : 3.5)
  const radius = (dim - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const determinate = value !== undefined

  return (
    <SvgWrapper $size={size} viewBox={`0 0 ${dim} ${dim}`}>
      <TrackCircle
        cx={dim / 2}
        cy={dim / 2}
        r={radius}
        strokeWidth={stroke}
      />
      <SpinnerCircle
        $color={color}
        $determinate={determinate}
        cx={dim / 2}
        cy={dim / 2}
        r={radius}
        strokeWidth={stroke}
        strokeDasharray={determinate ? `${circumference}` : undefined}
        strokeDashoffset={
          determinate
            ? `${circumference - (Math.min(100, Math.max(0, value)) / 100) * circumference}`
            : undefined
        }
      />
    </SvgWrapper>
  )
}

function DotsSpinner({
  size = "md",
  color = "primary",
}: Pick<SpinnerProps, "size" | "color">) {
  return (
    <DotsWrapper>
      {[0, 1, 2].map((i) => (
        <Dot key={i} $color={color} $size={size} $index={i} />
      ))}
    </DotsWrapper>
  )
}

function BarSpinner({
  size = "md",
  color = "primary",
  value,
}: Pick<SpinnerProps, "size" | "color" | "value">) {
  const determinate = value !== undefined
  return (
    <BarTrack $size={size}>
      <BarFill $color={color} $determinate={determinate} $value={value ?? 0} />
    </BarTrack>
  )
}

function Spinner({
  size = "md",
  color = "primary",
  variant = "circular",
  label,
  value,
  overlay = false,
  thickness,
}: SpinnerProps) {
  const content = (
    <Container role="status" aria-label={label ?? "Loading"}>
      {variant === "circular" && (
        <CircularSpinner size={size} color={color} thickness={thickness} value={value} />
      )}
      {variant === "dots" && <DotsSpinner size={size} color={color} />}
      {variant === "bar" && <BarSpinner size={size} color={color} value={value} />}
      {label && <SpinnerLabel $size={size}>{label}</SpinnerLabel>}
    </Container>
  )

  if (overlay) return <Overlay>{content}</Overlay>
  return content
}

export default Spinner
