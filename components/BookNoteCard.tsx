import Image from "next/image";
import React from "react";

export type BookNoteCardProps = {
  text?: string;
  image?: any;
};

const BookNote = ({ text, image }: BookNoteCardProps) => {
  return (
    <div className="book-wrapper">
      <div className="book-items">
        <div className="main-book-wrap">
          <div className="book-cover">
            <div className="book-inside"></div>
            <div className="book-image">
              <Image
                className="w-40 h-80"
                src={image}
                alt="image2"
                width={500}
                height={500}
              />
              <div className="effect"></div>
              <div className="light"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNote;
