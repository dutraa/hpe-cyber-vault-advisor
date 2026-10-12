import { NextResponse } from 'next/server';
export function GET(){return NextResponse.json({status:'ok',appVersion:'1.0.0',catalogVersion:'1.0.0',rulesVersion:'1.0.0'})}
