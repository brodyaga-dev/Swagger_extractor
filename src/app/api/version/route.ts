import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    version: '1.0',
    name: 'Swagger Extractor',
    description: 'API documentation extractor tool',
    status: 'stable',
    build: '#1001',
    releaseDate: new Date().toISOString().split('T')[0],
    endpoints: [
      {
        path: '/api/version',
        method: 'GET',
        description: 'Get application version information'
      }
    ]
  });
} 