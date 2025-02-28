'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface ProductVariable {
  color?: string[];
  size?: string[];
}

export default function AddProductPage() {
  const router = useRouter();
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [colors, setColors] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
  const [newColor, setNewColor] = useState('');
  const [newSize, setNewSize] = useState('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const addColor = () => {
    if (newColor && !colors.includes(newColor)) {
      setColors([...colors, newColor]);
      setNewColor('');
    }
  };

  const addSize = () => {
    if (newSize && !sizes.includes(newSize)) {
      setSizes([...sizes, newSize]);
      setNewSize('');
    }
  };

  const removeColor = (colorToRemove: string) => {
    setColors(colors.filter(color => color !== colorToRemove));
  };

  const removeSize = (sizeToRemove: string) => {
    setSizes(sizes.filter(size => size !== sizeToRemove));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement product submission logic
    console.log({
      productName,
      description,
      imageFile,
      variables: {
        colors,
        sizes
      }
    });
  };

  return (
    <main className="min-h-screen bg-white pt-32 pb-16">
      <div className="container mx-auto max-w-2xl px-4">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-bold">ADD NEW PRODUCT</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Image Upload */}
          <div className="space-y-4">
            <label className="block text-xl font-bold">Product Image</label>
            <div className="flex flex-col items-center p-8 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
              {imagePreview ? (
                <div className="relative w-full max-w-md">
                  <img 
                    src={imagePreview} 
                    alt="Product preview" 
                    className="w-full h-64 object-contain"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setImageFile(null);
                      setImagePreview('');
                    }}
                    className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
                  >
                    ×
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="imageUpload"
                  />
                  <label
                    htmlFor="imageUpload"
                    className="cursor-pointer bg-gray-800 text-white px-6 py-3 rounded-lg inline-block"
                  >
                    Upload Image
                  </label>
                </div>
              )}
            </div>
          </div>

          {/* Product Name */}
          <div className="space-y-4">
            <label className="block text-xl font-bold">Product Name</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg"
              placeholder="Enter product name"
              required
            />
          </div>

          {/* Product Variables */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold">Product Variables</h2>
            
            {/* Colors */}
            <div className="space-y-4">
              <label className="block font-medium">Colors</label>
              <div className="flex gap-4">
                <input
                  type="text"
                  value={newColor}
                  onChange={(e) => setNewColor(e.target.value)}
                  className="flex-grow p-4 border border-gray-300 rounded-lg"
                  placeholder="Add a color"
                />
                <button
                  type="button"
                  onClick={addColor}
                  className="bg-gray-800 text-white px-6 py-4 rounded-lg"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                  <span
                    key={color}
                    className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-2"
                  >
                    {color}
                    <button
                      type="button"
                      onClick={() => removeColor(color)}
                      className="text-red-500"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="space-y-4">
              <label className="block font-medium">Sizes</label>
              <div className="flex gap-4">
                <input
                  type="text"
                  value={newSize}
                  onChange={(e) => setNewSize(e.target.value)}
                  className="flex-grow p-4 border border-gray-300 rounded-lg"
                  placeholder="Add a size"
                />
                <button
                  type="button"
                  onClick={addSize}
                  className="bg-gray-800 text-white px-6 py-4 rounded-lg"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <span
                    key={size}
                    className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-2"
                  >
                    {size}
                    <button
                      type="button"
                      onClick={() => removeSize(size)}
                      className="text-red-500"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <label className="block text-xl font-bold">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg min-h-[200px]"
              placeholder="Enter product description"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-gray-800 text-white px-8 py-4 rounded-lg font-medium"
            >
              ADD PRODUCT
            </button>
          </div>
        </form>
      </div>
    </main>
  );
} 