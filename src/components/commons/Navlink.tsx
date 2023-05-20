import React, { useEffect, useState } from "react";

interface NavLinkProps {
  name: string;
  image: Promise<typeof import("*.svg")>;
}

const NavLink: React.FC<NavLinkProps> = ({ name, image }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      const importedImage = await image;
      setImageSrc(importedImage.default || null);
    };

    fetchImage();
  }, [image]);
  return (
    <div className="flex flex-row py-3 items-center">
      {imageSrc && (
        <img
          src={imageSrc}
          className="mr-2"
          style={{ height: 16, width: 16 }}
          alt={name}
        />
      )}
      <p
        style={{ color: "rgba(33, 63, 125, 1)" }}
        className=" text-md capitalize"
      >
        {name}
      </p>
    </div>
  );
};

export default NavLink;
