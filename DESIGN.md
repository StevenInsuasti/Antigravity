# Design System: MiLandingPage (Jim's Motorworks)

This document outlines the design tokens, typography, and layout structure extracted from the Stitch project 'MiLandingPage' (Landing Page Design Recreation).

## Color Palette

### Base Colors
- **Primary Background:** `#000000` (Black)
- **Secondary Background:** `#0a0a0a` (Dark Gray)
- **Surface/Cards:** `#1a1a1a` (Card BG), `Zinc-900`, `Zinc-950`
- **Text Primary:** `#ffffff` (White)
- **Text Secondary:** `Gray-300`, `Gray-400`
- **Text Muted/Metadata:** `Gray-500`, `Gray-600`

### Accents & UI Elements
- **Interactive:** White (Buttons, Borders)
- **Status/Feedback:** Yellow (Star ratings)
- **Gradients:** 
  - `Hero Gradient`: `linear-gradient(135deg, #111111 0%, #000000 100%)`

---

## Typography

### Font Families
- **Sans-serif:** Standard system sans (Inter, Arial, Helvetica) with `antialiased` rendering.

### Hierarchy
- **Hero Heading:** `5xl` (48px+), Font-black, Tracking-tighter
- **Section Headings:** `4xl` (36px), Font-bold
- **Sub-headings:** `lg` (18px) to `xl` (20px), Font-bold
- **Body Text:** `sm` (14px), Leading-relaxed
- **Small Text/Labels:** `xs` (12px), `10px` (Metadata), Uppercase with tracking-widest

---

## Layout Structure

### 1. Navigation Header
- **Container:** Max-width `6xl` (72rem)
- **Alignment:** Flex justify-between
- **Style:** Border-bottom (`Gray-800`), standard horizontal padding.

### 2. Hero Banner
- **Structure:** Split layout (Horizontal on Desktop, Vertical on Mobile).
- **Features:** 
  - Product thumbnail sidebar (Left/Top)
  - Centered main product image
  - Descriptive text and CTA buttons (Right/Bottom)

### 3. About Section
- **Structure:** Two-column grid.
- **Visuals:** High-contrast text against black background, grayscale images with hover transitions.

### 4. Reviews Section
- **Structure:** Perspective-based layout.
- **Visuals:** Featured center card with skewed "perspective" cards on the sides to create depth.

### 5. Chat Interface
- **Structure:** Centered window (`Max-width 4xl`).
- **Visuals:** Zinc-themed window with rounded corners, distinct outgoing (White/Black) and incoming (Zinc-800/White) message bubbles.

### 6. Footer
- **Structure:** Multi-column with brand info, site navigation, and support contact.
- **Style:** Zinc-950 background, border-top, minimal metadata typography.
