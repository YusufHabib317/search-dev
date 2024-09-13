/* eslint-disable @typescript-eslint/no-explicit-any */

import fs from 'fs';
import path from 'path';

interface GetResourcesParams {
   query: string;
   category: string;
   page: string;
}

const getJsonData = () => {
   try {
      const filePath = path.join(process.cwd(), 'data', 'static.json');

      const jsonData = fs.readFileSync(filePath, 'utf-8');

      return JSON.parse(jsonData);
   } catch (error) {
      console.error('Error reading JSON file:', error);
      return null;
   }
}

export const getResources = async (params: GetResourcesParams) => {
   const { query, category, page } = params;

   try {
      const jsonData = getJsonData();
      let filteredResources = jsonData.data;

      if (query) {
         filteredResources = filteredResources.filter((item: any) =>
            item.resource.toLowerCase().includes(query.toLowerCase())
         );
      }

      if (category && category.toLowerCase() !== 'all') {
         filteredResources = filteredResources.filter((item: any) =>
            item.category.toLowerCase() === category.toLowerCase()
         );
      }

      const itemsPerPage = 10;
      const pageNumber = Number(page);
      const startIndex = (pageNumber - 1) * itemsPerPage;
      const paginatedResources = filteredResources.slice(startIndex, startIndex + itemsPerPage);

      return paginatedResources;
   } catch (error) {
      console.log(error);
      return [];
   }
};