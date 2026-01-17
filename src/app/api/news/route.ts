import { NextResponse } from "next/server";
import { getNews } from "@/app/noticias/newsFetcher";

export async function GET() {
  try {
    const news = await getNews(12);
    return NextResponse.json({ articles: news });
  } catch (e) {
    return NextResponse.json({ articles: [], error: "No se pudieron cargar las noticias." }, { status: 500 });
  }
}
