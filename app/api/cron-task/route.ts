
import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse> {
   try {
      const response = await fetch('https://search-dev.onrender.com/', {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
         },
      });

      if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      return NextResponse.json({ message: 'Cron job executed successfully', data });
   } catch (error: unknown) {
      console.error('Error executing cron job:', error);

      const errorMessage = error instanceof Error ? error.message : 'Unknown error';

      return NextResponse.json(
         { message: 'Cron job failed', error: errorMessage },
         { status: 500 }
      );
   }
}