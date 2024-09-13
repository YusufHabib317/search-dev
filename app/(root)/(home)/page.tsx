/* eslint-disable @typescript-eslint/no-explicit-any */
import Filters from "@/components/filters";
import Header from "@/components/header";
import ResourceCard from "@/components/resource-card";
import SearchForm from "@/components/search-form";
import { getResources } from "@/utils/resource";

interface Props {
  searchParams: { [key: string]: string | undefined }
}
export default async function Home(props: Props) {
  const { searchParams } = props;

  const resources = await getResources({
    query: searchParams?.query || '',
    category: searchParams?.category || 'all',
    page: '1',
  });

  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-no-repeat bg-contain bg-center text-center">
          <h1 className="sm:heading1 heading2 mb-6 text-center text-gray-400">DEV</h1>
        </div>

        <SearchForm />
      </section>
      <Filters />

      {(searchParams?.query || searchParams?.category) && (
        <section className="flex-center mt-6 w-full flex-col sm:mt-20">
          <Header query={searchParams?.query || ''} category={searchParams?.category || ''} />

          <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
            {resources?.length > 0 ? (
              resources.map((item: any, i: number) => (
                <ResourceCard
                  key={i}
                  title={item.resource}
                  image={item.image}
                  downloadNumber={item.views}
                  downloadLink={item.downloadLink}
                />
              ))
            ) : (
              <p className="body-regular text-white-400">No resources found</p>
            )}
          </div>
        </section>
      )}

      {/* {resourcesPlaylist.length > 0 && (
        <section className="flex-center mt-6 w-full flex-col sm:mt-20">
          <h1 className="heading3 self-start text-white-800">Playlist</h1>
          <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
            {resourcesPlaylist.map((item: any, i: number) => (
              <ResourceCard
                key={i}
                title={item.resource}
                image={item.image}
                downloadNumber={item.views}
                downloadLink={item.downloadLink}
              />
            ))} 
          </div>
        </section>
      )}*/}
    </main>
  );
}
