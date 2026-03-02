import styled from "styled-components";
import { colors } from "../../assets/colors";

export const MainDiv = styled.div`
    min-height: 100vh;
    margin-bottom: 100px;
`

export const InfoDiv = styled.div`
    display: flex;
    @media(max-width: 900px) {
        flex-direction: column;
    }
`

export const Sidebar = styled.div`
    width: 280px;
    min-width: 280px;
    position: ${({ $sticky }) => $sticky ? "fixed" : "static"};
    top: 0;
    left: 0;
    height: 100vh;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 30px 20px;
    background: #fafafa;
    border-right: 1px solid #eee;
    @media(max-width: 900px) {
        display: none;
    }
`

export const SidebarItem = styled.a`
    font-size: 14px;
    color: ${({ $active }) => $active ? colors.orangeColor : "#555"};
    cursor: pointer;
    font-weight: ${({ $active }) => $active ? '700' : '500'};
    text-decoration: none;
    padding: 6px 12px;
    border-radius: 6px;
    background: ${({ $active }) => $active ? 'rgba(179,147,178,0.1)' : 'transparent'};
    transition: all 0.2s;
    &:hover {
        color: ${colors.orangeColor};
        background: rgba(179,147,178,0.08);
    }
`

export const Content = styled.div`
    flex: 1;
    margin-left: ${({ $sticky }) => $sticky ? "280px" : "0"};
    padding: 30px 50px;
    @media(max-width: 900px) {
        margin-left: 0;
        padding: 20px 15px;
    }
`

export const Disclaimer = styled.div`
    padding: 16px 20px;
    background: #fff8f0;
    border-left: 3px solid ${colors.orangeColor};
    border-radius: 4px;
    font-size: 14px;
    color: #666;
    line-height: 1.5;
    margin-bottom: 40px;
`

export const CategoryBlock = styled.div`
    margin-bottom: 50px;
`

export const CategoryTitle = styled.h2`
    font-size: 20px;
    font-weight: 700;
    color: #222;
    margin: 0 0 20px 0;
    padding-bottom: 10px;
    border-bottom: 2px solid ${colors.orangeColor};
    @media(max-width: 600px) {
        font-size: 16px;
    }
`

export const GroupTitle = styled.div`
    font-size: 15px;
    font-weight: 700;
    color: #333;
    padding: 12px 0 6px;
    ${({ $code }) => $code ? `
        &::after {
            content: '${$code}';
            font-size: 11px;
            color: #999;
            font-weight: 400;
            margin-left: 10px;
        }
    ` : ''}
    @media(max-width: 600px) {
        font-size: 13px;
    }
`

export const PriceRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 8px 0;
    border-bottom: 1px dotted #ddd;
    gap: 10px;
    &:last-child {
        border-bottom: none;
    }
`

export const ServiceName = styled.div`
    flex: 1;
    font-size: 14px;
    color: #444;
    line-height: 1.4;
    @media(max-width: 600px) {
        font-size: 13px;
    }
`

export const ServiceCode = styled.span`
    font-size: 11px;
    color: #aaa;
    margin-right: 8px;
`

export const ServicePrice = styled.div`
    font-size: 15px;
    font-weight: 600;
    color: #222;
    white-space: nowrap;
    min-width: 80px;
    text-align: right;
    @media(max-width: 600px) {
        font-size: 14px;
        min-width: 70px;
    }
`

export const MobileSelect = styled.select`
    display: none;
    @media(max-width: 900px) {
        display: block;
        width: 100%;
        padding: 12px 15px;
        font-size: 15px;
        border: 1px solid #ddd;
        border-radius: 8px;
        background: white;
        color: #333;
        margin-bottom: 20px;
        appearance: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 15px center;
    }
`
