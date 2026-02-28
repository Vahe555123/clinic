import  {useEffect} from "react";
import { CarouselDiv, MainDiv } from "./styled.jsx";
import { MapComponent, MyCarousel, MyDoctors, MyServices } from "../../components/index.jsx";
import { Chapter } from "../../components/chapter/index.jsx";
import { useLocation } from "react-router-dom";

export const MyHomePage = () => {
    const loc = useLocation()
    useEffect(() => {
        console.log(loc);
        
       setTimeout(() => {
        if (loc.state === "map") {
            const element = document.getElementById("map"); // Найти элемент по id
            if (element) {
              element.scrollIntoView({ behavior: "smooth", block: "start" }); // Плавный скролл
            }
          }
       }, 500);
      }, [loc.state]);
    return (
        <>
            <MainDiv>
                <CarouselDiv>

                    <MyCarousel
                        time={3000}
                        width="100%"
                        height="700px"
                        radius="20px"
                        captionPosition="bottom"
                        automatic={true}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        thumbnails={true}
                        thumbnailWidth="100px"
                        showNavBtn={true}
                        style={{
                            textAlign: "center",
                            maxWidth: "100%",
                            margin: "40px auto",
                        }}
                    />
                </CarouselDiv>
                <MyServices />
                <Chapter />
                <MyDoctors active={true} />
            </MainDiv>
            <div  id="map"> 
            <MapComponent/>

            </div>
        </>
    )
}