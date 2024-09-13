/* eslint-disable @typescript-eslint/no-explicit-any */
// cronJob.ts

import cron from 'node-cron';
import fetch, { RequestInfo, RequestInit } from 'node-fetch';

cron.schedule('*/1 * * * *', async () => {
   console.log('Running cron job every 1 minute');

   try {
      const url: RequestInfo = 'https://search-dev.onrender.com';
      const options: RequestInit = {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
         },
      };

      const response = await fetch(url, options);
      console.log('Response status:', response.status);
      try {
         console.log('Cron job executed successfully');
      } catch (jsonError: any) {
         console.error('Error parsing JSON:', jsonError.message);
      }
   } catch (error) {
      console.error('Error executing cron job:', error);
   }
});
