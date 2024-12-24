import React from 'react';

export const Main = React.lazy(() => import('../pages/Main/Main'));
export const Materials = React.lazy(() => import('../pages/Materials/Materials'));
export const Login = React.lazy(() => import('../pages/Login/Login'));
export const MaterialDetail = React.lazy(() => import('../pages/Materials/MaterialDetail/MaterialDetail'));
export const Compare = React.lazy(() => import('../pages/Materials/Compare/Compare'));
export const Reservation = React.lazy(() => import('../pages/Reservation/Reservation'));
export const ReservationDetail = React.lazy(() => import('../pages/Reservation/ReservationDetail/ReservationDetail'));
export const Event = React.lazy(() => import('../pages/Event/Event'));
export const EventDetail = React.lazy(() => import('../pages/Event/EventDetail/EventDetail'));
export const Portfolio = React.lazy(() => import('../pages/Portfolio/Portfolio'));
export const PortfolioDetail = React.lazy(() => import('../pages/Portfolio/Detail/PortfolioDetail'));
export const ReservationBoard = React.lazy(() => import('../pages/Reservation/ReservationBoard/ReservationBoard'));
export const EventCreate = React.lazy(() => import('../pages/Event/EventCreate/EventCreate'));
export const PortfolioCreate = React.lazy(() => import('../pages/Portfolio/PortfolioCreate/PortfolioCreate'));