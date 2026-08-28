import { Globe } from "../shared/icons";

export function DigitalGlobeDivider() {
  return (
    <section className="section no-padding line-globe once-in" data-scroll-section>
      <div className="container medium">
        <div className="row">
          <div className="flex-col">
            <div className="stripe" />
            <div className="digital-ball">
              <div className="overlay" />
              <Globe />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
