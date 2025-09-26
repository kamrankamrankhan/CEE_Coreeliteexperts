# 3D Scroll Animations Guide

This guide explains how to use the 3D scroll animations in your CEE Company website.

## 🎯 **Available 3D Components**

### 1. **ScrollTriggeredScene** - Lightweight Section Animations
Perfect for adding 3D effects to specific page sections.

```tsx
import ScrollTriggeredScene from '@/components/3d/ScrollTriggeredScene'

// Basic usage
<ScrollTriggeredScene height="50vh" />

// With custom settings
<ScrollTriggeredScene 
  height="100vh" 
  intensity={1.5} 
  shapeCount={6} 
/>
```

**Props:**
- `height`: Height of the 3D scene (default: "50vh")
- `intensity`: Animation intensity multiplier (default: 1)
- `shapeCount`: Number of geometric shapes (default: 5)
- `className`: Additional CSS classes

### 2. **ScrollThreeScene** - Full-Screen Scroll Animations
Creates immersive full-screen 3D experiences.

```tsx
import ScrollThreeScene from '@/components/3d/ScrollThreeScene'

<ScrollThreeScene height="100vh" />
```

**Features:**
- 6 different geometric shapes
- Scroll-responsive transformations
- Theme-aware colors
- Camera movement based on scroll

### 3. **ParticleScrollScene** - Dynamic Particle Systems
Thousands of animated particles that respond to scroll.

```tsx
import ParticleScrollScene from '@/components/3d/ParticleScrollScene'

<ParticleScrollScene 
  height="100vh" 
  particleCount={1000} 
/>
```

**Props:**
- `height`: Height of the scene
- `particleCount`: Number of particles (max: 2000)

### 4. **ThreeScene** - Standalone Interactive Scene
Continuous 3D animation independent of scroll.

```tsx
import ThreeScene from '@/components/3d/ThreeScene'

<ThreeScene className="shadow-2xl" />
```

## 🚀 **How to Use**

### **Basic Integration**

1. **Import the component:**
   ```tsx
   import ScrollTriggeredScene from '@/components/3d/ScrollTriggeredScene'
   ```

2. **Add to your page:**
   ```tsx
   <section className="relative min-h-screen">
     {/* 3D Background */}
     <div className="absolute inset-0 z-0">
       <ScrollTriggeredScene height="100vh" />
     </div>
     
     {/* Content Overlay */}
     <div className="relative z-10">
       <h1>Your Content Here</h1>
     </div>
   </section>
   ```

### **Advanced Usage**

```tsx
<section className="relative min-h-screen bg-gradient-primary overflow-hidden">
  {/* 3D Background with Custom Settings */}
  <div className="absolute inset-0 z-0">
    <ScrollTriggeredScene 
      height="100vh" 
      intensity={2.0} 
      shapeCount={8} 
    />
  </div>
  
  {/* Content with Proper Z-Index */}
  <div className="container-custom relative z-10 text-center">
    <h1 className="text-6xl font-bold text-white">
      Interactive 3D Experience
    </h1>
  </div>
</section>
```

## 🎨 **Customization Options**

### **Colors**
All components automatically adapt to your theme:
- **Light Mode**: Vibrant, professional colors
- **Dark Mode**: Softer, eye-friendly colors

### **Animation Intensity**
Control how dramatic the animations are:
- `intensity={0.5}` - Subtle movements
- `intensity={1.0}` - Standard animations
- `intensity={2.0}` - Dramatic effects

### **Shape Count**
Adjust performance vs. visual richness:
- `shapeCount={3}` - Lightweight, minimal
- `shapeCount={6}` - Balanced performance
- `shapeCount={8}` - Rich visual experience

## 📱 **Performance Considerations**

### **Best Practices**
1. **Use Intersection Observer**: Components automatically pause when not visible
2. **Limit Shape Count**: More shapes = more performance impact
3. **Responsive Heights**: Use viewport units for consistent performance
4. **Z-Index Management**: Ensure proper layering of 3D and content

### **Performance Tips**
- Use `shapeCount={3-5}` for mobile devices
- Use `shapeCount={6-8}` for desktop
- Avoid multiple 3D scenes on the same page
- Use `height="50vh"` for smaller sections

## 🔧 **Technical Details**

### **Technologies Used**
- **Three.js**: 3D graphics rendering
- **WebGL**: Hardware acceleration
- **React Hooks**: State management
- **Intersection Observer**: Performance optimization

### **Browser Support**
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### **Mobile Performance**
- Automatic quality adjustment
- Touch-friendly interactions
- Battery optimization
- Responsive design

## 📝 **Example Implementations**

### **Hero Section with 3D Background**
```tsx
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* 3D Background */}
  <div className="absolute inset-0 z-0">
    <ParticleScrollScene height="100vh" particleCount={800} />
  </div>
  
  {/* Content */}
  <div className="container-custom relative z-10 text-center">
    <h1 className="text-6xl font-bold text-white">
      Welcome to CEE Company
    </h1>
  </div>
</section>
```

### **Feature Section with Scroll Animation**
```tsx
<section className="section-padding bg-white dark:bg-secondary-900">
  <div className="container-custom">
    <h2>Our Features</h2>
    <p>Scroll to see 3D animations</p>
  </div>
  
  {/* 3D Animation */}
  <div className="relative h-96">
    <ScrollTriggeredScene height="100%" intensity={1.2} />
  </div>
</section>
```

## 🎯 **Use Cases**

### **Perfect For:**
- Hero sections
- Feature showcases
- Service presentations
- Portfolio displays
- Interactive backgrounds

### **Avoid Using For:**
- Text-heavy content sections
- Forms or input areas
- Critical navigation elements
- Performance-sensitive pages

## 🚀 **Getting Started**

1. **Start Simple**: Begin with `ScrollTriggeredScene` for basic effects
2. **Test Performance**: Monitor frame rates on different devices
3. **Customize Gradually**: Adjust intensity and shape count as needed
4. **Layer Content**: Use proper z-index for content overlay

## 🔮 **Future Enhancements**

- **Custom Geometries**: Add your own 3D models
- **Animation Presets**: Pre-built animation patterns
- **Interactive Controls**: Mouse and touch interactions
- **Advanced Effects**: Post-processing and shaders

---

For more examples and advanced usage, visit `/3d-demo` page on your website!
