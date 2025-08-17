import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './ProductList.css';

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'Coin Tree Art',
      image: '/images/coin-tree-art.jpg',
      price: 3000.00,
      description: 'A unique coin tree art piece, symbolizing prosperity and growth.',
      fullDescription: 'This Coin Tree Art is meticulously handcrafted using recycled coins, carefully shaped and soldered onto a sturdy metal frame. Each leaf is individually placed to create a lush, vibrant canopy, symbolizing financial growth and stability. The base is made from reclaimed wood, giving it an earthy, rustic feel. Perfect for adding a touch of unique artistry and positive energy to any space.'
    },
    {
      id: 2,
      name: 'Dot Art Owl',
      image: '/images/dot-art-owl.jpg',
      price: 2200.50,
      description: 'Intricate dot art owl, representing wisdom and mystery.',
      fullDescription: 'Our Dot Art Owl is a masterpiece of precision and patience. Created on a high-quality canvas using fine acrylic paints, each dot is applied by hand with specialized tools to form intricate patterns. The owl\'s eyes are often highlighted with metallic paints to give them a captivating shimmer. This technique, inspired by indigenous art forms, results in a textured, vibrant piece that embodies wisdom and nocturnal beauty.'
    },
    {
      id: 3,
      name: 'Flower Vase Stand',
      image: '/images/flower-vase-stand.jpg',
      price: 2300.00,
      description: 'Elegant flower vase stand, perfect for enhancing your home decor.',
      fullDescription: 'This elegant Flower Vase Stand is crafted from sustainably sourced bamboo, known for its strength and light weight. The bamboo stalks are carefully cut, sanded, and then joined using traditional joinery techniques, avoiding the need for excessive glues or nails. The natural grain of the bamboo is preserved with a clear, non-toxic sealant, ensuring durability and a beautiful finish. Its minimalist design allows your floral arrangements to truly shine.'
    },
    {
      id: 4,
      name: 'Madhubani Fish Black White',
      image: '/images/madhubani-fish-black-white.jpg',
      price: 800.00,
      description: 'Traditional Madhubani fish painting in classic black and white.',
      fullDescription: 'A classic Madhubani Fish painting, rendered in striking black and white. This piece is hand-painted on handmade paper using natural vegetable dyes and black ink. The Madhubani art form, originating from the Mithila region of India, is characterized by its intricate geometric patterns and symbolic motifs. The fish symbolizes fertility and good luck, making this a meaningful addition to any art collection. Each line is drawn with precision, reflecting years of artistic tradition.'
    },
    {
      id: 5,
      name: 'Madhubani Fish Colorful',
      image: '/images/madhubani-fish-colorful.jpg',
      price: 1100.00,
      description: 'Vibrant Madhubani fish painting, bringing color and life.',
      fullDescription: 'This vibrant Madhubani Fish painting bursts with color, hand-painted on handmade paper using bright, natural vegetable dyes. The traditional Madhubani style, known for its intricate patterns and symbolic imagery, is brought to life with a lively palette. The fish motif, representing prosperity and abundance, is depicted with meticulous detail and bold outlines, making it a captivating piece that adds a splash of cultural richness to your space.'
    },
    {
      id: 6,
      name: 'Madhubani Peacock Black White',
      image: '/images/madhubani-peacock-black-white.jpg',
      price: 1800.00,
      description: 'Stunning Madhubani peacock art in a timeless black and white palette.',
      fullDescription: 'A stunning Madhubani Peacock art piece, presented in a timeless black and white palette. Hand-painted on handmade paper, this artwork showcases the intricate details and symbolic beauty of the peacock, a revered bird in Indian culture. The monochromatic scheme highlights the delicate lines and patterns characteristic of Madhubani art, offering a sophisticated and elegant representation of grace and beauty. Each feather and swirl is a testament to the artist\'s skill.'
    },
    {
      id: 7,
      name: 'Mirror Gold Bead Frame',
      image: '/images/mirror-gold-bead-frame.jpg',
      price: 850.00,
      description: 'Exquisite mirror with a gold bead frame, adding a touch of luxury.',
      fullDescription: 'This exquisite mirror features a frame meticulously adorned with hundreds of tiny gold beads, each hand-applied to create a rich, textured surface. The base frame is crafted from durable wood, ensuring longevity, and then finished with a lustrous gold paint before the beads are attached. The mirror itself is high-quality, providing a clear reflection. This piece is designed to add a touch of opulent luxury and intricate detail to any room.'
    },
    {
      id: 8,
      name: 'Mirror Gold Flower Frame',
      image: '/images/mirror-gold-flower-frame.jpg',
      price: 1100.00,
      description: 'Beautiful mirror with an ornate gold flower frame.',
      fullDescription: 'A truly beautiful mirror framed with an ornate gold flower design. The frame is hand-carved from lightweight yet sturdy wood, then meticulously painted with multiple layers of gold leaf and antique finishes to achieve a rich, aged look. Each flower petal is sculpted with care, giving the frame a three-dimensional quality. This mirror is a statement piece, perfect for bringing a touch of vintage elegance and floral charm to your home decor.'
    },
    {
      id: 9,
      name: 'Mirror Pearl Frame',
      image: '/images/mirror-pearl-frame.jpg',
      price: 1350.00,
      description: 'Elegant mirror adorned with delicate pearl accents.',
      fullDescription: 'This elegant mirror is adorned with delicate pearl accents, each carefully selected and hand-placed onto a sturdy, custom-built frame. The frame is finished with a soft, matte white paint to complement the pearls\' luster. The pearls are secured with strong adhesive, ensuring they remain in place for years to come. This piece exudes a timeless sophistication and adds a subtle touch of classic beauty and refinement to any interior.'
    },
    {
      id: 10,
      name: 'Mirror Spoons Colorful Flowers',
      image: '/images/mirror-spoons-colorful-flowers.jpg',
      price: 2300.00,
      description: 'Unique mirror crafted with colorful spoons forming floral patterns.',
      fullDescription: 'Unique mirror, its frame ingeniously crafted from recycled spoons. Each spoon is individually painted in vibrant, eye-catching colors and then arranged to form beautiful floral patterns around the mirror\'s edge. The spoons are securely attached to a durable backing, creating a playful yet artistic statement piece. This eco-friendly artwork is a testament to creative recycling and adds a whimsical, colorful touch to any modern or eclectic decor.'
    },
    {
      id: 11,
      name: 'Mirror Spoons Single',
      image: '/images/mirror-spoons-single.jpg',
      price: 1500.00,
      description: 'A minimalist mirror design featuring a single spoon accent.',
      fullDescription: 'This minimalist mirror design features a single, elegantly placed spoon accent, offering a subtle yet distinctive touch. The frame is made from smooth, polished wood, and the spoon, often a vintage or specially crafted piece, is securely integrated into the design. This mirror is perfect for those who appreciate understated elegance and unique, functional art. Its simplicity allows it to blend seamlessly into various decor styles while still making a quiet statement.'
    },
    {
      id: 12,
      name: 'Radha Krishna Swing Art',
      image: '/images/radha-krishna-swing-art.jpg',
      price: 3150.00,
      description: 'Devotional Radha Krishna art depicting them on a swing.',
      fullDescription: 'This devotional Radha Krishna Swing Art is hand-painted on a high-quality canvas using traditional Indian miniature painting techniques. Vibrant natural pigments are used to bring out the intricate details of their attire, expressions, and the lush surroundings. The swing itself is often depicted with delicate floral motifs, symbolizing eternal love and joy. This artwork is a labor of love, designed to evoke a sense of peace and spiritual devotion in your home.'
    },
    {
      id: 13,
      name: 'Triangle Shelves Colorful',
      image: '/images/triangle-shelves-colorful.jpg',
      price: 450.00,
      description: 'Modern and colorful triangle shelves for a playful display.',
      fullDescription: 'These modern and colorful Triangle Shelves are crafted from lightweight yet sturdy MDF wood. Each shelf is precisely cut into a triangular shape, sanded smooth, and then hand-painted with a vibrant, non-toxic, matte finish. The different colors are chosen to create a playful and dynamic display when arranged together. They are easy to mount and perfect for showcasing small plants, figurines, or other decorative items, adding a contemporary and cheerful touch to any wall.'
    },
    {
      id: 14,
      name: 'Wall Art Gold Black Abstract',
      image: '/images/wall-art-gold-black-abstract.jpg',
      price: 450.00,
      description: 'Contemporary abstract wall art in striking gold and black.',
      fullDescription: 'This contemporary Wall Art features a striking abstract design in gold and black. Created on a stretched canvas using a mix of acrylic paints and metallic leaf, the artist employs various techniques like impasto and layering to achieve depth and texture. The gold elements are often applied with a palette knife, creating a rich, shimmering effect against the deep black background. This piece is designed to be a focal point, adding modern sophistication and artistic flair to any living or office space.'
    },
    {
      id: 15,
      name: 'Wall Art Golden Leaves',
      image: '/images/wall-art-golden-leaves.jpg',
      price: 750.00,
      description: 'Elegant wall art featuring delicate golden leaves.',
      fullDescription: 'This elegant Wall Art features delicate golden leaves, meticulously hand-painted on a textured canvas. The leaves are often rendered with a combination of gold acrylics and subtle metallic powders to capture their natural shimmer and intricate vein patterns. The background is typically a soft, muted tone that allows the golden leaves to stand out. This artwork brings a touch of nature\'s serenity and luxurious warmth to your home, perfect for creating a calming and sophisticated ambiance.'
    },
    {
      id: 16,
      name: 'Wall Decor Geometric Flowers',
      image: '/images/wall-decor-geometric-flowers.jpg',
      price: 850.00,
      description: 'Stylish wall decor with intricate geometric flower designs.',
      fullDescription: 'This stylish Wall Decor features intricate geometric flower designs, precision-cut from lightweight yet durable wood or metal. Each piece is then hand-finished with a smooth, matte paint or a metallic coating. The geometric patterns are inspired by sacred geometry and modern design, creating a captivating visual effect. Easy to hang, this piece adds a contemporary and artistic dimension to any wall, perfect for those who appreciate clean lines and abstract beauty.'
    },
  ];

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price.toFixed(2)}</p>
          <p className="product-description">{product.description}</p>
          <Link to={`/product/${product.id}`} className="btn">View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;