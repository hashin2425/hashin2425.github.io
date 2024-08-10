import Image from "next/image";
import ProfilePicture from "../images/profile.png";
import React, { PropsWithChildren } from "react";
import SectionComponent from "../components/Utils";

export default function Home() {
  return (
    <main>
      <SectionComponent>
        <h2>About me</h2>
        <Image className="rounded-full object-cover shadow-lg border-4 border-white my-4" src={ProfilePicture} alt="hashin profile" width={100} height={100} />
        <p>経済学部の2年生です。</p>
        <p>Webアプリを中心に、人の役に立つプロダクトの開発に取り組んでいます。</p>
      </SectionComponent>

      <SectionComponent>
        <h2>SNS</h2>
      </SectionComponent>

      <SectionComponent>
        <h2>Skills</h2>
      </SectionComponent>

      <SectionComponent>
        <h2>Works</h2>
      </SectionComponent>

      <SectionComponent>
        <h2>Experience</h2>
      </SectionComponent>

      <SectionComponent>
        <h2>Articles</h2>
      </SectionComponent>

      <SectionComponent>
        <h2>Environments</h2>
      </SectionComponent>
    </main>
  );
}
