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
    const { text, title } = await request.json();

    if (!text || typeof text !== 'string') {
      return NextResponse.json(
        { message: 'Text is required and must be a string' },
        { status: 400 }
      );
    }

    const options = {
      method: 'POST',
      url: 'https://api.edenai.run/v2/text/plagia_detection',
      headers: {
        authorization: `Bearer ${process.env.EDEN_AI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      data: {
        providers: 'originalityai',
        text: text,
        title: title || undefined,
      },
    };

    const response = await axios.request(options);
    
    return NextResponse.json(response.data);
  } catch (error: unknown) {
    console.error('Plagiarism Detection Error:', error);
    
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
        { message: axiosError.response.data?.message || 'Error from plagiarism detection service' },
        { status: axiosError.response.status || 500 }
      );
    }
    
    return NextResponse.json(
      { message: 'Failed to process the text' },
      { status: 500 }
    );
  }
} 