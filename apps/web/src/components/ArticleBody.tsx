import type { ReactNode } from "react";

type ArticleBodyProps = {
  body?: string;
  format?: string;
};

type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3 | 4; text: string }
  | { type: "quote"; text: string }
  | { type: "rule" }
  | { type: "list"; ordered: boolean; items: string[] };

const normalizeBody = (body: string) => body.replace(/\r\n/g, "\n").trim();

const parsePlainTextBlocks = (body: string): ArticleBlock[] =>
  normalizeBody(body)
    .split(/\n{2,}/)
    .map((text) => text.trim())
    .filter(Boolean)
    .map((text) => ({ type: "paragraph", text }));

const parseMarkdownBlocks = (body: string): ArticleBlock[] => {
  const lines = normalizeBody(body).split("\n");
  const blocks: ArticleBlock[] = [];
  let paragraphBuffer: string[] = [];
  let listBuffer: string[] = [];
  let listOrdered = false;
  let quoteBuffer: string[] = [];

  const flushParagraph = () => {
    if (paragraphBuffer.length === 0) {
      return;
    }

    blocks.push({ type: "paragraph", text: paragraphBuffer.join(" ").trim() });
    paragraphBuffer = [];
  };

  const flushList = () => {
    if (listBuffer.length === 0) {
      return;
    }

    blocks.push({ type: "list", ordered: listOrdered, items: listBuffer });
    listBuffer = [];
    listOrdered = false;
  };

  const flushQuote = () => {
    if (quoteBuffer.length === 0) {
      return;
    }

    blocks.push({ type: "quote", text: quoteBuffer.join("\n").trim() });
    quoteBuffer = [];
  };

  const flushAll = () => {
    flushParagraph();
    flushList();
    flushQuote();
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushAll();
      continue;
    }

    const headingMatch = /^(#{1,3})\s+(.+)$/.exec(line);
    if (headingMatch) {
      flushAll();
      const level = Math.min(headingMatch[1].length + 1, 4) as 2 | 3 | 4;
      blocks.push({ type: "heading", level, text: headingMatch[2].trim() });
      continue;
    }

    if (/^(-{3,}|\*{3,})$/.test(line)) {
      flushAll();
      blocks.push({ type: "rule" });
      continue;
    }

    const quoteMatch = /^>\s?(.*)$/.exec(line);
    if (quoteMatch) {
      flushParagraph();
      flushList();
      quoteBuffer.push(quoteMatch[1].trim());
      continue;
    }

    const unorderedMatch = /^[-*]\s+(.+)$/.exec(line);
    const orderedMatch = /^\d+\.\s+(.+)$/.exec(line);
    if (unorderedMatch || orderedMatch) {
      flushParagraph();
      flushQuote();
      const nextOrdered = Boolean(orderedMatch);

      if (listBuffer.length > 0 && listOrdered !== nextOrdered) {
        flushList();
      }

      listOrdered = nextOrdered;
      listBuffer.push((orderedMatch?.[1] ?? unorderedMatch?.[1] ?? "").trim());
      continue;
    }

    flushList();
    flushQuote();
    paragraphBuffer.push(line);
  }

  flushAll();
  return blocks;
};

const renderText = (text: string) => text.split("\n").map((line, index, lines): ReactNode => (
  <span key={`${line}-${index}`}>
    {line}
    {index < lines.length - 1 ? <br /> : null}
  </span>
));

const renderBlocks = (blocks: ArticleBlock[]) =>
  blocks.map((block, index) => {
    const key = `${block.type}-${index}`;

    if (block.type === "heading") {
      const HeadingTag = `h${block.level}` as "h2" | "h3" | "h4";
      return <HeadingTag className="article-heading" key={key}>{block.text}</HeadingTag>;
    }

    if (block.type === "quote") {
      return <blockquote className="article-quote" key={key}>{renderText(block.text)}</blockquote>;
    }

    if (block.type === "rule") {
      return <hr className="article-rule" key={key} />;
    }

    if (block.type === "list") {
      const ListTag = block.ordered ? "ol" : "ul";
      return (
        <ListTag className="article-list" key={key}>
          {block.items.map((item, itemIndex) => (
            <li key={`${item}-${itemIndex}`}>{item}</li>
          ))}
        </ListTag>
      );
    }

    return <p key={key}>{renderText(block.text)}</p>;
  });

export function ArticleBody({ body, format }: ArticleBodyProps) {
  if (!body?.trim()) {
    return null;
  }

  const normalizedFormat = format === "markdown" || format === "html" ? format : "plain_text";
  const blocks = normalizedFormat === "markdown" ? parseMarkdownBlocks(body) : parsePlainTextBlocks(body);

  return (
    <div className="article-body article-rich-body" data-body-format={normalizedFormat}>
      {normalizedFormat === "html" ? (
        <p className="article-format-note">
          HTML body format is stored as safe text until a sanitizer is added.
        </p>
      ) : null}
      {renderBlocks(blocks)}
    </div>
  );
}
