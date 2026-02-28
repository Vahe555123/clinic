import React, { useState } from "react";
import { CloseDiv, FormDiv, MainDiv, MoreInputs, MoreTextArea, PolicyInfo, ShowMore, ShowMoreForm, SignButton } from "./styled";
import { IoCloseOutline } from "react-icons/io5";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import productApi from "../../api/servicesApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
export const SignUp = ({ active, setActive, service }) => {
    const [value, setValue] = useState("");
    const [showMore, setShowMore] = useState(false);
    const [loading, setLoading] = useState(false);
    const [numberColor, setNumberColor] = useState(false);
    const handlePhoneChange = (e) => {
        if (!e) {
            setNumberColor(true)
        } else {
            setNumberColor(false)
        }
        setValue(el => {
            return { ...el, number: e }
        })
    };
    const handledataChange = (e) => {
        setValue(el => {
            return { ...el, [e.target.name]: e.target.value }
        })
    };
    const sendData = async () => {
        if (!value.number) {
            setNumberColor(true)
            return
        }
        setNumberColor(false)
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000);
        if (service) {
            value.service = service
        }

        const req = await productApi.createAuth(value)
        if (req.status == 201) {
            toast.success('Вы успешно записались!');
        } else {
            toast.error('Ошибка! Повторите попытку');
        }
        setLoading(false)

    }
    return (
        <MainDiv active={active}>
            <CloseDiv>
                <span onClick={() => setActive(e => !e)}><IoCloseOutline /></span>
            </CloseDiv>
            <FormDiv>
                <PhoneInput
                    country={"ru"}
                    onChange={handlePhoneChange}
                    enableSearch={true}
                    placeholder="Введите номер телефона"
                    inputStyle={{ width: "100%", border: numberColor ? "1.5px solid red" : "1.5px solid #cacaca" }}
                />
                <ShowMoreForm active={showMore}>
                    {showMore &&
                        <>
                            <MoreInputs placeholder="Имя, фамилия" name="name" onChange={handledataChange} />
                            <MoreInputs placeholder="Электронная почта" name="email" onChange={handledataChange} />
                            <MoreInputs type="datetime-local" name="date" onChange={handledataChange} />
                            <MoreTextArea placeholder="Комментарий" name="desc" onChange={handledataChange} />
                        </>
                    }

                </ShowMoreForm>
                <ShowMore onClick={() => setShowMore(e => !e)}>
                    Дополнительные параметры записи
                </ShowMore>
                <SignButton BgColor={"#a782a6"} color={"black"} onClick={sendData} disabled={loading}>{loading ? "loading..." : "Записатся"}</SignButton>
                <SignButton BgColor={"#198754"} color={"white"}><a href="https://wa.me/message/SPU35CS2VM5FO1?src=qr" target="_blank">Записаться через WhatsApp</a></SignButton>
                <PolicyInfo>
                    <div>Ознакомлен и согласен с условиями </div>
                    <Link to={"/policy"} onClick={() => setActive(e => !e)}>пользовательского соглашения</Link>
                </PolicyInfo>
            </FormDiv>

        </MainDiv>
    )
}
