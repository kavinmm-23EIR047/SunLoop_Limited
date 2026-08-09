import type { Metadata } from 'next'; import './globals.css'; import { Navbar } from '../components/Navbar'; import { Footer } from '../components/Footer'; import { RobotAssistant } from '../components/RobotAssistant';
export const metadata:Metadata={title:{default:'Sunloop Energy — Powering Tomorrow, Sustainably',template:'%s · Sunloop Energy'},description:'Clean. Intelligent. Integrated. Solar Power Plants, Energy Storage Systems and EV Charging Infrastructure connected through one AI Energy Management Portal.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><Navbar/>{children}<RobotAssistant/><Footer/></body></html>}

