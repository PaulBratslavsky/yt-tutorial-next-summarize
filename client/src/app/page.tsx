import { HeroSection } from "@/components/custom/hero-section";
import qs from "qs";

const homePageQuery = qs.stringify(
  {
    populate: {
      blocks: {
        on: {
          "layout.hero-section": {
            populate: {
              image: {
                fields: ["url", "alternativeText"]
              },
              link: {
                populate: true
              }
            }
          }
        }
      }
    }
  }
)

async function getStrapiData() {
  const baseUrl = "http://localhost:1337";
  const path = "/api/home-page"

  const url = new URL(baseUrl + path);
  url.search = homePageQuery;

  try {
    const response = await fetch(url.href);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const strapiData = await getStrapiData();

  console.dir(strapiData, { depth: null });

  const { blocks } = strapiData.data;

  return (
    <main className="container mx-auto py-6">
      <HeroSection data={blocks[0]}/>
    </main>
  );
}