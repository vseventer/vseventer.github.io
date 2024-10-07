import React from "react";

export const H1: React.FC<React.HTMLAttributes<HTMLHeadElement>> = ({
  className,
  ...delegated
}) => {
  return (
    <h1
      className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}
      {...delegated}
    />
  );
};

export const H2: React.FC<React.HTMLAttributes<HTMLHeadElement>> = ({
  className,
  ...delegated
}) => {
  return (
    <h2
      className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className}`}
      {...delegated}
    />
  );
};

export const H3: React.FC<React.HTMLAttributes<HTMLHeadElement>> = ({
  className,
  ...delegated
}) => {
  return (
    <h3
      className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}
      {...delegated}
    />
  );
};

export const H4: React.FC<React.HTMLAttributes<HTMLHeadElement>> = ({
  className,
  ...delegated
}) => {
  return (
    <h4
      className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`}
      {...delegated}
    />
  );
};

export const P: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...delegated
}) => {
  return (
    <p
      className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`}
      {...delegated}
    />
  );
};

export const Blockquote: React.FC<React.HTMLAttributes<HTMLQuoteElement>> = ({
  className,
  ...delegated
}) => {
  return (
    <blockquote
      className={`mt-6 border-l-2 pl-6 italic ${className}`}
      {...delegated}
    />
  );
};

export const InlineCode: React.FC<React.HTMLAttributes<HTMLPreElement>> = ({
  className,
  ...delegated
}) => {
  return (
    <code
      className={`relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold ${className}`}
      {...delegated}
    />
  );
};

export const Lead: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...delegated
}) => {
  return (
    <p
      className={`text-xl text-muted-foreground ${className}`}
      {...delegated}
    />
  );
};

export const Large: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...delegated
}) => {
  return (
    <div className={`text-lg font-semibold ${className}`} {...delegated} />
  );
};

export const Muted: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...delegated
}) => {
  return (
    <p
      className={`text-sm text-muted-foreground ${className}`}
      {...delegated}
    />
  );
};
