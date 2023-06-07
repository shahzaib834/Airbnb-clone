'use client';

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import useFavorite from "@/app/hooks/useFavorite";
import { User } from "@prisma/client";
import { useState } from "react";

interface HeartButtonProps {
  listingId: string
  currentUser?: User | null
}

const HeartButton: React.FC<HeartButtonProps> = ({ 
  listingId,
  currentUser
}) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    listingId,
    currentUser: currentUser || undefined
  });
  const [fav, setFav] = useState(hasFavorited);
  

  const toggleFavourite = async (e: React.MouseEvent<HTMLDivElement>) => {
    if (currentUser) setFav(!fav);
    try {
      await toggleFavorite(e);
    } catch (err) {
      setFav(hasFavorited)
      console.log(err);
    }
  }

  return (
    <div 
      onClick={toggleFavourite}
      className="
        relative
        hover:opacity-80
        transition
        cursor-pointer
      "
    >
      <AiOutlineHeart
        size={28}
        className="
          fill-white
          absolute
          -top-[2px]
          -right-[2px]
        "
      />
      <AiFillHeart
        size={24}
        className={
          fav ? 'fill-rose-500' : 'fill-neutral-500/70'
        }
      />
    </div>
   );
}
 
export default HeartButton;