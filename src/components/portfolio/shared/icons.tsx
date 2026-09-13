import type { SVGProps } from "react";

export function ArrowUpRight() {
  return (
    <svg width="14px" height="14px" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
      <g
        transform="translate(-1019.000000, -279.000000)"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        fill="none"
      >
        <g transform="translate(1026.000000, 286.000000) rotate(90.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)">
          <polyline points="2.76923077 0 12 0 12 9.23076923" />
          <line x1="12" y1="0" x2="0" y2="12" />
        </g>
      </g>
    </svg>
  );
}

export function HangerShape() {
  return (
    <svg width="300px" height="121px" viewBox="0 0 300 121" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0.000000, -366.000000)" fill="#1C1D20">
        <g transform="translate(149.816828, 426.633657) rotate(90.000000) translate(-149.816828, -426.633657) translate(89.816828, 276.816828)">
          <g transform="translate(60.000000, 149.816828) rotate(-90.000000) translate(-60.000000, -149.816828) translate(-89.816828, 89.816828)">
            <path d="M239.633657,0 C272.770742,1.0182436e-15 299.633657,26.862915 299.633657,60 C299.633657,93.137085 272.770742,120 239.633657,120 L0,120 L0,0 L239.633657,0 Z M239.633657,18.7755102 C216.866,18.7755102 198.409167,37.232343 198.409167,60 C198.409167,82.767657 216.866,101.22449 239.633657,101.22449 C262.401314,101.22449 280.858147,82.767657 280.858147,60 C280.858147,37.232343 262.401314,18.7755102 239.633657,18.7755102 Z" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export function Globe() {
  return (
    <div className="globe">
      <div className="globe-wrap">
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle-hor" />
        <div className="circle-hor-middle" />
      </div>
    </div>
  );
}

export function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
    </svg>
  );
}

export function SocialIcon({ name, ...props }: { name: string } & SVGProps<SVGSVGElement>) {
  const key = name.toLowerCase();
  if (key === "github") return <GitHubIcon {...props} />;
  if (key === "facebook") return <FacebookIcon {...props} />;
  return null;
}
