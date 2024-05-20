import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ItemsList from "./components/ItemsList";
// import { useState } from 'react';

const App = () => {
  const API_images =
    "https://pixabay.com/api/?key=42970270-5c418c11121e28ec5bd2aa090";

  let [searchTerm, setSearchTerm] = useState("");
  const [gallery, setGallery] = useState([
    {
      id: 8688169,
      pageURL:
        "https://pixabay.com/photos/daisy-bellis-perennis-enduring-8688169/",
      type: "photo",
      tags: "daisy, bellis perennis, enduring",
      previewURL:
        "https://cdn.pixabay.com/photo/2024/04/10/14/23/daisy-8688169_150.jpg",
      previewWidth: 150,
      previewHeight: 100,
      webformatURL:
        "https://pixabay.com/get/gb723ee85b8b27ebd7df30299b3cf36e4221243ae45f4d34420bb7f60020515b5b0a381b2a65082fd418eee30299480c9a0888a09c320f0d46b52561597921fb6_640.jpg",
      webformatWidth: 640,
      webformatHeight: 427,
      largeImageURL:
        "https://pixabay.com/get/g6cc62c62d07d4d7c11ae08d5f8d85bb21d254a01c220445f5091315ba48a4c259b4f992599afcd58c8be475b2b432d2d0359dbfd29c0acc89dba316cd67e81ae_1280.jpg",
      imageWidth: 6240,
      imageHeight: 4160,
      imageSize: 3057155,
      views: 2918,
      downloads: 2781,
      collections: 2,
      likes: 54,
      comments: 13,
      user_id: 10084616,
      user: "Nennieinszweidrei",
      userImageURL:
        "https://cdn.pixabay.com/user/2022/12/04/11-13-16-116_250x250.png",
    },
    {
      id: 8689696,
      pageURL:
        "https://pixabay.com/photos/daisy-bellis-perennis-enduring-8689696/",
      type: "photo",
      tags: "daisy, bellis perennis, enduring",
      previewURL:
        "https://cdn.pixabay.com/photo/2024/04/11/11/27/daisy-8689696_150.jpg",
      previewWidth: 150,
      previewHeight: 100,
      webformatURL:
        "https://pixabay.com/get/g2caa50a889db031db51518814aa0da3dd88fcbd3ad0ac2e40f5b2ba01a06b540da010cc316136370c9d234af0523058b8afccb1146be6aed56b3da1a786a40d5_640.jpg",
      webformatWidth: 640,
      webformatHeight: 427,
      largeImageURL:
        "https://pixabay.com/get/g749f9f3eb6935bac81b3e9f5960a25083b273365e5723f2229f5e682d1eda9e96b82988ee50f43b768020bd0583fe9fdf136b158899ced8d7f2b8add0889555a_1280.jpg",
      imageWidth: 6000,
      imageHeight: 4000,
      imageSize: 4580108,
      views: 2454,
      downloads: 2338,
      collections: 5,
      likes: 44,
      comments: 7,
      user_id: 10084616,
      user: "Nennieinszweidrei",
      userImageURL:
        "https://cdn.pixabay.com/user/2022/12/04/11-13-16-116_250x250.png",
    },
    {
      id: 5095531,
      pageURL:
        "https://pixabay.com/photos/marguerite-flower-korbl%C3%BCtler-spring-5095531/",
      type: "photo",
      tags: "marguerite, nature, flower",
      previewURL:
        "https://cdn.pixabay.com/photo/2020/04/26/14/44/marguerite-5095531_150.jpg",
      previewWidth: 150,
      previewHeight: 100,
      webformatURL:
        "https://pixabay.com/get/g51992d185870e996f4005a9364919ab750a82f4ebb86abd9dc1e9f163e16a986079e393ae0903bcba19aed7b85fc8bddeab6e673587b9f471fa2483c44ad5216_640.jpg",
      webformatWidth: 640,
      webformatHeight: 427,
      largeImageURL:
        "https://pixabay.com/get/gd3cd571887f61bfdcafef70d0e18d59f9f333fd5730fff9127de904167b2ac4f9f04883efad92617588aba998316345c9cd45fc262d6e840d7ef4ce1c77d9d56_1280.jpg",
      imageWidth: 6000,
      imageHeight: 4001,
      imageSize: 3276087,
      views: 4421,
      downloads: 3493,
      collections: 2,
      likes: 23,
      comments: 20,
      user_id: 7477911,
      user: "WFranz",
      userImageURL:
        "https://cdn.pixabay.com/user/2020/08/11/23-02-43-364_250x250.jpg",
    },
  ]);

  const searchImages = async (title) => {
    const response = await fetch(
      `${API_images}&q=${title}&image_type=photo&pretty=true&orientation=horizontal`
    );
    const data = await response.json();
    // console.log(data.hits);
    return data.hits;
  };

  useEffect(() => {
    // searchImages("coffee").then((result) => {
    //   setGallery(result);
    // });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1 className="text">Search image</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-9">
            <div className="wrap">
              <div className="search">
                <input
                  type="text"
                  className="searchTerm"
                  placeholder="What are you looking for?"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <button
                  type="submit"
                  className="searchButton"
                  onClick={() => {
                    searchImages(searchTerm).then((result) => {
                      setGallery(result);
                    });
                  }}
                >
                  🔍
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-3">
        <div className="main row justify-content-center">
          {gallery?.length === 0 ? (
            <div>
                <h2 className="text2">Nothing found...</h2>
              </div>
            ) : ( 
              <ItemsList images={gallery} />
              )}
        </div>
      </div>
      <footer>
        <div className="d-flex flex-column flex-sm-row justify-content-center py-2 my-1 text-white">
          <p className="text-align-center">Powered by React and pixabay <br/> &copy; hmarchen 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
