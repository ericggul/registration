import dynamic from "next/dynamic";
import Head from "next/head";
import Intro from "@/foundations/common/Intro";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  const { lang } = router.query;

  return (
    <>
      <Head>
        <title>Registration by Jeanyoon Choi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/assets/icons/untitled.ico" sizes="any" />
      </Head>
      <Intro handleIntroClick={() => router.push(`/screen?lang=${lang || "en"}`)} />
    </>
  );
}
