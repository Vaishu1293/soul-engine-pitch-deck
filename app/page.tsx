

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div style={{
      width: "100%",
      maxWidth: "900px",
      margin: "40px auto",
      border: "2px solid #dee1e5",
      borderRadius: "6px",
      overflow: "hidden",
      height: "600px"
    }}>
      <iframe
        src="https://app.presentations.ai/view/J4y201aRjh"
        style={{ width: "100%", height: "100%", border: "none" }}
        allow="clipboard-write; autoplay"
        allowFullScreen
      ></iframe>
    </div>
      </main>
    </div>
  );
}
