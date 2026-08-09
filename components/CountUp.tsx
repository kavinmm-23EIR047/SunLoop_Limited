'use client';
import {useEffect,useState} from 'react';
export function CountUp({end,suffix='',duration=1400}:{end:number,suffix?:string,duration?:number}){const[value,setValue]=useState(0);useEffect(()=>{const started=performance.now();let frame=0;const tick=(now:number)=>{const progress=Math.min((now-started)/duration,1);setValue(Math.round(end*(1-Math.pow(1-progress,3))));if(progress<1)frame=requestAnimationFrame(tick)};frame=requestAnimationFrame(tick);return()=>cancelAnimationFrame(frame)},[end,duration]);return <>{value}{suffix}</>}
