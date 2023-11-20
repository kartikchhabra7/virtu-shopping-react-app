import React from "react";
import Image from "../image/Images";

const ThirdSection = () => {
  const altImage="image not found"
  return (
    <>
      <div className="container">
        <div className="row">
          <section className="d-flex justify-content-center mt-5 mb-5">
            <div>
              <Image
                className="third-section"
                src="https://ik.imagekit.io/theartling/prod/tr:w-520,h-520,bg-FFFFFF/dynamic_images/Image/ad497378b24f4087995bea9d4e9719d4.JPG"
                alt={altImage}
              />{" "}
              <br />
              <h6 className="mx-4">Design Objects</h6>
            </div>
            <div>
              <Image
                src="https://ik.imagekit.io/theartling/prod/tr:w-520,h-520,bg-FFFFFF/dynamic_images/Image/75e6ad5d1c0840168c39f32d67a7d249.jpg"
                className="third-section"
                alt={altImage}
              />{" "}
              <br />
              <h6>Furniture Painting</h6>
            </div>
            <div>
              <Image
                src="https://ik.imagekit.io/theartling/prod/tr:w-520,h-520,bg-FFFFFF/dynamic_images/Image/a5cd9baac7624f15b695a1937b674f78.jpg"
                className="third-section"
                alt={altImage}
              />{" "}
              <br />
              <h6>Lights Painting</h6>
            </div>
            <div>
              <Image
                src="https://ik.imagekit.io/theartling/prod/tr:w-520,h-520,bg-FFFFFF/dynamic_images/Image/7d3648d9a83f4bebbb5906d2ee60a34b.jpg"
                className="third-section"
                alt={altImage}
              />{" "}
              <br />
              <h6>Table Painting</h6>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ThirdSection;
