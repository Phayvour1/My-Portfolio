// scripts/generate-og.mjs
import { createCanvas } from 'canvas'
import { writeFileSync, mkdirSync, existsSync } from 'fs'
import { join } from 'path'

// Ensure public directory exists
if (!existsSync('./public')) {
  mkdirSync('./public')
}

const canvas = createCanvas(1200, 630)
const ctx = canvas.getContext('2d')

// Background
ctx.fillStyle = '#0a0a0a'
ctx.fillRect(0, 0, 1200, 630)

// Accent line
ctx.fillStyle = '#ffffff'
ctx.fillRect(80, 80, 2, 120)

// Name
ctx.fillStyle = '#ffffff'
ctx.font = 'bold 72px sans-serif'
ctx.fillText('Favour Falola', 100, 160)

// Role
ctx.fillStyle = 'rgba(255,255,255,0.5)'
ctx.font = '28px monospace'
ctx.fillText('Software Engineer — Lagos, Nigeria', 100, 220)

// Domain
ctx.fillStyle = 'rgba(255,255,255,0.25)'
ctx.font = '22px monospace'
ctx.fillText('falolafavour.vercel.app', 100, 560)

writeFileSync('./public/og-image.png', canvas.toBuffer('image/png'))
console.log('OG image generated.')
