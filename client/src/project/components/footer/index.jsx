import React from "react";
import { AddressDiv, FoogterLogoImg, FoogterLogoText, FooterBottom, FooterBottomParts, FooterDiv, FooterLicenceTetx, FooterLogo, FooterMain, ImgDiv, LicencesSpan, NameService, PolicyDiv } from "./styled";
import { BsGeoAltFill } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import { LiaTelegramPlane } from "react-icons/lia";
import img18 from "../../assets/image/footer/img18.png"
import { useLocation } from "react-router-dom";
import footerImg from '../../assets/image/logo/footer-logo.png'
import { useNavigate } from "react-router-dom";

export const MyFooter = () => {
    const loc = useLocation()
    const navigate = useNavigate();
    const handleScroll = () => {
        navigate("/");
        setTimeout(() => {
            const element = document.getElementById("map");
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }, 0);
    };
    return (
        <>
            {loc?.pathname != "/price" &&

                <FooterDiv>
                    <FooterMain>
                        <FooterLogo>
                            <FoogterLogoImg>
                                <img src={footerImg} width={"100%"} />
                            </FoogterLogoImg>
                            <FoogterLogoText>
                                Клиника косметологии и интегративной медицины Medical Beauty Center Kamelot
                            </FoogterLogoText>
                        </FooterLogo>
                        <AddressDiv>
                            <div>
                                <span><BsGeoAltFill /></span>
                                <div>Москва, Бутиковский переулок, д. 5, помещение 4/1</div>
                            </div>
                            <div>
                                <span><IoCall /></span>
                                <div>+7 (915) 354-99-95 </div>
                            </div>
                            {/* <div>
                            <span><LiaTelegramPlane /></span>
                            <div>@NICKNAME</div>

                        </div> */}
                        </AddressDiv>
                    </FooterMain>
                    <FooterBottom>
                        <FooterBottomParts>
                            <ImgDiv>
                                <img src={img18} width={"100%"} height={"100%"} />
                            </ImgDiv>
                            <FoogterLogoText>
                                Необходима консультация специалиста.<br />
                                Имеются противопоказания.
                            </FoogterLogoText>
                        </FooterBottomParts>
                        <FooterBottomParts>
                            <FooterLicenceTetx >
                                <span>Лицензия</span>

                                <LicencesSpan>
                                    ЛИЦЕНЗИЯ
                                </LicencesSpan>

                                <span>от 10.11.2023</span>
                            </FooterLicenceTetx>
                        </FooterBottomParts>
                        <FooterBottomParts>
                            <PolicyDiv>
                                <LicencesSpan to={"/policy"}>
                                    Политика обработки персональных данных
                                </LicencesSpan>
                                <LicencesSpan to={"/"} state={"map"}>
                                    Как проехать к клинике
                                </LicencesSpan>
                            </PolicyDiv>

                        </FooterBottomParts>
                    </FooterBottom>
                    <NameService>
                        ©2024 R'SOFT | Все права защищены
                    </NameService>
                </FooterDiv>
            }
        </>
    )
}