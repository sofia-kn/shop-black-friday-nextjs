"use client";
import BlackHeadphoneBanner from "./(components)/home/BlackHeadphoneBanner";
import PinkHeadphoneBanner from "./(components)/home/PinkHeadphoneBanner";
import Timer from "./(components)/home/Timer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Timer />
      <div className="container relative bgImg">
        <BlackHeadphoneBanner />
      </div>
      <PinkHeadphoneBanner/>
    </main>
  );
}
