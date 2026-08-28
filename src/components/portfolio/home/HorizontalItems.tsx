import { HORIZONTAL } from "../shared/data";

export function HorizontalItems() {
  return (
    <section className="section horizontal-items" data-scroll-section>
      <div className="container">
        {HORIZONTAL.map((row, rowIndex) => <div className={`row row-${rowIndex + 1}`} key={rowIndex} data-scroll data-scroll-speed={rowIndex === 0 ? "-1" : "1"} data-scroll-direction="horizontal">
          {row.map((item) => <div className="flex-col" key={`${rowIndex}-${item.src}`}><div className="horizontal-single-item"><div className="overlay" role="img" aria-label={item.alt} style={{ backgroundImage: `url(${item.src})`, backgroundPosition: "center center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} /></div></div>)}
        </div>)}
      </div>
    </section>
  );
}
