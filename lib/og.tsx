import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const root = process.cwd();
const font = (file: string) => readFile(path.join(root, "assets/og-fonts", file));

/** Intrinsic size of a PNG or baseline/progressive JPEG, read from its header. */
function imageSize(buf: Buffer): { w: number; h: number } | null {
  if (buf.readUInt32BE(0) === 0x89504e47) return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
  if (buf[0] === 0xff && buf[1] === 0xd8) {
    let i = 2;
    while (i < buf.length) {
      if (buf[i] !== 0xff) return null;
      const marker = buf[i + 1];
      const len = buf.readUInt16BE(i + 2);
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
        return { w: buf.readUInt16BE(i + 7), h: buf.readUInt16BE(i + 5) };
      }
      i += 2 + len;
    }
  }
  return null;
}

async function loadImage(publicPath: string) {
  const buf = await readFile(path.join(root, "public", publicPath));
  const ext = path.extname(publicPath).slice(1).toLowerCase();
  const mime = ext === "svg" ? "image/svg+xml" : ext === "jpg" || ext === "jpeg" ? "image/jpeg" : "image/png";
  return { src: `data:${mime};base64,${buf.toString("base64")}`, size: imageSize(buf) };
}

/**
 * Satori ignores object-position, so screenshots are cropped by hand:
 * anchored top-left, scaled to cover the box.
 */
function coverTopLeft(size: { w: number; h: number } | null, boxW: number, boxH: number) {
  if (!size) return { width: boxW, height: boxH };
  const scale = Math.max(boxW / size.w, boxH / size.h);
  return { width: Math.round(size.w * scale), height: Math.round(size.h * scale) };
}

/** Satori wraps flex children, not text runs, so the headline is laid out word by word. */
function headlineWords([before, accent, after = ""]: [string, string, string?]) {
  const words: { text: string; accent: boolean; space: boolean }[] = [];
  [before, accent, after].forEach((segment, s) => {
    for (const token of segment.split(/(\s+)/)) {
      if (!token) continue;
      if (/^\s+$/.test(token)) {
        if (words.length) words[words.length - 1].space = true;
      } else {
        words.push({ text: token, accent: s === 1, space: false });
      }
    }
  });
  return words;
}

type OgProps = {
  label: string;
  /** Headline split as [before, accent (italic red), after]. */
  headline: [string, string, string?];
  sub: string;
  /** Screenshots are cropped top-left; "portrait" fills the right edge with a fade. */
  image?: { src: string; kind?: "portrait" };
};

/** Branded 1200×630 social card, mirroring the site's type and palette. */
export async function renderOg({ label, headline, sub, image }: OgProps) {
  const [serif, serifItalic, sans, mono, mark, picture] = await Promise.all([
    font("newsreader-light.ttf"),
    font("newsreader-light-italic.ttf"),
    font("instrument-sans-regular.ttf"),
    font("jetbrains-mono-regular.ttf"),
    loadImage("/assets/logo-mark.svg").then((m) => m.src),
    image ? loadImage(image.src) : Promise.resolve(null),
  ]);
  const portrait = image?.kind === "portrait";
  const boxH = portrait ? 630 : 502;
  const shot = picture && !portrait ? coverTopLeft(picture.size, 500, boxH) : null;
  const long = headline.join("").length > 42;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0a0a0b",
          color: "#f4f1ea",
          position: "relative",
          fontFamily: "Instrument Sans",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -260,
            right: -160,
            width: 900,
            height: 760,
            display: "flex",
            background: "radial-gradient(closest-side, rgba(245,54,42,0.22), rgba(245,54,42,0))",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "58px 0 54px 64px",
            width: picture ? 660 : 1072,
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <img src={mark} width={48} height={48} style={{ borderRadius: 13 }} alt="" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontFamily: "Newsreader", fontSize: 28, lineHeight: 1 }}>Teninlanimi Taiwo</div>
              <div
                style={{
                  fontFamily: "JetBrains Mono",
                  fontSize: 12,
                  letterSpacing: 2.4,
                  color: "#87867f",
                  marginTop: 7,
                  textTransform: "uppercase",
                }}
              >
                Engineer · Architect · Founder
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                fontFamily: "JetBrains Mono",
                fontSize: 15,
                letterSpacing: 2.2,
                textTransform: "uppercase",
                color: "#FF6152",
                marginBottom: 22,
              }}
            >
              <div style={{ width: 30, height: 1, background: "#FF6152" }} />
              {label}
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                fontFamily: "Newsreader",
                fontSize: long ? 58 : 76,
                lineHeight: 1.02,
                letterSpacing: -1.6,
              }}
            >
              {headlineWords(headline).map((w, i) => (
                <span
                  key={i}
                  style={{
                    marginRight: w.space ? "0.24em" : 0,
                    ...(w.accent ? { fontFamily: "Newsreader Italic", color: "#F5362A" } : {}),
                  }}
                >
                  {w.text}
                </span>
              ))}
            </div>
            <div style={{ fontSize: 23, lineHeight: 1.45, color: "#b8b6af", marginTop: 22, maxWidth: 560 }}>{sub}</div>
          </div>

          <div style={{ display: "flex", fontFamily: "JetBrains Mono", fontSize: 15, color: "#87867f", letterSpacing: 0.4 }}>
            www.teninlanimi.xyz
          </div>
        </div>

        {picture ? (
          <div
            style={{
              position: "absolute",
              top: portrait ? 0 : 64,
              right: 0,
              bottom: portrait ? 0 : 64,
              width: 500,
              display: "flex",
              overflow: "hidden",
              borderRadius: portrait ? 0 : "18px 0 0 18px",
              border: portrait ? "none" : "1px solid rgba(244,241,234,0.12)",
              borderRight: "none",
            }}
          >
            {shot ? (
              <img
                src={picture.src}
                alt=""
                width={shot.width}
                height={shot.height}
                style={{ position: "absolute", top: 0, left: 0, width: shot.width, height: shot.height }}
              />
            ) : (
              <img
                src={picture.src}
                alt=""
                width={500}
                height={boxH}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            )}
            {portrait ? (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  background: "linear-gradient(90deg, #0a0a0b 0%, rgba(10,10,11,0.35) 30%, rgba(10,10,11,0) 60%)",
                }}
              />
            ) : null}
          </div>
        ) : null}
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Newsreader", data: serif, weight: 300, style: "normal" },
        { name: "Newsreader Italic", data: serifItalic, weight: 300, style: "italic" },
        { name: "Instrument Sans", data: sans, weight: 400, style: "normal" },
        { name: "JetBrains Mono", data: mono, weight: 400, style: "normal" },
      ],
    },
  );
}
