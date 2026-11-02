import ProjectGrid from "./components/ProjectGrid";
import { getFeaturedProjects } from "../../lib/contentful";
import Hero from "./components/Hero";
import { HomeTriptych } from "./components/HomeTryptich";

export default async function Home() {
  const featuredProejcts = await getFeaturedProjects({ limit: 3 });
  return (
    <div>
      <div className="-mt-[80px]">
        <Hero />
      </div>
      {/* Featured Projects */}

      <section className="container mx-auto px-4 py-14 md:py-16">
        <p className="dh-section-kicker">Selected work</p>
        <h2 className="dh-section-title">Featured Projects</h2>
        <ProjectGrid projects={featuredProejcts} />
      </section>
      <section className="bg-[#f5efe2] py-16 md:py-20">
        <div className="container mx-auto px-4">
          <p className="mb-2 text-center text-xs font-bold uppercase tracking-[0.2em] text-[#2f8f46]">The people and process</p>
          <h2 className="text-3xl font-serif text-center text-[#182033] md:text-4xl">Learn More About Us</h2>
          <HomeTriptych />
        </div>
      </section>
    </div>
  );
  //
}
