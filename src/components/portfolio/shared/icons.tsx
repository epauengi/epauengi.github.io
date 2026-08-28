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
