import  { useState } from "react";
import { ClinicInfoDiv, ClinicInfoText, ContactInfo, FormButton, FormDiv, FormInputs, FormInputsDiv, FormTextArea, MianDiv } from "./styled";
import { Breadcrumbs } from "../../components";
import productApi from "../../api/servicesApi";
import { toast } from "react-toastify";

export const AboutPage = () => {

    const [value, setValue] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const addMessage = async (e) => {
        e.preventDefault()
        try {
            setIsLoading(true)
            const response =  await productApi.sendMessage(value)
            console.log(response);
            setIsLoading(false)
            toast.success("Сообщение успешно отправлено")
        } catch (error) {
            console.log(error);

        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setValue(el => {
            return { ...el, [name]: value }
        })
    }
    return (
        <>
            <MianDiv>
                <Breadcrumbs title={"Dr. Faustova clinic"} />
                <ClinicInfoDiv>
                    <ClinicInfoText>
                        <h3>О клинике</h3><br />
                        <p>
                            Medical Beauty Centre Камелот являет собой клинику  а которой собраны  все возможные технологии которые существуют  в  современный косметологии от а до я  . Мы обладаем полным  “парком” косметологической аппаратуры от самых современных лазеров до микротоковой терапии.
                            Для решения эстетико возрастных задач  мы используем  самую современную инъекционную терапию и проверенные годами препаратами. И все это помножено на  наш 25+ летний опыт работы в индустрии.
                            Наш штат обладает огромным опытом в ведении пациентов многих профилей, однако именно косметологический является ведущим для нас.
                            А еще у нас вкусный кофе!
                        </p>
                    </ClinicInfoText>
                    <FormDiv onSubmit={addMessage}>
                        <h3>Форма обратной связи  </h3>
                        <FormInputsDiv> 
                            <FormInputs placeholder="Представьтесь" name="name" onChange={handleChange} required />
                            <FormInputs placeholder="Эл. почта или телефон" name="contact" onChange={handleChange} required type="email" />
                        </FormInputsDiv>
                        <FormTextArea placeholder="Ваше сообщение" name="text" onChange={handleChange} required />
                        <FormButton disabled={isLoading}>{isLoading ? "Отправляется..." : "Отправить сообщение"}</FormButton>
                    </FormDiv>
                    <ContactInfo>
                        <h3>Контакты</h3><br />

                        <p>Москва, Бутиковский переулок, д. 5, помещение 4/1 </p>
                        <p>Телефон: +7 (915) 354-99-95 </p>

                    </ContactInfo>
                </ClinicInfoDiv>
            </MianDiv>
        </>
    )
}