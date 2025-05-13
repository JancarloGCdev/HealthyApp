"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ArticleProps {
  title: string;
  excerpt: string;
  link: string;
  imageSrc?: string; // Nueva propiedad para la URL de la imagen
  imageAlt?: string; // Nueva propiedad para el texto alternativo de la imagen
}

export default function ArticlePreview({
  title,
  excerpt,
  link,
  imageSrc,
  imageAlt,
}: ArticleProps) {
  const router = useRouter()
  return (
    <div className="border p-4 rounded-lg shadow mb-4 cursor-pointer transform transition-transform duration-200 hover:scale-101"

    onClick={()=>router.push(link)}>
      {imageSrc && (
        <div className="mb-4">
          <Image 
            src={imageSrc} 
            alt={imageAlt || title} 
            layout="responsive" // Esto hace que la imagen sea flexible
            width={400} // Ancho original de la imagen (puedes ajustarlo)
            height={200} // Altura de la imagen, ajustando la relación de aspecto
            className="object-cover rounded-lg w-full" // Hace que la imagen ocupe el 100% del ancho
          
          />
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-3 text-gray-700">{excerpt}</p>
      <a href={link} className="text-green-700 underline">Read More</a>
    </div>
  );
}
