import { NextResponse } from 'next/server';
import axios from 'axios';

interface AxiosErrorResponse {
  response?: {
    data?: {
      message?: string;
    };
    status?: number;
  };
}

export async function POST(request: Request) {
  try {
    const { text } = await request.json();

    if (!text || typeof text !== 'string') {
      return NextResponse.json(
        { message: 'Text is required and must be a string' },
        { status: 400 }
      );
    }

    const options = {
      method: 'POST',
      url: 'https://api.edenai.run/v2/text/ai_detection',
      headers: {
        authorization: `Bearer ${process.env.EDEN_AI_API_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiODViOThlZTctYzkwNi00ODZlLTlkYWItMzIyYjZiNjA3MmQxIiwidHlwZSI6ImFwaV90b2tlbiJ9.ze5As1wqLPd_sHv5cHQ-CSG3osfTQ9r5tlzkAVLKW0M'}`,
        'Content-Type': 'application/json',
      },
      data: {
        providers: 'winstonai',
        text: text,
      },
    };

    const response = await axios.request(options);
    
    return NextResponse.json(response.data);
  } catch (error: unknown) {
    console.error('AI Detection Error:', error);
    
    const axiosError = error as AxiosErrorResponse;
    if (axiosError.response) {
      // Handle payment required error specifically
      if (axiosError.response.status === 402) {
        return NextResponse.json(
          { 
            message: 'API usage limit exceeded or insufficient credits. Please check your EdenAI account.',
            errorCode: 'PAYMENT_REQUIRED'
          },
          { status: 402 }
        );
      }
      
      return NextResponse.json(
        { message: axiosError.response.data?.message || 'Error from AI detection service' },
        { status: axiosError.response.status || 500 }
      );
    }
    
    return NextResponse.json(
      { message: 'Failed to process the text' },
      { status: 500 }
    );
  }
} 