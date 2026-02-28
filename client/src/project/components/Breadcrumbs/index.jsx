import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./style.css"
import { SignUp } from '../sign';
import { MyBgcBlack } from '../bgc-black';
import { colors } from '../../assets/colors';
export const Breadcrumbs = ({ title, titlePart , service }) => {
    const location = useLocation(); // Получение текущего пути
    const pathnames = location.pathname.split('/').filter((x) => x); // Разбиваем путь на части
    const [value, setValue] = useState(false)
    
    return (
        <>
            <SignUp active={value} setActive={setValue} service={service} />
            <MyBgcBlack active={value} setActive={setValue} />

            <nav aria-label="breadcrumb" id='main' style={{backgroundColor : "#e6d9e6"}}>
                <ol style={{ display: 'flex', gap: '8px', listStyle: 'none', padding: 0 }}>
                    {/* Главная ссылка */}
                    <li>
                        <Link to="/" id='home' className='size' style={{color: colors.orangeColor}}>Главная</Link>
                        <span style={{ color: colors.orangeColor, padding: "0 5px" }} className='size'> /</span>

                    </li>
                    {pathnames.map((value, index) => {
                        const to = `/${pathnames.slice(0, index + 1).join('/')}`; // Формируем путь для ссылки
                        const isLast = index === pathnames.length - 1; // Проверяем, последний ли элемент

                        return (
                            <li key={to} >
                                {!isLast ? (
                                    <>
                                        <Link to={to} style={{ textDecoration: "none", color: colors.orangeColor }} className='size'>{title}</Link>
                                        <span style={{ color: colors.orangeColor, padding: "0 5px" }} className='size'> /</span>
                                    </>
                                ) : (
                                    <>

                                        <span className='size'>{titlePart || title}</span>
                                    </>
                                )}
                            </li>
                        );
                    })}
                </ol>
                <div id='title'>{location.pathname.split("/").length == 3 ? titlePart : title}</div>

               
                {!location.pathname.includes("equipments") && location.pathname.split("/").length == 3 && <button style={{background: colors.orangeColor}} id='button' onClick={() => setValue(e => !e)}>Записаться на услугу</button>}
            </nav>
        </>


    );
};

